// Datos de acordes mejorados
const chordDatabase = {
    "C": ["01023X", "35553X", "889AA8", "31023X",],
    "Cm": ["31343X", "888AA8", "3134XX"],
    "C7": ["01013X", "35353X", "888A88"],
    "D": ["000232", "5757XX", "AACFXF"],
    "Dm": ["000231", "5756XX", "AABFXF"],
    "E": ["022100", "4446XX", "999BCC"],
    "Em": ["022000", "4445XX", "999ABB"],
    "F": ["112331", "5557XX", "AAA0CC"],
    "Fm": ["111331", "5556XX", "AAA0BB"],
    "G": ["320003", "7779XX", "CCC0EE"],
    "Gm": ["310033", "7778XX", "CCC0DD"],
    "A": ["002220", "5777XX", "AAA0CC"],
    "Am": ["002210", "5776XX", "AAA0BB"],
    "B": ["224442", "7999XX", "BBB0DD"],
    "Bm": ["223442", "7998XX", "BBB0CC"],
    "C#": ["141431", "46664X", "999BBB"],
    "Db": ["141431", "46664X", "999BBB"],
    "D#": ["3334XX", "6888XX", "BBBCCC"],
    "Eb": ["3334XX", "6888XX", "BBBCCC"],
    "F#": ["244322", "6668XX", "BBB0DD"],
    "Gb": ["244322", "6668XX", "BBB0DD"],
    "G#": ["466644", "7888XX", "CCC0EE"],
    "Ab": ["466644", "7888XX", "CCC0EE"],
    "A#": ["113331", "5666XX", "AAA0CC"],
    "Bb": ["113331", "5666XX", "AAA0CC"]
};

// Variables de estado
let currentRoot = "C";
let currentType = "";
let currentNotation = "latin";
let currentPosition = 0;
let leftyMode = false;

// Elementos del DOM
const chordNameEl = document.getElementById('chord-name');
const diagramContainerEl = document.querySelector('.diagram-container');
const positionIndicatorEl = document.getElementById('position-indicator');
const prevButton = document.getElementById('prev-chord');
const nextButton = document.getElementById('next-chord');
const notationButton = document.getElementById('toggle-notation');
const leftyButton = document.getElementById('toggle-lefty');
const noteElements = document.querySelectorAll('.note');
const typeElements = document.querySelectorAll('.type');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadChord();
    setupEventListeners();
});

function setupEventListeners() {
    // Navegación de acordes
    prevButton.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition--;
            updateDiagramPosition();
        }
    });
    
    nextButton.addEventListener('click', () => {
        const chord = getCurrentChord();
        if (currentPosition < chord.positions.length - 1) {
            currentPosition++;
            updateDiagramPosition();
        }
    });
    
    // Cambiar notación
    notationButton.addEventListener('click', toggleNotation);
    
    // Modo zurdo
    leftyButton.addEventListener('click', toggleLefty);
    
    // Selectores de notas y tipos
    noteElements.forEach(el => {
        el.addEventListener('click', () => {
            noteElements.forEach(n => n.classList.remove('selected'));
            el.classList.add('selected');
            currentRoot = el.dataset.note;
            currentPosition = 0;
            loadChord();
        });
    });
    
    typeElements.forEach(el => {
        el.addEventListener('click', () => {
            typeElements.forEach(t => t.classList.remove('selected'));
            el.classList.add('selected');
            currentType = el.dataset.type;
            currentPosition = 0;
            loadChord();
        });
    });
}

function getCurrentChord() {
    const chordKey = currentRoot + currentType;
    const positions = chordDatabase[chordKey] || ["000000"];
    return { name: chordKey, positions };
}

function loadChord() {
    const chord = getCurrentChord();
    
    // Actualizar nombre del acorde
    chordNameEl.textContent = currentNotation === "latin" ? 
        translateToLatin(chord.name) : chord.name;
    
    // Limpiar diagramas existentes
    diagramContainerEl.innerHTML = '';
    positionIndicatorEl.innerHTML = '';
    
    // Crear nuevos diagramas
    chord.positions.forEach((pos, index) => {
        // Diagrama
        const diagramEl = document.createElement('div');
        diagramEl.className = 'chord-diagram';
        diagramEl.dataset.position = pos;
        diagramContainerEl.appendChild(diagramEl);
        
        // Dibujar el diagrama
        drawDiagram(diagramEl, pos);
        
        // Indicador de posición
        const dotEl = document.createElement('div');
        dotEl.className = 'position-dot';
        if (index === currentPosition) dotEl.classList.add('active');
        positionIndicatorEl.appendChild(dotEl);
    });
    
    // Posicionar el diagrama correcto
    updateDiagramPosition();
}

