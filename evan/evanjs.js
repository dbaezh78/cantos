const year = new Date().getFullYear(); // Obtiene el año actual
// const year = 2025; // Si prefieres un año fijo

// Lista de audios con su información
const audios = [
    // DIA DE LOS SANTOS
    { nombre: "Santa María, Madre de Dios", 			archivo: "audios/01enero.mp3", fecha: `${year}-01-01` }, // 1ro de Enero, Santa Maria Madre de Dios
    { nombre: "El Santísimo Nombre de Jesús", 			archivo: "audios/03enero.mp3", fecha: `${year}-01-03` }, // 3 de Enero Santisimo Nombre de nuestro Señor Jesucristo
    { nombre: "La Epifanía del Señor", 					archivo: "audios/06enero.mp3", fecha: `${year}-01-06` }, // 6 de Enero, Epifanía del Señor
    { nombre: "Día de la Altagracia", 					archivo: "audios/21enero.mp3", fecha: `${year}-01-21` }, // 21 de Enero, Día de la Altagracia
    { nombre: "La Conversión de San Pablo, apóstol",	archivo: "audios/26enero.mp3", fecha: `${year}-01-25` }, // 25 La Conversión de San Pablo, apóstol

    // ENERO
    { nombre: "Bautismo del Señor", 					archivo: "audios/tos01d.mp3", fecha: `${year}-01-12` }, // I Domingo del Tiempo Ordinario | Bautismo del Señor
    { nombre: "Bodas de Canaan", 						archivo: "audios/tos02d.mp3", fecha: `${year}-01-19` }, // II Domingo del Tiempo Ordinario | Bodas de Canaan
    { nombre: "Hoy se cumple esta Escritura", 			archivo: "audios/tos03d.mp3", fecha: `${year}-01-26` }, // III Domingo del Tiempo Ordinario | Hoy se cumple esta Escritura

    // FEBRERO
//    { nombre: "Multiplicación de los Peces", 			archivo: "audios/tos05d.mp3", fecha: `${year}-02-12` }, // REVISION DEL AUDIO

    { nombre: "La presentación del Señor", 				archivo: "audios/tos04d.mp3", fecha: `${year}-02-02` }, // IV Domingo del Tiempo Ordinario | La Presentación del Señor
    { nombre: "Multiplicación de los Peces", 			archivo: "audios/tos05d.mp3", fecha: `${year}-02-09` }, // V Domingo del Tiempo Ordinario | Multiplicación de los Panes
    { nombre: "Titulo Pendiente", 						archivo: "audios/tos06d.mp3", fecha: `${year}-02-16` },
    { nombre: "Titulo Pendiente", 						archivo: "audios/tos07d.mp3", fecha: `${year}-02-23` },
    { nombre: "Titulo Pendiente", 						archivo: "audios/tos08d.mp3", fecha: `${year}-02-23` },

    // MARZO
    { nombre: "Titulo Pendiente", 						archivo: "audios/tos09d.mp3", fecha: `${year}-03-02` },
    { nombre: "Titulo Pendiente", 						archivo: "audios/tos10d.mp3", fecha: `${year}-03-09` },
    { nombre: "Titulo Pendiente", 						archivo: "audios/tos11d.mp3", fecha: `${year}-03-16` },
    { nombre: "Titulo Pendiente", 						archivo: "audios/tos12d.mp3", fecha: `${year}-03-23` },
    { nombre: "Titulo Pendiente", 						archivo: "audios/tos13d.mp3", fecha: `${year}-03-30` },

    // ABRIL
    { nombre: "Titulo Pendiente", 						archivo: "audios/tos14d.mp3", fecha: `${year}-04-06` },
    { nombre: "Titulo Pendiente", 						archivo: "audios/tos15d.mp3", fecha: `${year}-04-13` },
    { nombre: "Titulo Pendiente", 						archivo: "audios/tos16d.mp3", fecha: `${year}-04-20` },
    { nombre: "Titulo Pendiente", 						archivo: "audios/tos17d.mp3", fecha: `${year}-04-27` },

    // MAYO
    { nombre: "Bodas de Canaan",						archivo: "audios/tos18d.mp3", fecha: `${year}-05-04` },
    { nombre: "Bodas de Canaan",						archivo: "audios/tos19d.mp3", fecha: `${year}-05-11` },
    { nombre: "Bodas de Canaan",						archivo: "audios/tos20d.mp3", fecha: `${year}-05-18` },
    { nombre: "Bodas de Canaan",						archivo: "audios/tos21d.mp3", fecha: `${year}-05-25` },

    // JUNIO
    { nombre: "Titulo Pendiente", archivo: "audios/tos22d.mp3", fecha: `${year}-06-01` },

    // SEMANA V TIEMPO ORDINARIO
    { nombre: "Evangelio Lunes Semana 5 Tiempo Ordinario",		archivo: "audios/tos05lunes.mpeg", fecha: `${year}-02-10` },
    { nombre: "Evangelio Martes Semana 5 Tiempo Ordinario",		archivo: "audios/tos05martes.mpeg", fecha: `${year}-02-11` },
    { nombre: "Evangelio Miércoles Semana 5 Tiempo Ordinario",	archivo: "audios/tos05miercoles.mpeg", fecha: `${year}-02-12` },
    { nombre: "Evangelio Jueves Semana 5 Tiempo Ordinario",		archivo: "audios/tos05jueves.mpeg", fecha: `${year}-02-13` },
    { nombre: "Evangelio Viernes Semana 5 Tiempo Ordinario",	archivo: "audios/tos05viernes.mpeg", fecha: `${year}-02-14` },
    { nombre: "Evangelio Sabado Semana 5 Tiempo Ordinario",		archivo: "audios/tos05sabado.mpeg", fecha: `${year}-02-15` },

    // SEMANA VI TIEMPO ORDINARIO
    { nombre: "Evangelio Lunes Semana 5 Tiempo Ordinario",		archivo: "audios/tos06lunes.mpeg", fecha: `${year}-02-10` },
    { nombre: "Evangelio Martes Semana 5 Tiempo Ordinario",		archivo: "audios/tos06martes.mpeg", fecha: `${year}-02-11` },
    { nombre: "Evangelio Miércoles Semana 5 Tiempo Ordinario",	archivo: "audios/tos06miercoles.mpeg", fecha: `${year}-02-12` },
    { nombre: "Evangelio Jueves Semana 5 Tiempo Ordinario",		archivo: "audios/tos06jueves.mpeg", fecha: `${year}-02-13` },
    { nombre: "Evangelio Viernes Semana 5 Tiempo Ordinario",	archivo: "audios/tos06viernes.mpeg", fecha: `${year}-02-14` },
    { nombre: "Evangelio Sabado Semana 5 Tiempo Ordinario",		archivo: "audios/tos06sabado.mpeg", fecha: `${year}-02-15` },
];

function obtenerFechaHoy() {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
}

function cargarAudioPorDefecto() {
    const fechaHoy = obtenerFechaHoy();
    console.log("Fecha de hoy:", fechaHoy);

    const audioHoy = audios.find(audio => audio.fecha === fechaHoy);
    console.log("Audio encontrado:", audioHoy);

    const reproductor = document.getElementById('audio-player');
    const fuenteAudio = document.getElementById('audio-source');
    const tituloAudio = document.getElementById('titulo-audio');

    if (audioHoy) {
        console.log("Cargando audio:", audioHoy.archivo);
        tituloAudio.textContent = audioHoy.nombre;
        fuenteAudio.src = audioHoy.archivo;
        reproductor.load();
    } else {
        console.log("No hay audio para hoy");
        tituloAudio.textContent = "No hay audio para hoy";
        fuenteAudio.src = "";
        reproductor.load();
    }
}

window.onload = cargarAudioPorDefecto;