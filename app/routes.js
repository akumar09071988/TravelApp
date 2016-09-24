var PATH = include('pathConfig.js') ;
var expediaController = include(PATH.PATH.EXPEDIA_LOGIC_CTRL);
var googleTransitController = include(PATH.PATH.GOOGLE_TRANSIT_LOGIC_CTRL);

module.exports = function (app) {

	app.route('/travPlan/expedia/poi')
	.get(expediaController.getPOIList);

	app.route('/travPlan/expedia/flights/all')
	.get(expediaController.getAllFlights);
	
    app.route('/travPlan/transit/public/all')
	.get(googleTransitController.getAllPublicTransit);
	
    app.route('/travelList')
    .get(expediaController.getDummyData);	

    app.route('/travPlan/expedia/hotels/all')
	.get(expediaController.getHotelsAll);

};