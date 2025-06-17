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
const NOMBREDELCANTO = "HACIA TI, MORADA SANTA";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno procesional eucarístico (Kiko Argüello)",
      dbnos: "79",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "HACIA TI, MORADA SANTA,",
/* 2 */        "HACIA TI, TIERRA DEL SALVADOR,",
/* 3 */        "PEREGRINOS, CAMINANTES,",
/* 4 */        "VAMOS HACIA TI.",
/* 5 */        "Venimos a tu mesa,",
/* 6 */        "sellaremos tu pacto,",
/* 7 */        "comeremos tu carne,",
/* 8 */        "tu sangre nos limpiará.",
/* 9 */        "Reinaremos contigo",
/* 10 */        "en tu morada santa,",
/* 11 */        "beberemos tu sangre,",
/* 12 */        "tu Fe nos salvará.",
/* 13 */        "HACIA TI, MORADA SANTA,...",
/* 14 */        "HACIA TI, TIERRA DEL SALVADOR,",
/* 15 */        "PEREGRINOS, CAMINANTES,",
/* 16 */        "VAMOS HACIA TI.",
/* 17 */        "C. Somos tu pueblo santo,",
/* 18 */        "que hoy camina unido,",
/* 19 */        "tú vas entre nosotros,",
/* 20 */        "tu amor nos guiará.",
/* 21 */        "Tú eres el Camino,",
/* 22 */        "tú eres la esperanza,",
/* 23 */        "hermano de los pobres.",
/* 24 */        "Amén. Aleluya.",
/* 25 */        "HACIA TI, MORADA SANTA,...",
/* 26 */        "HACIA TI, TIERRA DEL SALVADOR,",
/* 27 */        "PEREGRINOS, CAMINANTES,",
/* 28 */        "VAMOS HACIA TI.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Sol", "cp14","")],
/* 7*/      [ac("Fa", "cp14","")],
/* 8*/      [ac("Mi", "cp14","")],
/* 9*/      [ac("Lam", "cp14","")],
/* 10*/      [ac("Sol", "cp14","")],
/* 11*/      [ac("Fa", "cp14","")],
/* 12*/      [ac("Mi", "cp14","")],
/* 13*/      [ac("Lam", "cp14","Mi")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 16*/      [ac("Mi", "cp14","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Sol", "cp14","")],
/* 19*/      [ac("Fa", "cp14","")],
/* 20*/      [ac("Mi", "cp14","")],
/* 21*/      [ac("La", "cp14","m")],
/* 22*/      [ac("Sol", "cp14","")],
/* 23*/      [ac("Fa", "cp14","")],
/* 24*/      [ac("Mi", "cp14","")],
/* 25*/      [ac("Lam", "cp14","Mi")],
/* 26*/      [ac("La", "cp14","m")],
/* 27*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 28*/      [ac("Mi", "cp14","")],
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
