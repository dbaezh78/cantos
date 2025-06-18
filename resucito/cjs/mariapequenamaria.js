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
const NOMBREDELCANTO = "MARÍA, PEQUEÑA MARÍA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno a la Virgen María (Kiko Argüello)",
      dbnos: "113",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "María, pequeña María,",
/* 2 */        "tú eres la brisa suave de Elías,",
/* 3 */        "el susurro del Espíritu de Dios.",
/* 4 */        "Tú eres la zarza ardiente de Moisés",
/* 5 */        "que llevas al Señor y no te consumes.",
/* 6 */        "Tú eres Hel lugar junto a mí»",
/* 7 */        "que mostró el Señor a Moisés,",
/* 8 */        "tú eres la hendidura de la roca",
/* 9 */        "que Dios cubre con su mano",
/* 10 */        "mientras que pasa su gloria.",
/* 11 */        "VENGA EL SEÑOR CON NOSOTROS,",
/* 12 */        "SI HEMOS HALLADO GRACIA A SUS OJOS.",
/* 13 */        "ES CIERTO QUE SOMOS PECADORES,",
/* 14 */        "MAS RUEGA TÚ POR NOSOTROS,",
/* 15 */        "Y SEREMOS SU PUEBLO Y SU HEREDAD.",
/* 16 */        "María, pequeña María,",
/* 17 */        "hija de Jerusalén,",
/* 18 */        "Madre de todos los pueblos,",
/* 19 */        "Virgen de Nazaret.",
/* 20 */        "Tú eres la nube del desierto",
/* 21 */        "que protege la marcha de Israel,",
/* 22 */        "tú eres la tienda de la reunión,",
/* 23 */        "el arca que lleva la alianza,",
/* 24 */        "el Santuario de la gloria del Señor.",
/* 25 */        "VENGA EL SEÑOR CON NOSOTROS,...",
/* 26 */        "SI HEMOS HALLADO GRACIA A SUS OJOS.",
/* 27 */        "ES CIERTO QUE SOMOS PECADORES,",
/* 28 */        "MAS RUEGA TÚ POR NOSOTROS,",
/* 29 */        "Y SEREMOS SU PUEBLO Y SU HEREDAD.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 2*/      [ac("Sol", "cp14",""), ac("Mim6","cp90","")],
/* 3*/      [ac("La", "cp14","7"), ac("Re","cp90","")],
/* 4*/      [ac("Fa#", "cp14","m")],
/* 5*/      [ac("Sol", "cp",""), ac("La","cp90",""), ac("La7","cp150","")],
/* 6*/      [ac("Re", "cp14",""), ac("Fa#","cp90","")],
/* 7*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 8*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 9*/      [ac("La", "cp14","")],
/* 10*/      [ac("Sol", "cp14",""), ac("La","cp90",""), ac("Re","cp150","")],
/* 11*/      [ac("Re", "cp14",""), ac("Fa#","cp90","")],
/* 12*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 13*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 14*/      [ac("La", "cp14","")],
/* 15*/      [ac("Sol", "cp14",""), ac("La","cp90",""), ac("Re","cp150","")],
/* 16*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 17*/      [ac("Sol", "cp14",""), ac("Mim6","cp90","")],
/* 18*/      [ac("Re", "cp14",""), ac("Fa#","cp90","m")],
/* 19*/      [ac("Sol", "cp14",""), ac("La","cp90",""), ac("La","cp150","7")],
/* 20*/      [ac("Re", "cp14",""), ac("Fa#","cp90","")],
/* 21*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 22*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 23*/      [ac("La", "cp14","")],
/* 24*/      [ac("Sol", "cp14",""), ac("La","cp90",""), ac("Re","cp150","")],
/* 25*/      [ac("Re", "cp14",""), ac("Fa#","cp90","")],
/* 26*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 27*/      [ac("Sol", "cp14",""), ac("Re","cp90","")],
/* 28*/      [ac("La", "cp14","")],
/* 29*/      [ac("Sol", "cp14",""), ac("La","cp90",""), ac("Re","cp150","")],
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
