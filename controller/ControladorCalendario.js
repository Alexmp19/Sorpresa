class ControladorCalendario {
    constructor() {
        this.diaAniversario = 25;
        this.mesAniversario = 8; // Agosto
        this.anioAniversario = 2022;
        this.diaActual = new Date().getDate();
        this.mesActual = new Date().getMonth() + 1; // Los meses en JavaScript son 0-indexados
        this.anioActual = new Date().getFullYear();
    }

    /**
     * 
     * @returns Un objeto con la fecha del aniversario
     * que contiene el día, mes y año.
     */
    fechaAniversario() {
        return {
            dia: this.diaAniversario,
            mes: this.mesAniversario,
            anio: this.anioAniversario,
        };
    }

    /**
     * 
     * @returns Devuelve un objeto con la fecha actual:
     * dia, mes y anio
     */
    fechaActual() {
        return {
            dia: this.diaActual,
            mes: this.mesActual,
            anio: this.anioActual,
        };
    }

    /**
     * 
     * @returns Un objeto que contiene la diferencia
     * entre la fecha del aniversario y la fecha actual.
     * La diferencia incluye días, meses, años, horas, minutos y segundos.
     */
    diferenciaFechas() {
        const fechaAniversario = this.fechaAniversario();
        let fechaActual = this.fechaActual();
        const diferencia = {};

        if (fechaActual.dia < fechaAniversario.dia) {
            fechaActual.dia += new Date(fechaActual.anio, fechaActual.mes - 1, 0).getDate(); // Ajusta el día al último del mes anterior
            fechaActual.mes -= 1; // Si el día del aniversario es mayor, restamos un mes
        }
        if (fechaAniversario.mes < fechaAniversario.anio) {
            fechaActual.mes += 12; // Ajusta el mes al año anterior
            fechaActual.anio -= 1; // Si el mes del aniversario es mayor, restamos un año
        }
        diferencia.dias = fechaActual.dia - fechaAniversario.dia;
        diferencia.meses = fechaActual.mes - fechaAniversario.mes;
        diferencia.anios = fechaActual.anio - fechaAniversario.anio;

        console.log(diferencia);
        return diferencia;
    }
    
    // Usado en el index.html para el acceso
    /**
     * 
     * @returns Un objeto que contiene la fecha del aniversario
     * con el día, mes y año.
     */
    comprarFechas() {
        const fechaIngresada = document.getElementById("fechaIngresada").value;
        const fecha = new Date(fechaIngresada);
        const fechaAniversario = this.fechaAniversario();
        const coinciden = (
            fecha.getFullYear() === fechaAniversario.anio &&
            fecha.getMonth() + 1 === fechaAniversario.mes &&
            fecha.getDate() +1  === fechaAniversario.dia
        );
        const video = document.getElementById("videoFondo");

        if (isNaN(fecha.getTime())) {
            alert("Fecha inválida. Por favor, ingresa una fecha válida.");
            return;
        } else
        if (!coinciden) {
            alert("No eres la persona indicada, fuera de aqui!!!")
            window.close();
        } else
        {
            alert("¡Feliz dos años y 10 meses! 🎉");
            window.location.href = "./secret/index.html"
            video.play();
            video.volume = 1;
            boton.style.display = "none";

        }
    }
}

export default ControladorCalendario;