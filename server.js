const express = require('express');
const config = require('config');
const proxy = require('./proxy');

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/charges', (req, res) => {
  proxy.getLastCharges(function(charges) {
    res.send(charges);
    console.log('The promise was fulfilled with charges!');
  }, function(err) {
        console.error('The promise was rejected', err, err.stack);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
