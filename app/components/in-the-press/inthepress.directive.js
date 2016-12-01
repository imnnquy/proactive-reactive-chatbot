(function() {
    'use strict';

    angular
        .module('zeroBankApp')
        .directive('inThePress', inThePress);

    /** @ngInject */
    function inThePress() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/in-the-press/inthepress.html',
            scope: {
                creationDate: '='
            },
            controller: InThePressController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function InThePressController() {}
        
    }

})();