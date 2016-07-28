'use strict';

app.controller('utorakCtrl', function ($scope, localStorageService) {

    $scope.initUto = function () {
        $scope.newTodo = {};
        $scope.utorak = [];

        if (!localStorageService.get("utorakList")) {
            $scope.utorak = [
                {title: "Kafa", isDone:false, number: "1"},
                {title: "Narandža", isDone: false, number: "2"},
                {title: "Dvopek", isDone: false, number: "3"},

                {title: "Narandža", isDone: false, number: "4"},
                {title: "Jaje", isDone: false, number: "5"},
                {title: "Pavlaka", isDone: false, number: "6"},
                {title: "Dvopek", isDone: false, number: "7"},
                {title: "Dvopek", isDone: false, number: "8"},

                {title: "Mljeveno meso (125gr)", isDone: false, number: "9"},
                {title: "Paradajz", isDone: false, number: "10"},
                {title: "Narandža", isDone: false, number: "11"},
                {title: "Dvopek", isDone: false, number: "12"},
                {title: "Čaj", isDone: false, number: "13"}
            ];
        }else{
            $scope.utorak = localStorageService.get("utorakList");
        }
    };

    $scope.markAllDone = function () {
        $scope.utorak.forEach(function (todo) {
            todo.isDone = true;
        });
    };

    $scope.uncheckAllDone = function () {
        $scope.utorak.forEach(function (todo) {
            todo.isDone = false;
        });
    };

    $scope.doneCount = function () {
        var todoDone = 0;
        $scope.utorak.forEach(function (todo) {
            if (todo.isDone === true) {
                todoDone += 1;
            }
        });
        return todoDone;
    };

    $scope.clearCompleted = function () {
        var kill = [];
        for (var i = 0; i < $scope.utorak.length; i++) {
            if ($scope.utorak[i].isDone)
                kill.push(i);
        }

        for (var i = 0; i < kill.length; i++)
            $scope.utorak.splice(kill[i] - i, 1);
    };

    $scope.almostOneNotDone = function () {
        var todoDone = $scope.doneCount();
        if (todoDone < $scope.utorak.length) {
            return true;
        } else
            return false;
    };

    $scope.$watch("utorak",function  (newVal,oldVal) {
        if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
            localStorageService.add("utorakList",angular.toJson(newVal));
        }
    },true);

});