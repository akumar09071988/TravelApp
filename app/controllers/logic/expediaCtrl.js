var PATH = include('pathConfig.js');

var expediaHttp = include(PATH.PATH.EXPEDIA_HTTP_CTRL);
var travelFlightModel = include(PATH.PATH.TRAVEL_FLIGHT_MODEL);
// Places of interest related functions begin       loc=Boston&startDate=2016-08-08&endDate=2016-08-18

// get places of interest for a given  location , startDate, endDate
exports.getPOIList = function (req, res) {

	var placesOfInterestSuccessCallBack = function (data) {
		res.json(data);
	};

	expediaHttp.getPOIList(req, placesOfInterestSuccessCallBack);

};

// Flight search related function begins   departureDate=2016-08-08&fromAirport=MSN&toAirport=LAX


var processAPIResponse = function (data) {
	//var parsedObj = JSON.parse(json);
	//console.log(data.legs.length);
	var resultObj = {};
	var resultArr = [] ;
	for(var i =0; i< data.legs.length;i++){
		var id = data.legs[i].legId ; 
		resultObj[id] = data.legs[i];
		
	}
	
	for(var i =0; i< data.offers.length;i++){
		var offersObj = data.offers[i] ;
		var idArray = data.offers[i].legIds;
		for(var k =0;k<idArray.length;k++){
			var id = idArray[k];
			if(resultObj.hasOwnProperty(id)){
				var travelObj =  resultObj[id];
			    travelObj.offerData = offersObj;
				
				var travFlightModel = new travelFlightModel("Expedia");
				travFlightModel.convertExpediaData(id,travelObj);
				resultArr.push(travFlightModel);
			}
		}
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
