'use strict';

require('should');
const Base64 = require('../index');

describe('Base64', function () {
    describe('btoa', function () {
        it('encode should be right', function () {
            Base64.btoa('man').should.equal('bWFu');
        });
    });

    describe('atob', function () {
        it('decode should be right', function () {
            Base64.atob('YmFpcWlhbmc=').should.equal('baiqiang');
        });
    });
});