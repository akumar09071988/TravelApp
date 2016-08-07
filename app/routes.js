
    var expediaController = require('./controllers/expediaCtrl.js');
	
    module.exports = function(app) {

		
        app.route('/travPlan/expedia/poi')
		.get(expediaController.getPOIList);

    };