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
    function displaySongs(songsToDisplay) {
        songsList.innerHTML = '';
        
        songsToDisplay.forEach(song => {
            const songCard = document.createElement('a');
            songCard.className = 'song-card';
            songCard.setAttribute('data-category', song.category);
            songCard.setAttribute('data-id', song.id);
            songCard.href = song.url;
            
            if (toggleView.checked) {
                // Vista de tarjetas
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
        
        if (toggleView.checked) {
            songsList.classList.remove('list-view');
        } else {
            songsList.classList.add('list-view');
        }
    }

    // Función mejorada para normalizar texto (quita acentos, signos y espacios extras)
    function normalizeText(text) {
        return text
            .toString()
            .toLowerCase()
            .normalize("NFD")  // Separa los acentos
            .replace(/[\u0300-\u036f]/g, "")  // Elimina los acentos
            .replace(/[^\w\s]/g, '')  // Elimina signos de puntuación
            .replace(/\s+/g, ' ')  // Reduce espacios múltiples a uno solo
            .trim();  // Elimina espacios al inicio y final
    }

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
        
        // Filtrar por búsqueda (usando la nueva función normalizeText)
        const searchTerm = normalizeText(searchInput.value);
        if (searchTerm) {
            filteredSongs = filteredSongs.filter(song => 
                normalizeText(song.title).includes(searchTerm) || 
                (song.subtitle && normalizeText(song.subtitle).includes(searchTerm))
            );
        }
        
        displaySongs(filteredSongs);
        
        // Ocultar filtros después de aplicar
        if (activeFilters.category || activeFilters.moments.length > 0) {
            filtersContainer.classList.add('hidden');
            toggleFilters.innerHTML = '';
        }
    }
    
    // Resto del código permanece igual...
    searchInput.addEventListener('input', filterSongs);
    
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
    
    clearSearch.addEventListener('click', function() {
        searchInput.value = '';
        activeFilters.category = null;
        activeFilters.moments = [];
        
        categoryFilters.forEach(f => f.classList.remove('active'));
        momentFilters.forEach(f => f.classList.remove('active'));
        
        displaySongs(songs);
    });
    
    toggleFilters.addEventListener('click', function() {
        filtersContainer.classList.toggle('hidden');
        this.innerHTML = filtersContainer.classList.contains('hidden') ? '' : '';
    });
    
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