function drawDiagram(container, position) {
    const fretboard = document.createElement('div');
    fretboard.className = 'fretboard';
    container.appendChild(fretboard);

    // Dibujar cuerdas (de derecha a izquierda para zurdos)
    for (let i = 0; i < 6; i++) {
        const string = document.createElement('div');
        string.className = 'string';
        fretboard.appendChild(string);
    }

    // Dibujar trastes
    for (let i = 0; i < 5; i++) {
        const fret = document.createElement('div');
        fret.className = 'fret';
        fretboard.appendChild(fret);
    }

    // Posicionar los dedos
    for (let i = 0; i < 6; i++) {
        const stringPos = position[i];
        const stringNum = leftyMode ? 5 - i : i;

        if (stringPos === 'X') {
            // Cuerda no tocada
            const muted = document.createElement('div');
            muted.className = 'muted-string';
            muted.textContent = 'X';
            muted.style.left = `${10 + stringNum * 20}%`;
            muted.style.top = '5%';
            fretboard.appendChild(muted);
        } else if (stringPos === '0') {
            // Cuerda al aire
            const open = document.createElement('div');
            open.className = 'open-string';
            open.textContent = '○';
            open.style.left = `${10 + stringNum * 20}%`;
            open.style.top = '5%';
            fretboard.appendChild(open);
        } else {
            // Traste pisado
            const fretNum = parseInt(stringPos, 16);
            const marker = document.createElement('div');
            marker.className = 'fret-marker';
            marker.textContent = '1'; // Número de dedo
            marker.style.left = `${10 + stringNum * 20}%`;
            marker.style.top = `${10 + (fretNum - 1) * 20}%`;
            fretboard.appendChild(marker);
        }
    }
}

function updateDiagramPosition() {
    const containerWidth = diagramContainerEl.clientWidth;
    diagramContainerEl.style.transform = `translateX(-${currentPosition * containerWidth}px)`;
    
    // Actualizar indicadores de posición
    const dots = positionIndicatorEl.querySelectorAll('.position-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPosition);
    });
}

function toggleNotation() {
    currentNotation = currentNotation === "latin" ? "english" : "latin";
    notationButton.textContent = currentNotation === "latin" ? "C D E" : "DO RE MI";
    
    // Actualizar las notas visibles
    const notes = document.querySelectorAll('.note');
    notes.forEach(note => {
        const englishNote = note.dataset.note;
        note.textContent = currentNotation === "latin" ? 
            translateToLatin(englishNote) : englishNote;
    });
    
    loadChord();
}

function toggleLefty() {
    leftyMode = !leftyMode;
    leftyButton.style.backgroundColor = leftyMode ? "#f84" : "";
    leftyButton.style.color = leftyMode ? "white" : "";
    loadChord();
}

// Funciones de traducción mejoradas
function translateToLatin(note) {
    const translations = {
        'C': 'DO', 'D': 'RE', 'E': 'MI', 'F': 'FA', 'G': 'SOL', 'A': 'LA', 'B': 'SI',
        'C#': 'DO#', 'D#': 'RE#', 'F#': 'FA#', 'G#': 'SOL#', 'A#': 'LA#',
        'Db': 'REb', 'Eb': 'MIb', 'Gb': 'SOLb', 'Ab': 'LAb', 'Bb': 'SIb'
    };
    return translations[note] || note;
}

function translateToEnglish(note) {
    const translations = {
        'DO': 'C', 'RE': 'D', 'MI': 'E', 'FA': 'F', 'SOL': 'G', 'LA': 'A', 'SI': 'B',
        'DO#': 'C#', 'RE#': 'D#', 'FA#': 'F#', 'SOL#': 'G#', 'LA#': 'A#',
        'REb': 'Db', 'MIb': 'Eb', 'SOLb': 'Gb', 'LAb': 'Ab', 'SIb': 'Bb'
    };
    return translations[note] || note;
}