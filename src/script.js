// Lista de acordes
const acordes = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];

// Función para generar las opciones del menú desplegable
function generarOpciones(defaultValue) {
    return acordes.map(acorde => `<option value="${acorde}"${acorde === defaultValue ? ' selected' : ''}>${acorde}</option>`).join('');
}

// Configurar cada selector de acordes
document.querySelectorAll('.chord').forEach(select => {
    const defaultValue = select.dataset.default || "";
    select.innerHTML = generarOpciones(defaultValue);
});

// Función para obtener el índice de un acorde
function obtenerIndiceAcorde(acorde) {
    return acordes.indexOf(acorde);
}

// Función para calcular un acorde desplazado
function calcularAcordeDesplazado(acorde, desplazamiento) {
    const indiceActual = obtenerIndiceAcorde(acorde);
    if (indiceActual === -1) return acorde;
    const nuevoIndice = (indiceActual + desplazamiento + acordes.length) % acordes.length;
    return acordes[nuevoIndice];
}

// Registrar cambios en los selectores para sincronizar todos
document.querySelectorAll('.chord').forEach(select => {
    select.addEventListener('change', event => {
        const acordeSeleccionado = event.target.value;
        const acordeInicial = obtenerIndiceAcorde(event.target.dataset.default || "");
        
        // Calcular el desplazamiento relativo
        const desplazamiento = obtenerIndiceAcorde(acordeSeleccionado) - acordeInicial;

        // Actualizar todos los selectores basándose en sus valores iniciales
        document.querySelectorAll('.chord').forEach(otroSelect => {
            const valorInicial = otroSelect.dataset.default || "";
            otroSelect.value = calcularAcordeDesplazado(valorInicial, desplazamiento);
        });
    });
});
