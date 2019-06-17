/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function makeNullObj(seed) { return Object.assign(Object.create(null), seed); }
function whoops() { throw new Error('I should never have been called!'); }

var aMap = require('map-assoc-core'), eq = require('equal-pmb'),
  loMV = require('lodash.mapvalues'),
  getProto = Object.getPrototypeOf;

(function simple() {
  var input = { one: 1, four: 4, nine: 9 },
    ma = aMap(input, Math.sqrt),
    lo = loMV(input, Math.sqrt);
  eq(ma, { one: 1, four: 2, nine: 3 });
  eq(getProto(ma), Object.prototype);
  eq(lo, { one: 1, four: 2, nine: 3 });
  eq(getProto(lo), Object.prototype);
}());


(function testNullObj() {
  var input = makeNullObj({ one: 1, four: 4, nine: 9 }),
    ma = aMap(input, Math.sqrt),
    lo = loMV(input, Math.sqrt);
  eq(ma, makeNullObj({ one: 1, four: 2, nine: 3 }));
  eq(getProto(ma), null);
  eq(lo, { one: 1, four: 2, nine: 3 });
  eq(getProto(lo), Object.prototype);
}());


(function testArray() {
  var input = [16, 25, 36],
    ma = aMap(input, Math.sqrt),
    lo = loMV(input, Math.sqrt);
  eq(ma, [4, 5, 6]);
  eq(Array.isArray(ma), true);
  eq(lo, { 0: 4, 1: 5, 2: 6 });
  eq(getProto(lo), Object.prototype);
}());



(function testString() {
  function toUpper(s) { return String(s).toUpperCase(); }
  var input = 'Hello',
    ma = aMap(input, toUpper),
    lo = loMV(input, toUpper);
  eq(ma, { 0: 'H', 1: 'E', 2: 'L', 3: 'L', 4: 'O' });
  // ^-- If you want a string, you'll need map-assoc-fancy instead,
  eq(getProto(ma), Object.prototype);
  eq(lo, ma);
  eq(getProto(lo), Object.prototype);
}());


(function testBuffer() {
  var input = Buffer.from('Hello', 'latin1'),
    ma = aMap(input, String),
    lo = loMV(input, String);
  eq(ma, { 0: '72', 1: '101', 2: '108', 3: '108', 4: '111' });
  // ^-- If you want a buffer, you'll need map-assoc-fancy instead,
  eq(getProto(ma), Object.prototype);
  eq(lo, ma);
  eq(getProto(lo), Object.prototype);
}());


(function testFalseys() {
  var inputs = [
    undefined,
    null,
    false,
    0,
    '',
    NaN,
  ];
  function check(x) {
    eq(aMap(x, whoops), x);
    eq(loMV(x, whoops), {});
  }
  inputs.forEach(check);
}());






console.log("+OK cmp/lodash.mapvalues tests passed.");
//= "+OK cmp/lodash.mapvalues tests passed."
