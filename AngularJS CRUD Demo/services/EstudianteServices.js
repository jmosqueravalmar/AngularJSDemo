app.service('EstudianteServices', ['$rootScope', function ($rootScope) {

    this.getEstudiantes = function () {
       this.estudiantesDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "http://localhost:43173/api/Estudiante",
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
                        fechaNacimiento: { type: "date" }
                    }
                }
            },
            success: function (e) {
                // handle error
                console.log("Status: " + e.status + "; Error message: " + e.errorThrown + "dataSource: " + estudiantesDataSource);
            },
            error: function (e) {
                // handle error
                console.log("Status: " + e.status + "; Error message: " + e.errorThrown + "dataSource: " + estudiantesDataSource);
            }
        });

    };

}]);