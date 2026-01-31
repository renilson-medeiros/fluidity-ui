#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import prompts from "prompts";
import fs from "fs-extra";
import path from "path";
import ora from "ora";

const program = new Command();

program
  .name("fluidity-ui")
  .description("CLI para gerenciar componentes Fluidity UI")
  .version("0.1.0");

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

      // Simulação de instalação de dependências ou criação de arquivos base
      spinner.succeed(chalk.green("Projeto inicializado com sucesso!"));
      console.log(chalk.cyan("\nPróximos passos:"));
      console.log(`- Rode ${chalk.bold("npx fluidity-ui add [componente]")} para adicionar um bloco.`);
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
    const spinner = ora(`Buscando componente ${componentName}...`).start();

    try {
      // Aqui buscaríamos no registry.json que geramos
      const registryPath = path.join(__dirname, "../../public/registry.json");
      
      // Check if project is initialized
      if (!fs.existsSync(path.join(process.cwd(), "fluidity.json"))) {
        spinner.fail(chalk.red("Projeto não inicializado. Rode 'npx fluidity-ui init' primeiro."));
        return;
      }

      const config = await fs.readJSON(path.join(process.cwd(), "fluidity.json"));
      
      // In a real scenario, we would fetch this via HTTP or bundle it
      let registry;
      if (fs.existsSync(registryPath)) {
        registry = await fs.readJSON(registryPath);
      } else {
        // Fallback or fetch from remote
         spinner.fail(chalk.red("Registro não encontrado localmente."));
         return;
      }

      const item = registry[componentName];

      if (!item) {
        spinner.fail(chalk.red(`Componente '${componentName}' não encontrado no registro.`));
        return;
      }

      spinner.text = `Baixando ${item.name}...`;

      // Simulação de cópia de arquivo
      // Em uma CLI real, baixaríamos o conteúdo do arquivo via 'file' path do registry
      const targetPath = path.join(process.cwd(), config.componentsDir, `${componentName}.tsx`);
      
      // Nota: Em produção, o 'file' apontaria para uma URL ou o conteúdo estaria no JSON
      // Para este protótipo, vamos assumir que os arquivos estão acessíveis no repo
      const sourcePath = path.join(process.cwd(), item.file);

      if (fs.existsSync(sourcePath)) {
          await fs.ensureDir(path.dirname(targetPath));
          await fs.copy(sourcePath, targetPath);
          spinner.succeed(chalk.green(`Componente ${item.name} adicionado com sucesso em ${targetPath}`));
      } else {
          spinner.fail(chalk.red(`Arquivo fonte não encontrado em ${sourcePath}`));
      }

    } catch (error) {
      spinner.fail(chalk.red("Erro ao adicionar componente."));
      console.error(error);
    }
  });

program.parse();
