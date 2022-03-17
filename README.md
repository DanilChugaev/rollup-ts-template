# rollup-ts-template

A boilerplate code for typescript projects

## Contents
  - [Prerequisites](#prerequisites)
  - [Features](#features)
  - [Run Locally](#run-locally)
  - [Build For Production](#build-for-production)
  - [License](#license)

<p align="center">
  <img src="./src/images/logo.svg" alt="rollup-ts-template logo"/>
</p>

## Prerequisites

- [npm](http://npmjs.com)
- [Node.js](https://nodejs.org/en/download/)

## Features

Here's an overview of the included main tools

- **Typescript** - superset of JavaScript which primarily provides optional static typing, classes and interfaces
- **Lit** - is a simple library for building fast, lightweight web components
- **ESLint** - the pluggable linting utility
- **Stylus** - is a revolutionary new language, providing an efficient, dynamic, and expressive way to generate CSS
- **Jest** - is a delightful JavaScript Testing Framework with a focus on simplicity
- **Browsersync** - for live-reload dev-server

additional plugins

- **rollup-plugin-clear** - for clear dist folder during build
- **rollup-plugin-consts** - let you use constants that are replaced at build time, such as inlining your NODE_ENV
- **rollup-plugin-terser** - minifies the generated package
- **rollup-plugin-copy** - copy files and folders, with glob support
- **rollup-plugin-visualizer** - visualize and analyze your Rollup bundle to see which modules are taking up space

## Run Locally

Clone the project

```bash
  git clone git@github.com:DanilChugaev/rollup-ts-template.git my-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the development server

```bash
  npm dev
```

## Build For Production

To generate production build

```bash
 npm build
```

## License

[MIT](https://choosealicense.com/licenses/mit/)