// copy-package.js
const fs = require('fs');
const path = require('path');

const srcPath = path.resolve(__dirname, '../package.json');
const destDir = path.resolve(__dirname, '../../dist');
const destPath = path.join(destDir, 'package.json');

// Lê o package.json original
const originalPackage = JSON.parse(fs.readFileSync(srcPath, 'utf-8'));

// Remove o script "prepare"
if (originalPackage.scripts && originalPackage.scripts.prepare) {
  delete originalPackage.scripts.prepare;
}

// Garante que o diretório de destino existe
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Escreve o novo package.json no destino
fs.writeFileSync(destPath, JSON.stringify(originalPackage, null, 2));

console.log('✅ Package.json copiado para /dist-preview sem o script "prepare".');
