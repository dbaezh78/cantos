/*********************** 
 * FUNCIÓN AUXILIAR MEJORADA
 ***********************/

// Mapeo para celulares
const pcelular = {
      'cp2': 'cp3',
      'cp10': 'cp15',
      'cp14': 'cp21',
      'cp70': 'cp90',
      'cp99': 'cp149'
    };


     /*
     
     /* 6* [ac("Fa", "cp38", "")],
     /* 7* [ac("Mi", "cp54", "")],
     
     /* 8* [ac("Re", "cp2", "m"), ac("Mi", "cp43", "")],
     /* 9* [ac("Re", "cp2", "m"), ac("Mi", "cp27", "")],
     /* 10/ [ac("Re", "cp11", "m"), ac("Mi", "cp49", "")],
     /* 11/ [ac("Fa", "cp35", "")],
     /* 12/ [ac("Mi", "cp36", "")], 
     */
                  // DERECHA
// Mapeo específico para tablets (800px)
const pTablet = {
      'cp1': 'cp2',     
      'cp2': 'cp2',
      'cp3': 'cp4',
      'cp4': 'cp6',
      'cp5': 'cp8',
      'cp6': 'cp9',
      'cp7': 'cp11',
      'cp8': 'cp13',
      'cp9': 'cp14',
      'cp10': 'cp8',
      'cp14': 'cp21',
      'cp15': 'cp22',
      'cp16': 'cp27',
      'cp23': 'cp24',
      'cp33': 'cp50',
      'cp35': 'cp53',
      'cp37': 'cp38',
      'cp38': 'cp39',
      'cp43': 'cp42',
      'cp44': 'cp66',
      'cp46': 'cp45',
      'cp47': 'cp70',
      'cp50': 'cp75',
      'cp53': 'cp80',
      'cp54': 'cp53',
      'cp60': 'cp90',
      'cp61': 'cp59',
      'cp65': 'cp63',
      'cp64': 'cp96',
      'cp68': 'cp102',
      'cp69': 'cp104',
      'cp70': 'cp68',
      'cp71': 'cp68',
      'cp74': 'cp111',
      'cp75': 'cp113',
      'cp77': 'cp116',
      'cp81': 'cp122',
      'cp84': 'cp126',
      'cp89': 'cp134',
      'cp90': 'cp135',
      'cp91': 'cp137',
      'cp94': 'cp141',
      'cp98': 'cp147',
      'cp99': 'cp149'
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
          const factor = 1.47; // Factor más preciso para 800px
          posicionAjustada = `cp${Math.round(numero * factor)}`;
        }
      }

      // Solo ajustamos para tablets (284px a 384px)
      if (anchoPantalla > 284 && anchoPantalla <= 411) {
            posicionAjustada = pcelular[posicion] || posicion;
            
            // Si no está en el mapeo, aplicamos un factor general más preciso
            if (!pcelular[posicion]) {
              const numero = parseInt(posicion.replace('cp', ''));
              const factor = 1.47; // Factor más preciso para 800px
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
        /* 1*/ [ac("La", "cp2", "m"), ac("Re", "cp70", "m")],
        /* 2*/ [ac("Mi", "cp10", ""), ac("La", "cp71", "m")],
        /* 3*/ [ac("Re", "cp2", "m"), ac("Mi", "cp46", "")],
        /* 4*/ [ac("Re", "cp2", "m"), ac("Mi", "cp61", "")],
        /* 5*/ [ac("Fa", "cp23", ""), ac("Mi", "cp65", "")],
        /* 6*/ [ac("Fa", "cp38", "")],
        /* 7*/ [ac("Mi", "cp54", "")],
        
        /* 8*/ [ac("Re", "cp2", "m"), ac("Mi", "cp43", "")],
        /* 9*/ [ac("Re", "cp2", "m"), ac("Mi", "cp27", "")],
        /* 10*/ [ac("Re", "cp11", "m"), ac("Mi", "cp49", "")],
        /* 11*/ [ac("Fa", "cp35", "")],
        /* 12*/ [ac("Mi", "cp36", "")],
                  // DERECHA
        /* 13*/ [ac("La", "cp2", "7"), ac("Re", "cp94", "m")],
        /* 14*/ [ac("Mi", "cp72", "")],
        /* 15*/ [ac("Re", "cp2", "m"), ac("Mi", "cp90", "")],
        /* 16*/ [ac("Re", "cp2", "m"), ac("Mi", "cp98", "")],
        /* 17*/ [ac("Fa", "cp82", "")],
        /* 18*/ [ac("Mi", "cp47", "")],
        /* 19*/ [ac("Re", "cp3", "m"), ac("Mi", "cp74", "")],

        /* 20*/ [ac("La", "cp2", "7"), ac("Re", "cp74", "m")],
        /* 21*/ [ac("Mi", "cp68", "")],
        /* 22*/ [ac("Re", "cp2", "m"), ac("Mi", "cp91", "")],
        /* 23*/ [ac("Re", "cp2", "m"), ac("Mi", "cp98", "")],
        /* 24*/ [ac("Fa", "cp81", "")],
        /* 25*/ [ac("Mi", "cp47", "")],

        /* 26*/ [ac("Re", "cp2", "m"), ac("Mi", "cp64", "")],
        /* 27*/ [ac("Fa", "cp34", ""), ac("Mi", "cp89", "")],
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
        /* 1*/ [ac("La", "cp2", "m")],
        /* 2*/ [ac("Re", "cp31", "m")],
        /* 3*/ [ac("Mi", "cp10", "")],
        /* 4*/ [ac("La", "cp25", "m")],
        /* 5*/ [ac("Re", "cp2", "m"), ac("Mi", "cp54", "")],
        /* 6*/ [ac("La", "cp2", "m")],
        /* 7*/ [ac("Re", "cp31", "m")],
        /* 8*/ [ac("Mi", "cp10", "")],
        /* 9*/ [ac("La", "cp25", "m")],
        /* 10*/ [ac("Re", "cp2", "m"), ac("Mi", "cp54", "")],
        /* 11*/ [ac("La", "cp2", "m")],
        /* 12*/ [ac("Re", "cp31", "m")],
        /* 13*/ [ac("Mi", "cp10", "")],
        /* 14*/ [ac("La", "cp25", "m")],
        /* 15*/ [ac("Re", "cp2", "m"), ac("Mi", "cp54", "")],
        /* 16*/ [ac("La", "cp2", "m")],
        /* 17*/ [ac("Re", "cp31", "m")],
        /* 18*/ [ac("Mi", "cp10", "")],
        /* 19*/ [ac("La", "cp25", "m")],
        /* 20*/ [ac("Re", "cp2", "m"), ac("Mi", "cp54", "")],
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