/***********************  * FUNCIÓN AUXILIAR  ***********************/


function ac(nota, posicion, extension = "") {
      return { acorde: nota, posicion, base: nota, extension };
}

/***********************
 * DATOS DEL CANTO
***********************/
      
      const NOMBREDELCANTO = "A LA VÍCTIMA PASCUAL";
      
        const partitura = {
            tituloc: NOMBREDELCANTO,
            titulo: NOMBREDELCANTO,
            salmo: "Secuencia de Pascua - Himno lat. «Vlctlmae paschall laudes» ",
            dbnos: "18",
      
            // Estructura para Cantor (texto)
      
            cantor: [
      /* 1 */        "A la víctima pascual,",
      /* 2 */        "ofrecemos hoy",
      /* 3 */        "el sacrificio de alabanza.",
      /* 4 */        "El cordero ha redimido el rebaño, ",
      /* 5 */        "el inocente ha reconciliado ",
      /* 6 */        "los pecadores al Padre. ",
      /* 7 */        "Muerte y vida se han enfrentado ",
      /* 8 */        "en un prodigioso duelo: ",
      /* 9 */        "el Señor de la Vida estaba muerto,",
      /* 10 */        "mas ahora está vivo y triunfa.",
      /* 11 */        "Dinos tú, María:",
      /* 12 */        "¿qué has visto en el camino?,",
      /* 13 */        "«La tumba de Cristo vacía,",
      /* 14 */        "la Gloria del Señor y vivo Cristo,",
      /* 15 */        "los ángeles, las vendas y el sudario»",
      /* 16 */        "Tú, Rey victorioso, danos tú la salvación.",
      ],
      
            // Estructura para Cantor (acordes) - CON FUNCIÓN ac()
            cantorAcordes: [
/* 1*/      [ac("La", "cp2","m"), ac("La","cp43","7")],
/* 2*/      [ac("", "cp500","")],
/* 3*/      [ac("Re", "cp42","m9")],
/* 4*/      [ac("Fa", "cp5","maj7"), ac("Mi","cp61","")],
/* 5*/      [ac("Re", "cp0",""), ac("Fa","cp49","")],
/* 6*/      [ac("Mi", "cp37","")],
/* 7*/      [ac("La", "cp2","m"), ac("La","cp21","7")],
/* 8*/      [ac("Re", "cp40","m9")],
/* 9*/      [ac("Fa", "cp5","maj 7"), ac("Mi","cp62","")],
/* 10*/      [ac("Re", "cp15","m 9"), ac("Fa","cp30",""),ac("Mi","cp49","")],
/* 11*/      [ac("La", "cp1","7")],
/* 12*/      [ac("", "cp500","")],
/* 13*/      [ac("Fa", "cp6","maj 7"), ac("Mi","cp49","")],
/* 14*/      [ac("Re", "cp4","m 9"), ac("Fa","cp34",""), ac("Mi","cp57","")],
/* 15*/      [ac("Fa", "cp1",""), ac("Mi","cp65","")],
/* 16*/      [ac("Fa", "cp1",""), ac("Mi","cp78","")],
            ],
            // Estructura para Asamblea (texto)
            asamblea: [
      
      /* 1 */        "PORQUE CRISTO, MI ESPERANZA,",
      /* 2 */        "¡HA RESUCITADO!",
      /* 3 */        "Y NOS PRECEDE EN GALILEA,",
      /* 4 */        "Y NOS PRECEDE EN GALILEA.",
      /* 5 */        "SÍ QUE ES CIERTO, ",
      /* 6 */        "CRISTO HA RESUCITADO. ",
      /* 7 */        "SÍ QUE ES CIERTO, ",
      /* 8 */        "CRISTO HA RESUCITADO. ",
      /* 9 */        "Y NOS PRECEDE EN GALILEA,",
      /* 10 */        "Y NOS PRECEDE EN GALILEA.",
            ],
      
            asambleaAcordes: [
      /* 1*/      [ac("Fa", "cp24","")],
      /* 2*/      [ac("Mi", "cp27","")],
      /* 3*/      [ac("Fa", "cp1",""), ac("Mi","cp55","")],
      /* 4*/      [ac("Fa", "cp1",""), ac("Mi","cp55","")],
      /* 5*/      [ac("Re", "cp3","m"), ac("Mi","cp27","")],
      /* 6*/      [ac("Fa", "cp5","maj7"), ac("Fa","cp28",""), ac("Mi","cp43","")],
      /* 7*/      [ac("Re", "cp3","m"), ac("Mi","cp27","")],
      /* 8*/      [ac("Fa", "cp1",""), ac("Mi","cp45","")],
      /* 9*/      [ac("Fa", "cp0",""), ac("Mi","cp55","")],
      /* 10*/      [ac("Fa", "cp0",""), ac("Mi","cp55","")],
            ]
        };
        
        // Iniciar carga del canto
        document.addEventListener('DOMContentLoaded', () => cargarCanto(partitura));
      