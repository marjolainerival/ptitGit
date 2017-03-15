/**
 * Created by Massil on 15/03/2017.
 */
angular.module("app" , [])
    .service("ImageService" , function ($q) {
        this.getImage = function () {
            var defered = $q.defer();
            var promise = defered.get(apiUrl);
            return promise;
        }
    })
    .controller("ImageController" , ["$scope" , "ImageService" , function ($scope , service) {
        promise.then(function (success) {
            $scope.urlImage = success.data;
        } , function (error) {

        });
    }]);

var apiUrl = "";