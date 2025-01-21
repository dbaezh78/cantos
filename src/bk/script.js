// Seleccionar todas las primeras líneas
// bcoro = chorus
const firstLines = document.querySelectorAll('.bcoro');

// Iterar sobre cada línea para agregar eventos
firstLines.forEach(firstLine => {
  firstLine.addEventListener('click', () => {
    const hcoro = firstLine.nextElementSibling; // Obtener el siguiente hermano (chorus)
    if (hcoro) {
      hcoro.classList.toggle('hidden'); // Alternar la visibilidad
    }
  });
});
