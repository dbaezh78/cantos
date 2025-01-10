// Ejemplo de script adicional para añadir funcionalidad si es necesario.
// Este espacio se puede usar para agregar funcionalidades específicas
// como eventos para manejar selecciones en los acordes.

document.querySelectorAll('.chord').forEach(select => {
    select.addEventListener('change', event => {
        console.log(`Seleccionado: ${event.target.value}`);
    });
});
