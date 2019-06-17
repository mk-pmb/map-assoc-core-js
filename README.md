
<!--#echo json="package.json" key="name" underline="=" -->
map-assoc-core
==============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Just the very basics of map-assoc: Map the values of a collection (array or
object) and carry the keys.
<!--/#echo -->

For more magic, check the `map-assoc-fancy` package.



Promises support
----------------

No. Use [`p-props`][p-props] instead.

  [p-props]: https://github.com/sindresorhus/p-props



Usage
-----

from [test/usage.js](test/usage.js):

<!--#include file="test/usage.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="26" -->
```javascript
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
```
<!--/include-->



<!--#toc stop="scan" -->


Q&A
---

* How is this different from `lodash.mapValues`?

It supports presets (see usage example above).
It preserves the array-ness or null-object-ness of inputs
(see [test/cmp.lodash.js](test/cmp.lodash.js)).


* My string/buffer is a collection, too!
  It maps position numbers to characters/octets!

You're totally right, and `map-assoc-fancy` will handle that just as you'd
expect, i.e. map them to a String/Buffer.
The `…-core` package (this one) will return plain objects with number keys.
(Exception: The empty string is returned verbatim.)

* Can I use my GeneratorFunction as a collection?

Should work, since it should be an object, so it can hold keys, right?
If you want to iterate over its results instead,
have a look at `map-assoc-fancy`.
(:TODO: publish that, and write the actual function name here.)




License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
