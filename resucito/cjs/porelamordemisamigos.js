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
const factor = 1.55; // Factor diferente para móviles
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
      const factor = 1.24;
      posicionAjustada = `cp${Math.round(numero * factor)}`;
    }
  }
  return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
}/*
╔════════════════════════════════════════════════════════════════╗
║                         DATOS DEL CANTO                        ║
╚════════════════════════════════════════════════════════════════╝  */
const NOMBREDELCANTO = "POR EL AMOR DE MIS AMIGOS";
const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Sal 122 (121) - Melodía hebraica ",
      dbnos: "132",
      catg: "PRECATECUMENADO",
/*
╔════════════════════════════════════════════════════════════════╗
║                 Estructura para Cantor (texto)                 ║
╚════════════════════════════════════════════════════════════════╝  */
cantor: [
/* 1 */        "Por el amor de mis amigos,",
/* 2 */        "por el amor de mis hermanos,",
/* 3 */        "déjame que yo te diga:",
/* 4 */        "la paz contigo.",
/* 5 */        "¡Qué alegría cuando me dijeron:",
/* 6 */        "vamos a la casa del Señor!",
/* 7 */        "YA ESTÁN PISANDO NUESTROS PIES",
/* 8 */        "TUS UMBRALES JERUSALÉN.",
/* 9 */        "JERUSALÉN, JERUSALÉN,",
/* 10 */        "DE NUEVO REEDIFICADA.",
/* 11 */        "JERUSALÉN,JERUSALÉN,",
/* 12 */        "DE NUEVO REEDIFICADA.",
/* 13 */        "JERUSALÉN,JERUSALÉN,",
/* 14 */        "DE NUEVO REEDIFICADA.",
/* 15 */        "JERUSALÉN,JERUSALÉN,",
/* 16 */        "DE NUEVO REEDIFICADA.",
/* 17 */        "Por el amor...",
/* 18 */        "... paz contigo.",
/* 19 */        "Por el amor de mis amigos,",
/* 20 */        "por el amor de mis hermanos,",
/* 21 */        "déjame que yo te diga:",
/* 22 */        "la paz contigo.",
/* 23 */        "Allá suben las tribus,",
/* 24 */        "las tribus del Señor,",
/* 25 */        "SEGÚN LA COSTUMBRE DE ISRAEL,",
/* 26 */        "PARA CANTAR AL SEÑOR.",
/* 27 */        "JERUSALÉN, JERUSALÉN,...",
/* 28 */        "DE NUEVO REEDIFICADA.",
/* 29 */        "JERUSALÉN,JERUSALÉN,",
/* 30 */        "DE NUEVO REEDIFICADA.",
/* 31 */        "JERUSALÉN,JERUSALÉN,",
/* 32 */        "DE NUEVO REEDIFICADA.",
/* 33 */        "JERUSALÉN,JERUSALÉN,",
/* 34 */        "DE NUEVO REEDIFICADA.",
/* 35 */        "Por el amor...",
/* 36 */        "... paz contigo.",
/* 37 */        "Por el amor de mis amigos,",
/* 38 */        "por el amor de mis hermanos,",
/* 39 */        "déjame que yo te diga:",
/* 40 */        "la paz contigo.",
/* 41 */        "Pedid la paz, pedid la paz",
/* 42 */        "para Jerusalén:",
/* 43 */        "QUE SEA LA PAZ, QUE SEA LA PAZ,",
/* 44 */        "CON TODOS LOS QUE TE AMAN.",
/* 45 */        "JERUSALÉN, JERUSALÉN,...",
/* 46 */        "DE NUEVO REEDIFICADA.",
/* 47 */        "JERUSALÉN,JERUSALÉN,",
/* 48 */        "DE NUEVO REEDIFICADA.",
/* 49 */        "JERUSALÉN,JERUSALÉN,",
/* 50 */        "DE NUEVO REEDIFICADA.",
/* 51 */        "JERUSALÉN,JERUSALÉN,",
/* 52 */        "DE NUEVO REEDIFICADA.",
/* 53 */        "LA LALALALALA, LA LALALALALA,",
/* 54 */        "LA LA LALALA.",
/* 55 */        "LA LALALALALA, LA LALALALALA,",
/* 56 */        "LA LA LALALA.",
],/*
╔════════════════════════════════════════════════════════════════╗
║       Estructura para Cantor (acordes) - CON FUNCIÓN ac()      ║
╚════════════════════════════════════════════════════════════════╝  */
cantorAcordes: [
/* 1*/      [ac("Mi", "cp14","m"), ac("La","cp375","m")],
/* 2*/      [ac("Mi", "cp414","m")],
/* 3*/      [ac("Si", "cp302","7")],
/* 4*/      [ac("Mi", "cp169","m")],
/* 5*/      [ac("Mi", "cp12","m")],
/* 6*/      [ac("La", "cp14","m"), ac("Mi","cp398","m")],
/* 7*/      [ac("Si", "cp564","7")],
/* 8*/      [ac("Mi", "cp421","m")],
/* 9*/      [ac("Mi", "cp14","m")],
/* 10*/     [ac("La", "cp99","m"), ac("Mi","cp333","m")],
/* 11 */    [ac("", "cp0","")],
/* 12*/     [ac("Si", "cp99",""), ac("Mi","cp333","m")],
/* 13*/     [ac("Mi", "cp14","m")],
/* 14*/     [ac("La", "cp99","m"), ac("Mi","cp333","m")],
/* 15 */    [ac("", "cp0","")],
/* 16*/     [ac("Si", "cp99","7"), ac("Mi","cp333","m")],

/* 17*/     [ac("Mi", "cp14","m")],
/* 18 */    [ac("", "cp0","")],
/* 19*/     [ac("Mi", "cp14","m"), ac("La","cp382","m")],
/* 20*/     [ac("Mi", "cp414","m")],
/* 21*/     [ac("Si", "cp302","7")],
/* 22*/     [ac("Mi", "cp169","m")],

/* 23*/     [ac("Mi", "cp14","m")],
/* 24*/     [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 25*/     [ac("Si7", "cp14","")],
/* 26*/     [ac("Mi", "cp14","m")],
/* 27*/     [ac("Mi", "cp14","m")],
/* 28*/     [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 29 */    [ac("", "cp0","")],
/* 30*/     [ac("Si7", "cp14",""), ac("Mi","cp90","m")],
/* 31*/     [ac("Mi", "cp14","m")],
/* 32*/     [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 33 */    [ac("", "cp0","")],
/* 34*/     [ac("Si7", "cp14",""), ac("Mi","cp90","m")],

/* 35*/     [ac("Mi", "cp14","m")],
/* 36 */    [ac("", "cp0","")],
/* 37*/     [ac("Mi", "cp14","m"), ac("La","cp382","m")],
/* 38*/     [ac("Mi", "cp414","m")],
/* 39*/     [ac("Si", "cp302","7")],
/* 40*/     [ac("Mi", "cp169","m")],

/* 41*/     [ac("Mi", "cp14","m")],
/* 42*/     [ac("La", "cp14","m"), ac("Mi","cp197","m")],

/* 43 */    [ac("", "cp0","")],
/* 44*/     [ac("Si", "cp85","7"), ac("Mi","cp429","m")],

/* 45*/     [ac("Mi", "cp14","m")],
/* 46*/     [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 47 */    [ac("", "cp0","")],
/* 48*/     [ac("Si7", "cp14",""), ac("Mi","cp90","m")],
/* 49*/     [ac("Mi", "cp14","m")],
/* 50*/     [ac("La", "cp14","m"), ac("Mi","cp90","m")],
/* 51 */    [ac("", "cp0","")],
/* 52*/     [ac("Si7", "cp14",""), ac("Mi","cp90","m")],

/* 53*/     [ac("Mi", "cp14","m")],
/* 54*/     [ac("La", "cp14","m"), ac("Mi","cp161","m")],
/* 55 */    [ac("", "cp0","")],
/* 56*/     [ac("Si", "cp14","7"), ac("Mi","cp161","m")],
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
