/***********************
 * DATOS DEL CANTO
 ***********************/
const partitura = {
    titulo: "AMO AL SEÑOR",
    salmo: "Salmo 116 (114-115)",
    dbnos: "18",
    
    // Estructura para Asamblea (texto y acordes separados)
    asamblea: [
        "RECOBRA, ALMA MÍA, TU REPOSO,",
        "PORQUE EL SEÑOR FUE BUENO CONTIGO.",
        "ÉL TE HA LIBRADO DE LA MUERTE.",
        "HA PRESERVADO TUS PIES, DE LA CAÍDA.",
        "RECOBRA, ALMA MÍA, TU REPOSO,",
        "PORQUE EL SEÑOR FUE BUENO CONTIGO.",
        "ÉL TE HA LIBRADO DE LA MUERTE.",
        "HA PRESERVADO TUS PIES, DE LA CAÍDA."

    ],
        
    asambleaAcordes: [
        [
            {acorde: "Sol", posicion: 0, base: "Sol", extension: ""},
            {acorde: "Do", posicion: 80, base: "Do", extension: "7"}
        ],
        [
            {acorde: "Re", posicion: 0, base: "Re", extension: ""},
            {acorde: "Sol", posicion: 60, base: "Sol", extension: ""}
        ],
        [
            {acorde: "La", posicion: 10, base: "La", extension: "m"},
            {acorde: "Re", posicion: 50, base: "Re", extension: ""}
        ],
        [
            {acorde: "Mi", posicion: 20, base: "Mi", extension: "m6"},
            {acorde: "La", posicion: 70, base: "La", extension: "7"}
        ],
        [
            {acorde: "Sol", posicion: 0, base: "Sol", extension: ""},
            {acorde: "Do", posicion: 80, base: "Do", extension: "7"}
        ],
        [
            {acorde: "Re", posicion: 0, base: "Re", extension: ""},
            {acorde: "Sol", posicion: 60, base: "Sol", extension: ""}
        ],
        [
            {acorde: "La", posicion: 10, base: "La", extension: "m"},
            {acorde: "Re", posicion: 50, base: "Re", extension: ""}
        ],
        [
            {acorde: "Mi", posicion: 20, base: "Mi", extension: "m6"},
            {acorde: "La", posicion: 70, base: "La", extension: "7"}
        ]

    ],
    
    // Estructura IDÉNTICA para Cantor (arrays paralelos)
    cantor: [
        "Amo al Señor, porque escucha",
        "mi voz suplicante;",
        "inclina hacia mí su oído",
        "el día en que lo invoco."
    ],
    
    cantorAcordes: [
        [
            {acorde: "Mi", posicion: 10, base: "Mi", extension: "-6"},
            {acorde: "La", posicion: 128, base: "La", extension: "7"}
        ],
        [
            {acorde: "Sol", posicion: 0, base: "Sol", extension: ""},
            {acorde: "Do", posicion: 120, base: "Do", extension: ""}
        ],
        [
            {acorde: "Re", posicion: 15, base: "Re", extension: "m"},
            {acorde: "Sol", posicion: 140, base: "Sol", extension: "7"}
        ],
        [
            {acorde: "La", posicion: 30, base: "La", extension: ""},
            {acorde: "Re", posicion: 160, base: "Re", extension: ""}
        ]
    ]
};

// Iniciar carga del canto
document.addEventListener('DOMContentLoaded', () => cargarCanto(partitura));