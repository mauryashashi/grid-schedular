"use strict";
angular.module("gridProject").directive('gridCellGenerator',
        function () {
            var gridCellGen = {};
            gridCellGen.restrict = 'E';
            gridCellGen.transclude = false;
            gridCellGen.scope = { row: "=", column: "=", dataSource: "=data" };
            gridCellGen.template = '<grid-cell items="items" />';
            gridCellGen.link = function (scope, element, attrs) {
                var applyFilter = function () {
                    var fitem;
                    if (scope.dataSource[scope.row]) {
                        if (scope.dataSource[scope.row][scope.column]) {
                            scope.items = scope.dataSource[scope.row][scope.column];
                        }
                    }                    
                    scope.showCell = !(scope.scope.items ==undefined);                   
                }
                applyFilter();
            }
            return gridCellGen;
});
