var PATH = include('pathConfig.js') ;

var apiHttp = include(PATH.PATH.API_HTTP_CTRL);


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
exports.getPOIList = function(req,successCallback){
	
	var params = getParamsForPOIList(req);
	apiHttp.httpRequest(
	_apiConfigs.Expedia_API_DOMAIN_URL ,
	_apiConfigs.TravPlan_ThingsToDo_Path_URL,
	'GET',
	params,
	null,
	successCallback
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
exports.getAllFlights = function(req,flightSuccessCallback){
	
	var params = getParamsForAllFlights(req);
	if (_mock) {
		var mockFunc = include(PATH.PATH.API_MOCK);
		var data = mockFunc.mockFunction(_mockConfigs.EXPEDIA_FLIGHT_ALL);
		flightSuccessCallback(data);
		return;
	}
	apiHttp.httpRequest(
	_apiConfigs.Expedia_API_DOMAIN_URL ,
	_apiConfigs.TravPlan_FlightSearch_Path_URL,
	'GET',
	params,
	null,
	flightSuccessCallback
	);
};

//Hotel Search 

// to be written later
var getParamsForAllHotels = function(req) {
	var params = {};
	params.start  = req.query.start;
	params.To = req.query.end; 
	return params;
};

exports.getAllHotels = function(req, hotelSuccessCallBack) {
	var params = getParamsForAllHotels(req);
	if (_mock) {
		var mockFunc = include(PATH.PATH.API_MOCK);
		var data = mockFunc.mockFunction(_mockConfigs.EXPEDIA_HOTEL);
		hotelSuccessCallBack(data);
		return;
	}
};