## peerid
> Generate peer id for bittorrent dht node

### Usage

```js
var BtClient = require('bittorrent-tracker');
var peerid = require('peerid');

var client = new BtClient(peerid(), 6881 /*, torrent file */);
// do some ...
```

### API
* `peerid(prefix)`

##### @param {string} prefix optional
Prefix for generated peer id

### License
MIT, 2015 (c) Dmitry Tsvettsikh