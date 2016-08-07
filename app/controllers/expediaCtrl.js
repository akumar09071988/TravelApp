
var apiHttp = require('./apiHttpCtrl.js');

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
	params.apikey = 'p51QC1202PUBAASNULhQG2ukBtAe8hpd';
	return params;
}

// get places of interest for a given  location , startDate, endDate
exports.getPOIList = function(req,res){
	
	var placesOfInterestSuccessCallBack = function(data) {
	  res.json(data);
    };
	
	var params = getParamsForPOIList(req);
	apiHttp.httpRequest(
	'terminal2.expedia.com' ,
	'/x/activities/search',
	'GET',
	params,
	null,
	placesOfInterestSuccessCallBack
	);
	
};