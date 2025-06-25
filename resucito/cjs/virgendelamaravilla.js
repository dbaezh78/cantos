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
const NOMBREDELCANTO = "VIRGEN DE LA MARAVILLA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "(Dante Allghlerl)",
      dbnos: "171",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "MARÍA, HIJA DE TU HIJO,",
/* 2 */        "MADRE DE JESÚS",
/* 3 */        "Y MADRE NUESTRA.",
/* 4 */        "VIRGEN DE LA MARAVILLA.",
/* 5 */        "María, tú la creatura",
/* 6 */        "que has dado a luz al Creador,",
/* 7 */        "tú eres la sierva",
/* 8 */        "que ha concebido al Señor.",
/* 9 */        "MARÍA, HIJA DE TU HIJO...",
/* 10 */        "MADRE DE JESÚS",
/* 11 */        "Y MADRE NUESTRA.",
/* 12 */        "VIRGEN DE LA MARAVILLA.",
/* 13 */        "María, hecha de tierra,",
/* 14 */        "tú eres la gloriosa,",
/* 15 */        "gloriosa imagen del cielo.",
/* 16 */        "MARÍA, HIJA DE TU HIJO...",
/* 17 */        "MADRE DE JESÚS",
/* 18 */        "Y MADRE NUESTRA.",
/* 19 */        "VIRGEN DE LA MARAVILLA.",
/* 20 */        "María, siendo la pequeña",
/* 21 */        "tú eres la más grande,",
/* 22 */        "siendo Hija de Dios eres su Madre,",
/* 23 */        "siendo Hija de Dios eres su Madre.",
/* 24 */        "Virgen de la maravilla.",
/* 25 */        "MARÍA, HIJA DE TU HIJO...",
/* 26 */        "MADRE DE JESÚS",
/* 27 */        "Y MADRE NUESTRA.",
/* 28 */        "VIRGEN DE LA MARAVILLA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Si", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","m")],
/* 2*/      [ac("Mi", "cp14","m")],
/* 3*/      [ac("Si", "cp14","m")],
/* 4*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 5*/      [ac("Si", "cp","m"), ac("Mi","cp90","m"), ac("Si","cp150","m")],
/* 6*/      [ac("Mi", "cp14","m"), ac("Si","cp90","m")],
/* 7*/      [ac("Sol", "cp14","")],
/* 8*/      [ac("Fa#", "cp14","")],
/* 9*/      [ac("Si", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","m")],
/* 10*/      [ac("Mi", "cp14","m")],
/* 11*/      [ac("Si", "cp14","m")],
/* 12*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 13*/      [ac("Si", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","m")],
/* 14*/      [ac("Mi", "cp14","m"), ac("Si","cp90","m")],
/* 15*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 16*/      [ac("Si", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","m")],
/* 17*/      [ac("Mi", "cp14","m")],
/* 18*/      [ac("Si", "cp14","m")],
/* 19*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 20*/      [ac("Si", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","m")],
/* 21*/      [ac("Mi", "cp14","m"), ac("Si","cp90","m")],
/* 22*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 23*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 24*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 25*/      [ac("Si", "cp14","m"), ac("Mi","cp90","m"), ac("Si","cp150","m")],
/* 26*/      [ac("Mi", "cp14","m")],
/* 27*/      [ac("Si", "cp14","m")],
/* 28*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
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
