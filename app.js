/*TODO #1: Add a dependency on the router module*/
var app = angular.module('coderMdb', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/home',{
  	templateUrl:  "movieList.html",
  	controller: 'MovieListCtrl as ctrl'
  })
  .when('/movie/:movieId',{
  	templateUrl: "movieDetails.html",
  	controller: 'movieDetailsCtrl as ctrl'
  })
  .otherwise({
  	redirectTo: '/home'
  })
  /*
  TODO #2:
  Configure the router to:
    -load movieList.html and use the MovieListCtrl when the url is '/home'
    -load movieDetails.html and use the MovieDetailsCtrl when the url is '/movie/:movieId'
  For any other url redirect the user to the home page.
  */

});