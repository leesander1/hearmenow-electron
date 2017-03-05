Hearmenow Electron App
=======================
[![dependencies Status](https://david-dm.org/leesander1/hearmenow-electron/status.svg)](https://david-dm.org/leesander1/hearmenow-electron)
[![Build Status](https://travis-ci.org/leesander1/hearmenow-electron.svg?branch=master)](https://travis-ci.org/leesander1/hearmenow-electron)
[![devDependency Status](https://david-dm.org/leesander1/hearmenow-electron.svg)](https://david-dm.org/leesander1/hearmenow-electron#info=devDependencies)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/leesander1/hearmenow-electron/blob/master/license)

## Download app

**Get the Electron App**

[Download](http://hearmenowapp.com)

## Built With

[Electron](http://electron.atom.io/) application based on [React](https://facebook.github.io/react/), [Redux](https://github.com/reactjs/redux), [React Router](https://github.com/reactjs/react-router), [Webpack](http://webpack.github.io/docs/), [React Transform HMR](https://github.com/gaearon/react-transform-hmr) for rapid application development

## Install

* **Note: requires a node version >= 6 and an npm version >= 3.**

First, clone the repo via git:

```bash
git clone https://github.com/leesander1/hearmenow-electron.git
```

And then install dependencies.
**ProTip**: Install with [yarn](https://github.com/yarnpkg/yarn) for faster and safer installation

```bash
$ cd hearmenow-electron && npm install
```

## Run

Run these two commands __simultaneously__ in different console tabs.

```bash
$ npm run hot-server
$ npm run start-hot
```

or run two servers with one command

```bash
$ npm run dev
```

## Editor Configuration
**Atom (optional)**
```bash
apm install editorconfig es6-javascript atom-ternjs javascript-snippets linter linter-eslint language-babel autocomplete-modules file-icons
```

## DevTools

This boilerplate is included following DevTools extensions:

* [Devtron](https://github.com/electron/devtron) - Install via [electron-debug](https://github.com/sindresorhus/electron-debug).
* [React Developer Tools](https://github.com/facebook/react-devtools) - Install via [electron-devtools-installer](https://github.com/GPMDP/electron-devtools-installer).
* [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension) - Install via [electron-devtools-installer](https://github.com/GPMDP/electron-devtools-installer).

You can find the tabs on Chrome DevTools.

If you want to update extensions version, please set `UPGRADE_EXTENSIONS` env, just run:

```bash
$ UPGRADE_EXTENSIONS=1 npm run dev

# For Windows
$ set UPGRADE_EXTENSIONS=1 && npm run dev
```


## Packaging

To package apps for the local platform:

```bash
$ npm run package
```

To package apps for all platforms:

First, refer to [Multi Platform Build](https://github.com/electron-userland/electron-builder/wiki/Multi-Platform-Build) for dependencies.

Then,
```bash
$ npm run package-all
```

To package apps with options:

```bash
$ npm run package -- --[option]
```

## Further commands

To run the application without packaging run

```bash
$ npm run build
$ npm start
```

To run End-to-End Test

```bash
$ npm run build
$ npm run test-e2e
```

#### Options

See [electron-builder CLI Usage](https://github.com/electron-userland/electron-builder#cli-usage)

#### Module Structure

This boilerplate uses a [two package.json structure](https://github.com/electron-userland/electron-builder/wiki/Two-package.json-Structure).

1. If the module is native to a platform or otherwise should be included with the published package (i.e. bcrypt, openbci), it should be listed under `dependencies` in `./app/package.json`.
2. If a module is `import`ed by another module, include it in `dependencies` in `./package.json`.   See [this ESLint rule](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md).
3. Otherwise, modules used for building, testing and debugging should be included in `devDependencies` in `./package.json`.

## Authors

* **Mario Jimenez** - *Initial work* - [mariots](https://github.com/mariots)
* **Lee Sander** - *Initial work* -  [leesander1](https://github.com/leesander1) - *[leesander.com](https://leesander.com)*
* **Kevin Taing** - *Initial work* - [kevintaing86](https://github.com/kevintaing86)

See also the list of [contributors](https://github.com/leesander1/hearmenow-electron/contributors) who participated in this project.

## License

[MIT](https://github.com/leesander1/hearmenow-electron/blob/master/license)

## Acknowledgements

* Hat tip to anyone whose code was used
* [template for README](https://gist.githubusercontent.com/PurpleBooth/109311bb0361f32d87a2/raw/4a39c2139c4caa4686addc1e5dd490170fb82006/README-Template.md)
* The labels used in the issues section were inspired by [this site](https://robinpowered.com/blog/best-practice-system-for-organizing-and-tagging-github-issues/)
* Issue and PR Templates were inspired by [this site](https://www.talater.com/open-source-templates/#)
* Dial pad template was from [this site](http://www.jqueryscript.net/other/Creating-A-Responsive-Phone-Dial-Pad-with-jQuery-CSS3-dialpad.html)
