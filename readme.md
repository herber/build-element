# build-element [![Build Status](https://travis-ci.org/herber/build-element.svg?branch=master)](https://travis-ci.org/herber/build-element) [![Codestyle fyi](https://img.shields.io/badge/code%20style-fyi-E91E63.svg)](https://github.com/tobihrbr/fyi)

> Create html elements

## Install

```
$ npm install --save build-element
```

## Usage

```js
const buildElement = require('build-element');

buildElement('div', 'children', { attributes: { class: 'test' }, style: { color: 'blue' } });
//=> '<div class="test" style="color: blue>children</div>'

buildElement('img', { attributes: { src: 'https://source.unsplash.com/random' } });
//=> '<img src="https://source.unsplash.com/random" />'
```

## API

### buildElement(element, [children, options])

#### element

Type: `string`

The type of element eg. `div`, `p`, `img`, ...

#### children

Type: `string`, `array`

The element's children.

#### options

Type: `object``

##### attributes

Type: `object`

Attributes for the element eg. `class`, `src`, ...

##### style

Type: `object`

Inline styles

## License

MIT © [Tobias Herber](https://tobihrbr.com)
