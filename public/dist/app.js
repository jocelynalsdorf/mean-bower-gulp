angular.module("myApp",["app.routes","mainCtrl"]),angular.module("app.routes",["ngRoute"]).config(["$routeProvider","$locationProvider",function(o,e){o.when("/",{templateUrl:"app/views/pages/home.html",controller:"mainController",controllerAs:"main"}),e.html5Mode(!0)}]),angular.module("mainCtrl",[]).controller("mainController",function(){var o=this;o.message="this is message"});