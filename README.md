# Invert Color

[![Figma downloads](https://img.shields.io/endpoint?style=flat-square&url=https://figma-plugin-badges.vercel.app/api/installs/738840049488759901)](https://www.figma.com/community/plugin/738840049488759901/Invert-Color)
[![Figma likes](https://img.shields.io/endpoint?style=flat-square&url=https://figma-plugin-badges.vercel.app/api/likes/738840049488759901)](https://www.figma.com/community/plugin/738840049488759901/Invert-Color)
[![GitHub license](https://img.shields.io/github/license/pluginsky/invert-color?style=flat-square)](https://github.com/pluginsky/invert-color)
[![Travis](https://img.shields.io/travis/pluginsky/invert-color/master?style=flat-square)](https://travis-ci.org/pluginsky/invert-color)

## About

Simply invert fills, strokes & effects colors in Figma

### Features

- Invert fills, strokes and effects colors of components including images! 🤩
- Select which parts, nodes and paints should be inverted; filter options; toggle one, group or *all* **SOON** options with single click!
- Save configuration in storage to use it later *or run configuration once* **SOON**
- Set configuration based on existing components (get type of node, parts and paints)
- Exclude colors (set them manually or get from components) **SOON**

### Commands

- Invert
- Configure Settings
- Configure From Elements

## How to run locally

### Prerequisites

- Node.js
- Yarn
- [Figma Desktop](https://www.figma.com/downloads/)

Clone the repo and run:

```sh
yarn && yarn watch
```

Add it to Figma by going to "Your Face > Plugins" and clicking on create a new plugin, this will give you the option to link to an existing plugin and you can select the manifest.json in this directory.

Open Figma and right click a component and you can access the plugin in Plugins > Development > Invert Color.

When making changes go to Menu > Plugins > "Run Last Plugin" (Or hit ⌥⌘P for Mac or Ctrl+Alt+P for Windows).

## Build with

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand.surge.sh/)
- [webpack](https://webpack.js.org/)

## License

This project is licensed under the MIT License © 2019-present Jakub Biesiada
