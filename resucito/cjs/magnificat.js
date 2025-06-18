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
const NOMBREDELCANTO = "MAGNÍFICAT";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Lucas 1,46-55",
      dbnos: "108",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "PROCLAMA MI ALMA",
/* 2 */        "LA GRANDEZA DEL SEÑOR,",
/* 3 */        "SE ALEGRA MI ESPÍRITU",
/* 4 */        "EN DIOS MI SALVADOR.",
/* 5 */        "La Mi La",
/* 6 */        "La Mi",
/* 7 */        "Desde ahora me felicitarán",
/* 8 */        "todas las generaciones.",
/* 9 */        "DESDE AHORA ME FELICITARÁN",
/* 10 */        "TODAS LAS GENERACIONES.",
/* 11 */        "Porque el Poderoso",
/* 12 */        "ha hecho grandes cosas en mí,",
/* 13 */        "su nombre es santo.",
/* 14 */        "PORQUE EL PODEROSO",
/* 15 */        "HA HECHO GRANDES COSAS EN MÍ,",
/* 16 */        "SU NOMBRE ES SANTO.",
/* 17 */        "Él hace proezas con su brazo:",
/* 18 */        "dispersa a los soberbios de corazón.",
/* 19 */        "ÉL HACE PROEZAS CON SU BRAZO:",
/* 20 */        "DISPERSA A LOS SOBERBIOS DE CORAZÓN.",
/* 21 */        "Derriba a los poderosos",
/* 22 */        "y ensalza a los humildes.",
/* 23 */        "LOS HAMBRIENTOS",
/* 24 */        "COLMA DE BIENES",
/* 25 */        "Y A LOS RICOS DESPIDE VACÍOS.",
/* 26 */        "Auxilia a Israel, su siervo,",
/* 27 */        "acordándose de la misericordia.",
/* 28 */        "AUXILIA A ISRAEL, SU SIERVO,",
/* 29 */        "ACORDÁNDOSE DE LA MISERICORDIA.",
/* 30 */        "Como lo había prometido",
/* 31 */        "en favor de Abraham.",
/* 32 */        "COMO LO HABÍA PROMETIDO",
/* 33 */        "EN FAVOR DE ABRAHAM.",
/* 34 */        "PROCLAMA MI ALMA...",
/* 35 */        "LA GRANDEZA DEL SEÑOR,",
/* 36 */        "SE ALEGRA MI ESPÍRITU",
/* 37 */        "EN DIOS MI SALVADOR.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","")],
/* 2*/      [ac("Mi", "cp14","")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("Re", "cp14","")],
/* 5*/      [ac("La", "cp",""), ac("Mi","cp90",""), ac("La","cp150","")],
/* 6 */   [ac("", "cp0","")],
/* 7*/      [ac("La", "cp14","")],
/* 8 */   [ac("", "cp0","")],
/* 9*/      [ac("Mi", "cp14","")],
/* 10*/      [ac("La", "cp14","")],
/* 11*/      [ac("Re", "cp14","")],
/* 12*/      [ac("La", "cp14","")],
/* 13*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 14*/      [ac("Re", "cp14","")],
/* 15*/      [ac("La", "cp14","")],
/* 16*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 17*/      [ac("La", "cp14","Mi")],
/* 18*/      [ac("La", "cp14","")],
/* 19*/      [ac("Mi", "cp14","")],
/* 20*/      [ac("La", "cp14","")],
/* 21*/      [ac("Re", "cp14",""), ac("La","cp90","")],
/* 22*/      [ac("Mi", "cp14",""), ac("La","cp90","7")],
/* 23*/      [ac("Re", "cp14","")],
/* 24*/      [ac("La", "cp14","")],
/* 25*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 26*/      [ac("La", "cp14","Mi")],
/* 27*/      [ac("La", "cp14","")],
/* 28*/      [ac("Mi", "cp14","")],
/* 29*/      [ac("La", "cp14","")],
/* 30*/      [ac("Re", "cp14",""), ac("La","cp90","")],
/* 31*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 32*/      [ac("Re", "cp14",""), ac("La","cp90","")],
/* 33*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 34*/      [ac("Re", "cp14","")],
/* 35*/      [ac("Mi", "cp14","")],
/* 36 */   [ac("", "cp0","")],
/* 37*/      [ac("Re", "cp14","")],
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
