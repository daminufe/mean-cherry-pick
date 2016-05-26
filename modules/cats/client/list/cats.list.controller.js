(function () {
    'use strict';

    angular
        .module('cats')
        .controller('CatsListController', CatsListController);

    CatsListController.$inject = ['cats'];

    function CatsListController(cats) {
        var vm = this;

        vm.cats = cats;
    }
}());
