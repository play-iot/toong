const process = require('process');
const path = require('path');
const fs = require('fs-extra');

const current_dir = process.cwd();
const workspace = (process.env['npm_package_workspaces_0'] ?? 'packages').split('/')[0];
const event = process.env['npm_lifecycle_event'];
const argv = JSON.parse(process.env['npm_config_argv']);

const fName = argv?.original?.[1];
const target = path.resolve(current_dir, workspace, fName);

async function move_to_packages(source, target) {
  const redundant = ['.circleci', '.codeclimate.yml', '.editorconfig', '.gitignore', '.prettierrc.js', 'appveyor.yml',
                     'tsconfig.json', 'yarn.lock', 'LICENSE'];
  const templateFolder = path.resolve(current_dir, 'scripts', 'templates');
  await fs.move(path.resolve(current_dir, fName), target, { overwrite: true })
          .then(_ => Promise.allSettled(redundant.map(rf => fs.remove(path.resolve(target, rf)))))
          .then(_ => fs.copy(templateFolder, target));
}

if (event.startsWith('pre')) {
  fs.pathExists(target)
    .then(exists => {
      if (exists) {
        console.error(`Module ${fName} is already existed!!!`);
        process.exit(-1);
      }
    });
} else if (event.startsWith('post')) {
  move_to_packages(path.resolve(current_dir, fName), target)
    .catch(err => console.error(`Something is wrong: ${err}`));
}

