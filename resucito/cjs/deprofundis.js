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
const factor = 1.32; // Factor diferente para móviles
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
      const factor = 0.99;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "DE PROFUNDIS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 130 (129)",
      dbnos: "47",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "De lo profundo a ti grito, Señor:",
/* 2 */        "Señor escucha mi voz.",
/* 3 */        "¡Estén tus oídos atentos",
/* 4 */        "a la voz de mi súplica!",
/* 5 */        "DE LO PROFUNDO A TI GRITO, SEÑOR:",
/* 6 */        "SEÑOR ESCUCHA MI VOZ.",
/* 7 */        "¡ESTÉN TUS OÍDOS ATENTOS",
/* 8 */        "A LA VOZ DE MI SÚPLICA!",
/* 9 */        "Si llevas cuentas de los pecados, Señor,",
/* 10 */        "¿quién se salvará?, ¿quién se salvará?",
/* 11 */        "Mas cerca de ti está el perdón,",
/* 12 */        "sólo en ti se encuentra el amor.",
/* 13 */        "MAS CERCA DE TI ESTÁ EL PERDÓN,",
/* 14 */        "SÓLO EN TI SE ENCUENTRA EL AMOR.",
/* 15 */        "Yo espero en el Señor",
/* 16 */        "mi alma espera en su palabra;",
/* 17 */        "mi alma aguarda al Señor",
/* 18 */        "más que el centinela la aurora;",
/* 19 */        "Israel espera al Señor",
/* 20 */        "más que el centinela espera a la aurora.",
/* 21 */        "Porque solo en el Señor está el amor,",
/* 22 */        "sólo en él se encuentra el perdón.",
/* 23 */        "PORQUE SOLO EN EL SEÑOR ESTÁ EL AMOR,",
/* 24 */        "SÓLO EN ÉL SE ENCUENTRA EL PERDÓN.",
/* 25 */        "El Señor redime a Israel,",
/* 26 */        "EL SEÑOR REDIME A ISRAEL",
/* 27 */        "DE TODOS SUS PECADOS.",
/* 28 */        "¡Ay!",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Fa","cp90","7"), ac("Mi","cp465",""), ac("La","cp250","m")],
/* 2*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 3*/      [ac("La", "cp14","m"), ac("Fa","cp90","7"), ac("Mi","cp150",""), ac("La","cp250","m")],
/* 4*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 5*/      [ac("la", "cp","m"), ac("Fa","cp90","7"), ac("Mi","cp150",""), ac("La","cp250","m")],
/* 6*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 7*/      [ac("la", "cp14","m"), ac("Fa","cp90","7"), ac("Mi","cp150",""), ac("La","cp250","m")],
/* 8*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 9*/      [ac("Sol", "cp14",""), ac("Fa","cp90",""), ac("La","cp150","m")],
/* 10*/      [ac("Fa", "cp14","7"), ac("Mi","cp90","7")],
/* 11*/      [ac("Fa", "cp14",""), ac("Ml","cp90","7")],
/* 12*/      [ac("Fa", "cp14","7"), ac("la","cp90","m")],
/* 13*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 14*/      [ac("Fa", "cp14","7"), ac("La","cp90","m")],
/* 15*/      [ac("Sol", "cp14","")],
/* 16*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 17*/      [ac("Sol", "cp14","")],
/* 18*/      [ac("Fa", "cp14",""), ac("La","cp90","m")],
/* 19*/      [ac("Fa", "cp14","7"), ac("Mi","cp90","7")],
/* 20 */   [ac("", "cp0","")],
/* 21*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 22*/      [ac("Fa", "cp14","7"), ac("La","cp90","m")],
/* 23*/      [ac("Fa", "cp14",""), ac("Mi","cp90","7")],
/* 24*/      [ac("Fa", "cp14","7"), ac("La","cp90","m")],
/* 25*/      [ac("La", "cp14","m")],
/* 26*/      [ac("Mi", "cp14","")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("La", "cp14","m"), ac("Re","cp90","m"), ac("La","cp150","m")],
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
