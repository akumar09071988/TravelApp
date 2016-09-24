// get all public transit data
var PATH = include('pathConfig.js') ;

var googleHttp = include(PATH.PATH.GOOGLE_HTTP_CTRL);

exports.getAllPublicTransit = function(req,res){
	
	var publicTransitSuccessCallBack = function (data) {
		
		res.json(data);
	}
	googleHttp.getPublicTransitWays(req,publicTransitSuccessCallBack);
	
}; 