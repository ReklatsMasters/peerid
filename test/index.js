/* global describe, it */

var peerid = require('../');

describe('module main', function() {
  it('should work', function(){
    var peer_id = peerid();

    peer_id.should.be.an.instanceof(Buffer).and.have.length(20);
    peer_id.slice(0, 9).toString().should.not.be.equal('undefined');
  });

	it('should work with prefix', function(){
		var prefix = '-UT1800-';
    var peer_id = peerid(prefix);

    peer_id.should.be.an.instanceof(Buffer).and.have.length(20);
    peer_id.slice(0, prefix.length).toString().should.be.equal(prefix);
  });
});