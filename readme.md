## peerid
[![travis](https://travis-ci.org/ReklatsMasters/peerid.svg)](https://travis-ci.org/ReklatsMasters/peerid)
[![npm](https://img.shields.io/npm/v/peerid.svg)](https://npmjs.org/package/peerid)
[![license](https://img.shields.io/npm/l/peerid.svg)](https://npmjs.org/package/peerid)
[![downloads](https://img.shields.io/npm/dm/peerid.svg)](https://npmjs.org/package/peerid)
[![Code Climate](https://codeclimate.com/github/ReklatsMasters/peerid/badges/gpa.svg)](https://codeclimate.com/github/ReklatsMasters/peerid)
[![Test Coverage](https://codeclimate.com/github/ReklatsMasters/peerid/badges/coverage.svg)](https://codeclimate.com/github/ReklatsMasters/peerid/coverage)

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