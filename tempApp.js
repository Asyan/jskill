angular.module('myApp', [])
.controller('myCtrl', function($scope, $http) {
  $scope.cityName = '';
  $scope.getCity = function(link) {
    if (link == '') 
      alert("Enter a city name");
    else {
      $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + link + '&APPID=8b60be7cf93c48694f9442e0b45f539c&units=metric')
      .then(function(response) {
        $scope.weather = response.data;  
      })
    };
  }
});

myCtrl.$inject = ['$scope', '$http'];
