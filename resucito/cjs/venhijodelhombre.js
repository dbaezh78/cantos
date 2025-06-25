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
const NOMBREDELCANTO = "VEN, HIJO DEL HOMBRE";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Apocalipsis 21,17ss",
      dbnos: "168",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Ven, Hijo del Hombre,",
/* 2 */        "ven, ¡Señor Jesús!",
/* 3 */        "Ven,",
/* 4 */        "VEN,",
/* 5 */        "Siervo de los pobres,",
/* 6 */        "SIERVO DE LOS POBRES;",
/* 7 */        "ven,",
/* 8 */        "VEN,",
/* 9 */        "¡Señor Jesús!",
/* 10 */        "¡SEÑOR JESÚS!",
/* 11 */        "El Espíritu dice: ¡Ven!",
/* 12 */        "El que escucha diga: ¡Ven!",
/* 13 */        "¡VEN! ¡VEN! ¡VEN!",
/* 14 */        "Ven,",
/* 15 */        "VEN,",
/* 16 */        "amor mío, AMOR MÍO,",
/* 17 */        "ven,",
/* 18 */        "VEN,",
/* 19 */        "¡Señor Jesús! ¡SEÑOR JESÚS!",
/* 20 */        "Calma,",
/* 21 */        "CALMA,",
/* 22 */        "tú este fuego, TÚ ESTE FUEGO,",
/* 23 */        "ven, VEN,",
/* 24 */        "¡Señor Jesús! ¡SEÑOR JESÚS!",
/* 25 */        "La Esposa dice: ¡Ven!",
/* 26 */        "Y el que escucha diga: ¡Ven!",
/* 27 */        "¡VEN! ¡VEN! ¡VEN!",
/* 28 */        "Vieni,",
/* 29 */        "VIENI,",
/* 30 */        "Figlio dell'uomo,",
/* 31 */        "FIGLIO DELL'UOMO,",
/* 32 */        "vieni,",
/* 33 */        "VIENI,",
/* 34 */        "Signore Gesü!",
/* 35 */        "SIGNORE GESÜ!",
/* 36 */        "Viens,",
/* 37 */        "VIENS,",
/* 38 */        "Fils de l'homme,",
/* 39 */        "FILS DE L'HOMME,",
/* 40 */        "viens,",
/* 41 */        "VIENS,",
/* 42 */        "Seigneur Jesus!",
/* 43 */        "SEIGNEUR JESUS!",
/* 44 */        "Come,",
/* 45 */        "COME,",
/* 46 */        "Son of the Man,",
/* 47 */        "SON OF THE MAN,",
/* 48 */        "come,",
/* 49 */        "COME,",
/* 50 */        "Lord Jesus!",
/* 51 */        "LORD JESUS!",
/* 52 */        "Ven,",
/* 53 */        "VEN,",
/* 54 */        "Hijo del Hombre,",
/* 55 */        "HIJO DEL HOMBRE,",
/* 56 */        "¡Ven!",
/* 57 */        "¡VEN!",
/* 58 */        "¡Ven!",
/* 59 */        "¡VEN!",
/* 60 */        "¡Ven!",
/* 61 */        "¡VEN!",
/* 62 */        "¡Ven!",
/* 63 */        "¡VEN!...",
/* 64 */        "¡Señor!",
/* 65 */        "¡SEÑOR!",
/* 66 */        "Signore!",
/* 67 */        "SIGNORE!...",
/* 68 */        "¡Ven! Vieni! Viens! Come! ¡Ven!",
/* 69 */        "¡VEN!...",
/* 70 */        "¡SEÑOR JESÚS!",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("La","cp90","m")],
/* 2*/      [ac("Si", "cp14","7"), ac("Mi","cp90","m")],
/* 3*/      [ac("Mi", "cp14","m")],
/* 4 */   [ac("", "cp0","")],
/* 5*/      [ac("La", "cp","m")],
/* 6 */   [ac("", "cp0","")],
/* 7*/      [ac("Si", "cp14","7")],
/* 8 */   [ac("", "cp0","")],
/* 9*/      [ac("Mi", "cp14","m")],
/* 10 */   [ac("", "cp0","")],
/* 11*/      [ac("Do", "cp14",""), ac("Mi","cp90","m")],
/* 12*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 13 */   [ac("", "cp0","")],
/* 14*/      [ac("Mi", "cp14","m")],
/* 15 */   [ac("", "cp0","")],
/* 16*/      [ac("La", "cp14","m")],
/* 17*/      [ac("Si", "cp14","7")],
/* 18 */   [ac("", "cp0","")],
/* 19*/      [ac("Mi", "cp14","m")],
/* 20*/      [ac("Mi", "cp14","m")],
/* 21 */   [ac("", "cp0","")],
/* 22*/      [ac("La", "cp14","m")],
/* 23*/      [ac("Si", "cp14","7")],
/* 24*/      [ac("Mi", "cp14","m")],
/* 25*/      [ac("Do", "cp14",""), ac("Mi","cp90","m")],
/* 26*/      [ac("Do", "cp14",""), ac("Si","cp90","7")],
/* 27 */   [ac("", "cp0","")],
/* 28*/      [ac("Mi", "cp14","m")],
/* 29 */   [ac("", "cp0","")],
/* 30*/      [ac("La", "cp14","m")],
/* 31 */   [ac("", "cp0","")],
/* 32*/      [ac("Si", "cp14","7")],
/* 33 */   [ac("", "cp0","")],
/* 34*/      [ac("Mi", "cp14","m")],
/* 35 */   [ac("", "cp0","")],
/* 36 */   [ac("", "cp0","")],
/* 37 */   [ac("", "cp0","")],
/* 38 */   [ac("", "cp0","")],
/* 39 */   [ac("", "cp0","")],
/* 40 */   [ac("", "cp0","")],
/* 41 */   [ac("", "cp0","")],
/* 42 */   [ac("", "cp0","")],
/* 43 */   [ac("", "cp0","")],
/* 44 */   [ac("", "cp0","")],
/* 45 */   [ac("", "cp0","")],
/* 46 */   [ac("", "cp0","")],
/* 47 */   [ac("", "cp0","")],
/* 48 */   [ac("", "cp0","")],
/* 49 */   [ac("", "cp0","")],
/* 50 */   [ac("", "cp0","")],
/* 51 */   [ac("", "cp0","")],
/* 52*/      [ac("Mi", "cp14","m")],
/* 53 */   [ac("", "cp0","")],
/* 54*/      [ac("La", "cp14","m")],
/* 55 */   [ac("", "cp0","")],
/* 56*/      [ac("Si", "cp14","7")],
/* 57 */   [ac("", "cp0","")],
/* 58*/      [ac("Si", "cp14","7")],
/* 59 */   [ac("", "cp0","")],
/* 60 */   [ac("", "cp0","")],
/* 61 */   [ac("", "cp0","")],
/* 62 */   [ac("", "cp0","")],
/* 63 */   [ac("", "cp0","")],
/* 64 */   [ac("", "cp0","")],
/* 65 */   [ac("", "cp0","")],
/* 66 */   [ac("", "cp0","")],
/* 67 */   [ac("", "cp0","")],
/* 68 */   [ac("", "cp0","")],
/* 69 */   [ac("", "cp0","")],
/* 70*/      [ac("Mi", "cp14","m")],
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
