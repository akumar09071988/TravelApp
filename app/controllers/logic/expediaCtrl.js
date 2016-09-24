var PATH = include('pathConfig.js');

var expediaHttp = include(PATH.PATH.EXPEDIA_HTTP_CTRL);
var travelFlightModel = include(PATH.PATH.TRAVEL_FLIGHT_MODEL);
var travelFlightModel = include(PATH.PATH.TRAVEL_FLIGHT_MODEL);
var accomodationModel = include(PATH.PATH.TRAVEL_ACCO_MODEL);
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

exports.getDummyData = function (req, res)  {
	console.log("I recieved a GET request");

		var travelOptionJSON = [{
		"dataSrc": "Expedia",
		"id": "0665c3777a2a5e1e9ff028976986d81f",
		"travelDuration": "5H 12M",
		"totalPrice": "287.10",
		"numStops": 1,
		"departTime": "2016-09-01T07:30:00.000Z",
		"departTimeRaw": "2016-09-01T07:30:00.000-05:00",
		"arrivalTime": "2016-09-01T13:42:00.000Z",
		"arrivalTimeRaw": "2016-09-01T13:42:00.000-04:00"
		},{
		"dataSrc": "Expedia",
		"id": "02317366bcaf7af526c93c0966d7a728",
		"travelDuration": "6H 16M",
		"totalPrice": "287.10",
		"numStops": 1,
		"departTime": "2016-09-01T15:30:00.000Z",
		"departTimeRaw": "2016-09-01T15:30:00.000-05:00",
		"arrivalTime": "2016-09-01T22:46:00.000Z",
		"arrivalTimeRaw": "2016-09-01T22:46:00.000-04:00"
	}, {
		"dataSrc": "Expedia",
		"id": "d56aded29fa70ae432de1b0532ae7c4e",
		"travelDuration": "6H 55M",
		"totalPrice": "287.10",
		"numStops": 1,
		"departTime": "2016-09-01T07:30:00.000Z",
		"departTimeRaw": "2016-09-01T07:30:00.000-05:00",
		"arrivalTime": "2016-09-01T15:25:00.000Z",
		"arrivalTimeRaw": "2016-09-01T15:25:00.000-04:00"
	}, {
		"dataSrc": "Expedia",
		"id": "993d4f4d2eb04a20774b75730669042f",
		"travelDuration": "7H 54M",
		"totalPrice": "287.10",
		"numStops": 1,
		"departTime": "2016-09-01T15:30:00.000Z",
		"departTimeRaw": "2016-09-01T15:30:00.000-05:00",
		"arrivalTime": "2016-09-02T00:24:00.000Z",
		"arrivalTimeRaw": "2016-09-02T00:24:00.000-04:00"
	}, {
		"dataSrc": "Expedia",
		"id": "0cc199abec2b6bf0a9e703d692c0abdb",
		"travelDuration": "8H ",
		"totalPrice": "287.10",
		"numStops": 1,
		"departTime": "2016-09-01T07:30:00.000Z",
		"departTimeRaw": "2016-09-01T07:30:00.000-05:00",
		"arrivalTime": "2016-09-01T16:30:00.000Z",
		"arrivalTimeRaw": "2016-09-01T16:30:00.000-04:00"
	}, {
		"dataSrc": "Expedia",
		"id": "8f8c49fef082c52dd80a1fc0f340be8f",
		"travelDuration": "4H 1M",
		"totalPrice": "288.60",
		"numStops": 1,
		"departTime": "2016-09-01T15:01:00.000Z",
		"departTimeRaw": "2016-09-01T15:01:00.000-05:00",
		"arrivalTime": "2016-09-01T20:02:00.000Z",
		"arrivalTimeRaw": "2016-09-01T20:02:00.000-04:00"
	}, {
		"dataSrc": "Expedia",
		"id": "1cc6a8718ac154f1f73366b1e9fd0bc4",
		"travelDuration": "4H 2M",
		"totalPrice": "288.60",
		"numStops": 1,
		"departTime": "2016-09-01T05:50:00.000Z",
		"departTimeRaw": "2016-09-01T05:50:00.000-05:00",
		"arrivalTime": "2016-09-01T10:52:00.000Z",
		"arrivalTimeRaw": "2016-09-01T10:52:00.000-04:00"
	}, {
		"dataSrc": "Expedia",
		"id": "24d74706c6eeb266441f027c9eef79cd",
		"travelDuration": "4H 2M",
		"totalPrice": "288.60",
		"numStops": 1,
		"departTime": "2016-09-01T13:24:00.000Z",
		"departTimeRaw": "2016-09-01T13:24:00.000-05:00",
		"arrivalTime": "2016-09-01T18:26:00.000Z",
		"arrivalTimeRaw": "2016-09-01T18:26:00.000-04:00"
	}, {
		"dataSrc": "Expedia",
		"id": "e8e5fbb3f419bd5b3de6cb1ed9197924",
		"travelDuration": "4H 7M",
		"totalPrice": "288.60",
		"numStops": 1,
		"departTime": "2016-09-01T10:05:00.000Z",
		"departTimeRaw": "2016-09-01T10:05:00.000-05:00",
		"arrivalTime": "2016-09-01T15:12:00.000Z",
		"arrivalTimeRaw": "2016-09-01T15:12:00.000-04:00"
	}, {
		"dataSrc": "Expedia",
		"id": "540d2b0d5a8ce9fcc360719ed512e9cb",
		"travelDuration": "4H 12M",
		"totalPrice": "288.60",
		"numStops": 1,
		"departTime": "2016-09-01T12:05:00.000Z",
		"departTimeRaw": "2016-09-01T12:05:00.000-05:00",
		"arrivalTime": "2016-09-01T17:17:00.000Z",
		"arrivalTimeRaw": "2016-09-01T17:17:00.000-04:00"
	}, {
		"dataSrc": "Expedia",
		"id": "cbaf1e01af758aeaf5a61221602f5c8f",
		"travelDuration": "4H 17M",
		"totalPrice": "288.60",
		"numStops": 1,
		"departTime": "2016-09-01T19:10:00.000Z",
		"departTimeRaw": "2016-09-01T19:10:00.000-05:00",
		"arrivalTime": "2016-09-02T00:27:00.000Z",
		"arrivalTimeRaw": "2016-09-02T00:27:00.000-04:00"
	}, {
		"dataSrc": "Expedia",
		"id": "a25f407d6dc1fda5165c9890214a9b1e",
		"travelDuration": "4H 18M",
		"totalPrice": "288.60",
		"numStops": 1,
		"departTime": "2016-09-01T06:35:00.000Z",
		"departTimeRaw": "2016-09-01T06:35:00.000-05:00",
		"arrivalTime": "2016-09-01T11:53:00.000Z",
		"arrivalTimeRaw": "2016-09-01T11:53:00.000-04:00"
	}, {
		"dataSrc": "Expedia",
		"id": "b82dea233e4b186230769ad2ffdb9742",
		"travelDuration": "4H 34M",
		"totalPrice": "288.60",
		"numStops": 1,
		"departTime": "2016-09-01T17:25:00.000Z",
		"departTimeRaw": "2016-09-01T17:25:00.000-05:00",
		"arrivalTime": "2016-09-01T22:59:00.000Z",
		"arrivalTimeRaw": "2016-09-01T22:59:00.000-04:00"
	}];

	
	
	res.json(travelOptionJSON);
	
};

var processHotelApiResponse = function(data) {
	var resultArr = [];
	for (var i =0;i<data.hotelList.length;i++) {
		var hotel = data.hotelList[i];
		var tempAccoObj = new accomodationModel('EXPEDIA');
		resultArr.push(tempAccoObj.convertHotelExpediaData(hotel));
	}
	
	resultArr.sort(accomodationModel.sortByTotalPrice);
	return resultArr;
};

var  isMultiple = function (req) {
	if(req.query,mutiple && req.query.mutiple === 'Y') {
		return true;
	}
	return false;
};
exports.getHotelsAll = function(req,res) {
	if (isMultiple(req)) {
		
	}
	var hotelSuccessCallBack = function(data) {
		res.json(processHotelApiResponse(data));
	}
	expediaHttp.getAllHotels(req, hotelSuccessCallBack);
};