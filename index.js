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
    maps = require('./lib/rescue-maps'),
    morgan = require('morgan');

/*
    Application setup.
 */
var app = express();

app.use(morgan('dev'));
app.use(function ajaxErrorHandler(err, req, res, next) {
    if (req.xhr) {
        return res.status(500).json(err);
    }

    next(err);
});

/*
    Routing.
 */
app.use('/', maps.app);

exports.app = app;
