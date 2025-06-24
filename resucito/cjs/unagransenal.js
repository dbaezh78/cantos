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
const NOMBREDELCANTO = "UNA GRAN SEÑAL";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Apocalipsis 12",
      dbnos: "163",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "UNA GRAN SEÑAL APARECIÓ EN EL CIELO:",
/* 2 */        "UNA MUJER, UNA MUJER VESTIDA DEL SOL,",
/* 3 */        "CON LA LUNA BAJO SUS PIES,",
/* 4 */        "Y UNA CORONA DE DOCE ESTRELLAS;",
/* 5 */        "ESTÁ ENCINTA, Y GRITA",
/* 6 */        "CON LOS TORMENTOS DE DAR A LUZ.",
/* 7 */        "Y apareció otra señal en el cielo:",
/* 8 */        "un enorme Dragón rojo,",
/* 9 */        "con siete cabezas y diez cuernos.",
/* 10 */        "El Dragón se detuvo delante de la Mujer,",
/* 11 */        "de la Mujer que iba a dar a luz,",
/* 12 */        "para devorar a su Hijo en cuanto naciera.",
/* 13 */        "Y la Mujer dio a luz un Hijo varón,",
/* 14 */        "aquel que ha de regir las naciones de la tierra,",
/* 15 */        "y su Hijo fue arrebatado",
/* 16 */        "hasta Dios y hasta su trono.",
/* 17 */        "UNA GRAN SEÑAL APARECIÓ EN EL CIELO...",
/* 18 */        "UNA MUJER, UNA MUJER VESTIDA DEL SOL,",
/* 19 */        "CON LA LUNA BAJO SUS PIES,",
/* 20 */        "Y UNA CORONA DE DOCE ESTRELLAS;",
/* 21 */        "ESTÁ ENCINTA, Y GRITA",
/* 22 */        "CON LOS TORMENTOS DE DAR A LUZ.",
/* 23 */        "Entonces se entabló una batalla en el cielo:",
/* 24 */        "Miguel y sus Ángeles combatieron",
/* 25 */        "con el Dragón, con el gran Dragón.",
/* 26 */        "También el Dragón y sus ángeles combatieron,",
/* 27 */        "pero no prevalecieron",
/* 28 */        "y no hubo ya lugar para ellos en el cielo.",
/* 29 */        "Y fue arrojado el Dragón, el gran Dragón,",
/* 30 */        "la Serpiente antigua, el llamado Diablo",
/* 31 */        "y Satanás, el seductor del mundo entero,",
/* 32 */        "fue arrojado a la tierra y sus ángeles con él.",
/* 33 */        "UNA GRAN SEÑAL APARECIÓ EN EL CIELO...",
/* 34 */        "UNA MUJER, UNA MUJER VESTIDA DEL SOL,",
/* 35 */        "CON LA LUNA BAJO SUS PIES,",
/* 36 */        "Y UNA CORONA DE DOCE ESTRELLAS;",
/* 37 */        "ESTÁ ENCINTA, Y GRITA",
/* 38 */        "CON LOS TORMENTOS DE DAR A LUZ.",
/* 39 */        "C Cuando el Dragón vio que había sido",
/* 40 */        "arrojado a la tierra, persiguió a la Mujer",
/* 41 */        "que había dado a luz al Hijo varón.",
/* 42 */        "Pero se le dieron a la Mujer las dos alas",
/* 43 */        "del águila grande, para volar al desierto,",
/* 44 */        "donde tiene que ser alimentada",
/* 45 */        "un tiempo, dos tiempos y medio tiempo.",
/* 46 */        "Entonces, despechado contra la Mujer,",
/* 47 */        "el gran Dragón, se fue a hacer la guerra",
/* 48 */        "al resto de sus hijos",
/* 49 */        "los que guardan los mandamientos de Dios",
/* 50 */        "y mantienen el testimonio de Jesús.",
/* 51 */        "LA LA LA, LA LA, LA LA...",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m")],
/* 2*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 3 */   [ac("", "cp0","")],
/* 4*/      [ac("Sol", "cp14","")],
/* 5*/      [ac("La", "cp","m")],
/* 6*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 7*/      [ac("La", "cp14","m")],
/* 8*/      [ac("Sol", "cp14","")],
/* 9*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 10*/      [ac("La", "cp14","m")],
/* 11*/      [ac("Sol", "cp14","")],
/* 12*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 13*/      [ac("La", "cp14","m")],
/* 14*/      [ac("Sol", "cp14","")],
/* 15*/      [ac("Fa", "cp14","")],
/* 16*/      [ac("Mi", "cp14","")],
/* 17*/      [ac("La", "cp14","m")],
/* 18*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 19 */   [ac("", "cp0","")],
/* 20*/      [ac("Sol", "cp14","")],
/* 21*/      [ac("La", "cp14","m")],
/* 22*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 23*/      [ac("La", "cp14","m")],
/* 24*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 25*/      [ac("Mi", "cp14","")],
/* 26*/      [ac("La", "cp14","m"), ac("Sol","cp90","")],
/* 27*/      [ac("Fa", "cp14","")],
/* 28*/      [ac("Mi", "cp14","")],
/* 29*/      [ac("La", "cp14","m")],
/* 30 */   [ac("", "cp0","")],
/* 31*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 32*/      [ac("Mi", "cp14","")],
/* 33*/      [ac("La", "cp14","m")],
/* 34*/      [ac("Sol", "cp14",""), ac("La","cp90","m")],
/* 35 */   [ac("", "cp0","")],
/* 36*/      [ac("Sol", "cp14","")],
/* 37*/      [ac("La", "cp14","m")],
/* 38*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 39*/      [ac("La", "cp14","m")],
/* 40*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 41*/      [ac("Mi", "cp14","")],
/* 42*/      [ac("La", "cp14","m")],
/* 43*/      [ac("Sol", "cp14",""), ac("Fa","cp90","")],
/* 44 */   [ac("", "cp0","")],
/* 45*/      [ac("Mi", "cp14","")],
/* 46*/      [ac("La", "cp14","m")],
/* 47*/      [ac("Sol", "cp14","")],
/* 48*/      [ac("Fa", "cp14","")],
/* 49 */   [ac("", "cp0","")],
/* 50*/      [ac("Mi", "cp14","")],
/* 51 */   [ac("", "cp0","")],
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
