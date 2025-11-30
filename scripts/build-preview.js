// Importa o módulo necessário para executar comandos no terminal
const { execSync } = require('child_process');
const chalk = require('chalk');

let total = 0;
let step = 1;

const clearBuild = () => {
  console.log(chalk.blueBright(`🧹 ${step}/${total} Cleaning build folder...`));
  console.log();
  execSync('npm run clear-build-preview', { stdio: 'inherit' });
  console.log();
}

const copySrc = () => {
  console.log(chalk.blueBright(`🔨 ${step}/${total} Copping /src to ../exemples/dashboard/src/@preview/@potidev/layouts-vulpix-pack...`));
  console.log();
  execSync('npm run copy-src-to-dist-preview', { stdio: 'inherit' });
  console.log();  
}

const fixAliasImports = () => {
  console.log(chalk.blueBright(`⚙️  ${step}/${total} Fixing alias imports...`));
  console.log();
  execSync('npx tscpaths -p tsconfig.json -s ./src -o ../exemples/dashboard/src/@preview/@potidev/layouts-vulpix-pack', { stdio: 'inherit' });
  console.log();
}

const copyPackageJson = () => {
  console.log(chalk.blueBright(`🔨 ${step}/${total} Copping package.json to /dist-preview...`));
  console.log();
  execSync('npm run copy-package-json-to-dist-preview', { stdio: 'inherit' });
  console.log();
}


const run = (commands) => {
  total = commands.length;
  commands.forEach(command => {
    command();
    step++;
  });
}

try {
  console.log(chalk.bold.greenBright('🚀 Starting build script...'));

  run([
    clearBuild, 
    copySrc,
    fixAliasImports
  ]);

  console.log(chalk.bold.green(`🎉 Build complete!`));
  console.log();
} catch (error) {
  console.error('Erro durante o processo de build:', error.message);
  process.exit(1); // Finaliza o script com código de erro
}
