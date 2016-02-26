

angular.module('app')
.controller('homeCtrl', ['$scope','$location','$rootScope', function($scope,$location,$rootScope){

	$scope.login=function(){
       if ($scope.login.username==='admin' && $scope.login.password==='admin') {
        $location.path('/home')
      $rootScope.username=$scope.login.username;
       }else{
       	alert('no');
       }

	}
	
       
      $scope.screenheight = {
    'height': getHeight() -66 + "px"
};
$scope.menuheight = {
    'height': getHeight() + "px"
};    
      $scope.heroImage = {
    'background':"url('http://talkzar.com/asset/images/256/admin.png')",
    'background-size':'100%'
};


	  function getHeight(){
      return window.innerHeight;
	 } 

     
	 $scope.messages=[];

	 $scope.addNewMessage=function(){
	 	$rootScope.acces=true;
	  $scope.date = new Date();
      $scope.messages.push({
      	username:$rootScope.username,
      	message:$scope.newMessage,
      	date:$scope.date

      });

       

	 }


}]);