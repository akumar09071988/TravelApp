function TravelFlight(dataSrc) {
	this.dataSrc = dataSrc;
};


// utility functions start

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

var convertEpochSecsToDate = function(epochSecs){
	var tempDate = new Date(0);
	tempDate.setUTCSeconds(epochSecs);
	return tempDate;
}


// utility funcs end

TravelFlight.prototype.convertExpediaData = function (id, data) {

	this.id = id;
    this.travelDuration = parseTravelTime(data.travelDuration);
	this.totalPrice = data.offerData.totalFarePrice.amount;
	this.numStops = data.segments.length -1;
	this.departTime = convertEpochSecsToDate(data.segments[0].departureTimeEpochSeconds+data.segments[0].departureTimeZoneOffsetSeconds); ;
	this.departTimeRaw = data.segments[0].departureTimeRaw;
	var segLength = data.segments.length -1;
	this.arrivalTime = convertEpochSecsToDate
	                   (data.segments[segLength].arrivalTimeEpochSeconds+data.segments[segLength].arrivalTimeZoneOffsetSeconds);
	this.arrivalTimeRaw = data.segments[segLength].arrivalTimeRaw;
	return this;
}

module.exports = TravelFlight;
