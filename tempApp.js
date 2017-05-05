  let app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope, $http) {
        $http.get(link)
        .then(function(response) {
           $scope.myWelcome = response.data;
        });
    });
function getTemp() {
  let link;
  let cityName = document.getElementById('filter').value;

  switch (cityName) {
    case 'Moscow':
    link = "http://api.openweathermap.org/data/2.5/weather?q=Moscow&APPID=8b60be7cf93c48694f9442e0b45f539c&units=metric";
    break;
    case 'Washington':
    link = "http://api.openweathermap.org/data/2.5/weather?q=Washington&APPID=8b60be7cf93c48694f9442e0b45f539c&units=metric";
    break;
    case 'Tokyo':
    link = "http://api.openweathermap.org/data/2.5/weather?q=Tokyo&APPID=8b60be7cf93c48694f9442e0b45f539c&units=metric";
    break;
    case 'Sydney':
    link = "http://api.openweathermap.org/data/2.5/weather?q=Sydney&APPID=8b60be7cf93c48694f9442e0b45f539c&units=metric";
    break;
    default:
    link = "http://api.openweathermap.org/data/2.5/weather?q=Moscow&APPID=8b60be7cf93c48694f9442e0b45f539c&units=metric";
    alert( 'Enter a city from the list' );
  }
  let app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope, $http) {
        $http.get(link)
        .then(function(response) {
           $scope.myWelcome = response.data;
        });
    });
}

