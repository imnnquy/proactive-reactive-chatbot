(function() {
    'use strict';

    angular
        .module('zeroBankApp')
        .directive('investors', investors);

    /** @ngInject */
    function investors() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/investors/investors.html',
            scope: {
                creationDate: '='
            },
            controller: InvestorsController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function InvestorsController() {}
        
    }

})();