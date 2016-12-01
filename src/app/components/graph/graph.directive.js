(function() {
    'use strict';

    angular
        .module('zeroBankApp')
        .directive('graph', graph);

    /** @ngInject */
    function graph() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/graph/graph.html',
            scope: {
                creationDate: '='
            },
            controller: GraphController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function GraphController() {}
        
    }

})();