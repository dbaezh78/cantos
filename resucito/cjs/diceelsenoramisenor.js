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
const NOMBREDELCANTO = "DICE EL SEÑOR A MI SEÑOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 110 (109)",
      dbnos: "51",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "DICE EL SEÑOR A MI SEÑOR:",
/* 2 */        "«SIÉNTATE A MI DERECHA,",
/* 3 */        "HASTA QUE PONGA A TUS ENEMIGOS",
/* 4 */        "COMO ESCABEL DE TUS PIES;",
/* 5 */        "DEBAJO DE TUS PIES,",
/* 6 */        "DEBAJO DE TUS PIES».",
/* 7 */        "El cetro de tu poder",
/* 8 */        "extiende el Señor desde Sión:",
/* 9 */        "¡domina en medio de tus enemigos,",
/* 10 */        "domina en medio de tus enemigos!",
/* 11 */        "«Desde el seno de la aurora",
/* 12 */        "como rocío yo te he engendrado;",
/* 13 */        "desde antes de la aurora",
/* 14 */        "como rocío yo te he engendrado».",
/* 15 */        "DICE EL SEÑOR A MI SEÑOR:...",
/* 16 */        "«SIÉNTATE A MI DERECHA,",
/* 17 */        "HASTA QUE PONGA A TUS ENEMIGOS",
/* 18 */        "COMO ESCABEL DE TUS PIES;",
/* 19 */        "DEBAJO DE TUS PIES,",
/* 20 */        "DEBAJO DE TUS PIES».",
/* 21 */        "El Señor ha jurado y no se arrepiente:",
/* 22 */        "Tú eres sacerdote para siempre,",
/* 23 */        "a semejanza de Melquisedec,",
/* 24 */        "a semejanza de Melquisedec».",
/* 25 */        "Porque el Señor está a tu derecha,",
/* 26 */        "destruirá tus enemigos,",
/* 27 */        "tú juzgarás los pueblos,",
/* 28 */        "sentenciarás a las naciones.",
/* 29 */        "En el camino bebe del torrente,",
/* 30 */        "y levanta la cabeza,",
/* 31 */        "levanta la cabeza,",
/* 32 */        "levanta la cabeza.",
/* 33 */        "DICE EL SEÑOR A MI SEÑOR:...",
/* 34 */        "«SIÉNTATE A MI DERECHA,",
/* 35 */        "HASTA QUE PONGA A TUS ENEMIGOS",
/* 36 */        "COMO ESCABEL DE TUS PIES;",
/* 37 */        "DEBAJO DE TUS PIES,",
/* 38 */        "DEBAJO DE TUS PIES».",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","")],
/* 2*/      [ac("Sol#", "cp14","")],
/* 3*/      [ac("La", "cp14","")],
/* 4*/      [ac("Mi", "cp14","")],
/* 5*/      [ac("Si", "cp","7"), ac("Mi","cp90","")],
/* 6*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 7*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 8*/      [ac("Si", "cp14",""), ac("Sol#","cp90","")],
/* 9*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 10*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 11*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 12*/      [ac("Si", "cp14",""), ac("Sol#","cp90","")],
/* 13*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 14*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 15*/      [ac("Mi", "cp14","")],
/* 16*/      [ac("Sol#", "cp14","")],
/* 17*/      [ac("La", "cp14","")],
/* 18*/      [ac("Mi", "cp14","")],
/* 19*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 20*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 21*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 22*/      [ac("Si", "cp14",""), ac("Sol#","cp90","")],
/* 23*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 24*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 25*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 26*/      [ac("Si", "cp14",""), ac("Sol#","cp90","")],
/* 27*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 28*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 29*/      [ac("Do#", "cp14","m"), ac("Sol#","cp90","")],
/* 30*/      [ac("Si", "cp14",""), ac("Sol#","cp90","")],
/* 31*/      [ac("La", "cp14",""), ac("Mi","cp90","")],
/* 32*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 33*/      [ac("Mi", "cp14","")],
/* 34*/      [ac("Sol#", "cp14","")],
/* 35*/      [ac("La", "cp14","")],
/* 36*/      [ac("Mi", "cp14","")],
/* 37*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
/* 38*/      [ac("Si", "cp14","7"), ac("Mi","cp90","")],
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
