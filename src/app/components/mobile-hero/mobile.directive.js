(function() {
    'use strict';

    angular
        .module('zeroBankApp')
        .directive('mobileHero', mobileHero);

    /** @ngInject */
    function mobileHero() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/mobile-hero/mobile.html',
            scope: {
                creationDate: '=',
                objectContainer: '='
            },
            /** @ngInject */
            link: function($scope) {
                $scope.clickShowMenu = function(){
                    $scope.objectContainer.showMenu = true;
                }
            }
        };

        return directive;
        
    }

})();