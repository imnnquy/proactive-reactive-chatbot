(function() {
    'use strict';

    angular
        .module('zeroBankApp')
        .directive('zeroFooter', zeroFooter);

    /** @ngInject */
    function zeroFooter() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/zero-footer/zerofooter.html',
            scope: {
                creationDate: '='
            },
            controller: ZeroFooterController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function ZeroFooterController() {}
    }

})();