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
const NOMBREDELCANTO = "JESÚS RECORRÍA TODAS LAS CIUDADES";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Mateo 9,35ss; 10 ",
      dbnos: "95",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Jesús recorría todas las ciudades.",
/* 2 */        "Jesús de pueblo en pueblo",
/* 3 */        "anunciaba el Reino.",
/* 4 */        "Y viendo las gentes que lo seguían",
/* 5 */        "se conmovió.",
/* 6 */        "ESTABAN CANSADOS,",
/* 7 */        "ESTABAN ABATIDOS",
/* 8 */        "COMO OVEJAS SIN PASTOR.",
/* 9 */        "Entonces Jesús dijo a sus discípulos:",
/* 10 */        "«La mies es grande,",
/* 11 */        "es verdaderamente grande,",
/* 12 */        "y los obreros son pocos.",
/* 13 */        "Rogad, hermanos, al dueño de la mies",
/* 14 */        "que envíe obreros a su mies.",
/* 15 */        "Mirad que yo os envío",
/* 16 */        "como ovejas entre lobos.",
/* 17 */        "Sed prudentes como serpientes",
/* 18 */        "y sencillos como palomas,",
/* 19 */        "A COMO PALOMAS.",
/* 20 */        "No llevéis ni bolsa ni dinero,",
/* 21 */        "ni alforja, ni calzado.",
/* 22 */        "Y anunciad que el Reino está cerca,",
/* 23 */        "Cristo ha resucitado y viene con nosotros,",
/* 24 */        "VIENE CON NOSOTROS.",
/* 25 */        "El que ama a su padre o a su madre más que a mí,",
/* 26 */        "NO ES DIGNO DE MÍ, NO ES DIGNO DE MÍ.",
/* 27 */        "El que ama a su hijo o a su hija más que a mí,",
/* 28 */        "NO ES DIGNO DE MÍ, NO ES DIGNO DE MÍ.",
/* 29 */        "El que no tome su cruz y me siga,",
/* 30 */        "NO ES DIGNO DE MÍ, NO ES DIGNO DE MÍ.",
/* 31 */        "Porque el que busca en este mundo su vida,",
/* 32 */        "LA PERDERÁ, LA PERDERÁ.",
/* 33 */        "Y el que pierda su vida por el amor mío,",
/* 34 */        "LA ENCONTRARÁ, LA ENCONTRARÁ.",
/* 35 */        "Quien os escucha,",
/* 36 */        "ME ESCUCHA A MÍ.",
/* 37 */        "Quien os acoge,",
/* 38 */        "ME ACOGE A MÍ.",
/* 39 */        "QUIEN ME ACOGE A MÍ,",
/* 40 */        "ACOGE A DIOS, ACOGE A DIOS».",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Fa","cp90",""), ac("La","cp150","m")],
/* 2*/      [ac("Fa", "cp14","")],
/* 3*/      [ac("La", "cp14","m")],
/* 4*/      [ac("Re", "cp14","m"), ac("Mi","cp90","7")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Mi", "cp14","m")],
/* 7*/      [ac("Fa", "cp14","")],
/* 8*/      [ac("Mi", "cp14","")],
/* 9*/      [ac("La", "cp14","m"), ac("Fa","cp90",""), ac("Mi","cp150","7")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Sol", "cp14","")],
/* 12*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 13*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 14*/      [ac("La", "cp14","m"), ac("Mi","cp90","")],
/* 15*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 16*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 17*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 18*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 19*/      [ac("Lam", "cp14","")],
/* 20*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 21*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 22*/      [ac("Do", "cp14",""), ac("Sol","cp90","")],
/* 23*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 24*/      [ac("La", "cp14","m")],
/* 25*/      [ac("Do", "cp14","")],
/* 26*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 27*/      [ac("Do", "cp14","")],
/* 28*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 29*/      [ac("Do", "cp14","")],
/* 30*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 31*/      [ac("Do", "cp14","")],
/* 32*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 33*/      [ac("Do", "cp14","")],
/* 34*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 35*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 36 */   [ac("", "cp0","")],
/* 37*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 38 */   [ac("", "cp0","")],
/* 39*/      [ac("Sol", "cp14","")],
/* 40*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
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
