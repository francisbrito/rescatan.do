/**
 * lib/rescue-maps/index.js
 * Maps module entry point.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license ISC
 */
'use strict';

var express = require('express');

var app = express();

var PUBLIC_DIR = __dirname + '/public';

app.use('/', express.static(PUBLIC_DIR));

exports.app = app;
