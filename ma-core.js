/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = function (collection, iterFunc, iterCtx) {
  iterFunc = iterFunc.bind(iterCtx);
  if (Array.isArray(collection)) { return collection.map(iterFunc); }
  var srcProto = Object.getPrototypeOf(collection),
    results = (srcProto === null ? Object.create(null) : {});
  Object.keys(collection).forEach(function (key) {
    results[key] = iterFunc(collection[key], key, collection);
  });
  return results;
};
