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
const NOMBREDELCANTO = "SUBE DIOS ENTRE ACLAMACIONES";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 47 (46)",
      dbnos: "157",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Sube Dios entre aclamaciones,",
/* 2 */        "al son de las trompetas.",
/* 3 */        "SUBE DIOS ENTRE ACLAMACIONES,",
/* 4 */        "AL SON DE LAS TROMPETAS.",
/* 5 */        "¡Pueblos todos, batid palmas,",
/* 6 */        "PUEBLOS TODOS, BATID PALMAS!",
/* 7 */        "¡PUEBLOS TODOS, BATID PALMAS,",
/* 8 */        "PUEBLOS TODOS, BATID PALMAS!",
/* 9 */        "SUBE DIOS ENTRE ACLAMACIONES...",
/* 10 */        "AL SON DE LAS TROMPETAS.",
/* 11 */        "¡Cantad para Dios, cantad,",
/* 12 */        "CANTAD PARA DIOS, CANTAD!",
/* 13 */        "¡CANTAD PARA DIOS, CANTAD,",
/* 14 */        "CANTAD PARA DIOS, CANTAD!",
/* 15 */        "SUBE DIOS ENTRE ACLAMACIONES...",
/* 16 */        "AL SON DE LAS TROMPETAS.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 2*/      [ac("Rem", "cp14","")],
/* 3*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 4*/      [ac("Rem", "cp14","")],
/* 5*/      [ac("Re", "cp","m"), ac("Sol","cp90","m")],
/* 6*/      [ac("Rem", "cp14","")],
/* 7*/      [ac("Sol", "cp14","m")],
/* 8*/      [ac("Rem", "cp14","")],
/* 9*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 10*/      [ac("Rem", "cp14","")],
/* 11*/      [ac("Rem", "cp14",""), ac("Sol","cp90","m")],
/* 12*/      [ac("Rem", "cp14","")],
/* 13*/      [ac("Sol", "cp14","m")],
/* 14*/      [ac("Rem", "cp14","")],
/* 15*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 16*/      [ac("Rem", "cp14","")],
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
