/**
 * 
 * Aporte - @autor: Facundo Ferrari .- { http://facundoferrari.ml }
 * Fecha Octubre 2017 .-
 * 
 * Controller App Router / Controlador App
 *
 */

/* MODULO app */
var app = angular.module("app", []);

/* RUTA de API */
app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "views/index.html"
	})

	/*** MODULO USUARIO ***/
	.when('/user/info/:id', {
     templateUrl : "views/modulos/user/info.html",
     controller : "infoController"
    })
	.when("/user/add", {
		title: 'Añadir usuario',
		templateUrl : "views/modulos/user/add.html",
		controller : "addController"
	})
	.when("/user/edit/:id", {
		title: 'Editar usuario',
		templateUrl : "views/modulos/user/edit.html",
		controller : "editController"
	})
 	.when("/user/remove/:id", {
 		title: 'Eliminar usuario',
 		templateUrl : "views/modulos/user/remove.html",
 		controller : "removeController"
 	})

 	
 	/*** MODULO FAVORITOS ***/
	.when('/favourite/info/:id', {
     templateUrl : "views/modulos/favourite/info.html",
     controller : "infoFavouriteController"
    })
	.when("/favourite/add/:id", {
		title: 'Añadir favorito',
		templateUrl : "views/modulos/favourite/add.html",
		controller : "addFavouriteController"
	})
	.when("/favourite/edit/:id", {
		title: 'Editar favoritos',
		templateUrl : "views/modulos/favourite/edit.html",
		controller : "editFavouriteController"
	})
 	.when("/favourite/remove/:id", {
 		title: 'Eliminar favorito',
 		templateUrl : "views/modulos/favourite/remove.html",
 		controller : "removeFavouriteController"
 	})


 	/*** MODULO PAGOS ***/
	.when('/payment/info/:id', {
     templateUrl : "views/modulos/payment/info.html",
     controller : "infoPayController"
    })
	.when("/payment/add/:id", {
		title: 'Añadir pago',
		templateUrl : "views/modulos/payment/add.html",
		controller : "addPayController"
	})
	.when("/payment/edit/:id", {
		title: 'Editar pago',
		templateUrl : "views/modulos/payment/edit.html",
		controller : "editPayController"
	})
 	.when("/payment/remove/:id", {
 		title: 'Eliminar pago',
 		templateUrl : "views/modulos/payment/remove.html",
 		controller : "removePayController"
 	})
 	/* END MODULOS */

 	.otherwise({ redirectTo : "/"})
})
