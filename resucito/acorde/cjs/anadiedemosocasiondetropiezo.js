/*********************** FUNCIÓN AUXILIAR MEJORADA ***********************/

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
    
    const NOMBREDELCANTO = "A NADIE DEMOS OCASIÓN DE TROPIE";
    
    const partitura = {
      tituloc: NOMBREDELCANTO,
      titulo: NOMBREDELCANTO,
      salmo: "Salmo 116 (114-115)",
      dbnos: "18",
    
      // Estructura para Cantor (texto)
      cantor: [
        /* 1 */ "Hermanos, a nadie demos ocasión de tropiezo,",
        /* 2 */ "hermanos, vivamos aceptando las tribulaciones,",
        /* 3 */ "necesidades, angustias y fatigas,",
        /* 4 */ "viviendo en pureza, paciencia y bondad,",
        /* 5 */ "en el Espíritu Santo, y en el poder de Dios,",
        /* 6 */ "con las armas de la justicia,",
        /* 7 */ "las de la derecha y las de la izquierda.",
        /* 8 */ "En calumnias y en buena fama,",
        /* 9 */ "en gloria e ignominia,",
        /* 10 */ "como pobres, aunque enriqueciendo a muchos;",
        /* 11 */ "como quienes nada tienen,",
        /* 12 */ "aunque lo poseemos todo.",
        /* 13 */ "Hermanos, os hemos hablado con franqueza,",
        /* 14 */ "os hemos hablado en toda verdad.",
        /* 15 */ "No unciros al yugo desigual con los paganos.",
        /* 16 */ "¿Qué participación hay entre el fiel y el infiel?",
        /* 17 */ "¿Qué unión entre el santuario de Dios",
        /* 18 */ "y el santuario de los ídolos?",
        /* 19 */ "Porque somos el santuario de Dios.",
        /* 20 */ "Tengo plena confianza en el hablaros,",
        /* 21 */ "porque estoy orgulloso de vosotros.",
        /* 22 */ "No unciros al yugo desigual con los paganos.",
        /* 23 */ "¿Qué participación hay entre el fiel y el infiel?",
        /* 24 */ "¿Qué unión entre el santuario de Dios",
        /* 25 */ "y el santuario de los ídolos?",
        /* 26 */ "En pureza, paciencia y bondad,",
        /* 27 */ "en el Espíritu Santo, y en el poder de Dios.",
      ],
    
      // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
      cantorAcordes: [
// IZQUIERDA
        /* 1*/ [ac("La", "cp18", "m"), ac("Re", "cp696", "m")],
        /* 2*/ [ac("Mi", "cp76", ""),  ac("La", "cp710", "m")],
        /* 3*/ [ac("Re", "cp18", "m"), ac("Mi", "cp464", "")],
        /* 4*/ [ac("Re", "cp18", "m"), ac("Mi", "cp612", "")],
        /* 5*/ [ac("Fa", "cp23", ""),  ac("Mi", "cp646", "")],
        /* 6*/ [ac("Fa", "cp388", "")],
        /* 7*/ [ac("Mi", "cp544", "")],
        
        /* 8*/ [ac("Re", "cp18", "m"),  ac("Mi", "cp434", "")],
        /* 9*/ [ac("Re", "cp18", "m"),  ac("Mi", "cp274", "")],
        /* 10*/ [ac("Re", "cp11", "m"), ac("Mi", "cp500", "")],
        /* 11*/ [ac("Fa", "cp348", "")],
        /* 12*/ [ac("Mi", "cp360", "")],
// DERECHA
        /* 13*/ [ac("La", "cp18", "7"), ac("Re", "cp676", "m")],
        /* 14*/ [ac("Mi", "cp516", "")],
        /* 15*/ [ac("Re", "cp18", "m"), ac("Mi", "cp646", "")],
        /* 16*/ [ac("Re", "cp18", "m"), ac("Mi", "cp700", "")],
        /* 17*/ [ac("Fa", "cp584", "")],
        /* 18*/ [ac("Mi", "cp340", "")],
        /* 19*/ [ac("Re", "cp18", "m"), ac("Mi", "cp532", "")],

        /* 20*/ [ac("La", "cp18", "7"), ac("Re", "cp534", "m")],
        /* 21*/ [ac("Mi", "cp484", "")],
        /* 22*/ [ac("Re", "cp18", "m"), ac("Mi", "cp650", "")],
        /* 23*/ [ac("Re", "cp18", "m"), ac("Mi", "cp710", "")],
        /* 24*/ [ac("Fa", "cp582", "")],
        /* 25*/ [ac("Mi", "cp340", "")],

        /* 26*/ [ac("Re", "cp18", "m"), ac("Mi", "cp458", "")],
        /* 27*/ [ac("Fa", "cp238", ""), ac("Mi", "cp640", "")],
      ],
    
      // Estructura para Asamblea (texto)
      asamblea: [
        /* 1 */ "HERMANOS, A NADIE DEMOS",
        /* 2 */ "OCASIÓN DE TROPIEZO,",
        /* 3 */ "HERMANOS, VIVAMOS ACEPTANDO",
        /* 4 */ "LAS TRIBULACIONES,",
        /* 5 */ "NECESIDADES, ANGUSTIAS Y FATIGAS.",
        /* 6 */ "HERMANOS, A NADIE DEMOS",
        /* 7 */ "OCASIÓN DE TROPIEZO,",
        /* 8 */ "HERMANOS, VIVAMOS ACEPTANDO",
        /* 9 */ "LAS TRIBULACIONES,",
        /* 10 */ "NECESIDADES, ANGUSTIAS Y FATIGAS.",
        /* 11 */ "HERMANOS, A NADIE DEMOS",
        /* 12 */ "OCASIÓN DE TROPIEZO,",
        /* 13 */ "HERMANOS, VIVAMOS ACEPTANDO",
        /* 14 */ "LAS TRIBULACIONES,",
        /* 15 */ "NECESIDADES, ANGUSTIAS Y FATIGAS.",
        /* 16 */ "HERMANOS, A NADIE DEMOS",
        /* 17 */ "OCASIÓN DE TROPIEZO,",
        /* 18 */ "HERMANOS, VIVAMOS ACEPTANDO",
        /* 19 */ "LAS TRIBULACIONES,",
        /* 20 */ "NECESIDADES, ANGUSTIAS Y FATIGAS.",
      ],
    
      asambleaAcordes: [
        /* 1*/  [ac("La", "cp16", "m")],
        /* 2*/  [ac("Re", "cp316", "m")],
        /* 3*/  [ac("Mi", "cp104", "")],
        /* 4*/  [ac("La", "cp250", "m")],
        /* 5*/  [ac("Re", "cp16", "m"), ac("Mi", "cp546", "")],

        /* 6*/  [ac("La", "cp16", "m")],
        /* 7*/  [ac("Re", "cp316", "m")],
        /* 8*/  [ac("Mi", "cp104", "")],
        /* 9*/  [ac("La", "cp250", "m")],
        /* 10*/ [ac("Re", "cp16", "m"), ac("Mi", "cp546", "")],

        /* 11*/ [ac("La", "cp16", "m")],
        /* 12*/ [ac("Re", "cp316", "m")],
        /* 13*/ [ac("Mi", "cp104", "")],
        /* 14*/ [ac("La", "cp250", "m")],
        /* 15*/ [ac("Re", "cp16", "m"), ac("Mi", "cp546", "")],

        /* 16*/ [ac("La", "cp16", "m")],
        /* 17*/ [ac("Re", "cp316", "m")],
        /* 18*/ [ac("Mi", "cp104", "")],
        /* 19*/ [ac("La", "cp250", "m")],
        /* 20*/ [ac("Re", "cp16", "m"), ac("Mi", "cp546", "")],
      ]
    };
    
    /***********************
     * MANEJO DE CARGA Y REDIMENSIONAMIENTO CORREGIDO
     ***********************/
    
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