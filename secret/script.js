import ControladorCalendario from "./../controller/ControladorCalendario.js";
const controladorCalendario = new ControladorCalendario();

const video = document.getElementById("videoFondo");

// Función que activa el sonido y reproduce el video
function activarSonido() {
    console.log("Reproduciendo video...");

    video.muted = false;
    video.volume = 1;
    video.play();

    // Remover los listeners después de la primera interacción
    document.removeEventListener("click", activarSonido);
    document.removeEventListener("keydown", activarSonido);
    document.removeEventListener("mousemove", activarSonido);
    document.removeEventListener("scroll", activarSonido);
}

// Función que muestra el contenido del marco
function mostrarContenido() {
    console.log("Cargando contenido...");

    document.getElementById("marco").removeAttribute("hidden");
    document.getElementById("copyright").removeAttribute("hidden");

    document.removeEventListener("click", mostrarContenido);
    document.removeEventListener("keydown", mostrarContenido);
    document.removeEventListener("mousemove", mostrarContenido);
    document.removeEventListener("scroll", mostrarContenido);
    activarSonido();
}

// Ocultar el mensaje al hacer clic en el botón "Ocultar"
function activarOcultarMensaje() {
    document.getElementById('ocultar').addEventListener("click", () => {
        console.log("Ocultando el mensaje...");
        document.querySelector('.marco').classList.add('oculto');
        document.getElementById("mostrar").removeAttribute("hidden");
    });
}

// Mostrar el mensaje al hacer clic en el botón "Mostrar"
function activarMostrarMensaje() {
    document.getElementById("mostrar").addEventListener("click", () => {
        console.log("Mostrando el mensaje...");
        document.querySelector('.marco').classList.remove('oculto');
        document.getElementById("mostrar").setAttribute("hidden", "true");
    })
}

function cambiarFecha() {
    console.log("Cambiando fecha...");
    let tDia = document.getElementById("pDia");
    let tMes = document.getElementById("pMes");
    let tAnio = document.getElementById("pAnio");
    tDia.innerHTML = `♥ ${controladorCalendario.diferenciaFechas().dias} días`;
    tMes.innerHTML = `♥ ${controladorCalendario.diferenciaFechas().meses} meses`;
    tAnio.innerHTML = `♥ ${controladorCalendario.diferenciaFechas().anios} años`;
}

// ✅ Intentar reproducir en silencio al cargar la página
window.addEventListener("load", () => {
    video.muted = true;
    video.play().then(() => {
        console.log("Video en silencio reproduciéndose...");
        mostrarContenido();
    }).catch(() => {
        console.log("Autoplay bloqueado, esperando interacción del usuario...");
    });
});

// ✅ Cargar funciones al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    cambiarFecha();
    activarMostrarMensaje();
    activarOcultarMensaje();
    // Listeners para cualquier tipo de interacción
    document.addEventListener("click", mostrarContenido);
    document.addEventListener("keydown", mostrarContenido);
    document.addEventListener("mousemove", mostrarContenido);
    document.addEventListener("scroll", mostrarContenido);
});