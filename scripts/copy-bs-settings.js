const fs = require('fs')

const srcPath = 'node_modules/bootstrap/scss/_variables.scss'
const destPath = 'src/styles/settings.scss'

if (fs.existsSync(destPath)) {
  console.log('Bootstrap: settings.scss already exists')
} else {
  fs.copyFile(srcPath, destPath, fs.constants.COPYFILE_EXCL, (err) => {
    if (err) throw err
    console.log('Bootstrap: settings.scss file copied from node_modules')
  })
}
