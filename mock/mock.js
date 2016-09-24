

exports.mockFunction = function(mockConstant, params){
	
	var data = require("./db/"+mockConstant+".json");
	if (mockConstant == _mockConfigs.EXPEDIA_HOTEL) {
		var key = params.dateRange
		return data.key;
	}
	return data;
};