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
const NOMBREDELCANTO = "SEÑOR, AYÚDAME A NO DUDAR DE TI";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "(Kiko Argüello)",
      dbnos: "146",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¡Señor, ayúdame, Señor!",
/* 2 */        "¡SEÑOR, AYÚDAME, SEÑOR!",
/* 3 */        "A no dudar de Ti.",
/* 4 */        "A NO DUDAR DE TI.",
/* 5 */        "¡Señor, ayúdame, Señor!",
/* 6 */        "¡SEÑOR, AYÚDAME, SEÑOR!",
/* 7 */        "A no dudar nunca de tu amor.",
/* 8 */        "A NO DUDAR NUNCA DE TU AMOR.",
/* 9 */        "Tu gracia derramando",
/* 10 */        "dejó mi corazón ya florecido",
/* 11 */        "de mil ansias de amor,",
/* 12 */        "de mil ansias de amor.",
/* 13 */        "Que más no puedo que sufrir",
/* 14 */        "que vivir en un gemido.",
/* 15 */        "Y en esta llama de tu amor oscura,",
/* 16 */        "en esta tela que envuelve mi alma",
/* 17 */        "y la sofoca,",
/* 18 */        "siento mi corazón que se disloca,",
/* 19 */        "que se abre y se derrama",
/* 20 */        "como agua que inunda tu jardín.",
/* 21 */        "¡SEÑOR, AYÚDAME, SEÑOR ...",
/* 22 */        "... A NO DUDAR NUNCA DE TU AMOR.",
/* 23 */        "¡SEÑOR, AYÚDAME, SEÑOR!",
/* 24 */        "¡SEÑOR, AYÚDAME, SEÑOR!",
/* 25 */        "A no dudar de Ti.",
/* 26 */        "A NO DUDAR DE TI.",
/* 27 */        "¡Señor, ayúdame, Señor!",
/* 28 */        "¡SEÑOR, AYÚDAME, SEÑOR!",
/* 29 */        "A no dudar nunca de tu amor.",
/* 30 */        "A NO DUDAR NUNCA DE TU AMOR.",
/* 31 */        "Y EN ESTA LLAMA DE TU AMOR OSCURA,",
/* 32 */        "EN ESTA TELA QUE ENVUELVE MI ALMA",
/* 33 */        "Y LA SOFOCA,",
/* 34 */        "SIENTO MI CORAZÓN QUE SE DISLOCA,",
/* 35 */        "QUE SE ABRE Y SE DERRAMA",
/* 36 */        "COMO AGUA QUE INUNDA TU JARDÍN.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Si", "cp14","m"), ac("La","cp90",""), ac("Si","cp150","m")],
/* 2*/      [ac("La", "cp14",""), ac("Si","cp90","m")],
/* 3*/      [ac("Fa#", "cp14","")],
/* 4 */   [ac("", "cp0","")],
/* 5*/      [ac("Si", "cp","m"), ac("La","cp90",""), ac("Si","cp150","m")],
/* 6*/      [ac("La", "cp14",""), ac("Si","cp90","m")],
/* 7*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 8*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 9*/      [ac("La", "cp14",""), ac("Re","cp90","")],
/* 10*/      [ac("Si", "cp14","m"), ac("Sol","cp90",""), ac("Fa#","cp150","")],
/* 11*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 12*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 13*/      [ac("La", "cp14",""), ac("Sol","cp90",""), ac("Fa#","cp150","")],
/* 14*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 15*/      [ac("Re", "cp14",""), ac("La","cp90","")],
/* 16 */   [ac("", "cp0","")],
/* 17*/      [ac("Re", "cp14","")],
/* 18*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 19*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 20*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
/* 21*/      [ac("Si", "cp14","m"), ac("La","cp90",""), ac("Si","cp150","m")],
/* 22*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 23*/      [ac("Si", "cp14","m"), ac("La","cp90",""), ac("Si","cp150","m")],
/* 24*/      [ac("La", "cp14",""), ac("Si","cp90","m")],
/* 25*/      [ac("Fa#", "cp14","")],
/* 26 */   [ac("", "cp0","")],
/* 27*/      [ac("Si", "cp14","m"), ac("La","cp90",""), ac("Si","cp150","m")],
/* 28*/      [ac("La", "cp14",""), ac("Si","cp90","m")],
/* 29*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 30*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 31*/      [ac("Re", "cp14",""), ac("La","cp90","")],
/* 32 */   [ac("", "cp0","")],
/* 33*/      [ac("Re", "cp14","")],
/* 34*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 35*/      [ac("Sol", "cp14",""), ac("Fa#","cp90","")],
/* 36*/      [ac("Mi", "cp14","m"), ac("Fa#","cp90","")],
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
