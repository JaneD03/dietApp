'use strict';

app.controller('ponedjeljakCtrl', function ($scope, localStorageService) {

    $scope.initPon = function () {
        $scope.newTodo = {};
        $scope.ponedjeljak = [];

        if (!localStorageService.get("ponedjeljakList")) {
            $scope.ponedjeljak = [
                {title: "Kafa", isDone: false, number: "1"},
                {title: "Narandža", isDone: false, number: "2"},
                {title: "Dvopek", isDone: false, number: "3"},

                {title: "Narandža", isDone: false, number: "4"},
                {title: "Jaje", isDone: false, number: "5"},
                {title: "Pavlaka", isDone: false, number: "6"},

                {title: "Paradajz", isDone: false, number: "7"},
                {title: "Paradajz", isDone: false, number: "8"},
                {title: "Jaje", isDone: false, number: "9"},
                {title: "Jaje", isDone: false, number: "10"},
                {title: "Salata 1/2", isDone: false, number: "11"},
                {title: "Dvopek", isDone: false, number: "12"},
                {title: "Dvopek", isDone: false, number: "13"}
            ];
        }else{
            $scope.ponedjeljak = localStorageService.get("ponedjeljakList");
        }
    };

    $scope.markAllDone = function () {
        $scope.ponedjeljak.forEach(function (todo) {
            todo.isDone = true;
        });
    };

    $scope.uncheckAllDone = function () {
        $scope.ponedjeljak.forEach(function (todo) {
            todo.isDone = false;
        });
    };

    $scope.doneCount = function () {
        var todoDone = 0;
        $scope.ponedjeljak.forEach(function (todo) {
            if (todo.isDone === true) {
                todoDone += 1;
            }
        });
        return todoDone;
    };

    $scope.clearCompleted = function () {
        var kill = [];
        for (var i = 0; i < $scope.ponedjeljak.length; i++) {
            if ($scope.ponedjeljak[i].isDone)
                kill.push(i);
        }

        for (var i = 0; i < kill.length; i++)
            $scope.ponedjeljak.splice(kill[i] - i, 1);
    };

    $scope.almostOneNotDone = function () {
        var todoDone = $scope.doneCount();
        if (todoDone < $scope.ponedjeljak.length) {
            return true;
        } else
            return false;
    };


    $scope.$watch("ponedjeljak",function(newVal,oldVal) {
        if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
            localStorageService.add("ponedjeljakList",angular.toJson(newVal));
        }
    },true);

});