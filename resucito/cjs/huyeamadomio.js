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
const NOMBREDELCANTO = "HUYE, AMADO MÍO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Cantar de los Cantares 8,10-14",
      dbnos: "91",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Tú, que vives en los jardines,",
/* 2 */        "donde tus compañeros te están escuchando:",
/* 3 */        "hazme oír tu voz,",
/* 4 */        "hazme oír tu voz.",
/* 5 */        "HUYE, AMADO MÍO,",
/* 6 */        "COMO UNA GACELA,",
/* 7 */        "COMO UN CERVATILLO,*",
/* 8 */        "HASTA EL MONTE DE LAS BALSAMERAS.",
/* 9 */        "Yo soy para mi amado",
/* 10 */        "como aquella que encontró la paz.",
/* 11 */        "Mi viña está aquí, está ante mí,",
/* 12 */        "Mi viña está aquí, está ante mí.",
/* 13 */        "HUYE, AMADO MÍO,...",
/* 14 */        "COMO UNA GACELA,",
/* 15 */        "COMO UN CERVATILLO,*",
/* 16 */        "HASTA EL MONTE DE LAS BALSAMERAS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 2*/      [ac("Mi7", "cp14","")],
/* 3*/      [ac("Fa", "cp14","")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("La", "cp","")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7*/      [ac("Fa#", "cp14","m")],
/* 8*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
/* 9*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 12*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 13*/      [ac("La", "cp14","")],
/* 14*/      [ac("Mi", "cp14","")],
/* 15*/      [ac("Fa#", "cp14","m")],
/* 16*/      [ac("Mi", "cp14",""), ac("La","cp90","")],
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
