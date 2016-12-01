(function() {
    'use strict';

    angular
        .module('zeroBankApp')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();