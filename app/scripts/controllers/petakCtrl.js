'use strict';

app.controller('petakCtrl', function ($scope, localStorageService) {

    $scope.initPet = function () {
        $scope.newTodo = {};
        $scope.petak = [];

        if (!localStorageService.get("petakList")) {
            $scope.petak = [
                { title: "Kafa", isDone:false, number: "1"},
                { title: "Narandža", isDone: false, number: "2"},
                { title: "Dvopek", isDone: false, number: "3"},

                { title: "Kuhano meso (200gr)", isDone: false, number: "4"},
                { title: "Paradajz", isDone: false, number: "5"},
                { title: "Dvopek", isDone: false, number: "6"},

                { title: "Povrće (500gr)", isDone: false, number: "7"},
                { title: "Jaje", isDone: false, number: "8"},
                { title: "Paradajz", isDone: false, number: "9"}
            ];
        }else{
            $scope.petak = localStorageService.get("petakList");
        }
    };

    $scope.markAllDone = function () {
        $scope.petak.forEach(function (todo) {
            todo.isDone = true;
        });
    };

    $scope.uncheckAllDone = function () {
        $scope.petak.forEach(function (todo) {
            todo.isDone = false;
        });
    };

    $scope.doneCount = function () {
        var todoDone = 0;
        $scope.petak.forEach(function (todo) {
            if (todo.isDone === true) {
                todoDone += 1;
            }
        });
        return todoDone;
    };

    $scope.clearCompleted = function () {
        var kill = [];
        for (var i = 0; i < $scope.petak.length; i++) {
            if ($scope.petak[i].isDone)
                kill.push(i);
        }

        for (var i = 0; i < kill.length; i++)
            $scope.petak.splice(kill[i] - i, 1);
    };

    $scope.almostOneNotDone = function () {
        var todoDone = $scope.doneCount();
        if (todoDone < $scope.petak.length) {
            return true;
        } else
            return false;
    };

    $scope.$watch("petak",function  (newVal,oldVal) {
        if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
            localStorageService.add("petakList",angular.toJson(newVal));
        }
    },true);

});