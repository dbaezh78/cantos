// Lista de acordes
const acordes = [
    "Do", "Re", "Mi", "Fa", "Sol", "La", "Si"
];

// Función para generar las opciones del menú desplegable
function generarOpciones(defaultValue) {
    return acordes.map(acorde => 
        `<option value="${acorde}"${acorde === defaultValue ? ' selected' : ''}>${acorde}</option>`
    ).join('');
}

// Configurar cada selector de acordes
document.querySelectorAll('.chord').forEach(select => {
    const defaultValue = select.dataset.default || ""; // Acorde predeterminado si está definido
    select.innerHTML = `<option value=""></option>` + generarOpciones(defaultValue);
});

// Función para obtener el índice de un acorde
function obtenerIndiceAcorde(acorde) {
    return acordes.indexOf(acorde);
}

// Función para calcular un acorde desplazado
function calcularAcordeDesplazado(acorde, desplazamiento) {
    const indiceActual = obtenerIndiceAcorde(acorde);
    if (indiceActual === -1) return acorde; // Si el acorde no está en la lista, no lo cambia
    const nuevoIndice = (indiceActual + desplazamiento + acordes.length) % acordes.length;
    return acordes[nuevoIndice];
}

// Registrar cambios en los selectores para sincronizar todos
document.querySelectorAll('.chord').forEach(select => {
    select.addEventListener('change', event => {
        const acordeSeleccionado = event.target.value;
        const acordeInicial = obtenerIndiceAcorde(acordeSeleccionado);

        if (acordeInicial !== -1) {
            // Calcular el desplazamiento
            const desplazamiento = acordeInicial - obtenerIndiceAcorde(event.target.dataset.default || "");
            // Actualizar todos los selectores
            document.querySelectorAll('.chord').forEach(otroSelect => {
                const acordeActual = otroSelect.value || otroSelect.dataset.default || "";
                const acordeNuevo = calcularAcordeDesplazado(acordeActual, desplazamiento);
                otroSelect.value = acordeNuevo;
            });
        }
    });
});
