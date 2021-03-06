var app = angular.module('meanApp',[]);

app.controller('meanCtrl',function($scope,$http){
	//console.log("Hello from angular controller!");

var refresh = function(){
$http.get('/travelList').success(function(response){
		console.log("I got the data I requested says controller");
		$scope.travelList = response;		
	});
};

// $http.get('/contactList').success(function(response){
// 		console.log("I got the http request says controller");
// 		var response = { name: 'VB BLACK BOOK', email: 'mdas@buf', num: 11111111 }
// 		$scope.contactList = response;
// 	});

refresh();
$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/contactList',$scope.contact).success(function(response){
			console.log(response);
			refresh();
		});		
	};

$scope.removeContact = function(id){
	console.log(id);
	$http.delete('/contactList/'+id).success(function(response){
		refresh();
	});
}

$scope.editContact = function(id){
	console.log(id);
	$http.get('/contactList/'+id).success(function(response){
		$scope.contact = response;
	});
}

$scope.updateContact = function(){
	console.log($scope.contact._id);
	$http.put('/contactList/'+$scope.contact._id, $scope.contact).success(function(response){
		refresh();
	});;

};

$scope.clearContact = function(){
	$scope.contact = "";
}
	
});

