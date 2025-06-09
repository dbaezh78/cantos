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
const NOMBREDELCANTO = "DELANTE DE LOS ÁNGELES";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 138 (137)",
      dbnos: "49",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "DELANTE DE LOS ÁNGELES",
/* 2 */        "PARA TI YO CANTARÉ, SEÑOR.",
/* 3 */        "DELANTE DE LOS ÁNGELES",
/* 4 */        "PARA TI SALMODIARÉ.",
/* 5 */        "DARÉ GRACIAS A TU NOMBRE,",
/* 6 */        "PARA TI SALMODIARÉ.",
/* 7 */        "Te doy gracias, Señor, de todo corazón,",
/* 8 */        "porque tus promesas han superado tu fama.",
/* 9 */        "Cuando te invoqué, tú me escuchaste,",
/* 10 */        "diste fuerza y vigor a mi alma.",
/* 11 */        "DELANTE DE LOS ÁNGELES ...",
/* 12 */        "PARA TI YO CANTARÉ, SEÑOR.",
/* 13 */        "DELANTE DE LOS ÁNGELES",
/* 14 */        "PARA TI SALMODIARÉ.",
/* 15 */        "DARÉ GRACIAS A TU NOMBRE,",
/* 16 */        "PARA TI SALMODIARÉ.",
/* 17 */        "Te darán gracias, Señor,",
/* 18 */        "los reyes de la tierra,",
/* 19 */        "al escuchar las palabras de tu boca;",
/* 20 */        "y cantarán en el camino del Señor,",
/* 21 */        "dirán: «¡Qué grande es tu amor!».",
/* 22 */        "DELANTE DE LOS ÁNGELES ...",
/* 23 */        "PARA TI YO CANTARÉ, SEÑOR.",
/* 24 */        "DELANTE DE LOS ÁNGELES",
/* 25 */        "PARA TI SALMODIARÉ.",
/* 26 */        "DARÉ GRACIAS A TU NOMBRE,",
/* 27 */        "PARA TI SALMODIARÉ.",
/* 28 */        "Sublime es el Señor,",
/* 29 */        "que mira hacia el humilde,",
/* 30 */        "conoce al soberbio, le mira desde lejos.",
/* 31 */        "Mas cuando yo camino",
/* 32 */        "en medio de la angustia,",
/* 33 */        "extiende su mano y su diestra me salva.",
/* 34 */        "DELANTE DE LOS ÁNGELES ...",
/* 35 */        "PARA TI YO CANTARÉ, SEÑOR.",
/* 36 */        "DELANTE DE LOS ÁNGELES",
/* 37 */        "PARA TI SALMODIARÉ.",
/* 38 */        "DARÉ GRACIAS A TU NOMBRE,",
/* 39 */        "PARA TI SALMODIARÉ.",
/* 40 */        "El Señor terminará en mí lo comenzado,",
/* 41 */        "porque es eterno su amor",
/* 42 */        "No abandona la obra de sus manos.",
/* 43 */        "¡Señor, no nos abandones!",
/* 44 */        "DELANTE DE LOS ÁNGELES ...",
/* 45 */        "DELANTE DE LOS ÁNGELES ...",
/* 46 */        "PARA TI YO CANTARÉ, SEÑOR.",
/* 47 */        "DELANTE DE LOS ÁNGELES",
/* 48 */        "PARA TI SALMODIARÉ.",
/* 49 */        "DARÉ GRACIAS A TU NOMBRE,",
/* 50 */        "PARA TI SALMODIARÉ.",

],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 2*/      [ac("Re", "cp14","m9")],
/* 3*/      [ac("Sol", "cp14","")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("Re", "cp","m9")],
/* 6*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 7*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("Re","cp150","m9")],
/* 8*/      [ac("Sol", "cp14",""), ac("Mi","cp90","")],
/* 9*/      [ac("Re", "cp14","m9")],
/* 10*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 11*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 12*/      [ac("Re", "cp14","m9")],
/* 13*/      [ac("Sol", "cp14","")],
/* 14*/      [ac("Mi", "cp14","")],
/* 15*/      [ac("Re", "cp14","m9")],
/* 16*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 17*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 18*/      [ac("Re", "cp14","m9")],
/* 19*/      [ac("Sol", "cp14",""), ac("Mi","cp90","")],
/* 20*/      [ac("Re", "cp14","m9")],
/* 21*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 22*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 23*/      [ac("Re", "cp14","m9")],
/* 24*/      [ac("Sol", "cp14","")],
/* 25*/      [ac("Mi", "cp14","")],
/* 26*/      [ac("Re", "cp14","m9")],
/* 27*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 28*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 29*/      [ac("Re", "cp14","m9")],
/* 30*/      [ac("Sol", "cp14",""), ac("Mi","cp90","")],
/* 31*/      [ac("Re", "cp14","m9")],
/* 32*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 33*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 34*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 35*/      [ac("Re", "cp14","m9")],
/* 36*/      [ac("Sol", "cp14","")],
/* 37*/      [ac("Mi", "cp14","")],
/* 38*/      [ac("Re", "cp14","m9")],
/* 39*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 40*/      [ac("Do", "cp14",""), ac("Mi","cp90",""), ac("Re","cp150","m9")],
/* 41*/      [ac("Sol", "cp14",""), ac("Mi","cp90","")],
/* 42*/      [ac("Re", "cp14","m9")],
/* 43*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 44*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 45*/      [ac("Do", "cp14",""), ac("Mi","cp90","")],
/* 46*/      [ac("Re", "cp14","m9")],
/* 47*/      [ac("Sol", "cp14","")],
/* 48*/      [ac("Mi", "cp14","")],
/* 49*/      [ac("Re", "cp14","m9")],
/* 50*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
],/*
╔════════════════════════════════════════════════════════════════╗
║                Estructura para Asamblea (texto)                ║
╚════════════════════════════════════════════════════════════════╝  */
      asamblea: [
      ],
      asambleaAcordes: [
      ]
  };/*
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
