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
    
    const NOMBREDELCANTO = "CONSOLAD A MI PUEBLO";
    
    const partitura = {
          tituloc: NOMBREDELCANTO,
          titulo: NOMBREDELCANTO,
          salmo: "Isaías 40,1-11 - Melodía hebraica ",
          dbnos: "41",
    
    // Estructura para Cantor (texto)
    
    cantor: [
    /* 1 */        "¡Ohey!, una voz en el desierto grita:",
    /* 2 */        "«Preparad el camino, la senda al Señor».",
    /* 3 */        "Como el pastor conduce con cuidado",
    /* 4 */        "las ovejas que van a ser madres,",
    /* 5 */        "como el pastor que lleva sobre sus hombros",
    /* 6 */        "la oveja perdida.",
    ],
          // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
          cantorAcordes: [
    // IZQUIERDA
    /* 1*/      [ac("Sol", "cp14",""), ac("La","cp522",""), ac("Si","cp571","7")],
    /* 2*/      [ac("La", "cp14","m"), ac("Si","cp416","7"), ac("Mi","cp620","m")],
    /* 3*/      [ac("La", "cp218","m"), ac("Mi","cp562","m")],
    /* 4*/      [ac("Si", "cp441","7")],
    /* 5*/      [ac("La", "cp221","m")],
    /* 6*/      [ac("Si", "cp198","7")],
          ],
    
          // Estructura para Asamblea (texto)
          asamblea: [
    /* 1 */        "CONSOLAD A MI PUEBLO",
    /* 2 */        "Y HABLAD AL CORAZÓN DE JERUSALÉN,",
    /* 3 */        "Y DECIDLE QUE SE ACABA SU ESCLAVITUD.",
    /* 4 */        "PORQUE EL SEÑOR VIENE CON POTENCIA,",
    /* 5 */        "TRAE CONSIGO EL PREMIO.",
    /* 6 */        "COMO EL PASTOR REÚNE A SU REBAÑO,",
    /* 7 */        "LLEVA AL CORDERILLO EN SUS BRAZOS.",
    /* 8 */        "CONSOLAD A MI PUEBLO",
    /* 9 */        "Y HABLAD AL CORAZÓN DE JERUSALÉN,",
    /* 10 */        "Y DECIDLE QUE SE ACABA SU ESCLAVITUD.",
          ],
          asambleaAcordes: [
    /* 1*/      [ac("Mi", "cp14","m")],
    /* 2*/      [ac("La", "cp119","m"), ac("Si","cp631","7")],
    /* 3*/      [ac("Mi", "cp670","m")],
    /* 4*/      [ac("La", "cp277","m"), ac("Mi","cp601","m")],
    /* 5*/      [ac("Si", "cp354","7")],
    /* 6*/      [ac("La", "cp249","m"), ac("Mi","cp601","m")],
    /* 7*/      [ac("Si", "cp298","7"), ac("Mi","cp578","m")],
    /* 8*/      [ac("Mi", "cp14","m")],
    /* 9*/      [ac("La", "cp119","m"), ac("Si","cp621","7")],
    /* 10*/     [ac("Mi", "cp670","m")],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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
    