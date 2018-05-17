
const config = require('config');

var apigClientFactory = require('aws-api-gateway-client').default;

const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

exports.getLastCharges = function(callback){
  const apigClientFactoryConfig = {
      invokeUrl : process.env.GETLASTCHARGES_ENDPOINT || config.get('GETLASTCHARGES_ENDPOINT'),
      accessKey : process.env.ACCESS_KEY || config.get('ACCESS_KEY'),
      secretKey : process.env.SECRET_KEY || config.get('SECRET_KEY'),
      region: process.env.REGION || config.get('REGION'),
      apiKey : process.env.API_KEY || config.get('API_KEY'),
    }
  var apigClient = apigClientFactory.newClient(apigClientFactoryConfig);
  var params = {};
  // Template syntax follows url-template https://www.npmjs.com/package/url-template
  var pathTemplate = '/dev/charges/'
  var method = 'POST';
  var additionalParams = {
      //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
      headers: {},
      queryParams: {}
  };

  let dateFrom = new Date();
  dateFrom.setMonth(dateFrom.getMonth() - 3);
  var body = {
      car: "polo",
      date: dateFrom.getTime()
  };

  apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
  .then(function(result){
    console.log('AWS.getLastCharges', result.Items);
    callback(result.Items);
  }).catch( function(result){
   console.log('CATCH', result);
      //This is where you would put an error callback
      return result;
  });
}

exports.saveFuelCharge = function(req, callback){
  const apigClientFactoryConfig = {
    invokeUrl : process.env.SAVEFUELCHARGE_ENDPOINT || config.get('SAVEFUELCHARGE_ENDPOINT'),
    accessKey : process.env.ACCESS_KEY || config.get('ACCESS_KEY'),
    secretKey : process.env.SECRET_KEY || config.get('SECRET_KEY'),
    region: process.env.REGION || config.get('REGION'),
    apiKey : process.env.API_KEY || config.get('API_KEY'),
  }
  var apigClient = apigClientFactory.newClient(apigClientFactoryConfig);
  var params = {};
  // Template syntax follows url-template https://www.npmjs.com/package/url-template
  var pathTemplate = '/dev/saveFuelCharge/'
  var method = 'POST';
  var additionalParams = {
      headers: {},
      queryParams: {}
  };

  let now = new Date();

  apigClient.invokeApi(params, pathTemplate, method, additionalParams, req)
  .then(function(result){
    console.log('AWS.saveFuelCharge', result);
    callback(result);
  }).catch( function(result){
   console.log('CATCH', result);
      return result;
  });
}
