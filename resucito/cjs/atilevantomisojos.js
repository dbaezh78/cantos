/*********************** FUENTE DEL CANTO ***********************/

// Mapeo para celulares 483px
const pcelular = {

'cp11':'cp15',
'cp12':'cp22',
'cp47':'cp96',
'cp48':'cp54',
'cp49':'cp104',
'cp52':'cp102',

'cp91':'cp190',
'cp92':'cp184',
'cp104':'cp218',
'cp124':'cp257',
'cp149':'cp310',
'cp159':'cp312',
'cp216':'cp428',
'cp220':'cp429',
'cp223':'cp441',
'cp248':'cp488',
'cp264':'cp628',
'cp265':'cp548',
'cp266':'cp547',
'cp294':'cp580',
'cp295':'cp586',
'cp297':'cp611',
'cp415':'cp857',
'cp416':'cp814',
'cp438':'cp903',
'cp466':'cp919',
'cp467':'cp922',
'cp484':'cp949',
'cp485':'cp952',

        };
    // Mapeo específico para tablets (800px)
    const pTablet = {

'cp11':'cp15',
'cp12':'cp12',
'cp47':'cp84',
'cp48':'cp54',
'cp49':'cp108',
'cp91':'cp190',
'cp92':'cp182',
'cp104':'cp218',
'cp124':'cp257',
'cp149':'cp310',
'cp159':'cp312',
'cp216':'cp425',
'cp220':'cp429',
'cp223':'cp441',
'cp249':'cp487',
'cp264':'cp545',
'cp265':'cp548',
'cp266':'cp545',
'cp294':'cp575',
'cp295':'cp577',
'cp297':'cp611',
'cp415':'cp857',
'cp416':'cp817',
'cp438':'cp903',
'cp466':'cp905',
'cp467':'cp918',
'cp485':'cp954',

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
    /* 1*/      [ac("Re", "cp14","m"), ac("La","cp485","7")],
    /* 2*/      [ac("Sol", "cp92","m"), ac("La","cp416","7")],
    /* 3*/      [ac("Si♭", "cp11","7"), ac("La","cp249","7")],
    /* 4*/      [ac("Si♭", "cp47","7"), ac("La","cp220","7"), ac("Si♭","cp295","7"), ac("La","cp467","7")],
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
    /* 1*/      [ac("Re", "cp11","m"), ac("La","cp159","7")],
    /* 2*/      [ac("Sol", "cp48","m"), ac("La","cp223","7")],
    
    /* 3*/      [ac("Re", "cp49","m"), ac("La","cp265","7")],
    /* 4*/      [ac("Si♭", "cp49","7"), ac("La","cp265","7")],

    /* 5*/      [ac("Re", "cp124","m"), ac("La","cp415","7")],
    /* 6*/      [ac("Si♭", "cp149","7"), ac("La","cp438","7")],

    /* 7*/      [ac("Re", "cp91","m"), ac("La","cp297","7")],
    /* 8*/      [ac("Si♭", "cp104","7"), ac("La","cp264","7")],

    /* 9*/      [ac("Re", "cp49","m"), ac("La","cp266","7")],
    /* 10*/      [ac("Si♭", "cp52","7"), ac("La","cp266","7")],

    /* 11*/      [ac("Re", "cp11","m"), ac("La","cp159","7")],
    /* 12*/      [ac("Sol", "cp48","m"), ac("La","cp223","7")],

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
    