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
const NOMBREDELCANTO = "YA VIENE MI DIOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Villancico (Kiko Argüello)",
      dbnos: "174",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "YA VIENE MI DIOS, YA VIENE MI REY,",
/* 2 */        "YA VIENE MI DIOS, YA VIENE MI REY.",
/* 3 */        "YA VIENE, YA VIENE MI SALVADOR,",
/* 4 */        "YA VIENE, YA VIENE MI REY.",
/* 5 */        "Es un pobre obrero nacido en Belén,",
/* 6 */        "su madre, María, su padre, José.",
/* 7 */        "Ya viene, ya viene mi Salvador,",
/* 8 */        "ya viene, ya viene mi Rey.",
/* 9 */        "YA VIENE MI DIOS, YA VIENE MI REY...",
/* 10 */        "YA VIENE MI DIOS, YA VIENE MI REY.",
/* 11 */        "YA VIENE, YA VIENE MI SALVADOR,",
/* 12 */        "YA VIENE, YA VIENE MI REY.",
/* 13 */        "Él tiene unos ojos que hablan de amor,",
/* 14 */        "que hablan del Padre, que hablan de Dios.",
/* 15 */        "Ya viene, ya viene mi Salvador,",
/* 16 */        "ya viene, ya viene mi Rey.",
/* 17 */        "YA VIENE MI DIOS, YA VIENE MI REY...",
/* 18 */        "YA VIENE MI DIOS, YA VIENE MI REY.",
/* 19 */        "YA VIENE, YA VIENE MI SALVADOR,",
/* 20 */        "YA VIENE, YA VIENE MI REY.",
/* 21 */        "Murió en un madero lleno de dolor,",
/* 22 */        "murió por los hombres muy lleno de amor.",
/* 23 */        "Ya viene, ya viene mi Salvador,",
/* 24 */        "ya viene, ya viene mi Rey.",
/* 25 */        "YA VIENE MI DIOS, YA VIENE MI REY...",
/* 26 */        "YA VIENE MI DIOS, YA VIENE MI REY.",
/* 27 */        "YA VIENE, YA VIENE MI SALVADOR,",
/* 28 */        "YA VIENE, YA VIENE MI REY.",
/* 29 */        "Ha entrado en la muerte, ha entrado mi Dios,",
/* 30 */        "ya viene, ya sube, ya llega el Señor.",
/* 31 */        "Que canten, que griten: ¡Resucitó!",
/* 32 */        "Mi Dios ha vencido, salió por amor.",
/* 33 */        "YA VIENE MI DIOS, YA VIENE MI REY...",
/* 34 */        "YA VIENE MI DIOS, YA VIENE MI REY.",
/* 35 */        "YA VIENE, YA VIENE MI SALVADOR,",
/* 36 */        "YA VIENE, YA VIENE MI REY.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 2*/      [ac("Mi", "cp14","m")],
/* 3*/      [ac("Si", "cp14","7")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5*/      [ac("Mi", "cp","m"), ac("Si","cp90","7")],
/* 6*/      [ac("Mi", "cp14","m")],
/* 7*/      [ac("Si", "cp14","7")],
/* 8*/      [ac("Mi", "cp14","m")],
/* 9*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 10*/      [ac("Mi", "cp14","m")],
/* 11*/      [ac("Si", "cp14","7")],
/* 12*/      [ac("Mi", "cp14","m")],
/* 13*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 14*/      [ac("Mi", "cp14","m")],
/* 15*/      [ac("Si", "cp14","7")],
/* 16*/      [ac("Mi", "cp14","m")],
/* 17*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 18*/      [ac("Mi", "cp14","m")],
/* 19*/      [ac("Si", "cp14","7")],
/* 20*/      [ac("Mi", "cp14","m")],
/* 21*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 22*/      [ac("Mi", "cp14","m")],
/* 23*/      [ac("Si", "cp14","7")],
/* 24*/      [ac("Mi", "cp14","m")],
/* 25*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 26*/      [ac("Mi", "cp14","m")],
/* 27*/      [ac("Si", "cp14","7")],
/* 28*/      [ac("Mi", "cp14","m")],
/* 29*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 30*/      [ac("Mi", "cp14","m")],
/* 31*/      [ac("Si", "cp14","7")],
/* 32*/      [ac("Mi", "cp14","m")],
/* 33*/      [ac("Mi", "cp14","m"), ac("Si","cp90","7")],
/* 34*/      [ac("Mi", "cp14","m")],
/* 35*/      [ac("Si", "cp14","7")],
/* 36*/      [ac("Mi", "cp14","m")],
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
