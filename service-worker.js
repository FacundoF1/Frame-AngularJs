// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var CACHE_NAME = 'GeoPagos-v1';
var urlsToCache = [
  '/',
  '/index.html',
  '/scripts/app.js',
  '/models/datos.json',
  '/js/angular.js',
  '/js/app.js',
  '/controllers/userController.js',
  '/controllers/favController.js',
  '/controllers/payController.js',
  '/js/controllers.js',
  '/views/index.html',
  //users
  '/views/modulos/user/info.html',
  '/views/modulos/user/add.html',
  '/views/modulos/user/remove.html',
  '/views/modulos/user/formAddUser.html',
  '/views/modulos/user/formEditUser.html',
  //pay
  '/views/modulos/payment/info.html',
  '/views/modulos/payment/add.html',
  '/views/modulos/payment/remove.html',
  '/views/modulos/payment/formAddPay.html',
  '/views/modulos/payment/formEditPay.html',
  //fav
  '/views/modulos/favourite/info.html',
  '/views/modulos/favourite/add.html',
  '/views/modulos/favourite/remove.html',
  '/views/modulos/favourite/formAddFav.html',
  '/views/modulos/favourite/formEditFav.html',
  //styles
  '/views/css/bootstrap/dist/css/bootstrap.min.css',
  '/views/css/bootstrap/dist/css/font-awesome.min.css',
  '/views/css/bootstrap/jquery/jquery.min.js',
  '/views/css/style.css',
  '/views/css/sweetalert/sweetalert.min.css',
  '/views/css/sweetalert/sweetalert.min.js',
  '/views/css/bootstrap/dist/js/bootstrap.min.js'
];


self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );  
});

self.addEventListener('activate', function(event) {
  console.log('Finalmente Activado!');  
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== CACHE_NAME && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  /*
   * Fixes a corner case in which the app wasn't returning the latest data.
   * You can reproduce the corner case by commenting out the line below and
   * then doing the following steps: 1) load app for first time so that the
   * initial New York City data is shown 2) press the refresh button on the
   * app 3) go offline 4) reload the app. You expect to see the newer NYC
   * data, but you actually see the initial data. This happens because the
   * service worker is not yet activated. The code below essentially lets
   * you activate the service worker faster.
  */   
  return self.clients.claim();

});




