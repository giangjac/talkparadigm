/**
 * Main application file
 */

'use strict';

import express from 'express';
import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import config from './config/environment';
import http from 'http';

// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

// Populate databases with sample data
if (config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
var server = http.createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Processes the form submission.
app.post('/send', function (req, res) {
  // Here is an example of how we could send the form data by email.
  var Email = require('emailjs/email');
  var server = Email.server.connect({
    user: 'talkparadigm@gmail.com',
    password: 'Ham&cheese7',
    host: 'smtp.gmail.com',
    ssl: true,
    port: 465
  });
  server.send({
    'text': req.body.comments.$viewValue,
    'from': 'Talk Paradigm <talkparadigm@gmail.com>',
    'to': 'Talk Paradigm <talkparadigm@gmail.com>',
    'reply-to': req.body.email.$viewValue,
    'subject': req.body.name.$viewValue + ' Submitted Their Card!'
  }, function (err, message) {
    console.log(err || message);
  });

  // For this example, we just log the form data and return OK.
  // console.log(req.body.name.$viewValue);
  // This is a dummy loop to simulate a slow connection.
  //for (var i = 0; i < 99999999; i++) { }
  // Return a successful response.
  return res.send({status: 'OK'});
});

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;

