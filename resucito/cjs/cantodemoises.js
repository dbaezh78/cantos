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
const NOMBREDELCANTO = "CANTO DE MOISÉS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Éxodo 15,1-18",
      dbnos: "34",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Cantemos al Señor,",
/* 2 */        "cantemos al Señor,",
/* 3 */        "que se cubrió de gloria,",
/* 4 */        "de gloria, de gloria,",
/* 5 */        "precipitó en el mar",
/* 6 */        "caballo y caballero.",
/* 7 */        "MI FUERZA Y MI CANCIÓN",
/* 8 */        "ES EL SEÑOR.",
/* 9 */        "ÉL ES MI SALVACIÓN, ES MI DIOS",
/* 10 */        "Y YO LO ENSALZARÉ.",
/* 11 */        "PRECIPITÓ EN EL MAR",
/* 12 */        "CABALLO Y CABALLERO,",
/* 13 */        "CABALLO Y CABALLERO.",
/* 14 */        "El Señor es un guerrero,",
/* 15 */        "su nombre es Yahveh.",
/* 16 */        "Precipitó en el mar a los valientes,",
/* 17 */        "la flor del Faraón.",
/* 18 */        "PRECIPITÓ... MI FUERZA... PRECIPITÓ...",
/* 19 */        "PRECIPITÓ EN EL MAR",
/* 20 */        "CABALLO Y CABALLERO,",
/* 21 */        "CABALLO Y CABALLERO.",
/* 22 */        "MI FUERZA Y MI CANCIÓN",
/* 23 */        "ES EL SEÑOR.",
/* 24 */        "ÉL ES MI SALVACIÓN, ES MI DIOS",
/* 25 */        "Y YO LO ENSALZARÉ.",
/* 26 */        "PRECIPITÓ EN EL MAR",
/* 27 */        "CABALLO Y CABALLERO,",
/* 28 */        "CABALLO Y CABALLERO.",
/* 29 */        "Tu diestra poderosa,",
/* 30 */        "gloriosa por su fuerza",
/* 31 */        "tu diestra, oh Señor, aplasta al enemigo,",
/* 32 */        "aplasta al enemigo.",
/* 33 */        "PRECIPITÓ... MI FUERZA... PRECIPITÓ...",
/* 34 */        "PRECIPITÓ EN EL MAR",
/* 35 */        "CABALLO Y CABALLERO,",
/* 36 */        "CABALLO Y CABALLERO.",
/* 37 */        "MI FUERZA Y MI CANCIÓN",
/* 38 */        "ES EL SEÑOR.",
/* 39 */        "ÉL ES MI SALVACIÓN, ES MI DIOS",
/* 40 */        "Y YO LO ENSALZARÉ.",
/* 41 */        "PRECIPITÓ EN EL MAR",
/* 42 */        "CABALLO Y CABALLERO,",
/* 43 */        "CABALLO Y CABALLERO.",
/* 44 */        "El enemigo había dicho:",
/* 45 */        "«Les perseguiré y alcanzaré,",
/* 46 */        "desnudaré la espada, se saciará mi alma,",
/* 47 */        "los aniquilaré.»",
/* 48 */        "PRECIPITÓ... MI FUERZA... PRECIPITÓ...",
/* 49 */        "PRECIPITÓ EN EL MAR",
/* 50 */        "CABALLO Y CABALLERO,",
/* 51 */        "CABALLO Y CABALLERO.",
/* 52 */        "MI FUERZA Y MI CANCIÓN",
/* 53 */        "ES EL SEÑOR.",
/* 54 */        "ÉL ES MI SALVACIÓN, ES MI DIOS",
/* 55 */        "Y YO LO ENSALZARÉ.",
/* 56 */        "PRECIPITÓ EN EL MAR",
/* 57 */        "CABALLO Y CABALLERO,",
/* 58 */        "CABALLO Y CABALLERO.",
/* 59 */        "Soplaste con tu aliento",
/* 60 */        "y el mar los sepultó.",
/* 61 */        "Se hundieron como plomo",
/* 62 */        "en las aguas de la muerte,",
/* 63 */        "en las aguas formidables.",
/* 64 */        "PRECIPITÓ... MI FUERZA... PRECIPITÓ...",
/* 65 */        "PRECIPITÓ EN EL MAR",
/* 66 */        "CABALLO Y CABALLERO,",
/* 67 */        "CABALLO Y CABALLERO.",
/* 68 */        "MI FUERZA Y MI CANCIÓN",
/* 69 */        "ES EL SEÑOR.",
/* 70 */        "ÉL ES MI SALVACIÓN, ES MI DIOS",
/* 71 */        "Y YO LO ENSALZARÉ.",
/* 72 */        "PRECIPITÓ EN EL MAR",
/* 73 */        "CABALLO Y CABALLERO,",
/* 74 */        "CABALLO Y CABALLERO.",
/* 75 */        "¿Quién como tú, Señor,",
/* 76 */        "glorioso en santidad,",
/* 77 */        "terrible en las empresas, autor de maravillas,",
/* 78 */        "autor de maravillas?",
/* 79 */        "PRECIPITÓ... MI FUERZA... PRECIPITÓ...",
/* 80 */        "PRECIPITÓ EN EL MAR",
/* 81 */        "CABALLO Y CABALLERO,",
/* 82 */        "CABALLO Y CABALLERO.",
/* 83 */        "MI FUERZA Y MI CANCIÓN",
/* 84 */        "ES EL SEÑOR.",
/* 85 */        "ÉL ES MI SALVACIÓN, ES MI DIOS",
/* 86 */        "Y YO LO ENSALZARÉ.",
/* 87 */        "PRECIPITÓ EN EL MAR",
/* 88 */        "CABALLO Y CABALLERO,",
/* 89 */        "CABALLO Y CABALLERO.",
/* 90 */        "Rescatas a tu pueblo,",
/* 91 */        "lo llevas a tu casa.",
/* 92 */        "Los príncipes de Edom, se estremecen",
/* 93 */        "al paso de Jacob.",
/* 94 */        "PRECIPITÓ... MI FUERZA... PRECIPITÓ...",
/* 95 */        "PRECIPITÓ EN EL MAR",
/* 96 */        "CABALLO Y CABALLERO,",
/* 97 */        "CABALLO Y CABALLERO.",
/* 98 */        "MI FUERZA Y MI CANCIÓN",
/* 99 */        "ES EL SEÑOR.",
/* 100 */        "ÉL ES MI SALVACIÓN, ES MI DIOS",
/* 101 */        "Y YO LO ENSALZARÉ.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
//          Cantemos al Señor,
/* 1*/      [ac("Do", "cp14","7"), ac("Fa","cp290","")],
/* 2*/      [ac("La", "cp274","7")],
/* 3*/      [ac("Re", "cp318","7")],
/* 4 */     [ac("", "cp0","")],
/* 5*/      [ac("Sol", "cp270","7")],
/* 6*/      [ac("Do", "cp258","7")],
//          * * * * CORO * * * *
/* 7*/      [ac("Fa", "cp14","")],      // PRECIPITÓ EN EL MAR
/* 8*/      [ac("La", "cp173","7")],
/* 9*/      [ac("Re", "cp298","7")],
/* 10*/     [ac("Sol", "cp312","7")],
/* 11*/     [ac("Do", "cp14","7")],
/* 12 */    [ac("", "cp0","")],
/* 13 */    [ac("", "cp0","")],
//          El Señor es un guerrero,
/* 14*/     [ac("Fa", "cp331","")],
/* 15*/     [ac("La", "cp306","7")],
/* 16*/     [ac("Re", "cp274","7")],
/* 17*/     [ac("Sol", "cp240","7")],
//          PRECIPITÓ EN EL MAR
/* 18 */    [ac("", "cp0","")],         //  PRECIPITÓ... MI FUERZA... PRECIPITÓ...
/* 19*/     [ac("Do", "cp14","7")],     //  PRECIPITÓ EN EL MAR
/* 20 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 21 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 22*/     [ac("Fa", "cp14","")],      //  MI FUERZA Y MI CANCIÓN
/* 23*/     [ac("La", "cp173","7")],    //  ES EL SEÑOR.
/* 24*/     [ac("Re", "cp298","7")],    //  ÉL ES MI SALVACIÓN, ES MI DIOS
/* 25*/     [ac("Sol", "cp312","7")],   //  Y YO LO ENSALZARÉ.
/* 26*/     [ac("Do", "cp14","7")],     //  PRECIPITÓ EN EL MAR
/* 27 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 28 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
//          El Señor es un guerrero,
/* 29 */    [ac("", "cp0","")],
/* 30 */    [ac("", "cp0","")],
/* 31 */    [ac("", "cp0","")],
/* 32 */    [ac("", "cp0","")],
//          PRECIPITÓ EN EL MAR
/* 33 */    [ac("", "cp0","")],         //  PRECIPITÓ... MI FUERZA... PRECIPITÓ...
/* 34*/     [ac("Do", "cp14","7")],     //  PRECIPITÓ EN EL MAR
/* 35 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 36 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 37*/     [ac("Fa", "cp14","")],      //  MI FUERZA Y MI CANCIÓN
/* 38*/     [ac("La", "cp173","7")],    //  ES EL SEÑOR.
/* 39*/     [ac("Re", "cp298","7")],    //  ÉL ES MI SALVACIÓN, ES MI DIOS
/* 40*/     [ac("Sol", "cp312","7")],   //  Y YO LO ENSALZARÉ.
/* 41*/     [ac("Do", "cp14","7")],     //  PRECIPITÓ EN EL MAR
/* 42 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 43 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,

/* 44 */    [ac("", "cp0","")],
/* 45 */    [ac("", "cp0","")],
/* 46 */    [ac("", "cp0","")],
/* 47 */    [ac("", "cp0","")],
//          PRECIPITÓ EN EL MAR
/* 48 */    [ac("", "cp0","")],         //  PRECIPITÓ... MI FUERZA... PRECIPITÓ...
/* 49*/     [ac("Do", "cp14","7")],     //  PRECIPITÓ EN EL MAR
/* 50 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 51 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 52*/     [ac("Fa", "cp14","")],      //  MI FUERZA Y MI CANCIÓN
/* 53*/     [ac("La", "cp173","7")],    //  ES EL SEÑOR.
/* 54*/     [ac("Re", "cp298","7")],    //  ÉL ES MI SALVACIÓN, ES MI DIOS
/* 55*/     [ac("Sol", "cp312","7")],   //  Y YO LO ENSALZARÉ.
/* 56*/     [ac("Do", "cp14","7")],     //  PRECIPITÓ EN EL MAR
/* 57 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 58 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,

/* 59 */    [ac("", "cp0","")],
/* 60 */    [ac("", "cp0","")],
/* 61 */    [ac("", "cp0","")],
/* 62 */    [ac("", "cp0","")],
/* 63 */    [ac("", "cp0","")],
//          PRECIPITÓ EN EL MAR
/* 64 */    [ac("", "cp0","")],         //  PRECIPITÓ... MI FUERZA... PRECIPITÓ...
/* 65*/     [ac("Do", "cp14","7")],     //  PRECIPITÓ EN EL MAR
/* 66 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 67 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 68*/     [ac("Fa", "cp14","")],      //  MI FUERZA Y MI CANCIÓN
/* 69*/     [ac("La", "cp173","7")],    //  ES EL SEÑOR.
/* 70*/     [ac("Re", "cp298","7")],    //  ÉL ES MI SALVACIÓN, ES MI DIOS
/* 71*/     [ac("Sol", "cp312","7")],   //  Y YO LO ENSALZARÉ.
/* 72*/     [ac("Do", "cp14","7")],     //  PRECIPITÓ EN EL MAR
/* 73 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 74 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,

/* 75 */    [ac("", "cp0","")],
/* 76 */    [ac("", "cp0","")],
/* 77 */    [ac("", "cp0","")],
/* 78 */    [ac("", "cp0","")],
//          PRECIPITÓ EN EL MAR
/* 79 */    [ac("", "cp0","")],         //  PRECIPITÓ... MI FUERZA... PRECIPITÓ...
/* 80*/     [ac("Do", "cp14","7")],     //  PRECIPITÓ EN EL MAR
/* 81 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 82 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 83*/     [ac("Fa", "cp14","")],      //  MI FUERZA Y MI CANCIÓN
/* 84*/     [ac("La", "cp173","7")],    //  ES EL SEÑOR.
/* 85*/     [ac("Re", "cp298","7")],    //  ÉL ES MI SALVACIÓN, ES MI DIOS
/* 86*/     [ac("Sol", "cp312","7")],   //  Y YO LO ENSALZARÉ.
/* 87*/     [ac("Do", "cp14","7")],     //  PRECIPITÓ EN EL MAR
/* 88 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 89 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,

/* 90 */    [ac("", "cp0","")],
/* 91 */    [ac("", "cp0","")],
/* 92 */    [ac("", "cp0","")],
/* 93 */    [ac("", "cp0","")],
//          PRECIPITÓ EN EL MAR
/* 94 */    [ac("", "cp0","")],         //  PRECIPITÓ... MI FUERZA... PRECIPITÓ...
/* 95*/     [ac("Do", "cp14","7")],     //  PRECIPITÓ EN EL MAR
/* 96 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 97 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 98*/     [ac("Fa", "cp14","")],      //  MI FUERZA Y MI CANCIÓN
/* 99*/     [ac("La", "cp173","7")],    //  ES EL SEÑOR.
/* 100*/    [ac("Re", "cp298","7")],    //  ÉL ES MI SALVACIÓN, ES MI DIOS
/* 101*/    [ac("Sol", "cp312","7")],   //  Y YO LO ENSALZARÉ.
],/*
╔════════════════════════════════════════════════════════════════╗
║                Estructura para Asamblea (texto)                ║
╚════════════════════════════════════════════════════════════════╝  */
      asamblea: [
/* 1 */        "PRECIPITÓ EN EL MAR",
/* 2 */        "CABALLO Y CABALLERO,",
/* 3 */        "CABALLO Y CABALLERO.",
/* 4 */        "Lo llevas y lo plantas",
/* 5 */        "en el lugar sagrado",
/* 6 */        "sobre tu monte santo, el santuario",
/* 7 */        "que tus manos prepararon.",
/* 8 */        "PRECIPITÓ... MI FUERZA... PRECIPITÓ...",
/* 9 */        "PRECIPITÓ EN EL MAR",
/* 10 */        "CABALLO Y CABALLERO,",
/* 11 */        "CABALLO Y CABALLERO.",
/* 12 */        "MI FUERZA Y MI CANCIÓN",
/* 13 */        "ES EL SEÑOR.",
/* 14 */        "ÉL ES MI SALVACIÓN, ES MI DIOS",
/* 15 */        "Y YO LO ENSALZARÉ.",
/* 16 */        "PRECIPITÓ EN EL MAR",
/* 17 */        "CABALLO Y CABALLERO,",
/* 18 */        "CABALLO Y CABALLERO.",
      ],
      asambleaAcordes: [
/* 1*/      [ac("Do", "cp14","7")],
/* 2 */     [ac("", "cp0","")],
/* 3 */     [ac("", "cp0","")],

/* 4 */     [ac("", "cp0","")],
/* 5 */     [ac("", "cp0","")],
/* 6 */     [ac("", "cp0","")],
/* 7 */     [ac("", "cp0","")],
//          PRECIPITÓ EN EL MAR
/* 8 */     [ac("", "cp0","")],         //  PRECIPITÓ... MI FUERZA... PRECIPITÓ...
/* 9*/      [ac("Do", "cp14","7")],     //  PRECIPITÓ EN EL MAR
/* 10 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 11 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 12*/     [ac("Fa", "cp14","")],      //  MI FUERZA Y MI CANCIÓN
/* 13*/     [ac("La", "cp173","7")],    //  ES EL SEÑOR.
/* 14*/     [ac("Re", "cp298","7")],    //  ÉL ES MI SALVACIÓN, ES MI DIOS
/* 15*/     [ac("Sol", "cp312","7")],   //  Y YO LO ENSALZARÉ.
/* 16*/     [ac("Do", "cp14","7")],     //  PRECIPITÓ EN EL MAR
/* 17 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
/* 18 */    [ac("", "cp0","")],         //  CABALLO Y CABALLERO,
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
/*
╔════════════════════════════════════════════════════════════════╗
║   Ocultando contenido especial   ... ...                       ║
╚════════════════════════════════════════════════════════════════╝  */

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los elementos que actúan como "activadores" del toggle
    const hdb1Elements = document.querySelectorAll('.hdb1.toggle-container');

    // Iteramos sobre cada elemento 'hdb1' encontrado para darle su propia funcionalidad
    hdb1Elements.forEach(hdb1Div => {
        // El elemento 'hdb2' asociado es el siguiente hermano en el DOM.
        const hdb2Div = hdb1Div.nextElementSibling;

        // Creamos un contador de clics específico para cada bloque hdb2
        let clickCount = 0;

        // Verificamos que hemos encontrado un elemento .hdb2 y que tiene la clase 'toggle-target'
        if (hdb2Div && hdb2Div.classList.contains('hdb2') && hdb2Div.classList.contains('toggle-target')) {

            // Establecemos el estado inicial para este par (aunque el CSS ya lo hace, es una buena práctica)
            hdb1Div.style.display = 'block'; // Aseguramos que hdb1 esté visible
            hdb2Div.style.display = 'none';  // Aseguramos que hdb2 esté oculto

            // Añadimos el "escuchador de eventos" para el clic en el bloque hdb1
            hdb1Div.addEventListener('click', function() {
                hdb1Div.style.display = 'none';  // Oculta el hdb1 actual
                hdb2Div.style.display = 'block'; // Muestra el hdb2 asociado
                clickCount = 0; // Reiniciamos el contador de clics de hdb2 al mostrarlo
            });

            // Añadimos el "escuchador de eventos" para el clic en el bloque hdb2
            hdb2Div.addEventListener('click', function() {
                clickCount++; // Incrementamos el contador de clics

                // Si el contador llega a 3, ocultamos hdb2 y mostramos hdb1
                if (clickCount === 3) {
                    hdb2Div.style.display = 'none';  // Oculta el hdb2 actual
                    hdb1Div.style.display = 'block'; // Muestra el hdb1 asociado
                    clickCount = 0; // Reiniciamos el contador para futuros toggles
                }
            });
        }
    });
});
