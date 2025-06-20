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
const NOMBREDELCANTO = "PORQUE MI YUGO ES SUAVE";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Mateo 11,28ss",
      dbnos: "135",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Venid a mí vosotros todos",
/* 2 */        "que estáis cansados y agobiados,",
/* 3 */        "que yo os aliviaré,",
/* 4 */        "que yo os aliviaré.",
/* 5 */        "Tomad sobre vosotros mi yugo",
/* 6 */        "y aprended de mí,",
/* 7 */        "que soy manso y humilde de corazón,",
/* 8 */        "y hallaréis descanso para vosotros,",
/* 9 */        "y encontraréis reposo para vuestras almas.",
/* 10 */        "PORQUE MI YUGO ES SUAVE,",
/* 11 */        "PORQUE MI YUGO ES SUAVE",
/* 12 */        "Y MI CARGA LIGERA.",
/* 13 */        "PORQUE MI YUGO ES SUAVE",
/* 14 */        "Y MI CARGA LIGERA.",
/* 15 */        "Venid a mí...",
/* 16 */        "Venid a mí vosotros todos",
/* 17 */        "que estáis cansados y agobiados,",
/* 18 */        "que yo os aliviaré,",
/* 19 */        "que yo os aliviaré.",
/* 20 */        "Tomad sobre vosotros mi yugo",
/* 21 */        "y aprended de mí,",
/* 22 */        "que soy manso y humilde de corazón,",
/* 23 */        "y hallaréis descanso para vosotros,",
/* 24 */        "y encontraréis reposo para vuestras almas.",
/* 25 */        "PORQUE MI YUGO ES SUAVE,...",
/* 26 */        "PORQUE MI YUGO ES SUAVE",
/* 27 */        "Y MI CARGA LIGERA.",
/* 28 */        "PORQUE MI YUGO ES SUAVE",
/* 29 */        "Y MI CARGA LIGERA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 5*/      [ac("Do", "cp","")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7*/      [ac("Lam", "cp14","")],
/* 8*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 9*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 10*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 11*/      [ac("Fa", "cp14","")],
/* 12*/      [ac("Mi", "cp14","")],
/* 13*/      [ac("Fa", "cp14","")],
/* 14*/      [ac("Mi", "cp14","")],
/* 15*/      [ac("Do", "cp14","")],
/* 16*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 19*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 20*/      [ac("Do", "cp14","")],
/* 21*/      [ac("Mi", "cp14","")],
/* 22*/      [ac("Lam", "cp14","")],
/* 23*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 24*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 25*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 26*/      [ac("Fa", "cp14","")],
/* 27*/      [ac("Mi", "cp14","")],
/* 28*/      [ac("Fa", "cp14","")],
/* 29*/      [ac("Mi", "cp14","")],
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
