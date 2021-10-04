const { execSync } = require('child_process')

const pkg = require('./package.json')

execSync('git add data/ package.json yarn.lock')
execSync(`git commit -m "Update caniuse-db ${pkg.version}"`)
execSync(`git tag -m "Release caniuse-db ${pkg.version}" ${pkg.version}`)
