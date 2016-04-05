var app = angular.module('DemoHybridApp', ['kendo.directives'])
.factory('templates', function () {
    return {
        estudianteTemplate: $("#estudianteTemplate").html(),
        cursoTemplate: $("#cursoTemplate").html()
    };
});


