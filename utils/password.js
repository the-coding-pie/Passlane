const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const { format } = require("date-fns");

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const symbols = "`!@#$%^&*()_-+~/*|{}[]?:;";

const generatePassword = (length = 8, hasDigits = true, hasSymbols = true) => {
  let password = "";
  let allChars = letters;

  if (hasDigits === true) {
    allChars += digits;
  }

  if (hasSymbols === true) {
    allChars += symbols;
  }

  for (i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return password;
};

const savePassword = (password) => {
  const dest = path.join(__dirname, "../", "passwords.txt");
  const content =
    format(new Date(), "dd/MMM/yyyy hh:mm:ss a --- ") + password + "\r\n";

  fs.open(dest, "a", 666, (e, id) => {
    fs.write(id, content, null, "utf-8", () => {
      fs.close(id, () => {
        console.log(
          chalk.greenBright("Password saved to " + chalk.cyanBright(dest))
        );
      });
    });
  });
};

module.exports = { generatePassword, savePassword };
