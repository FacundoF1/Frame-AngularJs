/**
 * 
 * Aport - @author / Aporte - @autor: Facundo Ferrari .- { http://facundoferrari.ml }
 * Date October 2017 / Fecha Octubre 2017 .-
 * 
 * Controller Users / Controlador Usuarios : Info, Add, Edit, Delete
 *
 */

/*====================================
=            INFO USUARIO            =
====================================*/

/* Controlador de información del usuario.
 Se obtiene el id por routerparams */

app.controller("infoController", function infoController($scope,$routeParams){
	$scope.usuario = $scope.usuarios[$routeParams.id];
})

/*=====  End of INFO USUARIO  ======*/

/*==========================================
=            AÑADIR REG USUARIO            =
==========================================*/

/* Controlador de método para añadir un registro 
de usuario. Se crea el id en views y obtiene por routerparams */

app.controller("addController", function addController($scope,$location){
	$scope.textButton = "Añadir un nuevo usuario";
	$scope.usuario = {};
	$scope.newUser = function(){
		swal({
			  title: '* Confirmar *',
			  text: "Se agregará un registro!",
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
			    'Registro guardado',
			    'success',
			    $scope.usuarios.push($scope.usuario),
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
		})//end swal
	}
})

/*=====  End of AÑADIR REG USUARIO  ======*/


/*==========================================
=            EDITAR REG USUARIO            =
==========================================*/

/* Controlador de método para editar un registro 
de usuario. Se obtiene y edita por id routerparams */

app.controller("editController", function editController($scope,$routeParams,$location){
	
	$scope.textButton = "Editar usuario";
	$scope.usuario = $scope.usuarios[$routeParams.id];
	
	$scope.editUser = function(){
		swal({
			  title: '* Confirmar *',
			  text: "Se editara un registro!",
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
			    'Registro guardado',
			    'success',
			    $scope.usuarios[$routeParams.id] = $scope.usuario,
				window.location = "#/"
			  )
			}, function (dismiss) {
			  // dismiss can be 'cancel', 'overlay',
			  // 'close', and 'timer'
			  if (dismiss === 'cancel') {
			    swal(
			      'Cancelar',
			      'Cancelar acción',
			      'error',
			      window.location = "#/"
			    )
			  }
		})//end swal
	}
})

/*=====  End of EDITAR REG USUARIO  ======*/


/*=============================================
=            ELIMINAR USUARIO * ID            =
=============================================*/


/* Controlador de método para eliminar un registro 
de usuario. Se obtiene y elimina por id routerparams */

app.controller("removeController", function removeController($scope,$routeParams,$location){
	$scope.usuario = $scope.usuarios[$routeParams.id];
	$scope.removeUser = function(){

		swal({
		  title: '* Confirmar *',
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
		    $scope.usuarios.splice($routeParams.id, 1),
			window.location = "#/"
		  )
		}, function (dismiss) {
		  // dismiss can be 'cancel', 'overlay',
		  // 'close', and 'timer'
		  if (dismiss === 'cancel') {
		    swal(
		      'Cancelar',
		      'Cancelar ación',
		      'error',
		      window.location = "#/"
		    )
		  }
		})//end swal
	}
})

/*=====  End of ELIMINAR USUARIO  ======*/
