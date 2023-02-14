import chalk from 'chalk';
import { statSync } from 'fs-extra';
import { argv } from 'yargs';
import { ls, sed, cp } from 'shelljs';

const upperCase = str =>
  str
    .replace(/\b(\w)(\w*)/g, ($0, $1, $2) => $1.toUpperCase() + $2)
    .replace(/\-(\w)/g, (all, letter) => letter.toUpperCase());

const lowerCase = str => str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, "");

const forEachDirectory = (name, filePath) => {
  ls(filePath).forEach(file => {
    const isFile = statSync(`${filePath}/${file}`).isFile();
    if (isFile) {
      sed('-i', /{{template}}/, lowerCase(name), `${filePath}/${file}`);
      sed('-i', /{template}/, upperCase(name), `${filePath}/${file}`);
    } else {
      forEachDirectory(name, `${filePath}/${file}`);
    }
  });
};

async function generate() {
  console.info(chalk`{white.bold usage:} 🎈 yarn comp \{componentName\}`);
  const name = argv._[0];

  try {
    if (!name) throw new Error('Missing name in command line');
    const nextName = upperCase(name);
    if (ls('src/').includes(nextName))
      throw new Error('Component name already exists');

    cp('-R', 'component-template/', `src/${nextName}`);
    forEachDirectory(name, `src/${nextName}`);
  } catch (e) {
    console.error(chalk`{red.bold ❌ Error: ${e.message}}`);
    process.exit(1);
  }
}

generate();
