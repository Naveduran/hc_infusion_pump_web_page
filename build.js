const fs = require('fs');
const path = require('path');

// Read templates
const header = fs.readFileSync('_includes/header.html', 'utf8');
const footer = fs.readFileSync('_includes/footer.html', 'utf8');

// Create dist directory
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy assets
const copyDir = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
};

copyDir('assets', 'dist/assets');

// Process HTML files
const htmlFiles = ['index.html', 'bibliography.html', 'support.html', 'collaborate.html', 'team.html'];

htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace header placeholder
    content = content.replace(/<!-- HEADER_PLACEHOLDER -->[\s\S]*?<!-- \/HEADER_PLACEHOLDER -->/, header);
    
    // Replace footer placeholder  
    content = content.replace(/<!-- FOOTER_PLACEHOLDER -->[\s\S]*?<!-- \/FOOTER_PLACEHOLDER -->/, footer);
    
    fs.writeFileSync(`dist/${file}`, content);
  }
});

console.log('Build completed successfully!');