document.addEventListener('DOMContentLoaded', function() {
  // Cargar el JSON con los cantos
  fetch('canto.json')
    .then(response => response.json())
    .then(data => {
      const canto = data.cantos[0]; // Tomamos el primer canto como ejemplo
      cargarCanto(canto);
    })
    .catch(error => console.error('Error al cargar el canto:', error));

  // Función para cargar un canto en la página
  function cargarCanto(canto) {
    // Cargar título y subtítulo
    document.querySelector('.titulo').textContent = canto.titulo;
    document.querySelector('.subtitulo').textContent = canto.subtitulo;

      // Aplicar margen a los contenedores principales
  contenedorIzquierdo.classList.add('margencanto');
  contenedorDerecho.classList.add('margencanto');
  

    // Cargar información del pie
    const pieCells = document.querySelectorAll('.pie-tres-columnas td');
    canto.info.forEach((info, index) => {
      if (pieCells[index]) {
        pieCells[index].textContent = info;
      }
    });

    // Limpiar contenedores de letra
    const contenedorIzquierdo = document.querySelector('.izq #contenedor-letra-izq');
    const contenedorDerecho = document.querySelector('.der #contenedor-letra-der');
    contenedorIzquierdo.innerHTML = '';
    contenedorDerecho.innerHTML = '';

    // Procesar cada sección del canto
    canto.secciones.forEach(seccion => {
      const contenedor = seccion.posicion === 'izquierda' ? contenedorIzquierdo : contenedorDerecho;
      
      seccion.estrofas.forEach(estrofa => {
        // Crear contenedor de estrofa
        const divEstrofa = document.createElement('div');
        divEstrofa.className = `estrofa ${seccion.tipo === 'A' ? 'asamblea' : 'cantor'}`;
        
        // Crear contenedor de acordes
        const divAcordes = document.createElement('div');
        divAcordes.className = 'acordes-container';
        
        // Añadir acordes
        estrofa.acordes.forEach(acorde => {
          const spanAcorde = document.createElement('span');
          spanAcorde.className = 'acorde';
          spanAcorde.textContent = acorde.acorde;
          spanAcorde.style.left = `${acorde.posicion}px`;
          divAcordes.appendChild(spanAcorde);
        });
        
        // Añadir texto
        const divTexto = document.createElement('div');
        divTexto.textContent = estrofa.texto;
        
        // Ensamblar estrofa
        divEstrofa.appendChild(divAcordes);
        divEstrofa.appendChild(divTexto);
        contenedor.appendChild(divEstrofa);
      });
    });
  }

  // Event listener para el toggle de columnas
  document.getElementById('toggleColumnas').addEventListener('click', function() {
    document.getElementById('contenedorColumnas').classList.toggle('modo-movil');
  });

  // Navegación entre cantos (simplificada)
  document.querySelectorAll('.flecha').forEach(flecha => {
    flecha.addEventListener('click', function() {
      // Aquí iría la lógica para cargar el canto anterior/siguiente
      console.log('Navegación:', this.textContent);
    });
  });
});