# Invert Color

[![Figma downloads](https://img.shields.io/endpoint?style=flat-square&url=https://figma-plugin-badges.vercel.app/api/installs/738840049488759901)](https://www.figma.com/community/plugin/738840049488759901/Invert-Color)
[![Figma likes](https://img.shields.io/endpoint?style=flat-square&url=https://figma-plugin-badges.vercel.app/api/likes/738840049488759901)](https://www.figma.com/community/plugin/738840049488759901/Invert-Color)
[![GitHub license](https://img.shields.io/github/license/pluginsky/invert-color?style=flat-square)](https://github.com/pluginsky/invert-color)
[![Travis](https://img.shields.io/travis/pluginsky/invert-color/master?style=flat-square)](https://travis-ci.org/pluginsky/invert-color)

<p align="center">
  <img width="420" src="https://raw.githubusercontent.com/pluginsky/invert-color/main/assets/preview.jpg" alt="TODO">
</p>

## About

Simply invert fills, strokes & effects colors in Figma

### Features

- Invert fills, strokes and effects colors of components including images! 🤩
- Select which parts, nodes and paints should be inverted; filter options; toggle one, group or _all_ **SOON** options with single click!
- Save configuration in storage to use it later _or run configuration once_ **SOON**
- Set configuration based on existing components (get type of node, parts and paints) **SOON**
- Exclude colors (set them manually or get from components) **SOON**

### Commands

- Invert
- Configure Settings
- Configure From Elements

### All Supported Properties

#### Parts

- [x] Fills
- [x] Strokes
- [x] Effects

#### Nodes

- [x] Boolean Operation
- [x] Component
- [x] Document
- [x] Ellipse
- [x] Frame
- [x] Group
- [x] Instance
- [x] Line
- [x] Page
- [x] Polygon
- [x] Rectangle
- [x] Slice
- [x] Star
- [x] Text
- [x] Vector

#### Paints

- [x] Solid
- [x] Gradient Linear
- [x] Gradient Radial
- [x] Gradient Diamond
- [x] Gradient Angular
- [x] Image

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
