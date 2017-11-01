/**
 * 
 * Aport - @author / Aporte - @autor: Facundo Ferrari .- { http://facundoferrari.ml }
 * Date October 2017 / Fecha Octubre 2017 .-
 * 
 * Controller Payments / Controlador Pagos : Info, Add, Edit, Delete
 *
 */

/*==================================
=            INFO PAGOS            =
==================================*/

/* Controlador de información de tabla
usuariosPagos.
 Se obtiene el id del usuario por routerparams 
para filtrar pagos según requisito.*/

app.controller("infoPayController", function infoController($scope,$routeParams){
	$scope.usuario = $scope.usuarios[$routeParams.id];
})

/*=====  End of INFO PAGOS  ======*/

/*========================================
=            AGREGAR REG PAGO            =
========================================*/

/* Controlador añadir registro a tabla
usuariosPagos.
 Se obtiene el id del usuario por routerparams 
y agrega registro en tabla: 
usuariosPagos y Pagos según requisitos.*/

app.controller("addPayController", function addPayController($scope,$routeParams,$location){

	$scope.usuario = $scope.usuarios[$routeParams.id];
	$scope.usuariosPago = {};
	$scope.Pago = {};
	$scope.CurrentDate = new Date();
	
	$scope.textButton = "Añadir Pago";

	$scope.newPay = function(){

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
		    'Registro guardado',
		    'success',
		    $scope.Pagos.push($scope.Pago),
			$scope.usuariosPagos.push($scope.usuariosPago),
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

/*=====  End of AGREGAR REG PAGO  ======*/

/*=======================================
=            EDITAR REG PAGO            =
=======================================*/

/* Controlador editar registro a tabla
Pagos.
 Se obtiene el id de Pagos por routerparams 
y agrega registro en tabla: Pagos según requisitos.*/

app.controller("editPayController", function editPayController($scope,$routeParams,$location){
	
    $scope.CurrentDate = new Date();
	$scope.textButton = "Editar Pago";
	$scope.Pago = $scope.Pagos[$routeParams.id];

	$scope.editPay = function(){

		swal({
		  title: '* Confirmar *',
		  text: "Se editatará un registro!",
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
		    $scope.Pagos[$routeParams.id] = $scope.Pago,
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

/*=====  End of EDITAR REG PAGO  ======*/

/*=========================================
=            ELIMINAR REG PAGO            =
=========================================*/

/* Controlador elimina registro en tabla
Pagos y usiariosPagos.
 Se obtiene el id del usuario y Pago por routerparams 
y elimina registro en tabla: 
usuariosPagos y Pagos según requisitos.*/

app.controller("removePayController", function removePayController($scope,$routeParams,$location){
	
	$scope.Pago = $scope.Pagos[$routeParams.id];
	$scope.usuariosPago = $scope.usuariosPagos[$routeParams.id];

	$scope.removePay = function(){

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
		    'Registro eliminado',
		    'success',
		    $scope.Pagos.splice($routeParams.id, 1),
			$scope.usuariosPagos.splice($routeParams.id, 1),
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

/*=====  End of ELIMINAR REG PAGO  ======*/


