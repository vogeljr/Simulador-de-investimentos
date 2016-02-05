angular.module('ricoAPP')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('form', {
                url: '/',
                templateUrl: '../views/step0.html',
                controller: 'formCtrl',
                controllerAs: 'vm',
                data: {}
            })
            .state('step1', {
                url: '/selecao-de-objetivo',
                templateUrl: '../views/step1.html',
                controller: 'formCtrl',
                controllerAs: 'vm',
                data: {
                    step: 1
                }
            })
            .state('step2', {
                url: '/valor-do-objetivo',
                templateUrl: '../views/step2.html',
                controller: 'formCtrl',
                controllerAs: 'vm',
                data: {
                    step: 2
                }
            })
            .state('step3', {
                url: '/duracao',
                templateUrl: '../views/step3.html',
                controller: 'formCtrl',
                controllerAs: 'vm',
                data: {
                    step: 3
                }
            })
            .state('step4', {
                url: '/resultado',
                templateUrl: '../views/step4.html',
                controller: 'formCtrl',
                controllerAs: 'vm',
                data: {
                    step: 4
                }
            });

        $urlRouterProvider.otherwise('/');
    });