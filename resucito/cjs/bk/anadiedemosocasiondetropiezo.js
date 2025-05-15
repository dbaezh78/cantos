/***********************  * FUNCIÓN AUXILIAR  ***********************/


function ac(nota, posicion, extension = "") {
        return { acorde: nota, posicion, base: nota, extension };
      }
      
      /***********************
       * DATOS DEL CANTO
       ***********************/
    
    const NOMBREDELCANTO = "A NADIE DEMOS OCASIÓN DE TROPIEZO";
    
      const partitura = {
          tituloc: NOMBREDELCANTO,
          titulo: NOMBREDELCANTO,
          salmo: "2 Corintios 6,3ss",
          dbnos: "2",
    
          // Estructura para Cantor (texto)
    
          cantor: [
    /* 1 */        "Hermanos, a nadie demos ocasión de tropiezo,",
    /* 2 */        "hermanos, vivamos aceptando las tribulaciones,",
    /* 3 */        "necesidades, angustias y fatigas,",
    /* 4 */        "viviendo en pureza, paciencia y bondad,",
    /* 5 */        "en el Espíritu Santo, y en el poder de Dios,",
    /* 6 */        "con las armas de la justicia,",
    /* 7 */        "las de la derecha y las de la izquierda.",
    /* 8 */        "En calumnias y en buena fama,",
    /* 9 */        "en gloria e ignominia,",
    /* 10 */        "como pobres, aunque enriqueciendo a muchos;",
    /* 11 */        "como quienes nada tienen,",
    /* 12 */        "aunque lo poseemos todo.",
    /* 13 */        "Hermanos, os hemos hablado con franqueza,",
    /* 14 */        "os hemos hablado en toda verdad.",
    /* 15 */        "No unciros al yugo desigual con los paganos.",
    /* 16 */        "¿Qué participación hay entre el fiel y el infiel?",
    /* 17 */        "¿Qué unión entre el santuario de Dios",
    /* 18 */        "y el santuario de los ídolos?",
    /* 19 */        "Porque somos el santuario de Dios.",
    /* 20 */        "Tengo plena confianza en el hablaros,",
    /* 21 */        "porque estoy orgulloso de vosotros.",
    /* 22 */        "No unciros al yugo desigual con los paganos.",
    /* 23 */        "¿Qué participación hay entre el fiel y el infiel?",
    /* 24 */        "¿Qué unión entre el santuario de Dios",
    /* 25 */        "y el santuario de los ídolos?",
    /* 26 */        "En pureza, paciencia y bondad,",
    /* 27 */        "en el Espíritu Santo, y en el poder de Dios.",
    
    ],
          // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
          cantorAcordes: [
    
    /* 1*/      [ac("La", "cp2","m"), ac("Re","cp89","m")],
    /* 2*/      [ac("Mi", "cp10",""), ac("La","cp89","m")],
    /* 3*/      [ac("Re", "cp1","m"), ac("Mi","cp59","")],
    /* 4*/      [ac("Re", "cp1","m"), ac("Mi","cp70","")],
    /* 5*/      [ac("Fa", "cp15",""), ac("Mi","cp40","")],
    /* 6*/      [ac("Fa", "cp20","")],
    /* 7*/      [ac("Mi", "cp30","")],
    /* 8*/      [ac("Re", "cp1","m"), ac("Mi","cp30","")],
    /* 9*/      [ac("Re", "cp1","m"), ac("Mi","cp30","")],
    /* 10*/      [ac("Re", "cp1","m"), ac("Mi","cp15","")],
    /* 11*/      [ac("Fa", "cp30","")],
    /* 12*/      [ac("Mi", "cp30","")],
    /* 13*/      [ac("La", "cp1","7"), ac("Re","cp30","m")],
    /* 14*/      [ac("Mi", "cp28","")],
    /* 15*/      [ac("Re", "cp1","m"), ac("Mi","cp28","")],
    /* 16*/      [ac("Re", "cp1","m"), ac("Mi","cp30","")],
    /* 17*/      [ac("Fa", "cp30","")],
    /* 18*/      [ac("Mi", "cp25","")],
    /* 19*/      [ac("Re", "cp1","m"), ac("Mi","cp25","")],
    /* 20*/      [ac("La", "cp1","7"), ac("Re","cp30","m")],
    /* 21*/      [ac("Mi", "cp30","")],
    /* 22*/      [ac("Re", "cp1","m"), ac("Mi","cp30","")],
    /* 23*/      [ac("Re", "cp1","m"), ac("Mi","cp28","")],
    /* 24*/      [ac("Fa", "cp30","")],
    /* 25*/      [ac("Mi", "cp25","")],
    /* 26*/      [ac("Re", "cp1","m"), ac("Mi","cp28","")],
    /* 27*/      [ac("Fa", "cp15",""), ac("Mi","cp30","")],
          ],
          // Estructura para Asamblea (texto)
          asamblea: [
    
    /* 1 */        "HERMANOS, A NADIE DEMOS",
    /* 2 */        "OCASIÓN DE TROPIEZO,",
    /* 3 */        "HERMANOS, VIVAMOS ACEPTANDO",
    /* 4 */        "LAS TRIBULACIONES,",
    /* 5 */        "NECESIDADES, ANGUSTIAS Y FATIGAS.",
          ],
    
          asambleaAcordes: [
    /* 1*/      [ac("La", "cp1","m"), ac("Re","cp20","")],
    /* 2*/      [ac("Re", "cp20","m")],
    /* 3*/      [ac("Mi", "cp5","")],
    /* 4*/      [ac("La", "cp18","m")],
    /* 5*/      [ac("Re", "cp1","m"), ac("Mi","cp15","")],
          ]
      };
    
      // Iniciar carga del canto
      document.addEventListener('DOMContentLoaded', () => cargarCanto(partitura));
    