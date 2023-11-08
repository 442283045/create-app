# Get the package.json file
$packageJson = Get-Content package.json | ConvertFrom-Json

# Increment the version 
$version = $packageJson.version
$versionParts = $version.Split('.')
$versionParts[2] = [int]$versionParts[2] + 1
$newVersion = $versionParts -join '.'

# Update the version in package.json
$packageJson.version = $newVersion
$packageJson | ConvertTo-Json -Depth 100 | Set-Content package.json

# Commit changes
git add .
git commit -m "Bump version to $newVersion"
# build project
npm run build
# Set the npm registry to https://registry.npmjs.org/
npm config set registry https://registry.npmjs.org/
# Set proxy
npm config set https-proxy http://127.0.0.1:7890
# Publish the package with public access
npm publish --access public
# Set the npm registry back to https://registry.npmmirror.com
npm config set registry https://registry.npmmirror.com
# Unset proxy
npm config delete https-proxy