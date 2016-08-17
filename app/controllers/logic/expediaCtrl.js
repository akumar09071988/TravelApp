var PATH = include('pathConfig.js') ;

var expediaHttp = include(PATH.PATH.EXPEDIA_HTTP_CTRL);


// Places of interest related functions begin       loc=Boston&startDate=2016-08-08&endDate=2016-08-18

// get places of interest for a given  location , startDate, endDate
exports.getPOIList = function(req,res){
	
	var placesOfInterestSuccessCallBack = function(data) {
	  res.json(data);
    };
	
	
	expediaHttp.getPOIList(req,placesOfInterestSuccessCallBack);
	
};


// Flight search related function begins   departureDate=2016-08-08&fromAirport=MSN&toAirport=LAX

var processAPIResponse = function(json){
	
};

exports.getAllFlights = function(req,res){
	var getAllFlightsSuccessCallBack = function(data){
		res.json(data);
	}
	
	expediaHttp.getAllFlights(req,getAllFlightsSuccessCallBack);
};