var PATH = include('pathConfig.js') ;

var apiHttps = include(PATH.PATH.API_HTTPS_CTRL);
// get transit mode of transport 

var convertDateToEpochSeconds = function(dateStr){
	var tempDate = new Date(dateStr);
	var epochSeconds = tempDate.getTime()/1000 ;
	return epochSeconds ;
}

var getTransitParamsFromReq = function(req){
	var params = {} ;
	params.key = _apiConfigs.TravPlan_TransitAPI_key;
	params.origin = req.query.origin;
	params.destination = req.query.destination;
	params.alternatives = true;
	// formaat is mm-dd-yyyy
	params.departure_time = convertDateToEpochSeconds(req.query.departDate) ;
	params.mode = 'transit';
	return params;
}

exports.getPublicTransitWays = function(req,successCallBack){
	console.log(successCallBack);
	var params = getTransitParamsFromReq(req);
	apiHttps.httpsRequest(
	_apiConfigs.TravPlan_TransitAPI_DOMAIN ,
	_apiConfigs.TravPlan_TransitAPI_URL,
	'GET',
	params,
	null,
	successCallBack
	);
}