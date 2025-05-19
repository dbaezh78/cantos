/*********************** FUENTE DEL CANTO ***********************/

// Mapeo para celulares 483px
const pcelular = {
    //  --cp1: 0.1%;
          //  --cp18: 1.8%;
          //  --cp486: 48.6%;
          //  --cp1547: 154.7%;
        };
    // Mapeo específico para tablets (800px)
    const pTablet = {
    //  --cp1: 0.1%;
          //  --cp18: 1.8%;
          //  --cp486: 48.6%;
          //  --cp1547: 154.7%;
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
    
    const NOMBREDELCANTO = "ID Y ANUNCIAD A MIS HERMANOS";
    
    const partitura = {
          tituloc: NOMBREDELCANTO,
          titulo: NOMBREDELCANTO,
          salmo: "Mateo 28,10.16-20",
          dbnos: "92",
    
    // Estructura para Cantor (texto)
    
    cantor: [
    /* 1 */        "Que allí me verán,",
    /* 2 */        "Los discípulos fueron a Galilea,",
    /* 3 */        "al monte que Jesús les había indicado.",
    /* 4 */        "Cuando lo vieron le adoraron.",
    /* 5 */        "Y Jesús les dijo:",
    /* 6 */        "«Me ha sido dado todo poder",
    /* 7 */        "en el cielo y en la tierra.",
    /* 8 */        "Id, pues, y haced discípulos",
    /* 9 */        "a todas las gentes",
    /* 10 */        "bautizándolas en el nombre del Padre",
    /* 11 */        "y del Hijo y del Espíritu Santo,",
    /* 12 */        "y enseñándoles a poner en práctica,",
    /* 13 */        "todo lo que yo os he mandado.",
    /* 14 */        "Ved que yo estoy con vosotros,",
    /* 15 */        "ved que yo estoy con vosotros",
    /* 16 */        "todos los días.",
    /* 17 */        "Hasta el fin del mundo,",
    ],
          // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
          cantorAcordes: [
    // IZQUIERDA
    /* 1*/      [ac("Mi", "cp103","")],
    /* 2*/      [ac("La", "cp14","m"), ac("Re","cp264","m"), ac("La","cp458","m")],
    /* 3*/      [ac("Re", "cp294","m"), ac("La","cp572","m")],
    /* 4*/      [ac("Mi", "cp202",""), ac("La","cp402","m")],
    /* 5*/      [ac("Fa", "cp81",""), ac("Mi","cp208","")],
    /* 6*/      [ac("Do", "cp14",""), ac("Sol","cp453","")],
    /* 7*/      [ac("Do", "cp318","")],
    /* 8*/      [ac("Do", "cp4",""), ac("Sol","cp353","")],
    /* 9*/      [ac("Do", "cp217","")],
    /* 10*/      [ac("La", "cp101","m"), ac("Mi","cp558","")],
    /* 11*/      [ac("La", "cp405","m")],
    /* 12*/      [ac("Fa", "cp14","")],
    /* 13*/      [ac("Mi", "cp433",""), ac("La","cp524","m")],
    /* 14*/      [ac("La", "cp14","m")],
    /* 15*/      [ac("Sol", "cp401","")],
    /* 16*/      [ac("La", "cp174","m")],
    /* 17*/      [ac("Mi", "cp14","")],
          ],
    
          // Estructura para Asamblea (texto)
          asamblea: [
    /* 1 */        "«ID Y ANUNCIAD A MIS HERMANOS",
    /* 2 */        "QUE VAYAN A GALILEA».",
    /* 3 */        "QUE ALLÍ ME VERÁN.",
    /* 4 */        "A ME HA SIDO DADO TODO PODER",
    /* 5 */        "EN EL CIELO Y EN LA TIERRA.",
    /* 6 */        "«ID Y ANUNCIAD A MIS HERMANOS",
    /* 7 */        "QUE VAYAN A GALILEA».",
    /* 8 */        "VED QUE YO ESTOY CON VOSOTROS,",
    /* 9 */        "VED QUE YO ESTOY CON VOSOTROS",
    /* 10 */        "TODOS LOS DÍAS.",
    /* 11 */        "HASTA EL FIN DEL MUNDO».",
    /* 12 */       "«ID Y ANUNCIAD A MIS HERMANOS",
    /* 13 */       "QUE VAYAN A GALILEA».",
          ],
          asambleaAcordes: [
    /* 1*/      [ac("La", "cp14","m")],
    /* 2*/      [ac("Sol", "cp111",""), ac("La","cp331","m")],
    /* 3*/      [ac("La", "cp95","m")],

    /* 4*/      [ac("Do", "cp14",""), ac("Sol","cp553","")],
    /* 5*/      [ac("Do", "cp389","")],
    /* 6*/      [ac("La", "cp14","m")],
    /* 7*/      [ac("Sol", "cp111",""), ac("La","cp331","m")],
    /* 8*/      [ac("La", "cp14","m")],
    /* 9*/      [ac("Sol", "cp490","")],
    /* 10*/      [ac("La", "cp225","m")],
    /* 11*/      [ac("La", "cp332","m")],
    /* 12*/      [ac("La", "cp14","m")],
    /* 13*/      [ac("Sol", "cp111",""), ac("La","cp331","m")],
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
    