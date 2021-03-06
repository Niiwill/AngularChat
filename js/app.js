angular.module('app',['ui.router'])

.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider) {
	
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('login',{
  	url:'/',
  	templateUrl:'templates/login.html',
  	controller: 'homeCtrl'
  		
  	
  })
  .state('home', {


  	url:'/home',
  	templateUrl:'templates/home.html',
  	controller:'homeCtrl',
  	resolve:{
  		    check:  function($location,$rootScope){
            if(!$rootScope.acces){
            	$location.path('/');
            }
  	}
  }


  })
      .state('about', {
  	url:'/about',
  	templateUrl:'templates/about.html',
  	controller:'aboutCtrl'


  })

}]).factory('login', ['$scope', function(){

}]);

