#!/usr/bin/env node
const chalk= require('chalk');
const path= require('path');
const program= require('commander');

program
  .version(require('../package.json').version)
  .usage('<command> [options]')

program.on('--help',()=>{
  console.log()
  console.log(`Run ${chalk.cyan('reactpress <command> --help')} for detailed usage of the command`)
  console.log()
})

program.parse(process.argv)