const express = require('express');
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
  //const response = await fetch('/api/charges');
  //const body = await response.json();


  //res.send({ express: 'Hello From Express' });
  //proxy.getCharges()
  //.then(res => res.send())
  //.catch(err => console.log(err));
  //
  //
  let response = null;

  var params = {};
  // Template syntax follows url-template https://www.npmjs.com/package/url-template
  var pathTemplate = '/dev/charges/'
  var method = 'GET';
  var additionalParams = {
      //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
      headers: {},
      queryParams: {}
  };
  var body = {
      //This is where you define the body of the request
  };

  apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
  .then(function(result){
   console.log('result', result.data);
   res.send({express: result.data});
      //return result;
      //This is where you would put a success callback
  }).catch( function(result){
   console.log('CATCH', result);
      //This is where you would put an error callback
      return result;
  });



});

app.listen(port, () => console.log(`Listening on port ${port}`));
