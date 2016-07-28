'use strict';

app.controller('cetvrtakCtrl', function ($scope, localStorageService) {

    $scope.initCet = function () {
        $scope.newTodo = {};
        $scope.cetvrtak = [];

        if (!localStorageService.get("cetvrtakList")) {
            $scope.cetvrtak = [
                { title: "Kafa", isDone:false, number: "1"},
                { title: "Narandža", isDone: false, number: "2"},
                { title: "Dvopek", isDone: false, number: "3"},

                { title: "Sir (125gr)", isDone: false, number: "4"},
                { title: "Paradajz", isDone: false, number: "5"},
                { title: "Dvopek", isDone: false, number: "6"},

                { title: "Mljeveno meso (125gr)", isDone: false, number: "7"},
                { title: "Paradajz", isDone: false, number: "8"},
                { title: "Paradajz", isDone: false, number: "9"},
                { title: "Narandža", isDone: false, number: "10"},
                { title: "Dvopek", isDone: false, number: "11"}
            ];
        }else{
            $scope.cetvrtak = localStorageService.get("cetvrtakList");
        }
    };

    $scope.markAllDone = function () {
        $scope.cetvrtak.forEach(function (todo) {
            todo.isDone = true;
        });
    };

    $scope.uncheckAllDone = function () {
        $scope.cetvrtak.forEach(function (todo) {
            todo.isDone = false;
        });
    };

    $scope.doneCount = function () {
        var todoDone = 0;
        $scope.cetvrtak.forEach(function (todo) {
            if (todo.isDone === true) {
                todoDone += 1;
            }
        });
        return todoDone;
    };

    $scope.clearCompleted = function () {
        var kill = [];
        for (var i = 0; i < $scope.cetvrtak.length; i++) {
            if ($scope.cetvrtak[i].isDone)
                kill.push(i);
        }

        for (var i = 0; i < kill.length; i++)
            $scope.cetvrtak.splice(kill[i] - i, 1);
    };

    $scope.almostOneNotDone = function () {
        var todoDone = $scope.doneCount();
        if (todoDone < $scope.cetvrtak.length) {
            return true;
        } else
            return false;
    };

    $scope.$watch("cetvrtak",function  (newVal,oldVal) {
        if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
            localStorageService.add("cetvrtakList",angular.toJson(newVal));
        }
    },true);

});