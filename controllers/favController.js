/**
 * 
 * Aport - @author / Aporte - @autor: Facundo Ferrari .- { http://facundoferrari.ml }
 * Date October 2017 / Fecha Octubre 2017 .-
 * 
 * Controller Favourite / Controlador Favoritos : Info, Add, Edit, Delete
 *
 */

/*=========================================
=            INFO REG FAVORITO            =
=========================================*/

/* Controlador de información de tabla
favoritos.
 Se obtiene el id del usuario por routerparams 
para filtrar favoritos según requisito.*/

app.controller("infoFavouriteController", function infoFavouriteController($scope,$routeParams){
	
	$scope.usuario = $scope.usuarios[$routeParams.id];

})

/*=====  End of INFO REG FAVORITO  ======*/

/*============================================
=            AGREGAR REG FAVORITO            =
============================================*/

/* Controlador añadir registro a tabla
favoritos.
 Se obtiene el id del usuario por routerparams 
y agrega registro en tabla: 
favoritos según requisitos.*/

app.controller("addFavouriteController", function addFavouriteController($scope,$routeParams,$location){
	
	$scope.usuario = $scope.usuarios[$routeParams.id];
	$scope.textButton = "Añadir un nuevo favorito";
	$scope.favorito = {};

	$scope.newFav = function(){
		swal({
			  title: '* Confirmar *',
			  text: "Se guardará un registro!",
			  type: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Si, confirmo!',
			  cancelButtonText: 'No, cancelar!',
			  confirmButtonClass: 'btn btn-success',
			  cancelButtonClass: 'btn btn-danger',
			  buttonsStyling: false
			}).then(function () {
			  swal(
			    'OK!',
			    'Registro guardado.',
			    'success',
			    $scope.favoritos.push($scope.favorito),

				window.location = "#/"
			  )
			}, function (dismiss) {
			  if (dismiss === 'cancel') {
			    swal(
			      'Cancelar',
			      'Cancelar acción',
			      'error',
			      window.location = "#/"
			    )
			  }
			})//End swal
		}
})

/*=====  End of AGREGAR REG FAVORITO  ======*/


/*===========================================
=            EDITAR REG FAVORITO            =
===========================================*/

/* Controlador editar registro a tabla
favoritos.
 Se obtiene el id de usuario por routerparams 
y edita registro en tabla: favoritos según requisitos.*/

app.controller("editFavouriteController", function editFavouriteController($scope,$routeParams,$location){
	
	$scope.textButton = "Editar favoritos";
	$scope.favorito = $scope.favoritos[$routeParams.id];

	$scope.editFav = function(){

		swal({
				  title: '*Confirmar*',
				  text: "Se editará un registro!",
				  type: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Si, confirmo!',
				  cancelButtonText: 'No, cancelar!',
				  confirmButtonClass: 'btn btn-success',
				  cancelButtonClass: 'btn btn-danger',
				  buttonsStyling: false
				}).then(function () {
				  swal(
				    'OK!',
				    'Registro guardado.',
				    'success',
				    $scope.favoritos[$routeParams.id] = $scope.favorito,
					window.location = "#/"
				  )
				}, function (dismiss) {
				  if (dismiss === 'cancel') {
				    swal(
				      'Cancelar',
				      'Cancelar acción',
				      'error',
				      window.location = "#/"
				    )
				  }
		})//End swal
	}
})

/*=====  End of EDITAR REG FAVORITO  ======*/

/*=============================================
=            ELIMINAR REG FAVORITO            =
=============================================*/

/* Controlador elimina registro en tabla
favoritos.
 Se obtiene el id del usuario por routerparams 
y elimina registro en tabla: 
favoritos según requisitos.*/

app.controller("removeFavouriteController", function removeFavouriteController($scope,$routeParams,$location){
	
	$scope.favorito = $scope.favoritos[$routeParams.id];
	
	$scope.removeFav = function(){

		swal({
		  title: '*Confirmar*',
		  text: "Se eliminará un registro!",
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Si, confirmo!',
		  cancelButtonText: 'No, cancelar!',
		  confirmButtonClass: 'btn btn-success',
		  cancelButtonClass: 'btn btn-danger',
		  buttonsStyling: false
		}).then(function () {
		  swal(
		    'OK!',
		    'Registro eliminado.',
		    'success',
		    $scope.favoritos.splice($routeParams.id, 1),
			window.location = "#/"
		  )
		}, function (dismiss) {
		  if (dismiss === 'cancel') {
		    swal(
		      'Cancelar',
		      'Cancelar acción :)',
		      'error',
		      window.location = "#/"
		    )
		  }
		})//end swal
	}
})

/*=====  End of ELIMINAR REG FAVORITO  ======*/
