    // Seleccionar la primera línea y el grupo de líneas (coro)	hcoro= Hide Coro
	/*
	la viable era chorus y ahora es hcoro
	la viable era first-line y ahora es hline
	*/
    const firstLine = document.getElementById('hline');
    const hcoro = document.getElementById('hcoro');

    // Agregar un evento al hacer clic en la primera línea
    firstLine.addEventListener('click', () => {
      hcoro.classList.toggle('hidden'); // Alternar la clase 'hidden' para mostrar/ocultar
    });
	
	

 <div class="dbline" id="hline">
    HERMANOS, A NADIE DEMOS
  </div>
  
  /*
  
  // Seleccionar la primera línea y el grupo de líneas (coro)
    const firstLine = document.getElementById('first-line');
    const chorus = document.getElementById('chorus');

    // Agregar un evento al hacer clic en la primera línea
    firstLine.addEventListener('click', () => {
      chorus.classList.toggle('hidden'); // Alternar la clase 'hidden' para mostrar/ocultar
    });

*/
