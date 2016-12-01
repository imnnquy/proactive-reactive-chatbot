(function() {
    'use strict';

    angular
        .module('zeroBankApp')
        .directive('firstSteps', firstSteps);

    /** @ngInject */
    function firstSteps() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/firststeps/firststeps.html',
            scope: {
                creationDate: '='
            },
            controller: FirstStepsController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function FirstStepsController() {}
        
    }

})();