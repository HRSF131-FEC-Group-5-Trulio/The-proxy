const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');
// serves the client index.html to the current server. also uses /bundles and routs /bundles/service1.js
// also uses /api/whatever our endpoint is, to request from the individual services.
// so the actual bundles will be here.
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(morgan('dev'));


// need to set up routes so that they can take in id first.

// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/bundles', router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use('/api', (req, res, next) => {
  console.log('in api!!!');
  next();
},router.api);
app.use(express.static(PUBLIC_DIR));
app.use('/:id',express.static(PUBLIC_DIR));

module.exports = app;
