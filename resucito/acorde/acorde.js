/***********************  * FUNCIÓN AUXILIAR  ***********************/


function ac(nota, posicion, extension = "") {
    return { acorde: nota, posicion, base: nota, extension };
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

/* 1*/      [ac("La", "cp2","m"), ac("Re","cp98","m")],
/* 2*/      [ac("Mi", "cp10",""), ac("La","cp99","m")],
/* 3*/      [ac("Re", "cp2","m"), ac("Mi","cp65","")],
/* 4*/      [ac("Re", "cp2","m"), ac("Mi","cp84","")],
/* 5*/      [ac("Fa", "cp15",""), ac("Mi","cp90","")],
/* 6*/      [ac("Fa", "cp53","")],
/* 7*/      [ac("Mi", "cp75","")],
/* 8*/      [ac("Re", "cp2","m"), ac("Mi","cp60","")],
/* 9*/      [ac("Re", "cp2","m"), ac("Mi","cp38","")],
/* 10*/      [ac("Re", "cp16","m"), ac("Mi","cp69","")],
/* 11*/      [ac("Fa", "cp47","")],
/* 12*/      [ac("Mi", "cp50","")],
/* 13*/      [ac("La", "cp2","7"), ac("Re","cp94","m")],
/* 14*/      [ac("Mi", "cp71","")],
/* 15*/      [ac("Re", "cp2","m"), ac("Mi","cp90","")],
/* 16*/      [ac("Re", "cp2","m"), ac("Mi","cp98","")],
/* 17*/      [ac("Fa", "cp81","")],
/* 18*/      [ac("Mi", "cp47","")],
/* 19*/      [ac("Re", "cp2","m"), ac("Mi","cp74","")],
/* 20*/      [ac("La", "cp2","7"), ac("Re","cp69","m")],
/* 21*/      [ac("Mi", "cp68","")],
/* 22*/      [ac("Re", "cp2","m"), ac("Mi","cp91","")],
/* 23*/      [ac("Re", "cp2","m"), ac("Mi","cp98","")],
/* 24*/      [ac("Fa", "cp81","")],
/* 25*/      [ac("Mi", "cp47","")],
/* 26*/      [ac("Re", "cp2","m"), ac("Mi","cp64","")],
/* 27*/      [ac("Fa", "cp33",""), ac("Mi","cp89","")],
      ],
      // Estructura para Asamblea (texto)
      asamblea: [

/* 1 */        "HERMANOS, A NADIE DEMOS",
/* 2 */        "OCASIÓN DE TROPIEZO,",
/* 3 */        "HERMANOS, VIVAMOS ACEPTANDO",
/* 4 */        "LAS TRIBULACIONES,",
/* 5 */        "NECESIDADES, ANGUSTIAS Y FATIGAS.",
/* 6 */        "HERMANOS, A NADIE DEMOS",
/* 7 */        "OCASIÓN DE TROPIEZO,",
/* 8 */        "HERMANOS, VIVAMOS ACEPTANDO",
/* 9 */        "LAS TRIBULACIONES,",
/* 10 */        "NECESIDADES, ANGUSTIAS Y FATIGAS.",
/* 11 */        "HERMANOS, A NADIE DEMOS",
/* 12 */        "OCASIÓN DE TROPIEZO,",
/* 13 */        "HERMANOS, VIVAMOS ACEPTANDO",
/* 14 */        "LAS TRIBULACIONES,",
/* 15 */        "NECESIDADES, ANGUSTIAS Y FATIGAS.",
/* 16 */        "HERMANOS, A NADIE DEMOS",
/* 17 */        "OCASIÓN DE TROPIEZO,",
/* 18 */        "HERMANOS, VIVAMOS ACEPTANDO",
/* 19 */        "LAS TRIBULACIONES,",
/* 20 */        "NECESIDADES, ANGUSTIAS Y FATIGAS.",
      ],

      asambleaAcordes: [
/* 1*/      [ac("La", "cp2","m")],
/* 2*/      [ac("Re", "cp44","m")],
/* 3*/      [ac("Mi", "cp14","")],
/* 4*/      [ac("La", "cp35","m")],
/* 5*/      [ac("Re", "cp2","m"), ac("Mi","cp77","")],
/* 6*/      [ac("La", "cp2","m")],
/* 7*/      [ac("Re", "cp44","m")],
/* 8*/      [ac("Mi", "cp14","")],
/* 9*/      [ac("La", "cp35","m")],
/* 10*/      [ac("Re", "cp2","m"), ac("Mi","cp77","")],
/* 11*/      [ac("La", "cp2","m")],
/* 12*/      [ac("Re", "cp44","m")],
/* 13*/      [ac("Mi", "cp14","")],
/* 14*/      [ac("La", "cp35","m")],
/* 15*/      [ac("Re", "cp2","m"), ac("Mi","cp77","")],
/* 16*/      [ac("La", "cp2","m")],
/* 17*/      [ac("Re", "cp44","m")],
/* 18*/      [ac("Mi", "cp14","")],
/* 19*/      [ac("La", "cp35","m")],
/* 20*/      [ac("Re", "cp2","m"), ac("Mi","cp77","")],
      ]
  };

  // Iniciar carga del canto
  document.addEventListener('DOMContentLoaded', () => cargarCanto(partitura));
