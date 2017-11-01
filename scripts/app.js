(function() {
  'use strict';

  var app = {
    isLoading: true
  };

  // TODO add service worker code here
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('../service-worker.js')
             .then(function() { console.log('¡Services Workers Registrad GeoPagos!'); 
          }).catch(function(err) {
        // registration failed :(
        console.log('ServiceWorker Registracion fallo: ', err);
      });
  }
})();
