/**
 * lib/rescue-storage/lib/providers/memory.js
 * An in-memory data storage implementation.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license ISC
 */
'use strict';

/**
 * Holds collections of objects as properties.
 * @type {Object}
 */
var store = {};

/**
 * Retrieves a collection of objects.
 * @param  {String}   collection Name of the collection.
 * @param  {Function} fn         Callback.
 */
exports.get = function get(collection, fn) {
    store[collection] = store[collection] || [];

    if (!Array.isArray(store[collection])) {
        return fn(new Error('Property is not a collection.'));
    }

    fn(null, store[collection]);
};

/**
 * Adds an object to a collection.
 * @param {String}   collection Name of the collection.
 * @param {Object}   obj        Object to add to the collection.
 * @param {Function} fn         Callback.
 */
exports.add = function add(collection, obj, fn) {
    store[collection] = store[collection] || [];
    store[collection].push(obj);

    fn(null, obj);
};
