'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: 'yeomantalkparadigm-secret',

  FACEBOOK_ID: '933144830135949',
  FACEBOOK_SECRET: 'f8281024686414e1029b5f23931cf3cc',

  TWITTER_ID: '1aOwM4INe8ehtbnB2Lu1pijYW',
  TWITTER_SECRET: 'ue3beu2BBa2tHnkt4GiYRFdoGFaLS8hzyFM616kuo4l9lHtdGh',

  GOOGLE_ID: 'app-id',
  GOOGLE_SECRET: 'secret',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
