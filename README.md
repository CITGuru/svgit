# svgit

> Customizeable SVG to React Component

[![NPM](https://img.shields.io/npm/v/svgit.svg)](https://www.npmjs.com/package/svgit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a simple react library built on [react-inlinesvg](https://github.com/gilbarbara/react-inlinesvg) for manipulating svgs. You can pretty much manipulate `path`,`g`, and other svg components by using their index (more to come) and attrs. 

## Install

```bash
npm install --save svgit
```

## Usage

```jsx
import React, { Component } from 'react'

import SVG from 'svgit'

class Example extends Component {
  render () {
    return (
      <SVG width="50" title="New title" height="50" selectors={{index:1, attrs: { width: "20", height: "30" }}} />
    )
  }
}
```


Props
----

**src** {string}  
The SVG file you want to load. It can be an `url` or a string (base64 or encoded)

**wrapper** {function} ▶︎ `React.createFactory('span')`  
A React class or a function that returns a component instance to be used as the wrapper component.

**preloader** {node}  
A component to be shown while the SVG is loading.

**className** {string}  
A class to add to the default wrapper.

**onLoad** {function} ▶︎ a random 8 characters string `[A-Za-z0-9]`  
A callback to be invoked upon successful load.  
This will receive 2 arguments: the `src` prop and a `isCached` boolean

**onError** {function}  
A callback to be invoked if loading the SVG fails.  
This will receive a single argument:

- a xhr `RequestError` with:

```js
{
    ...,
    isHttpError: bool,
    status: number
}
```

- or an `InlineSVGError`, which has the following properties:

```js
{
    name: 'InlineSVGError',
    isSupportedBrowser: bool,
    isConfigurationError: bool,
    isUnsupportedBrowserError: bool,
    message: string
}
```

You should head over to [react-inlinesvg](https://github.com/gilbarbara/react-inlinesvg/) for more info on react-inlinesvg

## License

MIT © [CITGuru](https://github.com/CITGuru)
