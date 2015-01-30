
/**
 * Module dependencies.
 */

var type = require('component-type');

/**
 * Iterate the given `obj` and invoke `fn(val, i)`
 * in optional context `ctx`.
 *
 * @param {String|Array|Object} obj
 * @param {Function} fn
 * @param {Object} [ctx]
 * @api public
 */

module.exports = function(obj, fn, ctx){
    ctx = ctx || this;
    switch (type(obj)) {
        case 'array':
            array(obj, fn, ctx);
            break;
        case 'object':
            (typeof obj.length == 'number')
                ? array(obj, fn, ctx)
                : object(obj, fn, ctx);
            break;
        case 'string':
            string(obj, fn, ctx);
            break;
    }
    return obj;
};

/**
 * Iterate string chars.
 *
 * @param {String} obj
 * @param {Function} fn
 * @param {Object} ctx
 * @api private
 */

function string(obj, fn, ctx) {
    var i = 0,
        l = obj.length;
    while (i < l)
        fn.call(ctx, obj.charAt(i), i++);
}

/**
 * Iterate object keys.
 *
 * @param {Object} obj
 * @param {Function} fn
 * @param {Object} ctx
 * @api private
 */

function object(obj, fn, ctx) {
    var keys = Object.keys(obj),
        i = 0,
        l = keys.length;

    while (i < l) {
        var key = keys[i++];
        fn.call(ctx, obj[key], key);
    }
}

/**
 * Iterate array-ish.
 *
 * @param {Array|Object} obj
 * @param {Function} fn
 * @param {Object} ctx
 * @api private
 */

function array(obj, fn, ctx) {
  var i = 0,
      l = obj.length;
  while (i < l)
    fn.call(ctx, obj[i], i++);
}
