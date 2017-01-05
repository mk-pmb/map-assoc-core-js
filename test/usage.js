/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

(function readmeDemo() {
  //#u
  var amap = require('map-assoc-core'), eq = require('equal-pmb');

  function upper(s) { return String(s).toUpperCase(); }
  function upperOrDouble(s) { return (s === +s ? s * 2 : s.toUpperCase()); }

  eq(amap({ cat: 'meow', dog: 'woof', lion: 'roar' }, upper),
          { cat: 'MEOW', dog: 'WOOF', lion: 'ROAR' });

  eq(amap([ 'mon', 'tue', 'wed' ], upper),
          [ 'MON', 'TUE', 'WED' ]);

  eq(amap({ '0': 'mon', '1': 'tue', '2': 'wed', length: 3 }, upper),
          { '0': 'MON', '1': 'TUE', '2': 'WED', length: '3' });
  eq(amap({ '0': 'mon', '1': 'tue', '2': 'wed', length: 3 }, upperOrDouble),
          { '0': 'MON', '1': 'TUE', '2': 'WED', length: 6 });
  //#r

}());

console.log("+OK usage tests passed.");   //= "+OK usage tests passed."
