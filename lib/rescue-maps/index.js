/**
 * lib/rescue-maps/index.js
 * Maps module entry point.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license ISC
 */
'use strict';

/*
    Library imports.
 */
var express = require('express'),
    storage = require('../rescue-storage')({id: 'rescuers', provider: 'memory'});

/*
    Application setup.
 */
var app = express();

var PUBLIC_DIR = __dirname + '/public';

/*
    Middleware.
 */
app.use('/', express.static(PUBLIC_DIR));

/*
    Routing.
 */
app.get('/rescue-requests', function (req, res, next) {
    storage.get('rescue-requests', function (err, docs) {
        if (err) {
            var customErr = new Error('Unable to load rescue requests.');
            customErr.inner = err;

            return next(customErr);
        }

        res.json(docs);
    });
});

exports.app = app;
