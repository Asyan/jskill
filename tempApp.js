angular.module('myApp', [])
.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.cityName = '';
  var city;
  $scope.getCity = function(link) {
    $scope.show('http://api.openweathermap.org/data/2.5/weather?q=' + link + '&APPID=8b60be7cf93c48694f9442e0b45f539c&units=metric');
  }
    $scope.show = function(city) {
      $http.get(city)
      .then(function(response) {
        $scope.weather = response.data;  
      })
    };
}]);
