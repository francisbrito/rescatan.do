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
var express = require('express');

/*
    Application setup.
 */
var app = express();

/*
    Routing.
 */
app.all('*', function (req, res) {
    res.send('it works!');
});

exports.app = app;
