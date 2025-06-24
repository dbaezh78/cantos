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
const NOMBREDELCANTO = "SOLA A SOLO";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "(Kiko Argüello)",
      dbnos: "155",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Sola a solo",
/* 2 */        "bajo la cruz,",
/* 3 */        "María, ¿quién te podrá separar?",
/* 4 */        "Virgen sola,",
/* 5 */        "Madre,",
/* 6 */        "torre atravesada.",
/* 7 */        "Columna de amor,",
/* 8 */        "tú sujetas el cielo",
/* 9 */        "de nuestra débil fe.",
/* 10 */        "SOLA A SOLO,",
/* 11 */        "MADRE, LLENA DE DIOS.",
/* 12 */        "RUEGA POR NOSOTROS",
/* 13 */        "QUE SOMOS PECADORES.",
/* 14 */        "Sola a solo",
/* 15 */        "bajo la cruz,",
/* 16 */        "María, ¿quién te podrá separar?",
/* 17 */        "VIRGEN SOLA,",
/* 18 */        "MADRE,",
/* 19 */        "TORRE ATRAVESADA.",
/* 20 */        "Columna de amor,",
/* 21 */        "tú sujetas el cielo",
/* 22 */        "de nuestra débil fe.",
/* 23 */        "SOLA A SOLO...",
/* 24 */        "MADRE, LLENA DE DIOS.",
/* 25 */        "RUEGA POR NOSOTROS",
/* 26 */        "QUE SOMOS PECADORES.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Re", "cp14","madd9*"), ac("Sol","cp90","m")],
/* 2*/      [ac("La", "cp14","")],
/* 3*/      [ac("Re", "cp14","m")],
/* 4*/      [ac("Sol", "cp14","m")],
/* 5*/      [ac("La", "cp","")],
/* 6*/      [ac("Re", "cp14","m")],
/* 7*/      [ac("Sol", "cp14","m")],
/* 8*/      [ac("La", "cp14","")],
/* 9*/      [ac("Re", "cp14","m")],
/* 10*/      [ac("Re", "cp14","m"), ac("Do","cp90","")],
/* 11*/      [ac("Fa", "cp14","")],
/* 12*/      [ac("La", "cp14","")],
/* 13*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
/* 14*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 15*/      [ac("La", "cp14","")],
/* 16*/      [ac("Re", "cp14","m")],
/* 17*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 18*/      [ac("La", "cp14","")],
/* 19*/      [ac("Rem", "cp14","")],
/* 20*/      [ac("Re", "cp14","m"), ac("Sol","cp90","m")],
/* 21*/      [ac("La", "cp14","")],
/* 22*/      [ac("Re", "cp14","m")],
/* 23*/      [ac("Re", "cp14","m"), ac("Do","cp90","")],
/* 24*/      [ac("Fa", "cp14","")],
/* 25*/      [ac("La", "cp14","")],
/* 26*/      [ac("Si♭", "cp14",""), ac("La","cp90","")],
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
