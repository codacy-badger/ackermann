[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies Status][dependencies-image]][dependencies-url]
[![devDependencies Status][dev-dependencies-image]][dev-dependencies-url]
[![License: MIT][mit-image]][mit-url]

[travis-image]: https://travis-ci.com/ericheayn/ackermann.svg?branch=master
[travis-url]: https://travis-ci.com/ericheayn/ackermann
[coveralls-image]: https://coveralls.io/repos/github/ericheayn/ackermann/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/ericheayn/ackermann?branch=master
[mit-image]: https://img.shields.io/badge/License-MIT-yellow.svg
[mit-url]: https://opensource.org/licenses/MIT
[dependencies-image]: https://david-dm.org/ericheayn/ackermann/status.svg
[dependencies-url]: https://david-dm.org/ericheayn/ackermann
[dev-dependencies-image]: https://david-dm.org/ericheayn/ackermann/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/ericheayn/ackermann?type=dev

# Ackermann Function

Returns the value for the [Ackermann Function][wikipedia] given positive integers ```m``` and ```n```.

## Installation

## API

```js
var ackermann = require('ackermann')
```

## Examples

```js
var ackermann = require('ackermann')

console.log(ackermann(0,0)) // => 1
console.log(ackermann(0,1)) // => 2
console.log(ackermann(1,4)) // => 6
console.log(ackermann(3,4)) // => 125
console.log(ackermann('a','b')) // => Throws Error
```

## Testing

```bash
$ npm test
$ npm run lint
```

## References

- [Ackermann Function (Wikipedia)][wikipedia]

[wikipedia]: https://en.wikipedia.org/wiki/Ackermann_function

## License

[MIT](LICENSE)
