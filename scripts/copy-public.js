const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'public');
const targetDir = path.join(__dirname, '..', 'out');

// Função para copiar arquivos recursivamente
function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursive(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copiar todos os arquivos do diretório public para out
if (fs.existsSync(sourceDir)) {
  copyRecursive(sourceDir, targetDir);
  console.log('✅ Arquivos do diretório public copiados para out/');
} else {
  console.error('❌ Diretório public não encontrado');
  process.exit(1);
}
