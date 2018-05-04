
const config = require('config');

var apigClientFactory = require('aws-api-gateway-client').default;

const apigClientFactoryConfig = {
    invokeUrl : process.env.ENDPOINT || config.get('ENDPOINT'),
    accessKey : process.env.ACCESS_KEY || config.get('ACCESS_KEY'),
    secretKey : process.env.SECRET_KEY || config.get('SECRET_KEY'),
    region: process.env.REGION || config.get('REGION'),
    apiKey : process.env.API_KEY || config.get('API_KEY'),
  }
var apigClient = apigClientFactory.newClient(apigClientFactoryConfig);

exports.getLastCharges = function(callback){
  var params = {};
  // Template syntax follows url-template https://www.npmjs.com/package/url-template
  var pathTemplate = '/dev/charges/'
  var method = 'GET';
  var additionalParams = {
      //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
      headers: {},
      queryParams: {}
  };

  let now = new Date();
  var body = {
      dateFrom: now.getFullYear() + '-' + (now.getMonth() - 2),
      dateTo: now.getFullYear() + '-' + (now.getMonth())
  };

  apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
  .then(function(result){
    console.log('result', result.data);
    callback(data);
   //res.send({express: result.data});
      //return result;
      //This is where you would put a success callback
  }).catch( function(result){
   console.log('CATCH', result);
      //This is where you would put an error callback
      return result;
  });
}
