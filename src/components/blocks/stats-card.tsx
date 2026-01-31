"use client";

export function StatsCard() {
    const stats = [
    { number: "10", label: "Anos de Experiência" },
    { number: "20", label: "Projetos Concluídos" },
    { number: "20", label: "Clientes no Mundo Todo" }
  ];

  return (
    <div className="w-full bg-background py-6 border border-border rounded-lg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-items-center md:justify-items-start">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {stat.number}
              </h2>
              <p className="text-base md:text-lg text-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
