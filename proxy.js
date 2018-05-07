
const config = require('config');

var apigClientFactory = require('aws-api-gateway-client').default;

const apigClientFactoryConfig = {
    invokeUrl : process.env.ENDPOINT || config.get('ENDPOINT'),
    accessKey : process.env.ACCESS_KEY || config.get('ACCESS_KEY'),
    secretKey : process.env.SECRET_KEY || config.get('SECRET_KEY'),
    region: process.env.REGION || config.get('REGION'),
    apiKey : process.env.API_KEY || config.get('API_KEY'),
  }

const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
var apigClient = apigClientFactory.newClient(apigClientFactoryConfig);

exports.getLastCharges = function(callback){
  var params = {};
  // Template syntax follows url-template https://www.npmjs.com/package/url-template
  var pathTemplate = '/dev/charges/'
  var method = 'POST';
  var additionalParams = {
      //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
      headers: {},
      queryParams: {}
  };

  let now = new Date();
  let dateFrom = new Date();
  dateFrom.setMonth(dateFrom.getMonth() -2);
  var body = {
      dateTo: now.getFullYear() + '-' + (month[now.getMonth()]),
      dateFrom: dateFrom.getFullYear() + '-' + (month[dateFrom.getMonth()])
  };

  apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
  .then(function(result){
    console.log('resultTTT', result.data);
    callback(result.data);
  }).catch( function(result){
   console.log('CATCH', result);
      //This is where you would put an error callback
      return result;
  });
}
