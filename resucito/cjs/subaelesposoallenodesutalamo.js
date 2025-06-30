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
const NOMBREDELCANTO = "SUBA EL ESPOSO AL LEÑO DE SU TÁLAMO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno (San Quodvultdeus)",
      dbnos: "244",
      catg: "ELECCIÓN",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "SUBA EL ESPOSO,",
/* 2 */        "SUBA, AL LEÑO DE SU TÁLAMO;",
/* 3 */        "SUBA NUESTRO ESPOSO,",
/* 4 */        "AL LECHO, AL LECHO DE SU TÁLAMO.",
/* 5 */        "Duerma muriendo y se abra su costado",
/* 6 */        "y salga la Iglesia virgen.",
/* 7 */        "Herido en su costado al instante salió",
/* 8 */        "Sangre y agua, Sangre y agua.",
/* 9 */        "Agua con la que la Esposa fue lavada,",
/* 10 */        "Sangre que recibe como dote.",
/* 11 */        "Duerme Adán y es creada Eva,",
/* 12 */        "muere Cristo y es formada la Iglesia.",
/* 13 */        "SUBA EL ESPOSO...",
/* 14 */        "SUBA, AL LEÑO DE SU TÁLAMO;",
/* 15 */        "SUBA NUESTRO ESPOSO,",
/* 16 */        "AL LECHO, AL LECHO DE SU TÁLAMO.",
/* 17 */        "¡Oh, qué grande el sacramento de estas bodas!",
/* 18 */        "¡Qué misterio este Esposo y esta Esposa!",
/* 19 */        "La Esposa toma el velo",
/* 20 */        "cuando muere el Esposo,",
/* 21 */        "y el Esposo se une a la Esposa",
/* 22 */        "cuando de la muerte se separa.",
/* 23 */        "Y cuando el Esposo es elevado a los Cielos,",
/* 24 */        "la Esposa se hace fecunda en toda la tierra.",
/* 25 */        "SUBA EL ESPOSO...",
/* 26 */        "SUBA, AL LEÑO DE SU TÁLAMO;",
/* 27 */        "SUBA NUESTRO ESPOSO,",
/* 28 */        "AL LECHO, AL LECHO DE SU TÁLAMO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 2*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 3*/      [ac("Re", "cp14","m")],
/* 4*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 5*/      [ac("La", "cp","m"), ac("Re","cp90","m")],
/* 6*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 7*/      [ac("Re", "cp14","m")],
/* 8*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 9*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 10*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 11*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 12*/      [ac("Fa", "cp14",""), ac("Re","cp90","m")],
/* 13*/      [ac("Mi", "cp14","")],
/* 14*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 15*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 16*/      [ac("Re", "cp14","m")],
/* 17*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 18*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 19*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 20*/      [ac("Fa", "cp14","")],
/* 21*/      [ac("Mi", "cp14","")],
/* 22*/      [ac("Fa", "cp14",""), ac("Re","cp90","m")],
/* 23*/      [ac("Mi", "cp14","")],
/* 24*/      [ac("Fa", "cp14","")],
/* 25*/      [ac("Mi", "cp14","")],
/* 26*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 27*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 28*/      [ac("Re", "cp14","m")],
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
