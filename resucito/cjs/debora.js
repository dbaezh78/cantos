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
const NOMBREDELCANTO = "DÉBORA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Jueces 5",
      dbnos: "223",
      catg: "CATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Cuando Israel reúne la asamblea,",
/* 2 */        "cuando el pueblo se ofrece voluntario:",
/* 3 */        "BENDECID A YAHVEH,",
/* 4 */        "BENDECID A YAHVEH.",
/* 5 */        "BENDECID A YAHVEH,",
/* 6 */        "QUE A YAHVEH QUIERO CANTAR.",
/* 7 */        "DESPIERTA, DÉBORA,",
/* 8 */        "DESPIERTA, DÉBORA,",
/* 9 */        "¡ENTONA EL CANTAR!",
/* 10 */        "DESPIERTA, DÉBORA,",
/* 11 */        "DESPIERTA, DÉBORA,",
/* 12 */        "¡ARRIBA BARAC!",
/* 13 */        "En los días de Samgar, hijo de Anat,",
/* 14 */        "en los días de Yael,",
/* 15 */        "ya no había caravanas,",
/* 16 */        "no se podía andar por los caminos,",
/* 17 */        "porque Israel se había buscado otros dioses,",
/* 18 */        "por eso la guerra era a sus puertas",
/* 19 */        "y no había guerrero en Israel,",
/* 20 */        "no se encontraba una lanza entre diez mil.",
/* 21 */        "BENDECID A YAHVEH,...",
/* 22 */        "BENDECID A YAHVEH.",
/* 23 */        "BENDECID A YAHVEH,",
/* 24 */        "QUE A YAHVEH QUIERO CANTAR.",
/* 25 */        "DESPIERTA, DÉBORA,",
/* 26 */        "DESPIERTA, DÉBORA,",
/* 27 */        "¡ENTONA EL CANTAR!",
/* 28 */        "DESPIERTA, DÉBORA,",
/* 29 */        "DESPIERTA, DÉBORA,",
/* 30 */        "¡ARRIBA BARAC!",
/* 31 */        "Cuando salías de Seír, Yahveh, Dios mío,",
/* 32 */        "cuando avanzabas por los campos de Edom,",
/* 33 */        "tembló la tierra, se estremeció el cielo,",
/* 34 */        "las nubes en agua se fundieron,",
/* 35 */        "delante de Ti los montes se licuaron,",
/* 36 */        "delante de Ti, Dios de Israel.",
/* 37 */        "Desde los cielos lucharon las estrellas,",
/* 38 */        "DESDE LOS CIELOS",
/* 39 */        "LUCHARON LAS ESTRELLAS,",
/* 40 */        "Desde los cielos lucharon contra Sísara,",
/* 41 */        "DESDE LOS CIELOS",
/* 42 */        "LUCHARON CONTRA SÍSARA,",
/* 43 */        "el torrente Quisón,",
/* 44 */        "el torrente sagrado los barrió.",
/* 45 */        "BENDECID A YAHVEH,...",
/* 46 */        "BENDECID A YAHVEH.",
/* 47 */        "BENDECID A YAHVEH,",
/* 48 */        "QUE A YAHVEH QUIERO CANTAR.",
/* 49 */        "DESPIERTA, DÉBORA,",
/* 50 */        "DESPIERTA, DÉBORA,",
/* 51 */        "¡ENTONA EL CANTAR!",
/* 52 */        "DESPIERTA, DÉBORA,",
/* 53 */        "DESPIERTA, DÉBORA,",
/* 54 */        "¡ARRIBA BARAC!",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","7")],
/* 2 */   [ac("", "cp0","")],
/* 3*/      [ac("Mi", "cp14","m"), ac("Fa","cp90","")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("Mi", "cp","m"), ac("Fa","cp90","")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Fa", "cp14","")],
/* 9*/      [ac("Mi", "cp14","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Fa", "cp14","")],
/* 12*/      [ac("Mi", "cp14","")],
/* 13*/      [ac("Re", "cp14","7")],
/* 14 */   [ac("", "cp0","")],
/* 15 */   [ac("", "cp0","")],
/* 16 */   [ac("", "cp0","")],
/* 17 */   [ac("", "cp0","")],
/* 18 */   [ac("", "cp0","")],
/* 19 */   [ac("", "cp0","")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("Mi", "cp14","m"), ac("Fa","cp90","")],
/* 22*/      [ac("Mi", "cp14","")],
/* 23*/      [ac("Mi", "cp14","m"), ac("Fa","cp90","")],
/* 24*/      [ac("Mi", "cp14","")],
/* 25*/      [ac("La", "cp14","m")],
/* 26*/      [ac("Fa", "cp14","")],
/* 27*/      [ac("Mi", "cp14","")],
/* 28*/      [ac("La", "cp14","m")],
/* 29*/      [ac("Fa", "cp14","")],
/* 30*/      [ac("Mi", "cp14","")],
/* 31*/      [ac("Re", "cp14","7")],
/* 32 */   [ac("", "cp0","")],
/* 33 */   [ac("", "cp0","")],
/* 34 */   [ac("", "cp0","")],
/* 35 */   [ac("", "cp0","")],
/* 36 */   [ac("", "cp0","")],
/* 37 */   [ac("", "cp0","")],
/* 38 */   [ac("", "cp0","")],
/* 39 */   [ac("", "cp0","")],
/* 40 */   [ac("", "cp0","")],
/* 41 */   [ac("", "cp0","")],
/* 42 */   [ac("", "cp0","")],
/* 43 */   [ac("", "cp0","")],
/* 44 */   [ac("", "cp0","")],
/* 45*/      [ac("Mi", "cp14","m"), ac("Fa","cp90","")],
/* 46*/      [ac("Mi", "cp14","")],
/* 47*/      [ac("Mi", "cp14","m"), ac("Fa","cp90","")],
/* 48*/      [ac("Mi", "cp14","")],
/* 49*/      [ac("La", "cp14","m")],
/* 50*/      [ac("Fa", "cp14","")],
/* 51*/      [ac("Mi", "cp14","")],
/* 52*/      [ac("La", "cp14","m")],
/* 53*/      [ac("Fa", "cp14","")],
/* 54*/      [ac("Mi", "cp14","")],
],/*
╔════════════════════════════════════════════════════════════════╗
║                Estructura para Asamblea (texto)                ║
╚════════════════════════════════════════════════════════════════╝  */
      asamblea: [
      ]
  };/*
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
