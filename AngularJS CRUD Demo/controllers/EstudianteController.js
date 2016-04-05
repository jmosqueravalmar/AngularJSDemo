app.controller('EstudianteController', ['$scope', 'EstudianteServices', 'templates',
    function ($scope, EstudianteServices, templates) {
    $scope.EstudianteServices = EstudianteServices;
    $scope.EstudianteServices.getEstudiantes();
    $scope.templates = templates;

    $scope.filterFeatured = function () {
        $scope.EstudianteServices.estudiantesDataSource.group([]);
    }
}]);