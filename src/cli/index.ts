#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import prompts from "prompts";
import fs from "fs-extra";
import path from "path";
import ora from "ora";

const REGISTRY_URL = "https://raw.githubusercontent.com/renilson-medeiros/fluidity-ui/main/public/registry.json";
const BASE_URL = "https://raw.githubusercontent.com/renilson-medeiros/fluidity-ui/main";

const program = new Command();

program
  .name("fluidity-ui")
  .description("CLI para gerenciar componentes Fluidity UI")
  .version("0.1.2");

async function downloadFile(url: string, targetPath: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Erro ao baixar ${url}`);
  const content = await response.text();
  await fs.ensureDir(path.dirname(targetPath));
  await fs.writeFile(targetPath, content);
}

program
  .command("init")
  .description("Inicializa o projeto com Fluidity UI")
  .action(async () => {
    console.log(chalk.bold("\n🚀 Bem-vindo ao Fluidity UI!\n"));

    const response = await prompts([
      {
        type: "text",
        name: "componentsDir",
        message: "Onde você deseja salvar os componentes?",
        initial: "src/components/ui",
      },
      {
        type: "text",
        name: "utilsPath",
        message: "Onde está o seu arquivo de utilitários (cn)?",
        initial: "src/lib/utils.ts",
      },
      {
        type: "confirm",
        name: "installBase",
        message: "Deseja instalar os componentes UI base (Button, Badge, Card, etc.)?",
        initial: true,
      }
    ]);

    const spinner = ora("Configurando o projeto...").start();

    try {
      const config = {
        componentsDir: response.componentsDir,
        utilsPath: response.utilsPath,
      };

      await fs.writeJSON(path.join(process.cwd(), "fluidity.json"), config, {
        spaces: 2,
      });

      // 1. Instalar Utilitários (cn)
      spinner.text = "Injetando utilitários (cn)...";
      await downloadFile(`${BASE_URL}/src/lib/utils.ts`, path.join(process.cwd(), config.utilsPath));

      // 2. Instalar Componentes Base se solicitado
      if (response.installBase) {
        spinner.text = "Baixando componentes base...";
        const baseComponents = ["button", "badge", "card", "avatar", "input", "label", "sheet"];
        
        for (const comp of baseComponents) {
          spinner.text = `Instalando ${comp}...`;
          await downloadFile(`${BASE_URL}/src/components/ui/${comp}/${comp}.tsx`, path.join(process.cwd(), config.componentsDir, `${comp}.tsx`));
        }
      }

      spinner.succeed(chalk.green("Projeto inicializado com sucesso!"));
      console.log(chalk.cyan("\nPróximos passos:"));
      console.log(`- Configure o local das fontes se necessário.`);
      console.log(`- Rode ${chalk.bold("npx fluidity-ui add [componente-animado]")} para adicionar blocos interativos.`);
    } catch (error) {
      spinner.fail(chalk.red("Erro ao inicializar o projeto."));
      console.error(error);
    }
  });

program
  .command("add")
  .description("Adiciona um componente ao projeto")
  .argument("<component>", "Nome do componente a ser adicionado")
  .action(async (componentName) => {
    const spinner = ora(`Buscando registro de componentes...`).start();

    try {
      // Check if project is initialized
      if (!fs.existsSync(path.join(process.cwd(), "fluidity.json"))) {
        spinner.fail(chalk.red("Projeto não inicializado. Rode 'npx fluidity-ui init' primeiro."));
        return;
      }

      const config = await fs.readJSON(path.join(process.cwd(), "fluidity.json"));
      
      // Fetch registry from GitHub
      const registryResponse = await fetch(REGISTRY_URL);
      if (!registryResponse.ok) {
        spinner.fail(chalk.red(`Não foi possível baixar o registro de componentes via GitHub.`));
        return;
      }
      
      const registry = await registryResponse.json() as any;
      const item = registry[componentName];

      if (!item) {
        spinner.fail(chalk.red(`Componente '${componentName}' não encontrado no registro.`));
        return;
      }

      spinner.text = `Baixando código de ${item.name}...`;

      // Fetch component code from GitHub
      const fileUrl = `${BASE_URL}/${item.file}`;
      await downloadFile(fileUrl, path.join(process.cwd(), config.componentsDir, `${componentName}.tsx`));

      spinner.succeed(chalk.green(`Componente ${item.name} adicionado com sucesso em ${config.componentsDir}`));

    } catch (error) {
      spinner.fail(chalk.red("Erro ao processar o comando."));
      console.error(error);
    }
  });

program.parse();
