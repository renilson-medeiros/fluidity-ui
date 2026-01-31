import fs from "fs";
import path from "path";
import { registry } from "../src/registry";

/**
 * Script para gerar o registry.json
 * Transforma o objeto de registro em um JSON estático para a CLI.
 */

async function buildRegistry() {
  const registryPath = path.join(process.cwd(), "public", "registry.json");
  
  // Criar uma versão simples do registro para a CLI (sem o campo 'component' que é runtime)
  const cliRegistry = Object.entries(registry).reduce((acc, [key, value]) => {
    const { component, ...rest } = value;
    acc[key] = rest;
    return acc;
  }, {} as any);

  try {
    // Garantir que a pasta public existe
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }

    fs.writeFileSync(registryPath, JSON.stringify(cliRegistry, null, 2));
    console.log("✅ Registry JSON gerado com sucesso em public/registry.json");
  } catch (error) {
    console.error("❌ Erro ao gerar registry JSON:", error);
    process.exit(1);
  }
}

buildRegistry();
