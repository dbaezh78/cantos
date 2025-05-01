/***********************
 * DATOS DEL CANTO
 ***********************/

const NOMBREDELCANTO = "AMO AL SEÑOR";

const partitura = {
    tituloc: NOMBREDELCANTO,
    titulo: NOMBREDELCANTO,
    salmo: "Salmo 116 (114-115)",
    dbnos: "18",
    
    // Estructura para Asamblea (texto y acordes separados)
    asamblea: [
        "RECOBRA, ALMA MÍA, TU REPOSO,",
        "PORQUE EL SEÑOR FUE BUENO CONTIGO.",
        "ÉL TE HA SALVADO DE LA MUERTE,",
        "HA PRESERVADO TUS PIES DE LA CAÍDA.",
        "ÉL TE HA SALVADO DE LA MUERTE,",
        "HA PRESERVADO TUS PIES DE LA CAÍDA.",
        "RECOBRA, ALMA MÍA, TU REPOSO,",
        "PORQUE EL SEÑOR FUE BUENO CONTIGO.",
        "ÉL TE HA SALVADO DE LA MUERTE,",
        "HA PRESERVADO TUS PIES DE LA CAÍDA.",
        "ÉL TE HA SALVADO DE LA MUERTE,",
        "HA PRESERVADO TUS PIES DE LA CAÍDA."
    ],
        
    asambleaAcordes: [
        //  1
        [{acorde: "Re", posicion: -11, base: "Re", extension: ""},
         {acorde: "Fa#", posicion: 180, base: "Fa#", extension: "m"}],

         //  2
        [{acorde: "Sol", posicion: -11, base: "Sol", extension: ""},
         {acorde: "Mi", posicion: 100, base: "Mi", extension: "m6"},
         {acorde: "La", posicion: 150, base: "La", extension: "7"},],

         //  3
        [{acorde: "Sol", posicion: -11, base: "Sol", extension: ""},
         {acorde: "Re", posicion: 150, base: "Re", extension: ""}],

         //  4
        [{acorde: "La", posicion: 20, base: "La", extension: "7"},
         {acorde: "Re", posicion: 170, base: "Re", extension: ""}],

         //  5
        [{acorde: "Sol", posicion: -11, base: "Sol", extension: ""},
         {acorde: "Re", posicion: 180, base: "Re", extension: ""}],

         //  6
        [{acorde: "La", posicion: 60, base: "La", extension: "7"},
         {acorde: "Re", posicion: 100, base: "Re", extension: ""},],

         //  7
        [{acorde: "Sol", posicion: 10, base: "Sol", extension: ""},
         {acorde: "Re", posicion: 150, base: "Re", extension: ""}],

         //  8
        [{acorde: "La", posicion: 20, base: "La", extension: "m6"},
         {acorde: "Re", posicion: 170, base: "Re", extension: "7"}]

    ],
    
    // Estructura IDÉNTICA para Cantor (arrays paralelos)
    cantor: [
/*1*/   "Amo al Señor, porque escucha",
/*2*/   "mi voz suplicante;",
        "inclina hacia mí su oído",
        "el día en que lo invoco.",
        "Me envolvían redes de muerte,",
        "me alcanzaron los lazos del infierno;",
        "me rodeaban tristeza y angustia,",
        "invoqué el nombre del Señor:",
        "«¡Te ruego, Señor, sálvame!»",
        "¡Tenía fe, aun cuando dije:",
        "«Yo soy un desgraciado»!,",
        "y pensaba lleno de angustia:",
        "todo hombre es falso».",
        "¿Cómo pagaré al Señor",
        "todo el bien que me ha hecho?",
        "Alzaré la copa de la bendición",
        "e invocaré el nombre del Señor.",
    ],
    
    cantorAcordes: [
        //  1
        [{acorde: "Re", posicion: -14, base: "Re", extension: ""},
        {acorde: "Fa#", posicion: 196, base: "Fa#", extension: "m"}],
            
        //  2
        [{acorde: "Sol", posicion: 89, base: "Sol", extension: ""}],
            
        //  3
        [{acorde: "Sol", posicion: 140, base: "Sol", extension: "7"},
         {acorde: "Re", posicion: 15, base: "Re", extension: "m"}],

        //  4
        [{acorde: "La", posicion: 30, base: "La", extension: "7"},
         {acorde: "Re", posicion: 160, base: "Re", extension: ""}],

        //  5
        [{acorde: "Sol", posicion: 30, base: "Sol", extension: ""},
         {acorde: "Re", posicion: 160, base: "Re", extension: ""}],

        //  6
        [{acorde: "La", posicion: 30, base: "La", extension: "7"},
         {acorde: "Re", posicion: 160, base: "Re", extension: ""}],

        //  7         
         [{acorde: "La", posicion: 30, base: "La", extension: "7"},
          {acorde: "Re", posicion: 160, base: "Re", extension: ""}],
        
        //  8
        [{acorde: "La", posicion: 30, base: "La", extension: "7"},
         {acorde: "Re", posicion: 160, base: "Re", extension: ""}],

        //  9
        [{acorde: "La", posicion: 30, base: "La", extension: "7"},
         {acorde: "Re", posicion: 160, base: "Re", extension: ""}],

        //  10
        [{acorde: "La", posicion: 30, base: "La", extension: "7"},
         {acorde: "Re", posicion: 160, base: "Re", extension: ""}],

         //  11
        [{acorde: "La", posicion: 30, base: "La", extension: "7"},
         {acorde: "Re", posicion: 160, base: "Re", extension: ""}],

         //  12
        [{acorde: "La", posicion: 30, base: "La", extension: "7"},
         {acorde: "Re", posicion: 160, base: "Re", extension: ""}],

         //  13
        [{acorde: "La", posicion: 30, base: "La", extension: "7"},
         {acorde: "Re", posicion: 160, base: "Re", extension: ""}],

         //  14
        [{acorde: "La", posicion: 30, base: "La", extension: "7"},
         {acorde: "Re", posicion: 160, base: "Re", extension: ""}],

         //  15
        [{acorde: "La", posicion: 30, base: "La", extension: "7"},
         {acorde: "Re", posicion: 160, base: "Re", extension: ""}],

         //  16
        [{acorde: "La", posicion: 30, base: "La", extension: "7"},
         {acorde: "Re", posicion: 160, base: "Re", extension: ""}],

         //  17
        [{acorde: "La", posicion: 30, base: "La", extension: "7"},
         {acorde: "Re", posicion: 160, base: "Re", extension: ""}],
    ]
};

// Iniciar carga del canto
document.addEventListener('DOMContentLoaded', () => cargarCanto(partitura));