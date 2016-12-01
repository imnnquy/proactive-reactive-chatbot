(function() {
    'use strict';

    angular
        .module('zeroBankApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope) {
    	$scope.objectContainer = {};
    	$scope.objectContainer.showMenu = false;
    }
})();