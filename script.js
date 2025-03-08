document.addEventListener("DOMContentLoaded", function () {
    const selectSemillero = document.getElementById("selectSemillero");
    const formDocente = document.getElementById("formDocente");
    const formEstudiante = document.getElementById("formEstudiante");
    const formActividad = document.getElementById("formActividad");
    const infoSemillero = document.getElementById("infoSemillero");

    let semilleros = JSON.parse(localStorage.getItem("semilleros")) || {
        "INFORMA": { docentes: [], estudiantes: [], actividades: [] },
        "COMBA": { docentes: [], estudiantes: [], actividades: [] }
    };

    function guardarDatos() {
        localStorage.setItem("semilleros", JSON.stringify(semilleros));
    }

    formDocente.addEventListener("submit", function (event) {
        event.preventDefault();
        const semillero = selectSemillero.value;
        const docente = {
            nombre: document.getElementById("nombreDocente").value,
            formacion: document.getElementById("formacionDocente").value,
            horario: document.getElementById("horarioDocente").value,
            objetivo: document.getElementById("objetivoDocente").value
        };
        semilleros[semillero].docentes = [docente]; 
        guardarDatos();
        formDocente.reset();
        actualizarVista();
    });

    formEstudiante.addEventListener("submit", function (event) {
        event.preventDefault();
        const semillero = selectSemillero.value;
        const estudiante = {
            nombre: document.getElementById("nombreEstudiante").value,
            codigo: document.getElementById("codigoEstudiante").value,
            carrera: document.getElementById("carreraEstudiante").value
        };
        semilleros[semillero].estudiantes.push(estudiante);
        guardarDatos();
        formEstudiante.reset();
        actualizarVista();
    });

    function actualizarVista() {
        const semillero = selectSemillero.value;
        infoSemillero.innerHTML = `<h2>${semillero}</h2>`;
    }

    actualizarVista();
});
