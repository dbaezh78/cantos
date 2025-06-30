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
const NOMBREDELCANTO = "TÚ ERES MI ESPERANZA, SEÑOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Oda XXIX de Salomón",
      dbnos: "236",
      catg: "CATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Tú eres mi esperanza, Señor,",
/* 2 */        "y no seré confundido.",
/* 3 */        "Con tu gloria tú me has creado,",
/* 4 */        "en la misericordia tú me has formado.",
/* 5 */        "ME HAS SACADO DE LO PROFUNDO DEL SEOL,",
/* 6 */        "DE LA BOCA DE LA MUERTE ME HAS ARRANCADO.",
/* 7 */        "PORQUE HE CREÍDO EN TU MESÍAS",
/* 8 */        "Y QUE ÉL ES EL SEÑOR HE CONFESADO.",
/* 9 */        "Tú me has dado la señal grande,",
/* 10 */        "el misterio escondido a los ángeles,",
/* 11 */        "para hacer la guerra con tu palabra,",
/* 12 */        "y volver victorioso de las naciones.",
/* 13 */        "TÚ ERES MI ESPERANZA, SEÑOR,",
/* 14 */        "Y NO SERÉ CONFUNDIDO.",
/* 15 */        "ME HAS SACADO DE LO PROFUNDO DEL SEOL...",
/* 16 */        "DE LA BOCA DE LA MUERTE ME HAS ARRANCADO.",
/* 17 */        "PORQUE HE CREÍDO EN TU MESÍAS",
/* 18 */        "Y QUE ÉL ES EL SEÑOR HE CONFESADO.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do#", "cp14","dim7")],
/* 2*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
/* 3*/      [ac("Do#", "cp14","dim7"), ac("La","cp90","7")],
/* 4*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
/* 5*/      [ac("Re", "cp","m"), ac("La","cp90","7")],
/* 6*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
/* 7*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 8*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
/* 9*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 10*/      [ac("Sol", "cp14","m"), ac("La","cp90","7")],
/* 11*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
/* 12*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
/* 13*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 14*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
/* 15*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 16*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
/* 17*/      [ac("Re", "cp14","m"), ac("La","cp90","7")],
/* 18*/      [ac("Si♭", "cp14","7"), ac("La","cp90","7")],
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
