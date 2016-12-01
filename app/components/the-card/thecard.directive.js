(function() {
    'use strict';

    angular
        .module('zeroBankApp')
        .directive('theCard', theCard);

    /** @ngInject */
    function theCard() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/the-card/thecard.html',
            scope: {
                creationDate: '='
            },
            controller: TheCardController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function TheCardController() {}
    }

})();