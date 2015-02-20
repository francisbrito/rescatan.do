/**
 * lib/rescue-storage/index.js
 * Storage module entry point.
 *
 * Provides an database-agnostic layer for storing and retrieving data.
 *
 * A provider is just a module that responds to the `get`, `add`, `del`, `update` functions.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license ISC
 */
'use strict';

module.exports = function storageFactory(opts) {
    opts = opts || {};

    /**
     * Represents where data is being stored.
     * Currently only 'memory' is supported.
     *
     * @type {String}
     * @default 'memory'
     */
    var provider = opts.provider || 'memory';

    var storage = function () {};

    switch (provider) {
        case 'memory':
            storage = require('./lib/providers/memory');
            break;
        default:
            throw new Error('Provider: "' + provider + '" not supported.');

    }

    return storage;
};
