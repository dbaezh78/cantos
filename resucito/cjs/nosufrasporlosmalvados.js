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
const NOMBREDELCANTO = "NO SUFRAS POR LOS MALVADOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 37 (36)",
      dbnos: "231",
      catg: "CATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "NO SUFRAS POR LOS MALVADOS,",
/* 2 */        "NO ENVIDIES A LOS QUE OBRAN MAL.",
/* 3 */        "SE SECARÁN COMO LA HIERBA,",
/* 4 */        "COMO EL CÉSPED SE AGOSTARÁN.",
/* 5 */        "Confía en el Señor y haz el bien,",
/* 6 */        "habita tu tierra y sé leal,",
/* 7 */        "sea el Señor tu delicia",
/* 8 */        "y él te dará lo que ansía tu corazón.",
/* 9 */        "Encomienda tu camino al Señor",
/* 10 */        "y espera en Él,",
/* 11 */        "confía en Él, que actuará;",
/* 12 */        "hará brillar tu justicia,",
/* 13 */        "hará brillar tu lealtad.",
/* 14 */        "NO SUFRAS POR LOS MALVADOS...",
/* 15 */        "NO ENVIDIES A LOS QUE OBRAN MAL.",
/* 16 */        "SE SECARÁN COMO LA HIERBA,",
/* 17 */        "COMO EL CÉSPED SE AGOSTARÁN.",
/* 18 */        "Cohíbe tu ira, reprime el coraje,",
/* 19 */        "no te exasperes, no sea que obres mal;",
/* 20 */        "los que obran mal son excluidos,",
/* 21 */        "los que esperan en el Señor",
/* 22 */        "en la tierra entrarán.",
/* 23 */        "Aguarda un momento,",
/* 24 */        "desapareció el malvado,",
/* 25 */        "fíjate en su sitio: ya no está;",
/* 26 */        "en cambio los mansos poseen la tierra,",
/* 27 */        "gozan de paz, de paz disfrutarán.",
/* 28 */        "NO SUFRAS POR LOS MALVADOS...",
/* 29 */        "NO ENVIDIES A LOS QUE OBRAN MAL.",
/* 30 */        "SE SECARÁN COMO LA HIERBA,",
/* 31 */        "COMO EL CÉSPED SE AGOSTARÁN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 2*/      [ac("Mi", "cp14","")],
/* 3*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 4*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 5*/      [ac("La", "cp","m"), ac("Fa","cp90","")],
/* 6*/      [ac("Mi", "cp14","")],
/* 7*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 8*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 9*/      [ac("La", "cp14","m")],
/* 10*/      [ac("Fa", "cp14","")],
/* 11*/      [ac("Mi", "cp14","")],
/* 12*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 13*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 14*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 15*/      [ac("Mi", "cp14","")],
/* 16*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 17*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 18*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 19*/      [ac("Mi", "cp14","")],
/* 20*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 21*/      [ac("Fa", "cp14","")],
/* 22*/      [ac("Mi", "cp14","")],
/* 23*/      [ac("La", "cp14","m")],
/* 24*/      [ac("Fa", "cp14","")],
/* 25*/      [ac("Mi", "cp14","")],
/* 26*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 27*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 28*/      [ac("La", "cp14","m"), ac("Fa","cp90","")],
/* 29*/      [ac("Mi", "cp14","")],
/* 30*/      [ac("Re", "cp14","m"), ac("Mi","cp90","")],
/* 31*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
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
