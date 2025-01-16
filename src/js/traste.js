// Lista de trastes
const trastes = [" ", "1°", "2°", "3°", "4°", "5°", "6°", "7°", "8°", "9°", "10°"];

// Función para generar las opciones del menú desplegable
function generarOpciones(defaultValue) {
    return trastes
        .map(traste => `<option value="${traste}"${traste === defaultValue ? ' selected' : ''}>${traste}</option>`)
        .join('');
}

// Configurar cada selector de trastes
document.querySelectorAll('.miTraste').forEach(select => {
    const defaultValue = select.dataset.default || "1°"; // Si no se especifica, por defecto será "1°"
    select.innerHTML = generarOpciones(defaultValue);
});
