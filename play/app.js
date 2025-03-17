const tituloCancion = document.querySelector('.reproductor-musica h1');
const nombreArtista = document.querySelector('.reproductor-musica p');

const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');

const inconoControl = document.getElementById('iconoControl');
const botonReproducirPausar = document.querySelector('.controles button.boton-reproducir-pausar');

const botonAtras = document.querySelector('.controles button.atras');
const botonAdelante = document.querySelector('.controles button.adelante');
const botonAleatorio = document.querySelector('.controles button.aleatorio');
const botonRepetir = document.querySelector('.controles button.repetir');

const playlistContainer = document.getElementById('playlist-container');

let canciones = [];
let indiceCancionActual = 0;
let modoAleatorio = false;
let modoRepetir = false;

document.getElementById('fondo-input').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
     const reader = new FileReader();

     reader.onload = function(e) {
        document.body.style.backgroundImage = `url(${e.target.result})`;
     };

     reader.readAsDataURL(file);
    }
});

document.getElementById('musica-input').addEventListener('change', function(e){
    const files = Array.from(e.target.files);
    
    files.forEach(file => {
        const url = URL.createObjectURL(file);
        const nombreArchivo = file.name.replace(/\.[^/.]+$/, "");

        canciones.push({
            titulo: nombreArchivo,
            nombre: 'Local file',
            fuente: url
        });
    });

    actualizarPlaylist();
    if (canciones.length === files.length) {
        actualizarInfoCancion();
    }
});

function actualizarPlaylist() {
    playlistContainer.innerHTML = '';
    canciones.forEach((cancionItem, index) => {
        const li = document.createElement('li');
        li.textContent = `${cancionItem.titulo} - ${cancionItem.nombre}`

        li.onclick = () => {
            indiceCancionActual = index;
            actualizarInfoCancion();
            reproducirCancion();
        }

        if(index === indiceCancionActual) {
            li.classList.add('active');
        }
        
        playlistContainer.appendChild(li);
    })
}

function actualizarInfoCancion(){
    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    nombreArtista.textContent = canciones[indiceCancionActual].nombre;
    cancion.src = canciones[indiceCancionActual].fuente;
    cancion.loop = modoRepetir;
    actualizarPlaylist();
};

cancion.addEventListener('loadedmetadata', function(){
    progreso.max = cancion.duration;
    progreso.value = cancion.currentTime;
});

botonReproducirPausar.addEventListener('click', reproducirPausar);

function reproducirPausar(){
    if(cancion.paused){
        reproducirCancion();
    } else {
        pausarCancion();
    }
};

function reproducirCancion(){
    cancion.play();
    inconoControl.classList.add('bi-pause-fill')
    inconoControl.classList.remove('bi-play-fill')
}

function pausarCancion(){
    cancion.pause();
    inconoControl.classList.remove('bi-pause-fill')
    inconoControl.classList.add('bi-play-fill')
}

cancion.addEventListener('timeupdate', function(){
    if(!cancion.paused){
        progreso.value = cancion.currentTime;
    }
});

cancion.addEventListener('ended', function(){
    if(modoRepetir){
        cancion.currentTime = 0;
        reproducirCancion();
        return;
    }

    if(modoAleatorio) {
        indiceCancionActual = obtenerIndiceAleatorio();
    } else {
        indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
    }

    actualizarInfoCancion();
    reproducirCancion();
});

function obtenerIndiceAleatorio() {
    let nuevoIndice;
    do {
        nuevoIndice = Math.floor(Math.random() * canciones.length);
    } while (nuevoIndice === indiceCancionActual && canciones.length > 1);
    return nuevoIndice;
};

progreso.addEventListener('input', function(){
    cancion.currentTime = progreso.value;
});

progreso.addEventListener('change', ()=>{
    reproducirCancion();
});

botonAdelante.addEventListener('click', function(){
    if(modoRepetir) {
        cancion.currentTime = 0;
        reproducirCancion();
        return;
    }

    if(modoAleatorio) {
        indiceCancionActual = obtenerIndiceAleatorio();
    } else {
        indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
    }

    actualizarInfoCancion();
    reproducirCancion();
});

botonAtras.addEventListener('click', function(){
    if(modoRepetir) {
        cancion.currentTime = 0;
        reproducirCancion();
        return;
    }
    
    if(modoAleatorio) {
        indiceCancionActual = obtenerIndiceAleatorio();
    } else {
        indiceCancionActual = (indiceCancionActual - 1) % canciones.length;
    }

    actualizarInfoCancion();
    reproducirCancion();
});

botonAleatorio.addEventListener('click', function(){
    if(modoAleatorio){
        modoAleatorio = false;
    } else {
        modoAleatorio = true;
        modoRepetir = false;
        botonRepetir.classList.remove('active');
    }
    
    botonAleatorio.classList.toggle('active');
    cancion.loop = modoRepetir;
});

botonRepetir.addEventListener('click', function(){
    if(modoRepetir){
        modoRepetir = false;
    } else {
        modoRepetir = true;
        modoAleatorio = false;
        botonAleatorio.classList.remove('active');
    }

    botonRepetir.classList.toggle('active');
    cancion.loop = modoRepetir;
});

actualizarInfoCancion();
