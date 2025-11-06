const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if TypeScript is available
function hasTypeScript() {
  try {
    execSync('npx tsc --version', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

// Read templates
let header, footer;
try {
  header = fs.readFileSync('_includes/header.html', 'utf8');
  footer = fs.readFileSync('_includes/footer.html', 'utf8');
} catch (error) {
  console.error('Error reading template files:', error.message);
  process.exit(1);
}

// Create dist directories
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}
if (!fs.existsSync('dist/assets/js')) {
  fs.mkdirSync('dist/assets/js', { recursive: true });
}

// Compile TypeScript if available
if (hasTypeScript()) {
  try {
    console.log('Compiling TypeScript...');
    execSync('npx tsc', { stdio: 'inherit' });
  } catch (error) {
    console.error('TypeScript compilation failed:', error.message);
    process.exit(1);
  }
} else {
  console.log('TypeScript not available, skipping compilation...');
}

// Copy assets (excluding TypeScript files)
const copyDir = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  let files;
  try {
    files = fs.readdirSync(src);
  } catch (error) {
    console.error(`Error reading directory ${src}:`, error.message);
    return;
  }
  
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    
    try {
      const stat = fs.statSync(srcPath);
      if (stat.isDirectory()) {
        copyDir(srcPath, destPath);
      } else if (!file.endsWith('.ts')) {
        fs.copyFileSync(srcPath, destPath);
      }
    } catch (error) {
      console.error(`Error copying ${srcPath}:`, error.message);
    }
  });
};

copyDir('assets', 'dist/assets');

// Process HTML files
const htmlFiles = [
  'index.html',
  'support.html',
  'team.html',
  'mystory.html',
  'sources.html'
];

// Process English files
htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      content = content.replace(/<!-- HEADER_PLACEHOLDER -->[\s\S]*?<!-- \/HEADER_PLACEHOLDER -->/, header);
      content = content.replace(/<!-- FOOTER_PLACEHOLDER -->[\s\S]*?<!-- \/FOOTER_PLACEHOLDER -->/, footer);
      fs.writeFileSync(`dist/${file}`, content);
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
});

// Process Spanish files
function processSpanishFiles() {
  if (!fs.existsSync('es')) return;
  
  let headerEs, footerEs;
  try {
    headerEs = fs.readFileSync('es/_includes/header.html', 'utf8');
    footerEs = fs.readFileSync('es/_includes/footer.html', 'utf8');
  } catch (error) {
    console.error('Error reading Spanish template files:', error.message);
    process.exit(1);
  }

  if (!fs.existsSync('dist/es')) {
    fs.mkdirSync('dist/es');
  }

  htmlFiles.forEach(file => {
    const spanishFile = `es/${file}`;
    if (fs.existsSync(spanishFile)) {
      try {
        let content = fs.readFileSync(spanishFile, 'utf8');
        content = content.replace(/<!-- HEADER_PLACEHOLDER -->[\s\S]*?<!-- \/HEADER_PLACEHOLDER -->/, headerEs);
        content = content.replace(/<!-- FOOTER_PLACEHOLDER -->[\s\S]*?<!-- \/FOOTER_PLACEHOLDER -->/, footerEs);
        fs.writeFileSync(`dist/es/${file}`, content);
      } catch (error) {
        console.error(`Error processing Spanish ${file}:`, error.message);
      }
    }
  });
}

processSpanishFiles();

console.log('Build completed successfully!');