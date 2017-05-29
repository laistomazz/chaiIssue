//index.js
'use strict';
var chai = require('../node_modules/chai');
var expect = chai.expect;

describe('getEntries', function() {
    it('should exist', function() {
        var getEntries = require('../js/index.js');
        expect(getEntries).to.not.be.undefined;
    });
});