/**
 * index.js
 * Application entry point.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license ISC
 */
'use strict';

/*
    Library imports.
 */
var express = require('express'),
    maps = require('./lib/rescue-maps');

/*
    Application setup.
 */
var app = express();

/*
    Routing.
 */
app.use('/', maps.app);

exports.app = app;
