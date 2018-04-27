const express = require('express');
const proxy = require('./proxy.js');
const config = require('config');

const app = express();
const port = process.env.PORT || 5000;

var apigClientFactory = require('aws-api-gateway-client').default;

const apigClientFactoryConfig = {
    invokeUrl : process.env.ENDPOINT || config.get('ENDPOINT'),
    accessKey : process.env.ACCESS_KEY || config.get('ACCESS_KEY'),
    secretKey : process.env.SECRET_KEY || config.get('SECRET_KEY'),
    region: process.env.REGION || config.get('REGION'),
    apiKey : process.env.API_KEY || config.get('API_KEY'),
  }
var apigClient = apigClientFactory.newClient(apigClientFactoryConfig);

app.get('/api/charges', (req, res) => {
  proxy.getCharges()
  .then(res => res.send())
  .catch(err => console.log(err));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
