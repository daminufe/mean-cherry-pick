(function () {
    'use strict';

    angular
        .module('cats')
        .controller(CatsController.name, CatsController);

    CatsController.$inject = ['$state', 'cat', 'toastr'];

    function CatsController($state, cat, toastr) {
        var vm = this;

        vm.availableColours = ['Black', 'Orange', 'Silver', 'Brown'];

        vm.cat = cat;
        vm.save = save;

        function save() {
            vm.cat.$save(successCallback, errorCallback);

            function successCallback(res) {
                $state.go('home', {
                    catId: res._id
                });
                toastr.success('Cat saved successfully', 'Meow');
            }

            function errorCallback(res) {
                vm.error = res.data.message;
                toastr.error(`Error saving cat. ${ vm.error }`, 'Gurrhr');
            }
        }
    }
}());
