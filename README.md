# F2F
Farsi to Finglish, a Persian transliterator

A javascript port of [aminmarashi/onezero-f2f](https://github.com/aminmarashi/onezero-f2f) by [Amin Marashi](https://github.com/aminmarashi)

[![Build Status](https://img.shields.io/travis/brothersincode/f2f/master.svg?style=flat-square)](https://travis-ci.org/brothersincode/f2f)
[![Dependency Status](https://img.shields.io/david/brothersincode/f2f.svg?style=flat-square)](https://david-dm.org/brothersincode/f2f)
[![NPM version](https://img.shields.io/npm/v/f2f.svg?style=flat-square)](https://www.npmjs.com/package/f2f)
[![GitHub issues](https://img.shields.io/github/issues/brothersincode/f2f.svg?style=flat-square)](https://github.com/brothersincode/f2f/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/brothersincode/f2f/master/LICENSE)

## Install
``` bash
npm install f2f
```

## Usage
```js
var f2f = require('f2f');
var F2F = new f2f();

F2F.simplef2f('ثقلین'); // Outputs: "saghlin"
F2F.simplef2f('قسطنطنیه'); // Outputs: "ghastntnih"
```

### Browser
```html
<script src="lib/f2f.js"></script>
<script>
  var F2F = new f2f();
  alert(F2F.simplef2f("قسطنطنیه"));
</script>
```

#### F2F.simplef2f([text])

##### text
Type: `string`

String in Persian to be converted.

## License

This software is licensed under the MIT License. [View the license](LICENSE).
