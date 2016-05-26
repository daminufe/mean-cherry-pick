(function () {
    'use strict';

    angular
        .module('cats')
        .run(menuConfig);

    menuConfig.$inject = ['menuService'];

    function menuConfig(menuService) {
        menuService.addMenuItem('topbar', {
            title: 'Cats',
            state: 'cats',
            type: 'dropdown',
            roles: ['user']
        });

        // menuService.addSubMenuItem('topbar', 'cats', {
        //     title: 'List Cats',
        //     state: 'cats.list'
        // });

        menuService.addSubMenuItem('topbar', 'cats', {
            title: 'Create cat',
            state: 'cats.create',
            roles: ['user']
        });
    }
}());
