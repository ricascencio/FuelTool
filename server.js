const express = require('express');
const config = require('config');
const proxy = require('./proxy');

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/charge/all', (req, res) => {
  proxy.getLastCharges(function(charges) {
    res.send(charges);
    console.log('The promise was fulfilled with charges!');
  }, function(err) {
        console.error('The promise was rejected', err, err.stack);
  });
});

app.get('/charge/add', (req, res) => {
  proxy.saveFuelCharge(function(charge, params) {
    res.send(charge);
    console.log('The promise was fulfilled with charge!');
  }, function(err) {
        console.error('The promise was rejected', err, err.stack);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
