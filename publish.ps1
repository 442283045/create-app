# build project
npm run build
# Set the npm registry to https://registry.npmjs.org/
npm config set registry https://registry.npmjs.org/
npm config set https-proxy http://127.0.0.1:7890
# Publish the package with public access
npm publish --access public

# Set the npm registry back to https://registry.npmmirror.com
npm config set registry https://registry.npmmirror.com
npm config delete https-proxy