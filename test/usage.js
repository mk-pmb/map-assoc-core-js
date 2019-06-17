/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

(function readmeDemo() {
  function eachFor(i, c) { c.forEach(i); }
  //#u
  var amap = require('map-assoc-core'), eq = require('equal-pmb'), preset;

  function upper(s) { return String(s).toUpperCase(); }
  function upperOrDouble(s) { return (s === +s ? s * 2 : s.toUpperCase()); }

  eq(amap({ cat: 'meow', dog: 'woof', lion: 'roar' }, upper),
          { cat: 'MEOW', dog: 'WOOF', lion: 'ROAR' });

  preset = amap(upper);
  eq(preset({ cat: 'meow', dog: 'woof', lion: 'roar' }),
            { cat: 'MEOW', dog: 'WOOF', lion: 'ROAR' });

  eq(amap([ 'mon', 'tue', 'wed' ], upper),
          [ 'MON', 'TUE', 'WED' ]);
  eq(amap({ '0': 'mon', '1': 'tue', '2': 'wed', length: 3 }, upper),
          { '0': 'MON', '1': 'TUE', '2': 'WED', length: '3' });
  eq(amap({ '0': 'mon', '1': 'tue', '2': 'wed', length: 3 }, upperOrDouble),
          { '0': 'MON', '1': 'TUE', '2': 'WED', length: 6 });

  eq(preset('bar'), { '0': 'B', '1': 'A', '2': 'R' });
  eachFor(function testFalseyValues(x) {
    eq(amap(x, upper), x);
    eq(preset(x), x);
  }, [null, undefined, false, 0, NaN, '']);
  //#r

}());

console.log("+OK usage tests passed.");   //= "+OK usage tests passed."
