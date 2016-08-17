var PATH = include('pathConfig.js');

var expediaHttp = include(PATH.PATH.EXPEDIA_HTTP_CTRL);

// Places of interest related functions begin       loc=Boston&startDate=2016-08-08&endDate=2016-08-18

// get places of interest for a given  location , startDate, endDate
exports.getPOIList = function (req, res) {

	var placesOfInterestSuccessCallBack = function (data) {
		res.json(data);
	};

	expediaHttp.getPOIList(req, placesOfInterestSuccessCallBack);

};

// Flight search related function begins   departureDate=2016-08-08&fromAirport=MSN&toAirport=LAX

var parseTravelTime = function(travelTime){
	travelTime = travelTime.substring(2);
	var returnTravTime = '' ;
	if(travelTime.indexOf('H') != -1 || travelTime.indexOf('h') != -1){
		var hourIndex = travelTime.indexOf('H') != -1 ? travelTime.indexOf('H') : travelTime.indexOf('h') ; 
		returnTravTime = travelTime.substring(0,hourIndex+1) + " " + travelTime.substring(hourIndex+1) ;
	} else {
	   returnTravTime = travelTime ;
	}
	 
	return returnTravTime;
};

var processAPIResponse = function (data) {
	//var parsedObj = JSON.parse(json);
	console.log(data.legs.length);
	var resultArr = [];
	for(var i =0; i< data.legs.length;i++){
		var travelObj = {};
		travelObj.travelDuration = parseTravelTime(data.legs[i].travelDuration);
		travelObj.id = data.legs[i].legId;
		resultArr.push(travelObj);
	}
	return resultArr;
};

exports.getAllFlights = function (req, res) {
	var getAllFlightsSuccessCallBack = function (data) {
		res.json(processAPIResponse(data));
		//res.json(data);
	}

	expediaHttp.getAllFlights(req, getAllFlightsSuccessCallBack);
};
