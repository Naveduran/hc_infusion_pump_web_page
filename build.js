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

// Create dist directory
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
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
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    try {
      if (fs.statSync(srcPath).isDirectory()) {
        copyDir(srcPath, destPath);
      } else if (!file.endsWith('.ts')) {
        fs.copyFileSync(srcPath, destPath);
      }
    } catch (error) {
      console.error(`Error copying ${srcPath}:`, error.message);
      throw error;
    }
  });
};

try {
  copyDir('assets', 'dist/assets');
} catch (error) {
  console.error('Error copying assets:', error.message);
  process.exit(1);
}

// Process HTML files
const htmlFiles = [
  'index.html',
  'support.html',
  'team.html',
  'research.html',
  'sources.html',
  'coming_soon.html',
  'bibliography.html',
  'proof.html'
];

htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Replace header placeholder
      content = content.replace(/<!-- HEADER_PLACEHOLDER -->[\s\S]*?<!-- \/HEADER_PLACEHOLDER -->/, header);
      
      // Replace footer placeholder  
      content = content.replace(/<!-- FOOTER_PLACEHOLDER -->[\s\S]*?<!-- \/FOOTER_PLACEHOLDER -->/, footer);
      
      fs.writeFileSync(`dist/${file}`, content);
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      process.exit(1);
    }
  }
});

console.log('Build completed successfully!');