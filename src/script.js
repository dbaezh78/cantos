// Lista de acordes
const acordes = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];

// Función para generar las opciones del menú desplegable
function generarOpciones(defaultValue) {
    return acordes.map(acorde => `<option value="${acorde}"${acorde === defaultValue ? ' selected' : ''}>${acorde}</option>`).join('');
}

// Configurar cada selector de acordes
document.querySelectorAll('.chord').forEach(select => {
    const defaultValue = select.dataset.default || "";
	select.innerHTML = generarOpciones(defaultValue); // No se agrega la opción vacía

//    select.innerHTML = `<option value=""></option>` + generarOpciones(defaultValue);
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
        const acordeInicial = obtenerIndiceAcorde(acordeSeleccionado);
        if (acordeInicial !== -1) {
            const desplazamiento = acordeInicial - obtenerIndiceAcorde(event.target.dataset.default || "");
            document.querySelectorAll('.chord').forEach(otroSelect => {
                const acordeActual = otroSelect.value || otroSelect.dataset.default || "";
                otroSelect.value = calcularAcordeDesplazado(acordeActual, desplazamiento);
            });
        }
    });
});

