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
const NOMBREDELCANTO = "EL NECIO PIENSA QUE DIOS NO EXISTE";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 14 (13)",
      dbnos: "58",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "EL NECIO PIENSA",
/* 2 */        "QUE DIOS NO EXISTE,",
/* 3 */        "SE HAN CORROMPIDO",
/* 4 */        "Y HACEN COSAS ABOMINABLES.",
/* 5 */        "NO HAY QUIEN OBRE EL BIEN,",
/* 6 */        "NO HAY QUIEN OBRE EL BIEN.",
/* 7 */        "El Señor desde el cielo",
/* 8 */        "se inclina hacia los hombres,",
/* 9 */        "para ver si hay alguno que sea justo,",
/* 10 */        "un hombre que busque a Dios,",
/* 11 */        "un hombre que busque a Dios.",
/* 12 */        "Todos se han desviado,",
/* 13 */        "están pervertidos.",
/* 14 */        "Nadie que haga el bien",
/* 15 */        "ni siquiera uno.",
/* 16 */        "EL NECIO PIENSA...",
/* 17 */        "QUE DIOS NO EXISTE,",
/* 18 */        "SE HAN CORROMPIDO",
/* 19 */        "Y HACEN COSAS ABOMINABLES.",
/* 20 */        "NO HAY QUIEN OBRE EL BIEN,",
/* 21 */        "NO HAY QUIEN OBRE EL BIEN.",
/* 22 */        "No entienden nada los malvados",
/* 23 */        "que devoran a mi pueblo como pan.",
/* 24 */        "No invocan nunca al Señor,",
/* 25 */        "mas temblarán de espanto.",
/* 26 */        "Porque Dios está con el justo:",
/* 27 */        "el Señor es su refugio.",
/* 28 */        "Porque Dios está con el justo:",
/* 29 */        "el Señor es su refugio.",
/* 30 */        "PORQUE DIOS ESTÁ CON EL JUSTO:",
/* 31 */        "EL SEÑOR ES SU REFUGIO.",
/* 32 */        "EL NECIO PIENSA...",
/* 33 */        "QUE DIOS NO EXISTE,",
/* 34 */        "SE HAN CORROMPIDO",
/* 35 */        "Y HACEN COSAS ABOMINABLES.",
/* 36 */        "NO HAY QUIEN OBRE EL BIEN,",
/* 37 */        "NO HAY QUIEN OBRE EL BIEN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","m")],
/* 2*/      [ac("La", "cp14","7")],
/* 3*/      [ac("Re", "cp14","m")],
/* 4 */   [ac("", "cp0","")],
/* 5*/      [ac("Sol", "cp","m"), ac("La","cp90","7")],
/* 6*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 7*/      [ac("Re", "cp14","m")],
/* 8*/      [ac("La", "cp14","7")],
/* 9*/      [ac("Re", "cp14","m")],
/* 10*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 11*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 12*/      [ac("Fa", "cp14","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Si♭", "cp14","")],
/* 15*/      [ac("La", "cp14","7")],
/* 16*/      [ac("Re", "cp14","m")],
/* 17*/      [ac("La", "cp14","7")],
/* 18*/      [ac("Re", "cp14","m")],
/* 19 */   [ac("", "cp0","")],
/* 20*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 21*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 22*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 23*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 24*/      [ac("Si♭", "cp14","")],
/* 25*/      [ac("La", "cp14","7")],
/* 26*/      [ac("Fa", "cp14",""), ac("La","cp90","7")],
/* 27*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 28*/      [ac("Re", "cp14","m"), ac("Do","cp90",""), ac("La","cp150","7")],
/* 29*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 30*/      [ac("Re", "cp14","m"), ac("Do","cp90",""), ac("La","cp150","7")],
/* 31*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
/* 32*/      [ac("Re", "cp14","m")],
/* 33*/      [ac("La", "cp14","7")],
/* 34*/      [ac("Re", "cp14","m")],
/* 35 */   [ac("", "cp0","")],
/* 36*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 37*/      [ac("Si♭", "cp14",""), ac("La","cp90","7")],
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
