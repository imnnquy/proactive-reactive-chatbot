(function() {
    'use strict';

    angular
        .module('zeroBankApp')
        .directive('features', features);

    /** @ngInject */
    function features() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/features/features.html',
            scope: {
                creationDate: '='
            },
            controller: FeaturesController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function FeaturesController() {}
        
    }

})();