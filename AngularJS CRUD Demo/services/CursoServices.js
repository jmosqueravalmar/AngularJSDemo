app.service('CursoServices', ['$rootScope', function ($rootScope) {

    this.getCursos = function () {
        this.cursosDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "http://localhost:43173/api/Curso",
                    dataType: "json"
                },
            }
            ,
            schema: {
                model: {
                    id: "id",
                    fields: {
                        id: { editable: false, nullable: true, type: "int" },
                        nombre: { type: "string" },
                        horasCredito: { type: "int" },
                    }
                }
            },
            success: function (e) {
                // handle error
                console.log("Status: " + e.status + "; Error message: " + e.errorThrown + "dataSource: " + cursosDataSource);
            },
            error: function (e) {
                // handle error
                console.log("Status: " + e.status + "; Error message: " + e.errorThrown + "dataSource: " + cursosDataSource);
            }
        });
    };

}]);