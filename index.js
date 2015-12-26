var hat = require('hat');

/**
 * @param {string} prefix optional - prefix for peer id
 * @return {Buffer}
 */
module.exports = function peerid(prefix) {
  return prefix ?
    Buffer.concat([new Buffer(prefix, 'binary'), new Buffer(hat(160), 'hex')], 20) :
    new Buffer(hat(160), 'hex')
    ;
}