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
const NOMBREDELCANTO = "GRITAD JUBILOSOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Isaías 12,1ss",
      dbnos: "78",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "GRITAD JUBILOSOS:",
/* 2 */        "«QUÉ GRANDE ES EN MEDIO DE TI BIS",
/* 3 */        "EL SANTO DE ISRAEL».",
/* 4 */        "El Señor es mi Dios y mi Salvador,",
/* 5 */        "confiaré y no temeré,",
/* 6 */        "porque mi fuerza y mi canto es el Señor,",
/* 7 */        "Él es mi salvación.",
/* 8 */        "GRITAD JUBILOSOS...",
/* 9 */        "«QUÉ GRANDE ES EN MEDIO DE TI BIS",
/* 10 */        "EL SANTO DE ISRAEL».",
/* 11 */        "C Sacaréis agua con gozo",
/* 12 */        "de las fuentes de la salvación.",
/* 13 */        "Dad gracias al Señor,",
/* 14 */        "invocad su nombre,",
/* 15 */        "proclamad entre los pueblos sus hazañas.",
/* 16 */        "GRITAD JUBILOSOS...",
/* 17 */        "«QUÉ GRANDE ES EN MEDIO DE TI BIS",
/* 18 */        "EL SANTO DE ISRAEL».",
/* 19 */        "Cantad al Señor, que hizo proezas,",
/* 20 */        "anunciadlas por toda la tierra,",
/* 21 */        "gritad jubilosos,",
/* 22 */        "exultad, habitantes de Sión.",
/* 23 */        "GRITAD JUBILOSOS...",
/* 24 */        "«QUÉ GRANDE ES EN MEDIO DE TI BIS",
/* 25 */        "EL SANTO DE ISRAEL».",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Sol", "cp14","")],
/* 3*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Fa", "cp14",""), ac("Sol","cp90","")],
/* 7*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("Sol", "cp14","")],
/* 10*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 11*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 12*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 13*/      [ac("Sol", "cp14","")],
/* 14*/      [ac("Fa", "cp14","")],
/* 15*/      [ac("Mi", "cp14","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("Sol", "cp14","")],
/* 18*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 19*/      [ac("Mi", "cp14",""), ac("La","cp90","m")],
/* 20*/      [ac("Fa", "cp14",""), ac("Sol","cp90","")],
/* 21*/      [ac("Fa", "cp14","")],
/* 22*/      [ac("Mi", "cp14","")],
/* 23*/      [ac("La", "cp14","m")],
/* 24*/      [ac("Sol", "cp14","")],
/* 25*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
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
