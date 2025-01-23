let wakeLock = null;

// Función para activar el Wake Lock
async function activarWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            wakeLock = await navigator.wakeLock.request('screen');
            console.log('Wake Lock activado');
        } else {
            console.log('Wake Lock no es compatible con este navegador');
        }
    } catch (err) {
        console.error(`Error activando Wake Lock: ${err.name}, ${err.message}`);
    }
}

// Función para liberar el Wake Lock (opcional)
function liberarWakeLock() {
    if (wakeLock !== null) {
        wakeLock.release()
            .then(() => {
                console.log('Wake Lock liberado');
                wakeLock = null;
            });
    }
}

// Activar Wake Lock al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    activarWakeLock();
});

// Opcional: Desactivar Wake Lock al salir de la página
window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        liberarWakeLock();
    }
});
