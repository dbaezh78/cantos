/*
╔════════════════════════════════════════════════════════════════╗
║                         FUENTE DEL CANTO                       ║
╠════════════════════════════════════════════════════════════════╣
║                Mapeo para celulares menor a 700px              ║
╚════════════════════════════════════════════════════════════════╝  */
const pcelular = {      };
/*
╔════════════════════════════════════════════════════════════════╗
║                Mapeo para celulares menor a 900px              ║
╚════════════════════════════════════════════════════════════════╝  */
const pTablet = {       };
/*
╔════════════════════════════════════════════════════════════════╗
║            Función de Posición con factor ajustable            ║
╚════════════════════════════════════════════════════════════════╝  */
function ac(nota, posicion, extension = "") {
  const anchoPantalla = window.innerWidth;
  let posicionAjustada = posicion;
/*
╔════════════════════════════════════════════════════════════════╗
║           1. Primero verificar celulares (estricto)            ║
╚════════════════════════════════════════════════════════════════╝  */
if (anchoPantalla <= 700) {
posicionAjustada = pcelular[posicion] || posicion;
if (!pcelular[posicion]) {
const numero = parseInt(posicion.replace('cp', '')) || 0;
const factor = 0.86; // Factor diferente para móviles
posicionAjustada = `cp${Math.round(numero * factor)}`;
  }
}/*
╔════════════════════════════════════════════════════════════════╗
║        2. Luego verificar tablets (solo si no es móvil)        ║
╚════════════════════════════════════════════════════════════════╝  */
  else if (anchoPantalla >= 768 && anchoPantalla <= 1024) {
    posicionAjustada = pTablet[posicion] || posicion;
    if (!pTablet[posicion]) {
      const numero = parseInt(posicion.replace('cp', '')) || 0;
      const factor = 0.9;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "OH SEÑOR, NUESTRO DIOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 8",
      dbnos: "128",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¡OH SEÑOR, NUESTRO DIOS,",
/* 2 */        "QUÉ ADMIRABLE ES TU NOMBRE",
/* 3 */        "POR TODA LA TIERRA, TU NOMBRE,",
/* 4 */        "HASTA EL CIELO SE ELEVA TU AMOR!",
/* 5 */        "Con la boca de los niños pequeños",
/* 6 */        "afirmas tu gloria, oh Señor,",
/* 7 */        "y reduces al silencio enemigos y rebeldes.",
/* 8 */        "¡OH SEÑOR, NUESTRO DIOS,...",
/* 9 */        "QUÉ ADMIRABLE ES TU NOMBRE",
/* 10 */        "POR TODA LA TIERRA, TU NOMBRE,",
/* 11 */        "HASTA EL CIELO SE ELEVA TU AMOR!",
/* 12 */        "Si contemplo el cielo, obra de tus manos,",
/* 13 */        "la luna y las estrellas que has creado,",
/* 14 */        "Sal8",
/* 15 */        "¿qué es el hombre para que te acuerdes de él,",
/* 16 */        "el hijo del hombre para darle poder?",
/* 17 */        "Lo hiciste, lo hiciste poco menos que los ángeles,",
/* 18 */        "de gloria y de honor lo has coronado,",
/* 19 */        "todo lo has sometido bajo sus pies.",
/* 20 */        "¡OH SEÑOR, NUESTRO DIOS,...",
/* 21 */        "QUÉ ADMIRABLE ES TU NOMBRE",
/* 22 */        "POR TODA LA TIERRA, TU NOMBRE,",
/* 23 */        "HASTA EL CIELO SE ELEVA TU AMOR!",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("Fa", "cp14","")],
/* 3*/      [ac("La", "cp14","7"), ac("Sol","cp90","m")],
/* 4*/      [ac("La", "cp14","7")],
/* 5*/      [ac("Sol", "cp","m"), ac("La","cp90","7")],
/* 6*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 7*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 8*/      [ac("Re", "cp14","m")],
/* 9*/      [ac("Fa", "cp14","")],
/* 10*/      [ac("La", "cp14","7"), ac("Sol","cp90","m")],
/* 11*/      [ac("La", "cp14","7")],
/* 12*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 13*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 14 */   [ac("", "cp0","")],
/* 15*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 16*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 17*/      [ac("Fa", "cp14",""), ac("La","cp90","7"), ac("Re","cp150","m")],
/* 18*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 19*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 20*/      [ac("Re", "cp14","m")],
/* 21*/      [ac("Fa", "cp14","")],
/* 22*/      [ac("La", "cp14","7"), ac("Sol","cp90","m")],
/* 23*/      [ac("La", "cp14","7")],
],/*
╔════════════════════════════════════════════════════════════════╗
║                Estructura para Asamblea (texto)                ║
╚════════════════════════════════════════════════════════════════╝  */
      asamblea: [
      ],
      asambleaAcordes: [
      ]};/*
╔════════════════════════════════════════════════════════════════╗
║        MANEJO DE CARGA Y REDIMENSIONAMIENTO CORREGIDO          ║
╚════════════════════════════════════════════════════════════════╝  */
    let cargando = false;
    function cargarCantoSeguro(partitura) {
      if (!cargando) {
        cargando = true;
        cargarCanto(partitura);
        setTimeout(() => { cargando = false; }, 300);
      }
    }
        let timeoutRedimension;
        function manejarRedimensionamiento() {
        clearTimeout(timeoutRedimension);
        timeoutRedimension = setTimeout(() => {
            cargarCantoSeguro(partitura);
        }, 200);
    }/*
╔════════════════════════════════════════════════════════════════╗
║          Iniciar carga del canto y configurar eventos          ║
╚════════════════════════════════════════════════════════════════╝  */
    document.addEventListener('DOMContentLoaded', () => {
/*
╔════════════════════════════════════════════════════════════════╗
║   Limpiar contenido existente primero para evitar duplicados   ║
╚════════════════════════════════════════════════════════════════╝  */
      const contenedor = document.getElementById('contenedor-partitura');
      if (contenedor) contenedor.innerHTML = '';
            cargarCantoSeguro(partitura);
            window.addEventListener('resize', manejarRedimensionamiento);
        }
    );
