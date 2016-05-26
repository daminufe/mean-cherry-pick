(function () {
    'use strict';
    const MODULE_PATH = 'modules/cats/client';

    angular
        .module('cats.routes')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        $stateProvider
            .state('cats', {
                abstract: true,
                url: '/cats',
                template: '<ui-view />'
            })

            .state('cats.list', {
                url: '',
                templateUrl: `${MODULE_PATH}/list/cat.client.list.html`,
                controller: 'CatsListController',
                controllerAs: 'catsListCtrl',
                resolve: {
                    cats: ['CatsService', function (CatsService) {
                        return CatsService.query();
                    }]
                }
            })

            .state('cats.create', {
                url: '/create',
                templateUrl: `${MODULE_PATH}/form/cat.client.form.html`,
                controller: 'CatsController',
                controllerAs: 'catCtrl',
                resolve: {
                    cat: ['CatsService', function (CatsService) {
                        return new CatsService();
                    }]
                },
                data: {
                    roles: ['user'],
                    pageTitle: 'Create cat'
                }
            })

            // .state('cats.cat', {
            //     url: '/:catId',
            //     abstract: true,
            //     template: `<ui-view />`,
            //     resolve: {
            //         cat: ['CatsService', '$stateParams', function (CatsService, $stateParams) {
            //             return CatsService.get({ catId: $stateParams.catId });
            //         }]
            //     }
            // })
            //
            // .state('cats.cat.edit', {
            //     url: '',
            //     templateUrl: `${MODULE_PATH}/form/cat.client.form.html`,
            //     controller: 'CatsController',
            //     controllerAs: 'catCtrl',
            //     data: {
            //         roles: ['user'],
            //         pageTitle: 'Edit cat'
            //     }
            // })
            ;
    }
}());
