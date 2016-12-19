angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.creandoHabitos', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/creandoHabitos.html',
        controller: 'creandoHabitosCtrl'
      }
    }
  })

  .state('tabsController.agregarHabitos', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/agregarHabitos.html',
        controller: 'agregarHabitosCtrl'
      }
    }
  })

  .state('tabsController.pregreso', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/pregreso.html',
        controller: 'pregresoCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('ingresar', {
    url: '/page6',
    templateUrl: 'templates/ingresar.html',
    controller: 'ingresarCtrl'
  })

  .state('registro', {
    url: '/page7',
    templateUrl: 'templates/registro.html',
    controller: 'registroCtrl'
  })

  .state('contactos', {
    url: '/page8',
    templateUrl: 'templates/contactos.html',
    controller: 'contactosCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});