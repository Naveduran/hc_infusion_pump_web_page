# PowerShell build script - alternative to Node.js
$header = Get-Content "_includes\header.html" -Raw
$footer = Get-Content "_includes\footer.html" -Raw

# Create dist directory
if (!(Test-Path "dist")) { New-Item -ItemType Directory -Path "dist" }

# Copy assets
Copy-Item "assets" "dist\assets" -Recurse -Force

# Process HTML files
$htmlFiles = @("index.html", "bibliography.html", "support.html", "collaborate.html", "team.html")

foreach ($file in $htmlFiles) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        $content = $content -replace "<!-- HEADER_PLACEHOLDER -->[\s\S]*?<!-- /HEADER_PLACEHOLDER -->", $header
        $content = $content -replace "<!-- FOOTER_PLACEHOLDER -->[\s\S]*?<!-- /FOOTER_PLACEHOLDER -->", $footer
        Set-Content "dist\$file" $content
    }
}

Write-Host "Build completed successfully!"