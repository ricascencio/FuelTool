
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

exports.getCharges = async() => {
  console.log('getCharges function');
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

  return await apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
  .then(function(result){
   console.log('result', result.data);
      return result;
      //This is where you would put a success callback
  }).catch( function(result){
   console.log('CATCH', result);
      //This is where you would put an error callback
      return result;
  });
  return false;
};
