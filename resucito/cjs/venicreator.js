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
const NOMBREDELCANTO = "VENI CREATOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Himno latin",
      dbnos: "169",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "VEN, ESPÍRITU CREADOR,",
/* 2 */        "VISITA NUESTRA MENTE;",
/* 3 */        "LLENA DE TU AMOR",
/* 4 */        "EL CORAZÓN QUE HAS CREADO.",
/* 5 */        "Oh dulce consolador,",
/* 6 */        "don del Padre altísimo,",
/* 7 */        "agua viva, fuego, amor,",
/* 8 */        "santo crisma del alma.",
/* 9 */        "DEDO DE LA MANO DE DIOS,",
/* 10 */        "PROMESA DEL SALVADOR,",
/* 11 */        "DERRAMA TUS SIETE DONES,",
/* 12 */        "SUSCITA EN NOSOTROS LA PALABRA.",
/* 13 */        "Sé luz del intelecto,",
/* 14 */        "llama ardiente en el corazón,",
/* 15 */        "sana nuestras heridas",
/* 16 */        "con el bálsamo de tu amor.",
/* 17 */        "DEFIÉNDENOS DEL ENEMIGO,",
/* 18 */        "DANOS EL DON DE LA PAZ.",
/* 19 */        "TU GUÍA INVENCIBLE",
/* 20 */        "NOS PRESERVE DEL MAL.",
/* 21 */        "Oh Luz de eterna sabiduría,",
/* 22 */        "desvélanos el gran misterio",
/* 23 */        "de Dios Padre y del Hijo,",
/* 24 */        "unidos en un solo amor.",
/* 25 */        "AMÉN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Sol", "cp14","")],
/* 4*/      [ac("La", "cp14","m")],
/* 5*/      [ac("La", "cp","m"), ac("Sol","cp90","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Sol", "cp14","")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Sol", "cp14","")],
/* 12*/      [ac("La", "cp14","m")],
/* 13*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 14*/      [ac("La", "cp14","m")],
/* 15*/      [ac("Sol", "cp14","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("Sol", "cp14","")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 22*/      [ac("La", "cp14","m")],
/* 23*/      [ac("Sol", "cp14","")],
/* 24*/      [ac("La", "cp14","m")],
/* 25*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
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
