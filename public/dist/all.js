angular.module("myApp",["app.routes","mainCtrl"]),angular.module("app.routes",["ngRoute"]).config(function(e,l){e.when("/",{templateUrl:"app/views/pages/home.html",controller:"mainController",controllerAs:"main"}),l.html5Mode(!0)}),angular.module("mainCtrl",[]).controller("mainController",function(){var e=this;e.message="this is message"});