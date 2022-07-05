const minimist = require('minimist');
const fs = require('fs');

class VersionManager {
  static updateVersion(versionNumber) {
    if (versionNumber) {
      const packageFile = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
      packageFile.version = versionNumber;
      fs.writeFileSync('package.json', JSON.stringify(packageFile, null, 2), 'utf-8');
    }
  }
}

const params = minimist(process.argv.slice(1));
VersionManager.updateVersion(params['new-version']);
