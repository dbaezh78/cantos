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
const NOMBREDELCANTO = "QUÉ AMABLES SON TUS MORADAS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 84 (83)",
      dbnos: "136",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "¡Qué amables son tus moradas, Señor,",
/* 2 */        "Señor de los ejércitos!",
/* 3 */        "Mi alma ansía y anhela",
/* 4 */        "los atrios del Señor.",
/* 5 */        "Hasta el pájaro encuentra una casa,",
/* 6 */        "la golondrina su nido:",
/* 7 */        "¡junto a tus altares, Señor,",
/* 8 */        "rey mío y Dios mío!",
/* 9 */        "¡REY MÍO Y DIOS MÍO!",
/* 10 */        "DICHOSOS LOS QUE VIVEN EN TU CASA,",
/* 11 */        "SIEMPRE CANTAN TUS AMORES,",
/* 12 */        "SIEMPRE CANTAN TUS AMORES.",
/* 13 */        "DICHOSO EL QUE ENCUENTRA",
/* 14 */        "EN TI LA FUERZA",
/* 15 */        "Y EN SU CORAZÓN DECIDE",
/* 16 */        "EL SANTO VIAJE.",
/* 17 */        "PASANDO POR EL VALLE DEL LLANTO,",
/* 18 */        "ÉL LO CAMBIA EN BENDICIÓN.",
/* 19 */        "CRECE EN EL CAMINO SU VIGOR,",
/* 20 */        "HASTA LLEGAR A SIÓN,",
/* 21 */        "HASTA LLEGAR A SIÓN.",
/* 22 */        "Mejor es un día en tus atrios",
/* 23 */        "que mil fuera de ellos,",
/* 24 */        "QUE MIL FUERA DE ELLOS,",
/* 25 */        "porque estar en el umbral de tu casa",
/* 26 */        "es siempre mejor",
/* 27 */        "QUE HABITAR EN LOS PALACIOS.",
/* 28 */        "PASANDO POR EL VALLE DEL LLANTO,...",
/* 29 */        "ÉL LO CAMBIA EN BENDICIÓN.",
/* 30 */        "CRECE EN EL CAMINO SU VIGOR,",
/* 31 */        "HASTA LLEGAR A SIÓN,",
/* 32 */        "HASTA LLEGAR A SIÓN.",
/* 33 */        "DICHOSOS LOS QUE VIVEN ...",
/* 34 */        "... EL SANTO VIAJE.",
/* 35 */        "DICHOSOS LOS QUE VIVEN EN TU CASA,",
/* 36 */        "SIEMPRE CANTAN TUS AMORES,",
/* 37 */        "SIEMPRE CANTAN TUS AMORES.",
/* 38 */        "DICHOSO EL QUE ENCUENTRA",
/* 39 */        "EN TI LA FUERZA",
/* 40 */        "Y EN SU CORAZÓN DECIDE",
/* 41 */        "EL SANTO VIAJE.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Do", "cp14",""), ac("Mi","cp90","m"), ac("La","cp150","m")],
/* 2*/      [ac("Do", "cp14",""), ac("Mi","cp90","m")],
/* 3*/      [ac("Fa", "cp14",""), ac("Do","cp90","")],
/* 4*/      [ac("Sol", "cp14","")],
/* 5*/      [ac("Do", "cp",""), ac("Mi","cp90","m"), ac("La","cp150","m")],
/* 6*/      [ac("Do", "cp14",""), ac("Mi","cp90","m")],
/* 7*/      [ac("Fa", "cp14",""), ac("Do","cp90","")],
/* 8*/      [ac("Sol", "cp14","")],
/* 9*/      [ac("Do", "cp14","")],
/* 10*/      [ac("Fa", "cp14",""), ac("Do","cp90","")],
/* 11*/      [ac("Sol", "cp14","")],
/* 12*/      [ac("Do", "cp14","")],
/* 13*/      [ac("Fa", "cp14","")],
/* 14*/      [ac("Do", "cp14","")],
/* 15*/      [ac("Sol", "cp14","")],
/* 16*/      [ac("Do", "cp14","")],
/* 17*/      [ac("Do", "cp14",""), ac("Mi","cp90","m"), ac("La","cp150","m")],
/* 18*/      [ac("Do", "cp14",""), ac("Mi","cp90","m")],
/* 19*/      [ac("Fa", "cp14",""), ac("Do","cp90","")],
/* 20*/      [ac("Sol", "cp14","")],
/* 21*/      [ac("Do", "cp14","")],
/* 22*/      [ac("Fa", "cp14",""), ac("Do","cp90","")],
/* 23*/      [ac("Sol", "cp14","")],
/* 24*/      [ac("Do", "cp14","")],
/* 25*/      [ac("Fa", "cp14",""), ac("Do","cp90","")],
/* 26*/      [ac("Sol", "cp14","")],
/* 27*/      [ac("Do", "cp14","")],
/* 28*/      [ac("Do", "cp14",""), ac("Mi","cp90","m"), ac("La","cp150","m")],
/* 29*/      [ac("Do", "cp14",""), ac("Mi","cp90","m")],
/* 30*/      [ac("Fa", "cp14",""), ac("Do","cp90","")],
/* 31*/      [ac("Sol", "cp14","")],
/* 32*/      [ac("Do", "cp14","")],
/* 33*/      [ac("Fa", "cp14","")],
/* 34*/      [ac("Do", "cp14","")],
/* 35*/      [ac("Fa", "cp14",""), ac("Do","cp90","")],
/* 36*/      [ac("Sol", "cp14","")],
/* 37*/      [ac("Do", "cp14","")],
/* 38*/      [ac("Fa", "cp14","")],
/* 39*/      [ac("Do", "cp14","")],
/* 40*/      [ac("Sol", "cp14","")],
/* 41*/      [ac("Do", "cp14","")],
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
