import ControladorCalendario from "./controller/ControladorCalendario.js";
const controladorCalendario = new ControladorCalendario();

document.addEventListener("DOMContentLoaded", () => {
    const botonComprobarFecha = document.getElementById("comprobarFecha");

    if (!botonComprobarFecha) {
        console.error("No se encontró el botón con ID 'comprobarFecha'");
        return;
    }

    botonComprobarFecha.addEventListener("click", (e) => {
        e.preventDefault();
        controladorCalendario.comprarFechas();
    });
});

