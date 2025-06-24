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
const NOMBREDELCANTO = "TE HE MANIFESTADO MI PECADO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 32 (31)",
      dbnos: "159",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "TE HE MANIFESTADO MI PECADO,",
/* 2 */        "NO HE TENIDO ESCONDIDOS MIS ERRORES.",
/* 3 */        "HE DICHO: «CONFESARÉ AL SEÑOR MI CULPA».",
/* 4 */        "Y TÚ HAS PERDONADO",
/* 5 */        "LA MALICIA DE MI PECADO.",
/* 6 */        "Dichoso el hombre",
/* 7 */        "al que le son perdonadas sus culpas",
/* 8 */        "y que le fueron cubiertos sus pecados.",
/* 9 */        "Dichoso el hombre",
/* 10 */        "al que el Señor no imputa algún mal",
/* 11 */        "y en cuyo espíritu no hay engaño.",
/* 12 */        "TE HE MANIFESTADO MI PECADO...",
/* 13 */        "NO HE TENIDO ESCONDIDOS MIS ERRORES.",
/* 14 */        "HE DICHO: «CONFESARÉ AL SEÑOR MI CULPA•.",
/* 15 */        "Y TÚ HAS PERDONADO",
/* 16 */        "LA MALICIA DE MI PECADO.",
/* 17 */        "C Callaba y se consumían mis huesos",
/* 18 */        "gimiendo todo el día,",
/* 19 */        "porque día y noche",
/* 20 */        "pesaba tu mano sobre mí,",
/* 21 */        "como estío de verano",
/* 22 */        "estaba árido mi corazón.",
/* 23 */        "Mas te he manifestado mi pecado,",
/* 24 */        "no he tenido escondidos mis errores,",
/* 25 */        "he dicho: «Confesaré al Señor mi culpa».",
/* 26 */        "Y tú has perdonado la malicia de mi pecado.",
/* 27 */        "A. TE HE MANIFESTADO MI PECADO ...",
/* 28 */        "C. Por eso te suplican tus fieles",
/* 29 */        "en el día de la angustia,",
/* 30 */        "cuando las aguas caudalosas se desbordan,",
/* 31 */        "mas a él no le alcanzarán.",
/* 32 */        "Tú eres mi refugio,",
/* 33 */        "tú me preservas del peligro,",
/* 34 */        "me rodeas de cantos de salvación,",
/* 35 */        "me dices: «Te haré sabio,",
/* 36 */        "te indicaré el camino de la vida».",
/* 37 */        "TE HE MANIFESTADO MI PECADO...",
/* 38 */        "NO HE TENIDO ESCONDIDOS MIS ERRORES.",
/* 39 */        "HE DICHO: «CONFESARÉ AL SEÑOR MI CULPA».",
/* 40 */        "Y TÚ HAS PERDONADO",
/* 41 */        "LA MALICIA DE MI PECADO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 2*/      [ac("La", "cp14","m")],
/* 3*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 4*/      [ac("Sol", "cp14","")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("La", "cp14","m")],
/* 7*/      [ac("Re", "cp14","m")],
/* 8*/      [ac("La", "cp14","m")],
/* 9*/      [ac("Sol", "cp14","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 12*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 15*/      [ac("Sol", "cp14","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 18*/      [ac("La", "cp14","m")],
/* 19*/      [ac("Sol", "cp14","")],
/* 20*/      [ac("La", "cp14","m")],
/* 21*/      [ac("Sol", "cp14","")],
/* 22*/      [ac("Lam", "cp14","")],
/* 23*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 24*/      [ac("La", "cp14","m")],
/* 25*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 26*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 27*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 28*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 29*/      [ac("La", "cp14","m")],
/* 30*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 31*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 32*/      [ac("Sol", "cp14","")],
/* 33*/      [ac("Lam", "cp14","")],
/* 34*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 35*/      [ac("Sol", "cp14","")],
/* 36*/      [ac("La", "cp14","m")],
/* 37*/      [ac("La", "cp14","m"), ac("Re","cp90","m")],
/* 38*/      [ac("La", "cp14","m")],
/* 39*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 40*/      [ac("Sol", "cp14","")],
/* 41*/      [ac("La", "cp14","m")],
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
