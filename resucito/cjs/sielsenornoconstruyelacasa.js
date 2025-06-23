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
const NOMBREDELCANTO = "SI EL SEÑOR NO CONSTRUYE LA CASA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 127 (126)",
      dbnos: "150",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "SI EL SEÑOR",
/* 2 */        "NO CONSTRUYE LA CASA,",
/* 3 */        "EN VANO SE CANSAN",
/* 4 */        "LOS CONSTRUCTORES.",
/* 5 */        "Si el Señor no guarda la ciudad,",
/* 6 */        "en vano vigilan los centinelas,",
/* 7 */        "si el Señor no guarda la ciudad.",
/* 8 */        "SI EL SEÑOR...",
/* 9 */        "NO CONSTRUYE LA CASA,",
/* 10 */        "EN VANO SE CANSAN",
/* 11 */        "LOS CONSTRUCTORES.",
/* 12 */        "En vano madrugáis al levantaros,",
/* 13 */        "el descanso retrasáis,",
/* 14 */        "para conseguir el pan:",
/* 15 */        "Dios lo da a sus amigos",
/* 16 */        "mientras duermen.",
/* 17 */        "DIOS LO DA A SUS AMIGOS",
/* 18 */        "MIENTRAS DUERMEN.",
/* 19 */        "SI EL SEÑOR...",
/* 20 */        "NO CONSTRUYE LA CASA,",
/* 21 */        "EN VANO SE CANSAN",
/* 22 */        "LOS CONSTRUCTORES.",
/* 23 */        "Don del Señor son los hijos,",
/* 24 */        "son como flechas en manos de un guerrero,",
/* 25 */        "los hijos de la juventud.",
/* 26 */        "¡Dichoso el hombre",
/* 27 */        "que tiene llena su aljaba!",
/* 28 */        "No temerá cuando lleguen",
/* 29 */        "sus enemigos.",
/* 30 */        "SI EL SEÑOR...",
/* 31 */        "NO CONSTRUYE LA CASA,",
/* 32 */        "EN VANO SE CANSAN",
/* 33 */        "LOS CONSTRUCTORES.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","")],
/* 2*/      [ac("Do#", "cp14","m"), ac("La","cp90","")],
/* 3*/      [ac("Si", "cp14","")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("Do#", "cp","m"), ac("Sol#","cp90","")],
/* 6*/      [ac("Do#", "cp14","m")],
/* 7*/      [ac("La", "cp14",""), ac("Sol#","cp90","")],
/* 8*/      [ac("Mi", "cp14","")],
/* 9*/      [ac("Do#", "cp14","m"), ac("La","cp90","")],
/* 10*/      [ac("Si", "cp14","")],
/* 11*/      [ac("Mi", "cp14","")],
/* 12*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("Do#", "cp14","m")],
/* 15*/      [ac("La", "cp14","")],
/* 16*/      [ac("Sol#", "cp14","")],
/* 17*/      [ac("La", "cp14","")],
/* 18*/      [ac("Sol#", "cp14","")],
/* 19*/      [ac("Mi", "cp14","")],
/* 20*/      [ac("Do#", "cp14","m"), ac("La","cp90","")],
/* 21*/      [ac("Si", "cp14","")],
/* 22*/      [ac("Mi", "cp14","")],
/* 23*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 24 */   [ac("", "cp0","")],
/* 25*/      [ac("Do#", "cp14","m")],
/* 26*/      [ac("La", "cp14","")],
/* 27*/      [ac("Sol#", "cp14","")],
/* 28*/      [ac("La", "cp14","")],
/* 29*/      [ac("Sol#", "cp14","")],
/* 30*/      [ac("Mi", "cp14","")],
/* 31*/      [ac("Do#", "cp14","m"), ac("La","cp90","")],
/* 32*/      [ac("Si", "cp14","")],
/* 33*/      [ac("Mi", "cp14","")],
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
