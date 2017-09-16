document.body.style.textAlign = 'center';

function getTemperature() {
    angular.module('myApp', [])
        .controller('myCtrl', function($scope, $http) {
            $scope.cityName = '';
            $scope.getCity = function(link) {
                if (link === '')
                    alert("Enter a city name");
                else {
                    $http.get('https://api.apixu.com/v1/current.json?key=98fe53844a024b19a7632232170705&q=' + link)
                        .then(function(response) {
                            $scope.weather = response.data;
                        })
                }
            }
        });
}
getTemperature();