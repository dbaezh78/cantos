 /*********************** FUENTE DEL CANTO ***********************/

// Mapeo para celulares 483px
const pcelular = {

};
    // Mapeo específico para tablets (800px)
    const pTablet = {
      
    };
    
    function ac(nota, posicion, extension = "") {
          const anchoPantalla = window.innerWidth;
          let posicionAjustada = posicion;
    
    // Solo ajustamos para tablets (601px a 900px)
          if (anchoPantalla > 600 && anchoPantalla <= 900) {
            posicionAjustada = pTablet[posicion] || posicion;
    
            // Si no está en el mapeo, aplicamos un factor general más preciso
            if (!pTablet[posicion]) {
              const numero = parseInt(posicion.replace('cp', ''));
              const factor = 0.971; // Factor más preciso para 800px
              posicionAjustada = `cp${Math.round(numero * factor)}`;
            }
          }
    
          // Solo ajustamos para tablets (284px a 384px)
          if (anchoPantalla > 284 && anchoPantalla <= 411) {
                posicionAjustada = pcelular[posicion] || posicion;
                
                // Si no está en el mapeo, aplicamos un factor general más preciso
                if (!pcelular[posicion]) {
                  const numero = parseInt(posicion.replace('cp', ''));
                  const factor = 1.3; // Factor más preciso para 384px
                  posicionAjustada = `cp${Math.round(numero * factor)}`;
                }
              }
          
          return { acorde: nota, posicion: posicionAjustada, base: nota, extension };
        }
      
        /***********************
         * DATOS DEL CANTO
         ***********************/
    
    const NOMBREDELCANTO = "ME HAS SEDUCIDO, SEÑOR";
    
    const partitura = {
          tituloc: NOMBREDELCANTO,
          titulo: NOMBREDELCANTO,
          salmo: "Jeremias 20,7-18",
          dbnos: "115",
          catg: "PRECATECUMENADO",
    
    // Estructura para Cantor (texto)
    
    cantor: [
    /* 1 */        "Cuando hablo debo gritar:",
    /* 2 */        "«¡Violencia!», «¡Opresión!»",
    /* 3 */        "Así tu palabra es para mí befa y oprobio.",
    /* 4 */        "Me decía: «No pensaré más en Él",
    /* 5 */        "no hablaré más en su nombre.",
    /* 6 */        "Mas en mi corazón",
    /* 7 */        "había un fuego ardiente,",
    /* 8 */        "que corría por mis huesos.",
    /* 9 */        "Maldito el día en que nací.",
    /* 10 */        "Maldito el hombre",
    /* 11 */        "que le dio la noticia a mi padre:",
    /* 12 */        "«Te ha nacido un hijo».",
    /* 13 */        "¿Por qué he salido del seno de mi madre,",
    /* 14 */        "si sólo debo ver penas y aflicción?",
    /* 15 */        "Cantad himnos al Señor, alabad su Nombre",
    /* 16 */        "que ha salvado la vida de este pobre.",
    ],
          // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
          cantorAcordes: [
    // IZQUIERDA
    /* 1*/      [ac("La", "cp14","m"), ac("Mi","cp380","7")],
    /* 2*/      [ac("La", "cp339","m")],
    /* 3*/      [ac("Mi", "cp152","7"), ac("La","cp581","m")],
    /* 4*/      [ac("Mi", "cp111","7")],
    /* 5*/      [ac("La", "cp387","m")],
    /* 6*/      [ac("Mi", "cp8","7")],
    /* 7 */     [ac("", "cp0","")],
    /* 8*/      [ac("Fa", "cp128",""), ac("Mi","cp354","")],
    /* 9*/      [ac("Mi", "cp6","7")],
    /* 10 */    [ac("", "cp0","")],
    /* 11 */    [ac("", "cp0","")],
    /* 12 */    [ac("", "cp0","")],
    /* 13 */    [ac("", "cp0","")],
    /* 14 */    [ac("", "cp0","")],
    /* 15*/     [ac("La", "cp14","m"), ac("Mi","cp137","7"), ac("La","cp614","m")],
    /* 16*/     [ac("Fa", "cp180",""), ac("Mi","cp530","7")],
          ],
    
          // Estructura para Asamblea (texto)
          asamblea: [
    /* 1 */        "ME HAS SEDUCIDO, SEÑOR,",
    /* 2 */        "Y ME HE DEJADO SEDUCIR.",
    /* 3 */        "HAS LUCHADO CONMIGO",
    /* 4 */        "Y ME HAS VENCIDO.",
    /* 5 */        "HAS SIDO MÁS FUERTE QUE YO,",
    /* 6 */        "ME HAS PODIDO.",
    /* 7 */        "MAS EN MI CORAZÓN",
    /* 8 */        "HABÍA UN FUEGO ARDIENTE,",
    /* 9 */        "QUE CORRÍA POR MIS HUESOS.",
    /* 10 */        "ME HAS SEDUCIDO, SEÑOR,",
    /* 11 */        "Y ME HE DEJADO SEDUCIR.",
    /* 12 */        "HAS LUCHADO CONMIGO",
    /* 13 */        "Y ME HAS VENCIDO.",
    /* 14 */        "HAS SIDO MÁS FUERTE QUE YO,",
    /* 15 */        "ME HAS PODIDO.",
    /* 16 */        "MAS EL SEÑOR ESTÁ CONMIGO,",
    /* 17 */        "COMO UN HÉROE VALEROSO.",
    /* 18 */        "MAS EL SEÑOR ESTÁ CONMIGO,",
    /* 19 */        "COMO UN HÉROE VALEROSO.",
    /* 20 */        "ME HAS SEDUCIDO, SEÑOR,",
    /* 21 */        "Y ME HE DEJADO SEDUCIR.",
    /* 22 */        "HAS LUCHADO CONMIGO",
    /* 23 */        "Y ME HAS VENCIDO.",
    /* 24 */        "HAS SIDO MÁS FUERTE QUE YO,",
    /* 25 */        "ME HAS PODIDO.",
          ],
          asambleaAcordes: [
    /* 1*/      [ac("La", "cp14","m"), ac("Mi","cp406","7")],
    /* 2*/      [ac("La", "cp403","m")],
    /* 3*/      [ac("Mi", "cp351","7")],
    /* 4*/      [ac("La", "cp253","m")],
    /* 5*/      [ac("Fa", "cp0","")],
    /* 6*/      [ac("Mi", "cp205","7")],

    /* 7*/      [ac("Mi", "cp10","7")],
    /* 8 */     [ac("", "cp0","")],
    /* 9*/      [ac("Fa", "cp172",""), ac("Mi","cp429","")],

    /* 10*/      [ac("La", "cp14","m"), ac("Mi","cp406","7")],
    /* 11*/      [ac("La", "cp403","m")],
    /* 12*/      [ac("Mi", "cp351","7")],
    /* 13*/      [ac("La", "cp253","m")],
    /* 14*/      [ac("Fa", "cp0","")],
    /* 15*/      [ac("Mi", "cp205","7")],

    /* 16*/      [ac("Do", "cp4",""), ac("Sol","cp467","")],
    /* 17*/      [ac("Do", "cp411","")],

    /* 18*/      [ac("Do", "cp26",""),ac("Sol", "cp440","")],
    /* 19*/      [ac("Do", "cp417","")],

    /* 20*/      [ac("La", "cp14","m"), ac("Mi","cp406","7")],
    /* 21*/      [ac("La", "cp403","m")],
    /* 22*/      [ac("Mi", "cp351","7")],
    /* 23*/      [ac("La", "cp253","m")],
    /* 24*/      [ac("Fa", "cp0","")],
    /* 25*/      [ac("Mi", "cp205","7")],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
          ]
      };
    
    /************************************************
     * MANEJO DE CARGA Y REDIMENSIONAMIENTO CORREGIDO
    ************************************************/
    
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
        }
        
        // Iniciar carga del canto y configurar eventos
        document.addEventListener('DOMContentLoaded', () => {
          // Limpiar contenido existente primero para evitar duplicados
          const contenedor = document.getElementById('contenedor-partitura'); // Asegúrate de tener este ID
          if (contenedor) contenedor.innerHTML = '';
          
          cargarCantoSeguro(partitura);
          window.addEventListener('resize', manejarRedimensionamiento);
        });
    