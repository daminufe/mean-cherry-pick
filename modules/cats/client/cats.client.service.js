(function () {
    'use strict';

    angular
        .module('cats.services')
        .factory('CatsService', CatsService);

    CatsService.$inject = ['$resource'];

    function CatsService($resource) {
        return $resource('api/cats/:catId', {
            catId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
}());
