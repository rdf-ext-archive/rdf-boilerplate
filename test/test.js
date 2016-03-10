/* global describe, it */

var assert = require('assert')
var boilerplate = require('..')

describe('rdf-boilerplate', function () {
  it('should return other', function () {
    var result = boilerplate()

    assert.equal(typeof result, 'string')
    assert.equal(result, 'other')
  })
})
