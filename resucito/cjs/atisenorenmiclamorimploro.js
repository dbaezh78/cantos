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
const factor = 1.576; // Factor diferente para móviles
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
      const factor = 1.272;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "A TI, SEÑOR, EN MI CLAMOR IMPLORO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 142 (141)",
      dbnos: "4",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "A TI, SEÑOR, EN MI CLAMOR IMPLORO,",
/* 2 */        "A TI, SEÑOR, EN MI CLAMOR SUPLICO,",
/* 3 */        "A TI DERRAMO MI LAMENTO,",
/* 4 */        "A TI MI ANGUSTIA EXPONGO.",
/* 5 */        "Siento que el espíritu en mí se apaga,",
/* 6 */        "más tú conoces mi sendero.",
/* 7 */        "Mira, Señor, que en el camino,",
/* 8 */        "mira, Señor, que me han tendido un lazo.",
/* 9 */        "Mira, Señor, que a la derecha no hay ninguno,",
/* 10 */       "ninguno que me conozca.",
/* 11 */       "Que huye de mí todo consuelo,",
/* 12 */       "que no hay nadie que se cuide de mi alma.",
/* 13 */       "A TI, YO CLAMO SEÑOR,",
/* 14 */       "A TI, YO DIGO: TÚ SOLO ERES MI REFUGIO,",
/* 15 */       "TÚ ERES MI PORCIÓN EN ESTA TIERRA,",
/* 16 */       "MI ÚNICA FELICIDAD.",
/* 17 */       "Escúchame, Señor, que estoy llorando,",
/* 18 */       "estoy tan deprimido.",
/* 19 */       "¡Líbrame tú de estos enemigos",
/* 20 */       "que son más fuertes que yo!",
/* 21 */       "¡Saca mi alma de esta cárcel",
/* 22 */       "y yo daré gracias a tu Nombre!",
/* 23 */       "En torno a mí los santos harán corro,",
/* 24 */       "me felicitarán por tu favor hacia mí.",
/* 25 */       "A TI, SEÑOR, EN MI CLAMOR IMPLORO,",
/* 26 */       "A TI, SEÑOR, EN MI CLAMOR SUPLICO,",
/* 27 */       "A TI DERRAMO MI LAMENTO,",
/* 28 */       "A TI MI ANGUSTIA EXPONGO.",
/* 29 */       "A TI, YO CLAMO SEÑOR,",
/* 30 */       "A TI, YO DIGO: TÚ SOLO ERES MI REFUGIO,",
/* 31 */       "TÚ ERES MI PORCIÓN EN ESTA TIERRA,",
/* 32 */       "MI ÚNICA FELICIDAD.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1 */   [ac("La", "cp14","m"), ac("Re","cp570","m")],
/* 2 */   [ac("La", "cp570","m")],
/* 3 */   [ac("Mi", "cp30","7")],
/* 4 */   [ac("Fa", "cp30",""), ac("Mi","cp368","")],
/* 5 */   [ac("Re", "cp14","m")],
/* 6 */   [ac("Mi", "cp395","7")],
/* 7 */   [ac("La", "cp14","m"), ac("Re","cp419","m")],
/* 8 */   [ac("La", "cp617","m")],
/* 9 */   [ac("Mi", "cp14",""), ac("Mi","cp675","7")],
/* 10 */  [ac("Fa", "cp14",""), ac("Mi","cp336","")],
/* 11 */  [ac("Re", "cp14","m")],
/* 12 */  [ac("Fa", "cp199",""), ac("Mi","cp624","7")],
/* 13 */  [ac("La", "cp14","m"), ac("Sol","cp344","")],
/* 14 */  [ac("Mi", "cp607","7")],
/* 15 */  [ac("Fa", "cp48","")],
/* 16 */  [ac("Mi", "cp290","")],
/* 17 */  [ac("Re", "cp14","m"), ac("Mi","cp534","")],
/* 18 */  [ac("Fa", "cp36",""), ac("Mi","cp263","")],
/* 19 */  [ac("Fa", "cp14","")],
/* 20 */  [ac("Sol", "cp85",""), ac("Mi","cp425","")],
/* 21 */  [ac("La", "cp14","m")],
/* 22 */  [ac("Sol", "cp14",""), ac("Mi","cp376","")],
/* 23 */  [ac("Re", "cp56","m")],
/* 24 */  [ac("Fa", "cp179",""), ac("Mi","cp560","")],
/* 25 */  [ac("La", "cp14","m"), ac("Re","cp570","m")],
/* 26 */  [ac("La", "cp570","m")],
/* 27 */  [ac("Mi", "cp30","7")],
/* 28 */  [ac("Fa", "cp30",""), ac("Mi","cp368","")],
/* 29 */  [ac("La", "cp14","m"), ac("Sol","cp344","")],
/* 30 */  [ac("Mi", "cp607","7")],
/* 31 */  [ac("Fa", "cp48","")],
/* 32 */  [ac("Mi", "cp290","")],
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
