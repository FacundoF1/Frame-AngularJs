/**
 * 
 * Aporte - @autor: Facundo Ferrari .- { http://facundoferrari.ml }
 * Fecha Octubre 2017 .-
 * 
 * Controller appController / Controlador App : Info, Add, Edit, Delete
 *
 */

app.controller("appController", function appController($scope, $http){
	
    /* Obtenemos los datos por http e inicializamos el $scope 
    según tabla correspondiente para su manipulación.-*/
    
	$http.get('models/datos.json')
         .success(function (data) {
             $scope.usuarios = data.usuarios;
             $scope.favoritos = data.favoritos;
             $scope.usuariosPagos = data.usuariosPagos;
             $scope.Pagos = data.Pagos;
         })
         .error(function (data, status, headers, config) {
             //  Do some error handling here
    });
	
})
