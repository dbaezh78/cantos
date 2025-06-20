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
const NOMBREDELCANTO = "RESURREXIT";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Juan 11,25s",
      dbnos: "143",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "RESURREXIT, RESURREXIT,",
/* 2 */        "RESURREXIT, RESURREXIT.",
/* 3 */        "GLORIA, GLORIA, GLORIA, GLORIA.",
/* 4 */        "Yo soy la Resurrección,",
/* 5 */        "la Resurrección, la Resurrección.",
/* 6 */        "YO SOY LA RESURRECCIÓN,",
/* 7 */        "LA RESURRECCIÓN,",
/* 8 */        "LA RESURRECCIÓN.",
/* 9 */        "El que cree en mí, aunque muera vivirá,",
/* 10 */        "y todo el que vive y cree en mí,",
/* 11 */        "no morirá jamás, no morirá jamás.",
/* 12 */        "RESURREXIT, RESURREXIT...",
/* 13 */        "GLORIA, GLORIA...",
/* 14 */        "RESURREXIT, RESURREXIT,",
/* 15 */        "RESURREXIT, RESURREXIT.",
/* 16 */        "GLORIA, GLORIA, GLORIA, GLORIA.",
/* 17 */        "¿Crees tú esto? ¿Crees tú esto?",
/* 18 */        "Sí, yo creo que tú eres el Cristo,",
/* 19 */        "el Hijo de Dios, que ha de venir al mundo.",
/* 20 */        "RESURREXIT, RESURREXIT...",
/* 21 */        "GLORIA, GLORIA...",
/* 22 */        "RESURREXIT, RESURREXIT,",
/* 23 */        "RESURREXIT, RESURREXIT.",
/* 24 */        "GLORIA, GLORIA, GLORIA, GLORIA.",
/* 25 */        "LA, LA, LA, LA, LA LA,",
/* 26 */        "LA LA LA LA, LA LA, LA LA;",
/* 27 */        "LA, LA, LA, LA, LA LA,",
/* 28 */        "LA, LA LA LA.",
/* 29 */        "RESURREXIT, RESURREXIT...",
/* 30 */        "GLORIA, GLORIA...",
/* 31 */        "RESURREXIT, RESURREXIT,",
/* 32 */        "RESURREXIT, RESURREXIT.",
/* 33 */        "GLORIA, GLORIA, GLORIA, GLORIA.",
/* 34 */        "ALELUYA, ALELUYA,",
/* 35 */        "ALELUYA, ALELUYA.",
/* 36 */        "ALELUYA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("La", "cp14","m"), ac("Mi7","cp90","")],
/* 2*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 3*/      [ac("La", "cp14","m"), ac("Mi","cp90","7"), ac("Fa","cp150",""), ac("Mi","cp250","")],
/* 4*/      [ac("La", "cp14","m"), ac("Mi7","cp90","")],
/* 5*/      [ac("Re", "cp","m"), ac("Mi7","cp90","")],
/* 6*/      [ac("La", "cp14","m"), ac("Mi7","cp90","")],
/* 7*/      [ac("Rem", "cp14","")],
/* 8*/      [ac("Mi7", "cp14","")],
/* 9*/      [ac("Re", "cp14","m"), ac("Mi7","cp90","")],
/* 10*/      [ac("Rem", "cp14",""), ac("Fa","cp90","")],
/* 11*/      [ac("Mi7", "cp14",""), ac("Fa","cp90",""), ac("Mi7","cp150","")],
/* 12*/      [ac("La", "cp14","m"), ac("Mi7","cp90","")],
/* 13*/      [ac("La", "cp14","m"), ac("Mi7","cp90","")],
/* 14*/      [ac("La", "cp14","m"), ac("Mi7","cp90","")],
/* 15*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 16*/      [ac("La", "cp14","m"), ac("Mi","cp90","7"), ac("Fa","cp150",""), ac("Mi","cp250","")],
/* 17*/      [ac("Re", "cp14","m"), ac("Mi","cp90",""), ac("Re","cp150","m"), ac("Mi","cp250","")],
/* 18*/      [ac("Fa", "cp14","")],
/* 19*/      [ac("Mi7", "cp14",""), ac("Fa","cp90",""), ac("Mi7","cp150","")],
/* 20*/      [ac("La", "cp14","m"), ac("Mi7","cp90","")],
/* 21*/      [ac("La", "cp14","m"), ac("Mi7","cp90","")],
/* 22*/      [ac("La", "cp14","m"), ac("Mi7","cp90","")],
/* 23*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 24*/      [ac("La", "cp14","m"), ac("Mi","cp90","7"), ac("Fa","cp150",""), ac("Mi","cp250","")],
/* 25*/      [ac("La", "cp14","m")],
/* 26*/      [ac("Re", "cp14","m"), ac("Mi7","cp90","")],
/* 27*/      [ac("La", "cp14","m")],
/* 28*/      [ac("Re", "cp14","m"), ac("Mi7","cp90","")],
/* 29*/      [ac("La", "cp14","m"), ac("Mi7","cp90","")],
/* 30*/      [ac("La", "cp14","m"), ac("Mi7","cp90","")],
/* 31*/      [ac("La", "cp14","m"), ac("Mi7","cp90","")],
/* 32*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 33*/      [ac("La", "cp14","m"), ac("Mi","cp90","7"), ac("Fa","cp150",""), ac("Mi","cp250","")],
/* 34*/      [ac("La", "cp14","m"), ac("Mi7","cp90","")],
/* 35*/      [ac("Fa", "cp14",""), ac("Mi","cp90","")],
/* 36*/      [ac("La", "cp14","m")],
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
