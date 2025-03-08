document.addEventListener("DOMContentLoaded", function () {
    const grupoSelect = document.getElementById("grupoSelect");
    const grupoInfo = document.getElementById("grupoInfo");
    const grupoNombre = document.getElementById("grupoNombre");
    const grupoDescripcion = document.getElementById("grupoDescripcion");
    const grupoDirector = document.getElementById("grupoDirector");

    const grupos = {
        comba: {
            nombre: "COMBA I+D",
            descripcion: "Investigación en computación y matemática aplicada.",
            director: "Dr. Juan Pérez"
        },
        gieiam: {
            nombre: "GIEIAM",
            descripcion: "Investigación en ingeniería aplicada y modelado.",
            director: "Dra. Ana López"
        }
    };

    grupoSelect.addEventListener("change", function () {
        const seleccion = grupoSelect.value;
        if (seleccion) {
            grupoNombre.textContent = grupos[seleccion].nombre;
            grupoDescripcion.textContent = grupos[seleccion].descripcion;
            grupoDirector.textContent = grupos[seleccion].director;
            grupoInfo.classList.remove("d-none");
        } else {
            grupoInfo.classList.add("d-none");
        }
    });

    // Registrar docente
    document.getElementById("formDocente").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Docente registrado con éxito");
        this.reset();
    });

    // Vincular estudiante a semillero
    document.getElementById("formEstudiante").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Estudiante vinculado al semillero con éxito");
        this.reset();
    });

    // Agregar actividad
    document.getElementById("formActividad").addEventListener("submit", function (event) {
        event.preventDefault();
        const actividadNombre = document.getElementById("actividadNombre").value;
        const actividadFecha = document.getElementById("actividadFecha").value;
        const actividadCupo = document.getElementById("actividadCupo").value;
        const actividadResumen = document.getElementById("actividadResumen").value;

        const nuevaActividad = document.createElement("li");
        nuevaActividad.classList.add("list-group-item");
        nuevaActividad.textContent = `${actividadNombre} - ${actividadFecha} (Cupo: ${actividadCupo})`;

        document.getElementById("listaActividades").appendChild(nuevaActividad);
        this.reset();
    });
});
