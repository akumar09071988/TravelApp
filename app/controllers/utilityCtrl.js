
/*var readFileAsync = function(fileName){
		var fs = require("fs");
		fs.readFile(fileName, function (err, data) {
		if (err) {
		   return console.error(err);
		}
		console.log("Asynchronous read: " + data.toString());
		configFileSuccessCallBack(data);
   });
};

var configFileSuccessCallBack = function(data){
	console.log(typeof data);
	exports.TravPlan_ThingsToDo.publicKey = data.TravPlan_ThingsToDo.publicKey;
}

exports.readConfigFile = function(){
	var config = require(__base +'config/config.json');
	console.log(config);
	console.log(config.TravPlan_ThingsToDo.publicKey);
};
*/