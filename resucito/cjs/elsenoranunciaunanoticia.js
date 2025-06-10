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
  else if (anchoPantalla <= 900) {
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
const NOMBREDELCANTO = "EL SEÑOR ANUNCIA UNA NOTICIA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 68 (67)",
      dbnos: "60",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "EL SEÑOR ANUNCIA UNA NOTICIA,",
/* 2 */        "LOS MENSAJEROS SON UN EJÉRCITO INMENSO.",
/* 3 */        "LOS REYES ENEMIGOS HUYEN, HUYEN,",
/* 4 */        "LA BELLA DE LA CASA REPARTE EL BOTÍN.",
/* 5 */        "Y mientras vosotros dormís",
/* 6 */        "entre las tapias del aprisco,",
/* 7 */        "se cubren de plata las alas de la paloma,",
/* 8 */        "sus plumas de destellos de oro.",
/* 9 */        "Por ella cae la nieve sobre el Monte,",
/* 10 */        "sobre el Monte Umbrío.",
/* 11 */        "EL SEÑOR ANUNCIA UNA NOTICIA,...",
/* 12 */        "LOS MENSAJEROS SON UN EJÉRCITO INMENSO.",
/* 13 */        "LOS REYES ENEMIGOS HUYEN, HUYEN,",
/* 14 */        "LA BELLA DE LA CASA REPARTE EL BOTÍN.",
/* 15 */        "Cantad a Dios, cantad,",
/* 16 */        "salmodiad todos al Señor,",
/* 17 */        "que cabalga los cielos, los antiguos cielos.",
/* 18 */        "Ved que viene sobre las nubes,",
/* 19 */        "él lanza su voz, su voz potente.",
/* 20 */        "EL SEÑOR ANUNCIA UNA NOTICIA,...",
/* 21 */        "LOS MENSAJEROS SON UN EJÉRCITO INMENSO.",
/* 22 */        "LOS REYES ENEMIGOS HUYEN, HUYEN,",
/* 23 */        "LA BELLA DE LA CASA REPARTE EL BOTÍN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 2*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 3*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 4*/      [ac("Sol", "cp14",""), ac("Si","cp90","m"), ac("Mi","cp150","m")],
/* 5*/      [ac("Sol", "cp","")],
/* 6*/      [ac("Si", "cp14","m")],
/* 7*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 8*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 9*/      [ac("Sol", "cp14",""), ac("Si","cp90","m")],
/* 10*/      [ac("La", "cp14",""), ac("Mi","cp90","m")],
/* 11*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 12*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 13*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 14*/      [ac("Sol", "cp14",""), ac("Si","cp90","m"), ac("Mi","cp150","m")],
/* 15*/      [ac("Sol", "cp14","")],
/* 16*/      [ac("Si", "cp14","m")],
/* 17*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 18*/      [ac("Sol", "cp14","")],
/* 19*/      [ac("Si", "cp14","m"), ac("La","cp90",""), ac("Mi","cp150","m")],
/* 20*/      [ac("Sol", "cp14",""), ac("Mi","cp90","m")],
/* 21*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 22*/      [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 23*/      [ac("Sol", "cp14",""), ac("Si","cp90","m"), ac("Mi","cp150","m")],
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
