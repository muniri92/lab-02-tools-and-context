'use strict';

const fp = module.exports = () =>{};

// Map Methods
fp.map = (list, arg) => Array.prototype.map.call(list, arg);
// fp.map = (list, arg) => Array.prototype.map.apply(list, arg);

// Filter Methods
fp.filter = (list, arg) => Array.prototype.filter.call(list, arg);
// fp.filter = (list, arg) => Array.prototype.filter.apply(list, arg);

// Reduce Methods
fp.reduce = (list, arg, init=0) => Array.prototype.reduce.call(list, arg, init);
// fp.reduce = (list, args, init=0) => Array.prototype.reduce.apply(list, args, init);

// Concat Methods
fp.concat = (list, ...args) => Array.prototype.concat.apply(list, args);
// fp.concat = (list, ...arg) => Array.prototype.concat.call(list, arg);

// Splice Methods
fp.splice = (list, ...args) => Array.prototype.splice.apply(list, args);
// fp.splice = (list, arg) => Array.prototype.splice.call(list, arg);
