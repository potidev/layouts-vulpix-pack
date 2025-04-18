const { exec } = require('child_process');

// Função para executar comandos shell
function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, { shell: '/bin/bash' }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        reject(error);
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
      }
      stdout && console.log(`Stdout: ${stdout}`);
      resolve(stdout);
    });
  });
}

// Função para configurar o ambiente
async function setupEnvironment() {
  try {
    // Carrega o NVM e usa a versão 18 do Node.js
    console.log("Setting Node version...");
    await runCommand('source ~/.nvm/nvm.sh && nvm use 18');

    // Configura o nome do usuário do Git localmente no projeto
    console.log("Setting Git user...");
    await runCommand('git config user.name "duduCMT"');

    // Configura o e-mail do usuário do Git localmente no projeto
    console.log("Setting Git e-mail...");
    await runCommand('git config user.email "dev.eduardo.lc@gmail.com"');

    console.log('Ambiente configurado com sucesso!');
  } catch (error) {
    console.error('Erro ao configurar o ambiente', error);
  }
}

// Executa a configuração do ambiente
setupEnvironment();
