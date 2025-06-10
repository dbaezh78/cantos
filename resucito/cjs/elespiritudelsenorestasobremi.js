
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
const NOMBREDELCANTO = "EL ESPÍRITU DEL SEÑOR ESTÁ SOBRE MÍ";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Lucas 4,18 – Isaías 61,1-3",
      dbnos: "54",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "EL ESPÍRITU DEL SEÑOR ESTÁ SOBRE MÍ,",
/* 2 */        "EL ESPÍRITU DEL SEÑOR ESTÁ SOBRE MÍ.",
/* 3 */        "PUES ME HA UNGIDO,",
/* 4 */        "ME HA ENVIADO,",
/* 5 */        "PARA ANUNCIAR LA SALVACIÓN.",
/* 6 */        "PARA ANUNCIAR LA SALVACIÓN,",
/* 7 */        "PARA ANUNCIAR LA SALVACIÓN",
/* 8 */        "A LOS POBRES",
/* 9 */        "DE QUEBRANTADO CORAZÓN.",
/* 10 */        "Para que los ciegos vean,",
/* 11 */        "los cojos anden,",
/* 12 */        "los leprosos queden limpios,",
/* 13 */        "para anunciar la salvación.",
/* 14 */        "EL ESPÍRITU DEL SEÑOR ESTÁ SOBRE MÍ...",
/* 15 */        "EL ESPÍRITU DEL SEÑOR ESTÁ SOBRE MÍ.",
/* 16 */        "PUES ME HA UNGIDO,",
/* 17 */        "ME HA ENVIADO,",
/* 18 */        "PARA ANUNCIAR LA SALVACIÓN.",
/* 19 */        "PARA ANUNCIAR LA SALVACIÓN,",
/* 20 */        "PARA ANUNCIAR LA SALVACIÓN",
/* 21 */        "A LOS POBRES",
/* 22 */        "DE QUEBRANTADO CORAZÓN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Mi","cp90","La"), ac("m","cp150","")],
/* 2*/      [ac("Mi", "cp14","La"), ac("m","cp90","")],
/* 3*/      [ac("Sol", "cp14","")],
/* 4*/      [ac("Fa", "cp14","")],
/* 5*/      [ac("Mi", "cp","")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Sol", "cp14","")],
/* 8*/      [ac("Fa", "cp14","")],
/* 9*/      [ac("Mi", "cp14","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Sol", "cp14","")],
/* 12*/      [ac("Fa", "cp14","")],
/* 13*/      [ac("Mi", "cp14","")],
/* 14*/      [ac("La", "cp14","m"), ac("Mi","cp90","La"), ac("m","cp150","")],
/* 15*/      [ac("Mi", "cp14","La"), ac("m","cp90","")],
/* 16*/      [ac("Sol", "cp14","")],
/* 17*/      [ac("Fa", "cp14","")],
/* 18*/      [ac("Mi", "cp14","")],
/* 19*/      [ac("La", "cp14","m")],
/* 20*/      [ac("Sol", "cp14","")],
/* 21*/      [ac("Fa", "cp14","")],
/* 22*/      [ac("Mi", "cp14","")],
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
