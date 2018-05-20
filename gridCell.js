"use strict";

angular.module("gridProject").directive('gridCell', function () {

        var gridCellDir = {};

        gridCellDir.restrict = 'E';
        gridCellDir.transclude = false;
        gridCellDir.scope = { items: "=" };
        gridCellDir.template = '<div class="panel" ng-class="{\'panel-primary\': itemSelected, \'panel-default\': !itemSelected}" >' +
            '<div ng-if="items" class="panel-heading" ng-click="slotSelected();">' +
            '<ul class="list-group">' +
            '<li class="list-group-item">{{items[0]}}</li>' +
            '<li class="list-group-item">{{items[1]}}</li>' +
            '</ul>' +
            '</div>' +
            '</div>';

        gridCellDir.link = function (scope, element, attributes) {
            scope.itemSelected = false;
			
            scope.slotSelected = function () {
                scope.$emit("itemSelected", scope.items);
            }

            scope.$on("itemSelected", function (event, items) {
                if (items == scope.items) {
                    scope.itemSelected = true;
                } else {
                    scope.itemSelected = false;
                }
                event.preventDefault();
            });

        };

        return gridCellDir;

    });
