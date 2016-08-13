
var apiHttp = require('./apiHttpCtrl.js');
var utility = require('./utilityCtrl.js');
// Places of interest related functions begin       loc=Boston&startDate=2016-08-08&endDate=2016-08-18
// parse the url to get the parameters passed for poiList function
var getParamsForPOIList = function(req){
	var params = {};
	if (req.query.loc) {
		params.location = req.query.loc; 
	}
	if (req.query.startDate) {
		params.startDate = req.query.startDate;
	}
	if (req.query.endDate) {
		params.endDate = req.query.endDate ;
	}
	
	params.apikey = _apiConfigs.TravPlan_ThingsToDo_publicKey; 
	return params;
}

// get places of interest for a given  location , startDate, endDate
exports.getPOIList = function(req,res){
	
	var placesOfInterestSuccessCallBack = function(data) {
	  res.json(data);
    };
	
	var params = getParamsForPOIList(req);
	apiHttp.httpRequest(
	_apiConfigs.Expedia_API_DOMAIN_URL ,
	_apiConfigs.TravPlan_ThingsToDo_Path_URL,
	'GET',
	params,
	null,
	placesOfInterestSuccessCallBack
	);
	
};


// Flight search related function begins   departureDate=2016-08-08&fromAirport=MSN&toAirport=LAX

var getParamsForAllFlights = function(req){
	var params = {};
	params.departureDate = req.query.departureDate ;
	params.departureAirport = req.query.fromAirport;
	params.arrivalAirport = req.query.toAirport;
	params.apikey = _apiConfigs.TravPlan_FlightSearch_publicKey;
	return params;
}
exports.getAllFlights = function(req,res){
	var getAllFlightsSuccessCallBack = function(data){
		res.json(data);
	}
	
	var params = getParamsForAllFlights(req);
	
	apiHttp.httpRequest(
	_apiConfigs.Expedia_API_DOMAIN_URL ,
	_apiConfigs.TravPlan_FlightSearch_Path_URL,
	'GET',
	params,
	null,
	getAllFlightsSuccessCallBack
	);
};