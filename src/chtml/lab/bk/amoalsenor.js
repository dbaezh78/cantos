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
            {acorde: "Do", posicion: 180, base: "Do", extension: "7"}
        ],
        [
            {acorde: "Re", posicion: 0, base: "Re", extension: ""},
            {acorde: "Sol", posicion: 160, base: "Sol", extension: ""}
        ],
        [
            {acorde: "La", posicion: 10, base: "La", extension: "m"},
            {acorde: "Re", posicion: 150, base: "Re", extension: ""}
        ],
        [
            {acorde: "Mi", posicion: 20, base: "Mi", extension: "m6"},
            {acorde: "La", posicion: 170, base: "La", extension: "7"}
        ],
        [
            {acorde: "Sol", posicion: 0, base: "Sol", extension: ""},
            {acorde: "Do", posicion: 180, base: "Do", extension: "7"}
        ],
        [
            {acorde: "Re", posicion: 0, base: "Re", extension: ""},
            {acorde: "Sol", posicion: 160, base: "Sol", extension: ""}
        ],
        [
            {acorde: "La", posicion: 10, base: "La", extension: "m"},
            {acorde: "Re", posicion: 150, base: "Re", extension: ""}
        ],
        [
            {acorde: "Mi", posicion: 20, base: "Mi", extension: "m6"},
            {acorde: "La", posicion: 170, base: "La", extension: "7"}
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
// Función para cargar el canto en la página
function cargarCanto(partitura) {
    // Cargar título y subtítulo
    document.getElementById('t1').textContent = partitura.titulo;
    document.getElementById('s1').textContent = partitura.salmo;
    document.getElementById('dbno').textContent = partitura.dbnos;

    // Cargar textos de asamblea
    for (let i = 0; i < partitura.asamblea.length; i++) {
        const elemento = document.getElementById(`a${i+1}`);
        if (elemento) elemento.textContent = partitura.asamblea[i];
    }

    // Cargar textos de cantor
    for (let i = 0; i < partitura.cantor.length; i++) {
        const elemento = document.getElementById(`c${i+1}`);
        if (elemento) elemento.textContent = partitura.cantor[i];
    }
}

// Iniciar carga del canto
document.addEventListener('DOMContentLoaded', () => cargarCanto(partitura));
