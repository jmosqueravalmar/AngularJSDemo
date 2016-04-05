app.controller('CursoController', ['$scope', 'CursoServices', 'templates', function ($scope, CursoServices, templates) {
    $scope.CursoServices = CursoServices;
    $scope.CursoServices.getCursos();
    $scope.templates = templates;

    $scope.filterFeatured = function () {
        $scope.CursoServices.cursosDataSource.group([]);
        // $scope.clienteService.clientesDataSource.filter({ field: "ClienteID", operator: "eq", value: true });
    }
}]);