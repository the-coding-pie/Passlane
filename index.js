#!/usr/bin/env node
const { Command } = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const { generatePassword, savePassword } = require("./utils/password");

const program = new Command();

// version
program.version("1.0.0").description("A CLI based Password Generator");

// cli options (command line arguments)

// -l, --length
program
  .option("-l, --length [number]", "length of the password", "8")
  .option("-nd, --no-digits", "omit numbers from password")
  .option("-ns, --no-symbols", "omit symbols from password")
  .option("-s, --save", "save the current password to a file");

// parse the arguments
program.parse(process.argv);

// get options as key, value pair
const { length, digits, symbols, save } = program.opts();

try {
  // generate the password according to the options
  const password = generatePassword(length, digits, symbols);
  // copy to clipboard
  clipboardy.writeSync(password);

  // save to file
  if (save) {
    try {
      savePassword(password);
    } catch (e) {
      console.log(chalk.red("Oops, can't save the password to file!"));
    }
  }

  console.log(
    chalk.blueBright("Your new password: " + chalk.keyword("orange")(password))
  );
  console.log(chalk.yellow("\nPassword copied to clipboard!"));
} catch (e) {
  // if something went wrong
  console.log(chalk.red("\nOops, something went wrong, try again!"));
}
