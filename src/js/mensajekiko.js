document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('cantoLink');
    const texto = document.querySelector('.marquee-text').innerHTML;
    
    // Crear el modal
    const modal = document.createElement('div');
    modal.className = 'modal-cantos';
    
    const contenido = document.createElement('div');
    contenido.className = 'contenido-cantos';
    contenido.innerHTML = texto;
    
    modal.appendChild(contenido);
    document.body.appendChild(modal);
    
    // Manejar el clic
    link.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'flex';
    });
    
    // Cerrar al hacer clic fuera del contenido
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});