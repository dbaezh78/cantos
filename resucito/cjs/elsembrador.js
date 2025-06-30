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
const NOMBREDELCANTO = "EL SEMBRADOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Marcos 4,3ss",
      dbnos: "225",
      catg: "CATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "SALIÓ EL SEMBRADOR A SEMBRAR",
/* 2 */        "Y UNA PARTE CAYÓ EN EL CAMINO.",
/* 3 */        "Vinieron las aves,",
/* 4 */        "se la comieron,",
/* 5 */        "se la comieron,",
/* 6 */        "SE LA COMIERON.",
/* 7 */        "SALIÓ EL SEMBRADOR A SEMBRAR",
/* 8 */        "Y UNA PARTE CAYÓ EN LA PIEDRA.",
/* 9 */        "Salió el sol,",
/* 10 */        "la secó,",
/* 11 */        "no había tierra,",
/* 12 */        "NO HABÍA TIERRA.",
/* 13 */        "SALIÓ EL SEMBRADOR A SEMBRAR",
/* 14 */        "Y UNA PARTE CAYÓ EN EL ESPINO.",
/* 15 */        "Creció la semilla,",
/* 16 */        "creció el espino,",
/* 17 */        "la sofocó,",
/* 18 */        "LA SOFOCÓ.",
/* 19 */        "SALIÓ EL SEMBRADOR A SEMBRAR",
/* 20 */        "Y UNA PARTE CAYÓ EN LA TIERRA.",
/* 21 */        "Y dio fruto,",
/* 22 */        "unos treinta,",
/* 23 */        "otros sesenta,",
/* 24 */        "Y ALGUNOS CIENTO.",
/* 25 */        "El que tenga oídos",
/* 26 */        "y quiera oír:",
/* 27 */        "¡Que oiga!",
/* 28 */        "¡QUE OIGA!",
/* 29 */        "No seas camino,",
/* 30 */        "NO SEAS CAMINO.",
/* 31 */        "No seas la piedra,",
/* 32 */        "NO SEAS LA PIEDRA.",
/* 33 */        "No seas espino,",
/* 34 */        "NO SEAS ESPINO.",
/* 35 */        "Que seas la tierra,",
/* 36 */        "LA BUENA TIERRA,",
/* 37 */        "donde Jesús pueda crecer,",
/* 38 */        "DONDE JESÚS PUEDA CRECER.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m"), ac("Do","cp90","")],
/* 2*/      [ac("Re", "cp14","m")],
/* 3*/      [ac("Fa", "cp14","")],
/* 4*/      [ac("Sol", "cp14","")],
/* 5*/      [ac("La", "cp","")],
/* 6*/      [ac("Re", "cp14","m")],
/* 7*/      [ac("Re", "cp14","m"), ac("Do","cp90","")],
/* 8*/      [ac("Re", "cp14","m")],
/* 9*/      [ac("Fa", "cp14","")],
/* 10*/      [ac("Sol", "cp14","")],
/* 11*/      [ac("La", "cp14","")],
/* 12*/      [ac("Re", "cp14","m")],
/* 13*/      [ac("Re", "cp14","m"), ac("Do","cp90","")],
/* 14*/      [ac("Re", "cp14","m")],
/* 15*/      [ac("Fa", "cp14","")],
/* 16*/      [ac("Sol", "cp14","")],
/* 17*/      [ac("La", "cp14","")],
/* 18*/      [ac("Re", "cp14","m")],
/* 19*/      [ac("Re", "cp14","m"), ac("Do","cp90","")],
/* 20*/      [ac("Re", "cp14","m")],
/* 21*/      [ac("Fa", "cp14","")],
/* 22*/      [ac("Sol", "cp14","")],
/* 23*/      [ac("La", "cp14","")],
/* 24*/      [ac("Re", "cp14","m")],
/* 25*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 26*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 27 */   [ac("", "cp0","")],
/* 28*/      [ac("Re", "cp14","m")],
/* 29*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 30*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 31*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 32*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 33*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 34*/      [ac("Sol", "cp14","m"), ac("Re","cp90","m")],
/* 35*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 36*/      [ac("Sol", "cp14","m"), ac("La","cp90","")],
/* 37*/      [ac("Re", "cp14","m"), ac("La","cp90","7"), ac("Re","cp150","m")],
/* 38*/      [ac("La", "cp14","7"), ac("Re","cp90","m")],
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
