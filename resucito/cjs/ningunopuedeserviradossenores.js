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
const NOMBREDELCANTO = "NINGUNO PUEDE SERVIR A DOS SEÑORES";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Mateo 6,24-33 ",
      dbnos: "229",
      catg: "CATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Ninguno puede servir a dos señores,",
/* 2 */        "porque amando a uno desprecia al otro.",
/* 3 */        "No podéis servir a Dios y al dinero.",
/* 4 */        "Por eso os digo:",
/* 5 */        "No os angustiéis por vuestra vida,",
/* 6 */        "qué comeréis, qué beberéis,",
/* 7 */        "con qué os vestiréis.",
/* 8 */        "¿Acaso, la vida",
/* 9 */        "no vale más que el alimento?",
/* 10 */        "MIRAD LAS AVES DEL CIELO:",
/* 11 */        "NO SIEMBRAN, NI COSECHAN,",
/* 12 */        "VUESTRO PADRE CELESTIAL",
/* 13 */        "LAS ALIMENTA.",
/* 14 */        "Por lo demás, ¿quién de vosotros",
/* 15 */        "por más que se preocupe,",
/* 16 */        "puede añadir una hora sola",
/* 17 */        "a la medida de su vida?",
/* 18 */        "Y del vestido, ¿por qué preocuparos?",
/* 19 */        "MIRAD LOS LIRIOS DEL CAMPO;",
/* 20 */        "NO SE FATIGAN, NI HILAN,",
/* 21 */        "SALOMÓN NO VESTÍA COMO ELLOS.",
/* 22 */        "Buscad primero el Reino de Dios,",
/* 23 */        "y todo os será dado.",
/* 24 */        "No podéis servir a Dios y al dinero.",
/* 25 */        "BUSCAD EL REINO DE DIOS,",
/* 26 */        "Y TODO OS SERÁ DADO.",
/* 27 */        "NO PODÉIS SERVIR A DOS SEÑORES.",
/* 28 */        "Ninguno puede servir a dos señores ...",
/* 29 */        "MIRAD LAS AVES DEL CIELO...",
/* 30 */        "NO SIEMBRAN, NI COSECHAN,",
/* 31 */        "VUESTRO PADRE CELESTIAL",
/* 32 */        "LAS ALIMENTA.",
/* 33 */        "MIRAD LOS LIRIOS DEL CAMPO...",
/* 34 */        "NO SE FATIGAN, NI HILAN,",
/* 35 */        "SALOMÓN NO VESTÍA COMO ELLOS.",
/* 36 */        "BUSCAD EL REINO DE DIOS...",
/* 37 */        "Y TODO OS SERÁ DADO.",
/* 38 */        "NO PODÉIS SERVIR A DOS SEÑORES.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Do","cp150","")],
/* 2*/      [ac("Re", "cp14",""), ac("Do","cp90",""), ac("Mi","cp150","m")],
/* 3*/      [ac("La", "cp14","m"), ac("Re","cp90","7"), ac("Do","cp150",""), ac("Si","cp250","7")],
/* 4*/      [ac("Mi", "cp14","m")],
/* 5*/      [ac("Re", "cp",""), ac("Do","cp90","")],
/* 6*/      [ac("Re", "cp14",""), ac("Do","cp90","")],
/* 7*/      [ac("Mi", "cp14","m")],
/* 8*/      [ac("La", "cp14","m"), ac("Do","cp90","")],
/* 9*/      [ac("Si", "cp14","7")],
/* 10*/      [ac("Sol", "cp14",""), ac("Si","cp90","m")],
/* 11*/      [ac("Si", "cp14","7"), ac("Do","cp90","7"), ac("Do","cp150","")],
/* 12 */   [ac("", "cp0","")],
/* 13*/      [ac("Si", "cp14","7")],
/* 14*/      [ac("Mi", "cp14","m"), ac("Re","cp90","")],
/* 15*/      [ac("Do", "cp14","")],
/* 16*/      [ac("Re", "cp14",""), ac("Do","cp90","")],
/* 17*/      [ac("Mi", "cp14","m")],
/* 18*/      [ac("La", "cp14","m"), ac("Re","cp90","7"), ac("Do","cp150",""), ac("Si","cp250","7")],
/* 19*/      [ac("Sol", "cp14",""), ac("Si","cp90","m")],
/* 20*/      [ac("Si", "cp14","7"), ac("Do","cp90","7"), ac("Do","cp150","")],
/* 21*/      [ac("Si", "cp14","7")],
/* 22*/      [ac("Sol", "cp14",""), ac("Si","cp90","m")],
/* 23*/      [ac("Si", "cp14","7"), ac("Do","cp90","7"), ac("Do","cp150","")],
/* 24*/      [ac("Si", "cp14","7")],
/* 25*/      [ac("Sol", "cp14",""), ac("Si","cp90","m")],
/* 26*/      [ac("Si", "cp14","7"), ac("Do","cp90","7"), ac("Do","cp150","")],
/* 27*/      [ac("Si", "cp14","7")],
/* 28*/      [ac("Mi", "cp14","m"), ac("Re","cp90",""), ac("Do","cp150","")],
/* 29*/      [ac("Sol", "cp14",""), ac("Si","cp90","m")],
/* 30*/      [ac("Si", "cp14","7"), ac("Do","cp90","7"), ac("Do","cp150","")],
/* 31 */   [ac("", "cp0","")],
/* 32*/      [ac("Si", "cp14","7")],
/* 33*/      [ac("Sol", "cp14",""), ac("Si","cp90","m")],
/* 34*/      [ac("Si", "cp14","7"), ac("Do","cp90","7"), ac("Do","cp150","")],
/* 35*/      [ac("Si", "cp14","7")],
/* 36*/      [ac("Sol", "cp14",""), ac("Si","cp90","m")],
/* 37*/      [ac("Si", "cp14","7"), ac("Do","cp90","7"), ac("Do","cp150","")],
/* 38*/      [ac("Si", "cp14","7")],
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
