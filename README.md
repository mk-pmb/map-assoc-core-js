﻿
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
<!--#verbatim lncnt="17" -->
```javascript
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
```
<!--/include-->



<!--#toc stop="scan" -->


Q&A
---

  * My string/buffer is a collection, too!
    It maps position numbers to characters/octets!

You're totally right, and `map-assoc-fancy` will handle
that just as you'd expect!

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
