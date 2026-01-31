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
  .version("0.1.3");

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
        message: "Instalar componentes UI base (Button, Card, etc.)?",
        initial: true,
      },
      {
        type: "confirm",
        name: "installAll",
        message: "Deseja baixar TODOS os componentes animados agora (All-in-One)?",
        initial: false,
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

      // Fetch registry for bulk installs
      const registryResponse = await fetch(REGISTRY_URL);
      const registry = await registryResponse.json() as any;

      // 2. Instalar Componentes Base
      if (response.installBase) {
        spinner.text = "Baixando componentes base...";
        const baseComponents = Object.keys(registry).filter(key => registry[key].type === "ui");
        for (const comp of baseComponents) {
          spinner.text = `Instalando ${comp}...`;
          await downloadFile(`${BASE_URL}/${registry[comp].file}`, path.join(process.cwd(), config.componentsDir, `${comp}.tsx`));
        }
      }

      // 3. Instalar TUDO se solicitado
      if (response.installAll) {
        spinner.text = "Baixando coleção completa...";
        const blocks = Object.keys(registry).filter(key => registry[key].type === "block");
        for (const comp of blocks) {
          spinner.text = `Instalando ${comp}...`;
          await downloadFile(`${BASE_URL}/${registry[comp].file}`, path.join(process.cwd(), config.componentsDir, `${comp}.tsx`));
        }
      }

      spinner.succeed(chalk.green("Projeto inicializado com sucesso!"));
      console.log(chalk.cyan("\nPróximos passos:"));
      console.log(`- Configure as fontes e o Tailwind.`);
      console.log(`- Use ${chalk.bold("npx fluidity-ui add [nome]")} para novos blocos futuramente.`);
    } catch (error) {
      spinner.fail(chalk.red("Erro ao inicializar o projeto."));
      console.error(error);
    }
  });

program
  .command("add")
  .description("Adiciona um ou todos os componentes")
  .argument("[component]", "Nome do componente")
  .option("-a, --all", "Adicionar todos os componentes do registro")
  .action(async (componentName, options) => {
    const spinner = ora(`Buscando registro...`).start();

    try {
      if (!fs.existsSync(path.join(process.cwd(), "fluidity.json"))) {
        spinner.fail(chalk.red("Rode 'npx fluidity-ui init' primeiro."));
        return;
      }

      const config = await fs.readJSON(path.join(process.cwd(), "fluidity.json"));
      const registryResponse = await fetch(REGISTRY_URL);
      const registry = await registryResponse.json() as any;

      if (options.all) {
        spinner.text = "Baixando coleção completa...";
        const allKeys = Object.keys(registry);
        for (const key of allKeys) {
          spinner.text = `Baixando ${key}...`;
          await downloadFile(`${BASE_URL}/${registry[key].file}`, path.join(process.cwd(), config.componentsDir, `${key}.tsx`));
        }
        spinner.succeed(chalk.green("Todos os componentes foram instalados!"));
        return;
      }

      if (!componentName) {
        spinner.fail(chalk.red("Especifique um componente ou use --all"));
        return;
      }

      const item = registry[componentName];
      if (!item) {
        spinner.fail(chalk.red(`Componente '${componentName}' não encontrado.`));
        return;
      }

      spinner.text = `Baixando ${item.name}...`;
      await downloadFile(`${BASE_URL}/${item.file}`, path.join(process.cwd(), config.componentsDir, `${componentName}.tsx`));
      spinner.succeed(chalk.green(`Componente ${item.name} adicionado!`));

    } catch (error) {
      spinner.fail(chalk.red("Erro ao processar."));
      console.error(error);
    }
  });

program.parse();
