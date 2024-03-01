# React-SSR-CLI

[![npm version](https://badge.fury.io/js/react-to-ssr-cli.svg)](https://badge.fury.io/js/react-to-ssr-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

react-ssr-cli is a command-line interface for converting React applications into server-side rendered (SSR) applications effortlessly.

## Features

- Convert React applications to server-side rendered (SSR) applications.
- Simple command-line interface for quick usage.
- Flexible configuration options to customize SSR settings.

## Installation

```bash
npm install -g react-to-ssr-cli
```

## Usage

To use react-ssr-cli, navigate to the root folder of your built React application. Make sure you've built your React application using your preferred method (e.g., `npm run build`).

Then, run the following command:

```bash
ssr
```

This command will convert the React application in the current directory to a server-side rendered (SSR) application.

If you prefer to use npm scripts, you can add a script to your package.json file like this:

```json
"scripts": {
  ...
  "ssr": "npm run build && react-ssr ./ssr-output"
}
```

## Configuration

To configure react-ssr-cli, create a file named ssr-config.json in the root folder of your project. Use the following format to specify configuration options:

```json
{
  "port": 3000,
  "appPath": "./src/App.js",
  "routes": ["^/$"]
}
```

If ssr-config.json is not present, react-ssr-cli will use default configuration values. The example above represents the default configuration values.
