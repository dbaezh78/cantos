/*********************** FUENTE DEL CANTO ***********************/

// Mapeo para celulares 483px
const pcelular = {
    'cp309': 'cp314',
    'cp14':'cp20',
    'cp964':'cp970',
    'cp183':'cp184',
    'cp830':'cp817',
    'cp15':'cp15',
    'cp495':'cp488',
    'cp87':'cp87',
    'cp438':'cp428',
    'cp592':'cp580',
    'cp964':'cp949',
    'cp443':'cp435',
    'cp932':'cp919',


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
    
    const NOMBREDELCANTO = "A TI LEVANTO MIS OJOS ";
    
    const partitura = {
          tituloc: NOMBREDELCANTO,
          titulo: NOMBREDELCANTO,
          salmo: "Salmo 123 (122)",
          dbnos: "1",
    
    // Estructura para Cantor (texto)
    
    cantor: [
    /* 1 */        "Como los ojos de los siervos miran a las manos de sus señores,",
    /* 2 */        "como los ojos de la esclava a las manos de su señora,",
    /* 3 */        "así nuestros ojos miran al Señor,",
    /* 4 */        "esperando que tenga piedad, esperando que tenga piedad.",
    
    ],
          // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
          cantorAcordes: [
    // IZQUIERDA
    /* 1*/      [ac("Re", "cp14","m"), ac("La","cp964","7")],
    /* 2*/      [ac("Sol", "cp183","m"), ac("La","cp830","7")],
    /* 3*/      [ac("Si♭", "cp15","7"), ac("La","cp495","7")],
    /* 4*/      [ac("Si♭", "cp87","7"), ac("La","cp438","7"), ac("Si♭","cp592","7"), ac("La","cp932","7")],
          ],
    
          // Estructura para Asamblea (texto)
          asamblea: [
    /* 1 */        "A TI LEVANTO MIS OJOS,",
    /* 2 */        "A TI QUE HABITAS EN EL CIELO.",
    /* 3 */        "¡PIEDAD DE NOSOTROS, SEÑOR!",
    /* 4 */        "¡PIEDAD DE NOSOTROS, SEÑOR!",
    /* 5 */        "¡QUE DEMASIADO SE HAN BURLADO DE NOSOTROS,",
    /* 6 */        "QUE NUESTRA ALMA ESTÁ SACIADA DE DESPRECIOS!",
    /* 7 */        "¡DE LAS BURLAS DE LOS SATISFECHOS,",
    /* 8 */        "DEL DESPRECIO DE LOS SOBERBIOS!",
    /* 9 */        "¡PIEDAD DE NOSOTROS, SEÑOR!",
    /* 10 */       "¡PIEDAD DE NOSOTROS, SEÑOR! ",
    /* 11 */       "A TI LEVANTO MIS OJOS,",
    /* 12 */       "A TI QUE HABITAS EN EL CIELO.",

    //457-385% =  72% diferencia
          ],
          asambleaAcordes: [
    /* 1*/      [ac("Re", "cp14","m"), ac("La","cp309","7")],
    /* 2*/      [ac("Sol", "cp54","m"), ac("La","cp443","7")],
    
    /* 3*/      [ac("Re", "cp99","m"), ac("La","cp578","7")],
    /* 4*/      [ac("Si♭", "cp98","7"), ac("La","cp578","7")],

    /* 5*/      [ac("Re", "cp265","m"), ac("La","cp913","7")],
    /* 6*/      [ac("Si♭", "cp327","7"), ac("La","cp940","7")],

    /* 7*/      [ac("Re", "cp198","m"), ac("La","cp650","7")],
    /* 8*/      [ac("Si♭", "cp236","7"), ac("La","cp650","7")],

    /* 9*/      [ac("Re", "cp104","m"), ac("La","cp581","7")],
    /* 10*/      [ac("Si♭", "cp104","7"), ac("La","cp581","7")],

    /* 11*/      [ac("Re", "cp14","m"), ac("La","cp309","7")],
    /* 12*/      [ac("Sol", "cp54","m"), ac("La","cp443","7")],

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
    