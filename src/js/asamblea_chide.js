//	asamblea_chide.js = Asamblea Cantor Hide

// Asamblea1
document.addEventListener('DOMContentLoaded', () => {
    const lineaPrincipal = document.querySelector('.as1');	// AS1	= Asamblea Solista 1
    const cas1 = document.querySelector('.cas1');		// CAS1 = Cantos Asamblea Solista 1

    lineaPrincipal.addEventListener('click', () => {
        cas1.classList.toggle('oculto');
    });
});

// Asamblea2
document.addEventListener('DOMContentLoaded', () => {
    const lineaPrincipal = document.querySelector('.as2');
    const cas2 = document.querySelector('.cas2');

    lineaPrincipal.addEventListener('click', () => {
        cas2.classList.toggle('oculto');
    });
});


// Asamblea3
document.addEventListener('DOMContentLoaded', () => {
    const lineaPrincipal = document.querySelector('.as3');
    const cas3 = document.querySelector('.cas3');

    lineaPrincipal.addEventListener('click', () => {
        cas3.classList.toggle('oculto');
    });
});

// Asamblea4
document.addEventListener('DOMContentLoaded', () => {
    const lineaPrincipal = document.querySelector('.as4');
    const cas4 = document.querySelector('.cas4');

    lineaPrincipal.addEventListener('click', () => {
        cas4.classList.toggle('oculto');
    });
});


// Asamblea4
document.addEventListener('DOMContentLoaded', () => {
    const lineaPrincipal = document.querySelector('.as5');
    const cas5 = document.querySelector('.cas5');

    lineaPrincipal.addEventListener('click', () => {
        cas5.classList.toggle('oculto');
    });
});



/*
// Asamblea4
document.addEventListener('DOMContentLoaded', () => {
    const lineaPrincipal = document.querySelector('.linea-principal');
    const contenido = document.querySelector('.contenido');

    lineaPrincipal.addEventListener('click', () => {
        contenido.classList.toggle('oculto');
    });
});

*/
