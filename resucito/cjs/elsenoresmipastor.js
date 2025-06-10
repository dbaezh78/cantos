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
const NOMBREDELCANTO = "EL SEÑOR ES MI PASTOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 23 (22)",
      dbnos: "61",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "El Señor es mi pastor,",
/* 2 */        "nada me falta.",
/* 3 */        "En prados de fresca hierba",
/* 4 */        "me apacienta.",
/* 5 */        "EL SEÑOR ES MI PASTOR,",
/* 6 */        "NADA ME FALTA.",
/* 7 */        "HACIA LAS AGUAS DE LA VIDA",
/* 8 */        "ME CONDUCE.",
/* 9 */        "Repara mis fuerzas y me lleva",
/* 10 */        "por el camino del amor.",
/* 11 */        "Repara mis fuerzas y me lleva",
/* 12 */        "para la gloria de su nombre.",
/* 13 */        "EL SEÑOR ES MI PASTOR,...",
/* 14 */        "NADA ME FALTA.",
/* 15 */        "HACIA LAS AGUAS DE LA VIDA",
/* 16 */        "ME CONDUCE.",
/* 17 */        "Aunque camine por valle oscuro,",
/* 18 */        "no temeré,",
/* 19 */        "porque Tú, porque Tú, porque Tú",
/* 20 */        "vas conmigo;",
/* 21 */        "Tu vara y tu cayado me consuelan,",
/* 22 */        "me consuelan.",
/* 23 */        "EL SEÑOR ES MI PASTOR,...",
/* 24 */        "NADA ME FALTA.",
/* 25 */        "HACIA LAS AGUAS DE LA VIDA",
/* 26 */        "ME CONDUCE.",
/* 27 */        "Preparas una mesa ante mí",
/* 28 */        "frente a mis enemigos.",
/* 29 */        "Me unges la cabeza con perfume,",
/* 30 */        "mi copa rebosa.",
/* 31 */        "EL SEÑOR ES MI PASTOR,...",
/* 32 */        "NADA ME FALTA.",
/* 33 */        "HACIA LAS AGUAS DE LA VIDA",
/* 34 */        "ME CONDUCE.",
/* 35 */        "Sí, tu amor y tu alegría",
/* 36 */        "me acompañarán.",
/* 37 */        "Sí, yo viviré",
/* 38 */        "en tu casa eternamente.",
/* 39 */        "EL SEÑOR ES MI PASTOR,...",
/* 40 */        "NADA ME FALTA.",
/* 41 */        "HACIA LAS AGUAS DE LA VIDA",
/* 42 */        "ME CONDUCE.",
/* 43 */        "SÍ, TU AMOR Y TU ALEGRÍA",
/* 44 */        "ME ACOMPAÑARÁN.",
/* 45 */        "SÍ, YO VIVIRÉ",
/* 46 */        "EL SEÑOR ES MI PASTOR,...",
/* 47 */        "NADA ME FALTA.",
/* 48 */        "HACIA LAS AGUAS DE LA VIDA",
/* 49 */        "ME CONDUCE.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 2*/      [ac("Mi", "cp14","")],
/* 3*/      [ac("La", "cp14","m")],
/* 4 */   [ac("", "cp0","")],
/* 5*/      [ac("La", "cp","m"), ac("Fa","cp90","")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8 */   [ac("", "cp0","")],
/* 9*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 10*/      [ac("Mi", "cp14","")],
/* 11*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 12*/      [ac("Mi", "cp14","")],
/* 13*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 14*/      [ac("Mi", "cp14","")],
/* 15*/      [ac("La", "cp14","m")],
/* 16 */   [ac("", "cp0","")],
/* 17*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 18*/      [ac("Mi", "cp14","")],
/* 19*/      [ac("La", "cp14","m")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 22*/      [ac("Mi", "cp14","")],
/* 23*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 24*/      [ac("Mi", "cp14","")],
/* 25*/      [ac("La", "cp14","m")],
/* 26 */   [ac("", "cp0","")],
/* 27*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 28*/      [ac("Mi", "cp14","")],
/* 29*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 30*/      [ac("Mi", "cp14","")],
/* 31*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 32*/      [ac("Mi", "cp14","")],
/* 33*/      [ac("La", "cp14","m")],
/* 34 */   [ac("", "cp0","")],
/* 35*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 36*/      [ac("Mi", "cp14","")],
/* 37*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 38*/      [ac("Mi", "cp14","")],
/* 39*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 40*/      [ac("Mi", "cp14","")],
/* 41*/      [ac("La", "cp14","m")],
/* 42 */   [ac("", "cp0","")],
/* 43*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 44*/      [ac("Mi", "cp14","")],
/* 45*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 46*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 47*/      [ac("Mi", "cp14","")],
/* 48*/      [ac("La", "cp14","m")],
/* 49 */   [ac("", "cp0","")],
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
