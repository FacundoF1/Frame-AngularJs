# EJERCICIO FRAMEWORK ANGULARJS

	- Ejercicio creado para crear, leer, eliminar y editar datos en tablas 
	estaticas formato json interfaz de usuario.  	 

# Herramientas

	- Angular Js v1.0.7
	- Bootstrap v3.1.5
	- jQuery v3.2.1
	- Font Awesome 4.3.0
	- Sweetalert
	- html5 css3
	- Progressive Web Apps


## Información

	- @author: Facundo Ferrari.
	- @date: 30-10-2017.

## Sitios

	- Ejemplo corriendo en http://facundoferrari.ml/FrameAngularJs/
	- Descargar el proyecto de git: https://github.com/FacundoF1/Frame-AngularJs.git

	* Web: http://facundoferrari.ml
	* LinkedIn: https://www.linkedin.com/in/facundo-ferrari-543a0810a/
	* GitHub: https://github.com/FacundoF1/

### Introduction

	- Proyecto: Sitio autorelacional según identificador entre tablas. 
	Crear leer eliminar y editar datos dentro del proyecto.
	
	- Requisitos:

		* No cargar un registro a las tablas con datos vacíos, usuarios favoritos o pagos.
		* El campo edad de usuarios, deberá ser mayor a 18.
		* No se podrá crear registros muertos id inexistentes de los usuarios en tabla Favoritos.
		* No se podrá crear registros muertos id inexistentes de los usuarios en tabla UsuariosPagos.
		* El importe de los pagos deberá ser mayor a 0.

	- Estructura de datos: interfaz de usuario.

		* Se adjunta archivo del diseño de diagrama UML 
		-> 'diagramaFrameworkUML.dia / diagramaFrameworkUML.png'.- 

	- Arbol:

		¬ #/ GeoPagos-
				- controllers:
					[
						favController.js,
						payController.js,
						userController.js
						]
				- js:
					[
						angular.js,
						app.js,
						controller.js
						]
				- models:
					[
						datos.json
						]
				- scripts:
					[
						app.js
						]
				- views:
					[
						- css { },
						- modulos:
							[
								-favourite { },
								-payment { },
								-user { },
								index.html
							]
						index.html
						manifest.json
						service-worker.js
						]
				README.md,
				diagramaFrameworkUML.dia /# ¬




