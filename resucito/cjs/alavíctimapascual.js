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
            salmo: "Secuencia de Pascua - Himno lat. «Vlctlmae paschall laudes»",
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
      /* 1*/      [ac("La", "cp6","m"), ac("Fa#","cp55","m")],
      /* 2*/      [ac("", "cp500","")],
      /* 3*/      [ac("Re", "cp20","m9")],
      /* 4*/      [ac("Fa", "cp6","maj 7"), ac("Mi","cp50","")],
      /* 5*/      [ac("Re", "cp6","m 9"), ac("Fa","cp60","")],
      /* 6*/      [ac("Mi", "cp66","")],
      /* 7*/      [ac("La", "cp6","m"), ac("La","cp20","7")],
      /* 8*/      [ac("Re", "cp50","m9")],
      /* 9*/      [ac("Fa", "cp6","maj 7"), ac("Mi","cp50","")],
      /* 10*/      [ac("Re", "cp15","m 9"), ac("Fa","cp30","")],
      /* 11*/      [ac("La", "cp6","7")],
      /* 12*/      [ac("", "cp500","")],
      /* 13*/      [ac("Fa", "cp6","maj 7"), ac("Mi","cp35","")],
      /* 14*/      [ac("Re", "cp6","m 9"), ac("Fa","cp","")],
      /* 15*/      [ac("Fa", "cp6",""), ac("Mi","cp56","")],
      /* 16*/      [ac("Fa", "cp6",""), ac("Mi","cp56","")],
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
      /* 1*/      [ac("Fa", "cp20","")],
      /* 2*/      [ac("Mi", "cp22","")],
      /* 3*/      [ac("Fa", "cp6",""), ac("Mi","cp62","")],
      /* 4*/      [ac("Fa", "cp6",""), ac("Mi","cp78","")],
      /* 5*/      [ac("Re", "cp6","m"), ac("Mi","cp40","")],
      /* 6*/      [ac("Fa", "cp6","maj7"), ac("Fa","cp78",""), ac("Mi","cp90","")],
      /* 7*/      [ac("Re", "cp6","m"), ac("Mi","cp65","")],
      /* 8*/      [ac("Fa", "cp6",""), ac("Mi","cp45","")],
      /* 9*/      [ac("Fa", "cp6",""), ac("Mi","cp62","")],
      /* 10*/      [ac("Fa", "cp6",""), ac("Mi","cp78","")],
            ]
        };
        
        // Iniciar carga del canto
        document.addEventListener('DOMContentLoaded', () => cargarCanto(partitura));
      