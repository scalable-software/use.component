![License: CC BY-NC-SA 4.0](https://flat.badgen.net/static/license/CC-BY-NC-SA-4.0/green)

# Use.Component

This repository illustrates how a web component package as a NPM Package can be used.
Refer to the [Web.Component](https://github.com/scalable-software/web.component) for comprehensive documentation on how to create a web component package.

## Dependency References needed

### Importmaps

1. The following dependencies was added to the `imports` section in `importmap.build.json` file:

```json
{
  "@scalable.software/web.component":
    "../node_modules/@scalable.software/web.component/dist/Index.js",
},
```

2. The following dependencies was added to the `imports` section in `importmap.test.json` file:

```json
{
  "@scalable.software/web.component": "./node_modules/@scalable.software/web.component/dist/Index.js"
}
```

### Karma Unit Testing

1. The following dependencies was added to the `proxies` section in `karma.conf.js` file:

```json
{
  "/node_modules/": "/base/node_modules/"
}
```

2. The following dependencies was added to the `files` section in `karma.conf.js` file:

```json
[
  {
    "pattern": "./node_modules/@scalable.software/**/dist/*.css"
  },
  {
    "pattern": "./node_modules/@scalable.software/**/dist/*.html"
  },
  {
    "pattern": "./node_modules/@scalable.software/**/dist/*.js",
    "type": "module"
  }
]
```

### Wallaby Unit Testing

1. The following dependencies was added to the `files` section in `wallaby.js` file:

```json
[
  "node_modules/@scalable.software/**/dist/*.js",
  "node_modules/@scalable.software/**/dist/*.css",
  "node_modules/@scalable.software/**/dist/*.html"
]
```

## License

> his software and its documentation are released under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public License (CC BY-NC-SA 4.0). This means you are free to share, copy, distribute, and transmit the work, and to adapt it, but only under the following conditions:
>
> Attribution: You must attribute the work in the manner specified by the author or licensor (but not in any way that suggests that they endorse you or your use of the work).
>
> NonCommercial: You may not use this material for commercial purposes.
>
> ShareAlike: If you alter, transform, or build upon this work, you may distribute the resulting work only under the same or similar license to this one.
>
> For more details, please visit the full [license agreement](https://creativecommons.org/licenses/by-nc-sa/4.0/).
