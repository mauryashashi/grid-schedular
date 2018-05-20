"use strict";
 angular.module("gridProject").controller('gridController',["$compile",
		function ($compile) {
				
                $scope.gridData = {};

                $scope.gridData.rows = [];
                $scope.gridData.columns = [];
                
                var initialize = function () {
					$scope.gridData.rows=["row1","row2","row3","row4","row5","row6","row7"];
					$scope.gridData.columns=["week1","week2","week3","week4","week5"];
					getGridData();
					insertUI();
                }


                var getGridData = function () {
                    $scope.gridData.Data=[[["row1week1item1","row1week1item2"],["row1week2item1","row1week2item2"],["row1week3item1","row1week3item2"],["row1week4item1","row1week4item2"],["row1week5item1","row1week5item2"]],
	                [["row2week1item1","row2week1item2"],["row2week2item1","row2week2item2"],["row2week3item1","row2week3item2"],["row2week4item1","row2week4item2"],["row2week5item1","row2week5item2"]],
	                [["row3week1item1","row3week1item2"],["row3week2item1","row3week2item2"],["row3week3item1","row3week3item2"],["row3week4item1","row3week4item2"],["row3week5item1","row3week5item2"]]];
                }


                var insertUI = function () {
                    var referralDivFactory = $compile('<div class="row" ng-repeat="row in gridData.rows track by $index">' +
                        '<div class="col-md-1">&nbsp;</div>' +
                        '<div class="col-md-2" ng-repeat="column in gridData.columns track by $index">' +
                        '<grid-cell-generator row="$parent.$index" column="$index" data="gridData.Data" /></div>' +
                        '<div class="col-md-1">&nbsp;</div>' +
                        '</div>');
                    var referralDiv = referralDivFactory($scope);
                    var containerDiv = document.getElementById('gridContainer');
                    containerDiv.innerHTML = "";
                    angular.element(containerDiv).append(referralDiv);
                }                

                $scope.$on("itemSelectting", function (event, data) {
                    $scope.selectedItems = angular.copy(data);
                    event.preventDefault();
                    $scope.$broadcast("itemSelected", data);
                    
                });

                $scope.previous = function () {
                    $scope.selectedItems = undefined;
                    getGridData();
					insertUI();
                }

                $scope.next= function () {
                    $scope.selectedItems = undefined;
                    getGridData();
					insertUI();
                }
                initialize();

            }]);
