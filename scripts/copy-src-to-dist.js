const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../src');
const destDir = path.join(__dirname, '../dist');

function copyDirectory(source, destination) {
    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination, { recursive: true });
    }

    const files = fs.readdirSync(source);

    files.forEach(file => {
        const sourcePath = path.join(source, file);
        const destPath = path.join(destination, file);

        if (fs.lstatSync(sourcePath).isDirectory()) {
            copyDirectory(sourcePath, destPath);
        } else if (!file.endsWith('.stories.tsx') && !file.endsWith('.stories.ts')) {
            fs.copyFileSync(sourcePath, destPath);
        }
    });
}

copyDirectory(sourceDir, destDir);
console.log('Pasta src copiada para dist com sucesso! Arquivos .stories.tsx e .stories.ts foram ignorados.');
