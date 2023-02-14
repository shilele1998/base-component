const chalk = require('chalk');
const fs = require('fs-extra');
const yargs = require('yargs');
const shelljs = require('shelljs');

const upperCase = str =>
  str
    .replace(/\b(\w)(\w*)/g, ($0, $1, $2) => $1.toUpperCase() + $2)
    .replace(/\-(\w)/g, (all, letter) => letter.toUpperCase());

const lowerCase = str => str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, "");

const forEachDirectory = (name, filePath) => {
  //找出所有的文件，并遍历进行操作
  shelljs.ls(filePath).forEach(file => {
    // fs.statSync 获取文件信息
    const isFile = fs.statSync(`${filePath}/${file}`).isFile();
    if (isFile) {
      /* sed流编辑器,，-i表示直接作用源文件 */
      // 将所有的模板的文件名替换为lowerCase(name)处理后的的内容
      shelljs.sed('-i', /{{template}}/, lowerCase(name), `${filePath}/${file}`);
      shelljs.sed('-i', /{template}/, upperCase(name), `${filePath}/${file}`);
    } else {
      forEachDirectory(name, `${filePath}/${file}`);
    }
  });
};

async function generate() {
  console.info(chalk`{white.bold usage:} 🍬 yarn comp \{componentName\}`);
  // 获取命令行信息
  const name = yargs.argv._[0];

  try {
    if (!name) throw new Error('Missing name in command line');
    const nextName = upperCase(name);
    if (shelljs.ls('src/').includes(nextName))
      throw new Error('Component name already exists');
    // 拷贝文件到src/${nextName}
    shelljs.cp('-R', 'component-template/', `src/${nextName}`);
    forEachDirectory(name, `src/${nextName}`);
  } catch (e) {
    console.error(chalk`{red.bold ❌ Error: ${e.message}}`);
    process.exit(1);
  }
}

generate();
