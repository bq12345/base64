# Base64

Base64 is a robust base64 encoder/decoder that is fully compatible with atob() and btoa(), written in JavaScript.

## Installation

use npm:

```bash
npm install https://github.com/bq12345/base64
```
in browser:

```html
<script src="./bundle.js"></script>
```

## API

```js

var Base = require('Base64');

var encodedData = Base64.encode(input);

var encodedData = Base64.btoa(input);

var decodedData = Base64.decode(input);

var dncodedData = Base64.atob(input);

```

## Test

```bash
npm test
```

## Build

```bash
npm run build
```

## License

Base64 is available under the [MIT](https://mths.be/mit) license.

