(function() {
    'use strict';

    angular
        .module('zeroBankApp')
        .directive('desktopHero', desktopHero);

    /** @ngInject */
    function desktopHero() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/desktop-hero/desktop.html',
            scope: {
                creationDate: '='
            },
            controller: DesktopController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function DesktopController() {}
    }

})();