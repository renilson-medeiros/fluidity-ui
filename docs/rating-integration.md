# Guia de Integração do Sistema de Rating (Futuro)

Atualmente, o sistema de ordenação do Fluidity UI utiliza valores estáticos definidos no `src/registry/index.tsx`. Para transformar isso em um sistema de votação real com banco de dados (Supabase), siga este guia.

## 1. Schema do Banco de Dados (Supabase)

Crie uma tabela chamada `component_ratings`:

```sql
create table component_ratings (
  slug text primary key,
  stars_count integer default 0,
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Ativar RLS
alter table component_ratings enable row level security;

-- Política de leitura pública
create policy "Acesso público para leitura"
on component_ratings for select
using (true);
```

## 2. Abstração do Data Fetching

Em vez de usar apenas o `registry` estático, você passará a fazer um "merge" dos dados locais com os dados do banco.

```typescript
// Exemplo de lógica para o layout.tsx
const [dynamicRatings, setDynamicRatings] = useState<Record<string, number>>(
  {},
);

useEffect(() => {
  const fetchRatings = async () => {
    const { data } = await supabase.from("component_ratings").select("*");
    const ratingsMap = data.reduce(
      (acc, curr) => ({
        ...acc,
        [curr.slug]: curr.stars_count,
      }),
      {},
    );
    setDynamicRatings(ratingsMap);
  };
  fetchRatings();
}, []);
```

## 3. Ordenação no Frontend

A lógica de ordenação no `ComponentsLayout` já está preparada. Basta garantir que o valor de `stars` venha do banco:

```typescript
.sort(([, a], [, b]) => {
  const starsA = dynamicRatings[slugA] || a.stars || 0;
  const starsB = dynamicRatings[slugB] || b.stars || 0;
  return starsB - starsA;
})
```

## 4. Implementação do Voto

Adicione um componente de `StarRating` na página interna do componente que execute um `upsert` no Supabase ao ser clicado.

---

> [!NOTE]
> Este guia serve como roadmap. A implementação atual foca na **experiência do usuário (UX)** de navegação, mantendo o menu organizado pelos componentes mais relevantes.
