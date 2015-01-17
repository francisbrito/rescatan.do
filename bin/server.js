/**
 * bin/server.js
 * Application web server.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license ISC
 */
'use strict';

var http = require('http'),
    app = require('../').app;

var PORT = 3000;

http.createServer(app).listen(PORT);

console.log('Listening at port', PORT);
