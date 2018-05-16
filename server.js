const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const proxy = require('./proxy');

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.get('/charge/all', (req, res) => {
  proxy.getLastCharges(function(charges) {
    res.send(charges);
    console.log('The promise was fulfilled with charges!');
  }, function(err) {
        console.error('The promise was rejected', err, err.stack);
  });
});

app.post('/charge/add', (req, res) => {
  proxy.saveFuelCharge(req.body, function(charge) {
    res.send(charge);
    console.log('The promise was fulfilled with charge!');
  }, function(err) {
        console.error('The promise was rejected', err, err.stack);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
