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
    storage = require('../rescue-storage')();

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
    var requests = [
        [18.4800842,-69.9168799],
        [18.4800845,-69.9461850],
        [18.5258733,-70.012519],
        [18.4875555,-69.9624904],
        [18.4923606,-69.8655393],
        [18.503410, -69.855154],
        [18.499747, -69.850476],
        [18.487700, -69.851377],
        [18.482124, -69.876826]
    ].map(function (r) {
        return {latitude: r[0], longitude: r[1]};
    });

    res.json(requests);
});

exports.app = app;
