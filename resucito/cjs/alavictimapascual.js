/*********************** FUENTE DEL CANTO ***********************/

// Mapeo para celulares 483px
const pcelular = {
    // --cp1: 0.1%;
       // --cp18: 1.8%;
       // --cp486: 48.6%;
       // --cp1547: 154.7%;
        };
    // Mapeo específico para tablets (800px)
    const pTablet = {
    // --cp1: 0.1%;
       // --cp18: 1.8%;
       // --cp486: 48.6%;
       // --cp1547: 154.7%;
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
    
    const NOMBREDELCANTO = "A LA VÍCTIMA PASCUAL";
    
    const partitura = {
          tituloc: NOMBREDELCANTO,
          titulo: NOMBREDELCANTO,
          salmo: "Secuencia de Pascua - Himno lat. «Victimae paschall laudes» ",
          dbnos: "1",
    
    // Estructura para Cantor (texto)
    
    cantor: [
    /* 1 */        "A la víctima pascual,",
    /* 2 */        "ofrecemos hoy",
    /* 3 */        "el sacrificio de alabanza.",
    /* 4 */        "El cordero ha redimido el rebaño,",
    /* 5 */        "el inocente ha reconciliado",
    /* 6 */        "los pecadores al Padre.",
    /* 7 */        "Muerte y vida se han enfrentado",
    /* 8 */        "en un prodigioso duelo:",
    /* 9 */        "el Señor de la Vida estaba muerto,",
    /* 10 */        "mas ahora está vivo y triunfa.",
    /* 11 */        "Dinos tú, María:",
    /* 12 */        "¿qué has visto en el camino?,",
    /* 13 */        "«La tumba de Cristo vacía,",
    /* 14 */        "la Gloria del Señor y vivo Cristo,",
    /* 15 */        "los ángeles, las vendas y el sudario».",
    /* 16 */        "Tú, Rey victorioso, danos tú la salvación.",
    
    ],
       // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
       cantorAcordes: [
    // IZQUIERDA
    /* 1*/      [ac("La", "cp10","m"), ac("La","cp341","7")],
    /* 2*/      [ac("", "0","")],
    /* 3*/      [ac("Re", "cp316","m9")],
    /* 4*/      [ac("Fa", "cp34","maj7"), ac("Mi","cp472","")],
    /* 5*/      [ac("Re", "cp26","m9"), ac("Fa","cp386","")],
    /* 6*/      [ac("Mi", "cp292","")],
    /* 7*/      [ac("La", "cp14","m"), ac("La","cp163","7")],
    /* 8*/      [ac("Re", "cp310","m9")],
    /* 9*/      [ac("Fa", "cp34","maj7"), ac("Mi","cp488","")],
    /* 10*/     [ac("Re", "cp28","m9"), ac("Fa","cp230",""), ac("Mi","cp386","")],
    /* 11*/     [ac("La", "cp10","7")],
    /* 12*/     [ac("", "0","")],
    /* 13*/     [ac("Fa", "cp40","maj7"), ac("Mi","cp384","")],
    /* 14*/     [ac("Re", "cp28","m9"), ac("Fa","cp266",""), ac("Mi","cp448","")],
    /* 15*/     [ac("Fa", "cp2",""), ac("Mi","cp516","")],
    /* 16*/     [ac("Fa", "cp5",""), ac("Mi","cp610","")],
          ],
    
       // Estructura para Asamblea (texto)
       asamblea: [
    /* 1 */        "PORQUE CRISTO, MI ESPERANZA,",
    /* 2 */        "¡HA RESUCITADO!",
    /* 3 */        "Y NOS PRECEDE EN GALILEA,",
    /* 4 */        "Y NOS PRECEDE EN GALILEA.",
    /* 5 */        "SÍ QUE ES CIERTO,",
    /* 6 */        "CRISTO HA RESUCITADO.",
    /* 7 */        "SÍ QUE ES CIERTO,",
    /* 8 */        "CRISTO HA RESUCITADO.",
    /* 9 */        "Y NOS PRECEDE EN GALILEA,",
    /* 10 */        "Y NOS PRECEDE EN GALILEA.",
    
          ],
          asambleaAcordes: [
    /* 1*/      [ac("Fa", "cp187","")],
    /* 2*/      [ac("Mi", "cp216","")],
    /* 3*/      [ac("Fa", "cp2",""), ac("Mi","cp438","")],
    /* 4*/      [ac("Fa", "cp2",""), ac("Mi","cp438","")],
    /* 5*/      [ac("Re", "cp14","m"), ac("Mi","cp212","")],
    /* 6*/      [ac("Fa", "cp34","maj7"), ac("Fa","cp212",""), ac("Mi","cp338","")],
    /* 7*/      [ac("Re", "cp14","m"), ac("Mi","cp208","")],
    /* 8*/      [ac("Fa", "cp0",""), ac("Mi","cp338","")],
    /* 9*/      [ac("Fa", "cp0",""), ac("Mi","cp432","")],
    /* 10*/      [ac("Fa", "cp0",""), ac("Mi","cp432","")],
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
    