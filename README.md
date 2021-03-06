# Passlane
A CLI based Dashlane clone which can be used to generate random passwords. Inspired by [Traversy Media](https://github.com/bradtraversy/passgen), and [Dashlane](https://www.dashlane.com/features/password-generator).


![carbon (1)](https://user-images.githubusercontent.com/63698375/124696819-61954300-df03-11eb-87c6-058b9f5537f0.png)


## Features

- By default it will generate a password of length 8 with alphabets, numbers, and symbols. But you can customize them using cli arguments.
- The password which is getting generated will be automatically copied to the clipboard.
- If you wish, you can also save each password by using `--save` cli argument. Which will generate a `passwords.txt` file and saves your password with the current date and time.



## Requirements

- Node JS
- npm
- git

## How to use it?

- `git clone` or `Download ZIP` this repo `https://github.com/the-coding-pie/Passlane.git`
- `cd` in to the root directory (in my case `Passlane` dir)
- `npm install`
- `node index.js (options)`

## To create a symlink and to make it run from anywhere, use the following commands:

- `npm link`
- `passlane (options)`

If you created a symlink, then you can use the tool by directly calling it's name like the above command (last one).


## CLI arguments (options)

| Short | Long              | What it will do                       |
| ----- |:----------------- | :-------------------------------------|
| -l    | --length [number] | length of the password (default: "8") |
| -nd   | --no-digits       | omit numbers from password            |
| -ns   | --no-symbols      | omit symbols from password            |
| -s    | --save            | save the current password to a file   |
| -V    | --version         | output the version number             |
| -h    | --help            | display help for command              |
