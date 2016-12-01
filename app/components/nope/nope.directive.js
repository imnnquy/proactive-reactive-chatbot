(function() {
    'use strict';

    angular
        .module('zeroBankApp')
        .directive('nope', nope);

    /** @ngInject */
    function nope() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/nope/nope.html',
            scope: {
                creationDate: '='
            },
            controller: NopeController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NopeController() {}
        
    }

})();