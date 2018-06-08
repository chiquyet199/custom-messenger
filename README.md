## DONAL BUDDIES

## VISUAL STUDIO CODE (OPTIONAL)

Download and install VsCode at https://code.visualstudio.com/download
Install those plugins (recommended)

- Auto Close Tag
- Color Highlight
- ESLint
- Path Intellisense
- Prettier - Code Formater
- Rainbow Brackets

Adding format setting to Vs Code

- command + Shift + p (on Mac) or ctrl + Shift + p (on Window) to open workspace settings
- Edit the existing settings with :
  {
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "all",
  "prettier.printWidth": 110,
  "prettier.bracketSpacing": true
  }

## UP & RUNNING

Install yarn
Download and install yarn at : https://yarnpkg.com/lang/en/docs/install/

Install webpack

```
$ yarn add webpack global
```

Install dependencies:

```
$ yarn install
```

Fire up a development server:

```
$ yarn dev
```

Once the server is running, you can visit `http://localhost:8080/`

## Linting

_You should have eslint and eslint-watch installed. If you don't, run the following:_

```
$ npm i -g eslint eslint-watch
```

or if you need permissions:

```
$ sudo npm i -g eslint eslint-watch
```

To run the linter once:

```
$ yarn lint
```

To run the watch task:

```
$ yarn lint:watch
```

## Production Build

To build your production assets and run the server:

```
$ yarn start
```
