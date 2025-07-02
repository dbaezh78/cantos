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
const NOMBREDELCANTO = "ALELUYA, BENDECID AL SEÑOR";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 1.34 (1.33) - Melodía hebraica",
      dbnos: "14",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "ALELÚ, ALELÚ, ALE E LU U YA.",
/* 2 */        "ALELÚ, ALELÚ, ALE E LU U YA.",
/* 3 */        "Bendecid al Señor, bendecid al Señor,",
/* 4 */        "vosotros los siervos del Señor.",
/* 5 */        "Bendecid al Señor, bendecid al Señor,",
/* 6 */        "vosotros que estáis en la casa del Señor.",
/* 7 */        "Alzad a Él las manos, alzad a Él las manos",
/* 8 */        "y bendecid al Señor,",
/* 9 */        "vosotros que estáis en la casa del Señor",
/* 10 */        "durante la noche.",
/* 11 */        "ALELUYA, ALELUYA, A A LE E LU U YA.",
/* 12 */        "ALELUYA, ALELUYA, A A LE E LU U YA.",

/* 13 */        "ALELÚ, ALELÚ, ALE E LU U YA...",
/* 14 */        "ALELÚ, ALELÚ, ALE E LU U YA.",


/* 15 */        "BENDECID AL SEÑOR...",
/* 16 */        "BENDECID AL SEÑOR, BENDECID AL SEÑOR,",
/* 17 */        "VOSOTROS LOS SIERVOS DEL SEÑOR.",
/* 18 */        "BENDECID AL SEÑOR, BENDECID AL SEÑOR,",
/* 19 */        "VOSOTROS QUE ESTÁIS EN LA CASA DEL SEÑOR.",
/* 20 */        "ALZAD A ÉL LAS MANOS, ALZAD A ÉL LAS MANOS",
/* 21 */        "Y BENDECID AL SEÑOR,",
/* 22 */        "VOSOTROS QUE ESTÁIS EN LA CASA DEL SEÑOR",
/* 23 */        "DURANTE LA NOCHE.",

/* 24 */        "ALELUYA, ALELUYA...",
/* 25 */        "ALELUYA, ALELUYA, A A LE E LU U YA.",
/* 26 */        "ALELUYA, ALELUYA, A A LE E LU U YA.",
/* 27 */        "Aalelú, alelú uuu ... uuya.",
/* 28 */        "ALELÚ, ALELÚ, ALE E LU U YA...",
/* 29 */         "ALELÚ, ALELÚ, ALE E LU U YA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp0",""), ac("Si♭","cp302",""),ac("La","cp460","")],
/* 2*/      [ac("Si♭","cp302",""),ac("La","cp460","")],

/* 3*/      [ac("Re", "cp14","m")],
/* 4*/      [ac("La", "cp458","7")],
/* 5 */     [ac("", "cp0","")],
/* 6*/      [ac("Re", "cp637","m")],
/* 7*/      [ac("Re", "cp14","m")],
/* 8*/      [ac("La", "cp292","7")],
/* 9 */     [ac("", "cp0","")],
/* 10*/     [ac("Re", "cp210","m")],

/* 11*/     [ac("Re", "cp14","m"), ac("La","cp174","7"), ac("Si♭","cp342",""),ac("La","cp600","")],
/* 12*/     [ac("Re", "cp14","m"), ac("La","cp174","7"), ac("Si♭","cp342",""),ac("La","cp600","")],

/* 13*/     [ac("La", "cp0",""), ac("Si♭","cp302",""),ac("La","cp460","")],
/* 14*/     [ac("Si♭","cp302",""),ac("La","cp460","")],

/* 15*/     [ac("Re", "cp14","m")],
/* 16*/     [ac("Re", "cp14","m")],
/* 17*/     [ac("La", "cp561","7")],
/* 18 */    [ac("", "cp0","")],
/* 19*/     [ac("Re", "cp762","m")],
/* 20*/     [ac("Re", "cp14","m")],
/* 21*/     [ac("La", "cp332","7")],
/* 22 */    [ac("", "cp0","")],
/* 23*/     [ac("Re", "cp260","m")],

/* 24*/     [ac("Re", "cp14","m"), ac("La","cp173","7")],
/* 25*/     [ac("Re", "cp14","m"), ac("La","cp174","7"), ac("Si♭","cp342",""),ac("La","cp600","")],
/* 26*/     [ac("Re", "cp14","m"), ac("La","cp174","7"), ac("Si♭","cp342",""),ac("La","cp600","")],

/* 27*/     [ac("Si♭", "cp87",""), ac("La","cp376","7")],

/* 28*/     [ac("La", "cp0",""), ac("Si♭","cp302",""),ac("La","cp460","")],
/* 29*/     [ac("Si♭","cp302",""),ac("La","cp460","")],
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


    
/*
╔════════════════════════════════════════════════════════════════╗
║   Ocultando contenido especial                                 ║
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
