'use strict';

app.controller('srijedaCtrl', function ($scope, localStorageService) {

    $scope.initSri = function () {
        $scope.newTodo = {};
        $scope.srijeda = [];

        if (!localStorageService.get("srijedaList")) {
            $scope.srijeda = [
                { title: "Kafa", isDone:false, number: "1"},
                { title: "Narandža", isDone: false, number: "2"},
                { title: "Dvopek", isDone: false, number: "3"},

                { title: "Narandža", isDone: false, number: "4"},
                { title: "Jaje", isDone: false, number: "5"},
                { title: "Pavlaka", isDone: false, number: "6"},
                { title: "Salata 1/1", isDone: false, number: "7"},

                { title: "Mljeveno meso (125gr)", isDone: false, number: "8"},
                { title: "Narandza", isDone: false, number: "9"},
                { title: "Dvopek", isDone: false, number: "10"},
                { title: "Čaj", isDone: false, number: "11"}
            ];
        }else{
            $scope.srijeda = localStorageService.get("srijedaList");
        }
    };

    $scope.markAllDone = function () {
        $scope.srijeda.forEach(function (todo) {
            todo.isDone = true;
        });
    };

    $scope.uncheckAllDone = function () {
        $scope.srijeda.forEach(function (todo) {
            todo.isDone = false;
        });
    };

    $scope.doneCount = function () {
        var todoDone = 0;
        $scope.srijeda.forEach(function (todo) {
            if (todo.isDone === true) {
                todoDone += 1;
            }
        });
        return todoDone;
    };

    $scope.clearCompleted = function () {
        var kill = [];
        for (var i = 0; i < $scope.srijeda.length; i++) {
            if ($scope.srijeda[i].isDone)
                kill.push(i);
        }

        for (var i = 0; i < kill.length; i++)
            $scope.srijeda.splice(kill[i] - i, 1);
    };

    $scope.almostOneNotDone = function () {
        var todoDone = $scope.doneCount();
        if (todoDone < $scope.srijeda.length) {
            return true;
        } else
            return false;
    };

    $scope.$watch("srijeda",function  (newVal,oldVal) {
        if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
            localStorageService.add("srijedaList",angular.toJson(newVal));
        }
    },true);

});