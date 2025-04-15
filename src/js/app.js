document.addEventListener('DOMContentLoaded', function() {
    const songsList = document.querySelector('.songs-list');
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    const toggleFilters = document.getElementById('toggleFilters');
    const filtersContainer = document.querySelector('.filters-container');
    const categoryFilters = document.querySelectorAll('.category-filter');
    const momentFilters = document.querySelectorAll('.moment-filter');
    const toggleView = document.getElementById('toggleView');
    
    let activeFilters = {
        category: null,
        moments: []
    };
    
    let clickCount = 0;
    let clickTimer = null;
    
    // Mostrar todos los cantos al cargar la página
    displaySongs(songs);


// Función para mostrar los cantos
// Modifica la función displaySongs para manejar ambas vistas
function displaySongs(songsToDisplay) {
    songsList.innerHTML = '';
    
    songsToDisplay.forEach(song => {
        const songCard = document.createElement('a');
        songCard.className = 'song-card';
        songCard.setAttribute('data-category', song.category);
        songCard.setAttribute('data-id', song.id);
        songCard.href = song.url;
        
        if (toggleView.checked) {
            
            //Ocultando el contenido
            filtersContainer.classList.add('hidden');
            toggleFilters.innerHTML = '';
            //**************************************** */

            // Vista de tarjetas (como está actualmente)
            songCard.innerHTML = `
            
                <h3 class="song-title">${song.title}</h3>
                <p class="song-subtitle">${song.subtitle}</p>
                <div>
                    <span class="song-category" style="background-color: ${getCategoryColor(song.category)}; color: ${getCategoryTextColor(song.category)}">${song.category}</span>
                    ${song.moments.map(moment => `<span class="song-moment">${moment}</span>`).join('')}
                </div>
            `;
        } else {
            // Vista de lista simplificada
            songCard.innerHTML = `
                <b class="song-title">${song.title}</b>
            `;
        }
        
        songsList.appendChild(songCard);
    });
    
    // Aplicar la clase según el estado del checkbox
    if (toggleView.checked) {
        songsList.classList.remove('list-view');
    } else {
        songsList.classList.add('list-view');
    }
}

// Agrega el event listener para el toggle de vista
toggleView.addEventListener('change', function() {

    //Ocultando el contenido
    filtersContainer.classList.add('hidden');
    toggleFilters.innerHTML = '';
    //**************************************** */

    // Actualizar el texto del label
    const labelText = this.nextElementSibling;
    labelText.textContent = this.checked ? 'Tarjetas' : 'Lista';
    
    // Volver a mostrar las canciones con la nueva vista
    filterSongs();
});
    
    function getCategoryColor(category) {
        switch(category) {
            case 'Precatecumenado': return '#eee';
            case 'Catecumenado': return '#2196F3';
            case 'Eleccion': return '#8BC34A';
            case 'Liturgia': return '#FFEB3B';
            default: return '#9E9E9E';
        }
    }
    
    function getCategoryTextColor(category) {
        switch(category) {
            case 'Precatecumenado': return '#333333';
            case 'Liturgia': return '#333333';
            default: return '#ffffff';
        }
    }
    
    function filterSongs() {
        let filteredSongs = [...songs];
        
        // Filtrar por categoría
        if (activeFilters.category) {
            filteredSongs = filteredSongs.filter(song => song.category === activeFilters.category);
        }
        
        // Filtrar por momentos litúrgicos
        if (activeFilters.moments.length > 0) {
            filteredSongs = filteredSongs.filter(song => 
                song.moments.some(moment => activeFilters.moments.includes(moment))
            );
        }
        
        // Filtrar por búsqueda
        const searchTerm = removeAccents(searchInput.value.toLowerCase());
        if (searchTerm) {
            filteredSongs = filteredSongs.filter(song => 
                removeAccents(song.title.toLowerCase()).includes(searchTerm) || 
                removeAccents(song.subtitle.toLowerCase()).includes(searchTerm)
            );
        }
        
        displaySongs(filteredSongs);
        
        // Ocultar filtros después de aplicar
        if (activeFilters.category || activeFilters.moments.length > 0) {
            filtersContainer.classList.add('hidden');
            toggleFilters.innerHTML = '';
        }
    }
    
    function removeAccents(text) {
        return text.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")  // Elimina acentos
            .replace(/[¿¡!,?]/g, "");         // Elimina signos de interrogación, exclamación y comas
    }
    
    
    // Búsqueda en tiempo real
    searchInput.addEventListener('input', filterSongs);
    
    // Contador de clics en el buscador
    searchInput.addEventListener('click', function() {
        clickCount++;
        
        if (clickTimer) {
            clearTimeout(clickTimer);
        }
        
        clickTimer = setTimeout(() => {
            if (clickCount >= 3) {
                clearSearch.click();
            }
            clickCount = 0;
        }, 300);
    });
    
    // Limpiar búsqueda y filtros
    clearSearch.addEventListener('click', function() {
        searchInput.value = '';
        activeFilters.category = null;
        activeFilters.moments = [];
        
        categoryFilters.forEach(f => f.classList.remove('active'));
        momentFilters.forEach(f => f.classList.remove('active'));
        
        displaySongs(songs);
    });
    
    // Mostrar/ocultar filtros
    toggleFilters.addEventListener('click', function() {
        filtersContainer.classList.toggle('hidden');
        this.innerHTML = filtersContainer.classList.contains('hidden') ? '' : '';
    });
    
    // Filtros por categoría
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            if (activeFilters.category === category) {
                activeFilters.category = null;
                this.classList.remove('active');
            } else {
                categoryFilters.forEach(f => f.classList.remove('active'));
                activeFilters.category = category;
                this.classList.add('active');
            }
            
            filterSongs();
        });
    });
    
    // Filtros por momento litúrgico
    momentFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const moment = this.getAttribute('data-moment');
            const index = activeFilters.moments.indexOf(moment);
            
            if (index > -1) {
                activeFilters.moments.splice(index, 1);
                this.classList.remove('active');
            } else {
                activeFilters.moments.push(moment);
                this.classList.add('active');
            }
            
            filterSongs();
        });
    });
});