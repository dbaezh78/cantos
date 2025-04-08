document.addEventListener('DOMContentLoaded', function() {
    const songsList = document.querySelector('.songs-list');
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    const categoryFilters = document.querySelectorAll('.category-filter');
    const momentFilters = document.querySelectorAll('.moment-filter');
    
    let activeFilters = {
        category: null,
        moments: []
    };
    
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
            
            songCard.innerHTML = `
                <h3 class="song-title">${song.title}</h3>
                <p class="song-subtitle">${song.subtitle}</p>
                <div>
                    <span class="song-category" style="background-color: ${getCategoryColor(song.category)}; color: ${getCategoryTextColor(song.category)}">${song.category}</span>
                    ${song.moments.map(moment => `<span class="song-moment">${moment}</span>`).join('')}
                </div>
            `;
            
            songsList.appendChild(songCard);
        });
    }
    
    function getCategoryColor(category) {
        switch(category) {
            case 'Precatecumenado': return '#ffffff';
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
        
        if (activeFilters.category) {
            filteredSongs = filteredSongs.filter(song => song.category === activeFilters.category);
        }
        
        if (activeFilters.moments.length > 0) {
            filteredSongs = filteredSongs.filter(song => 
                song.moments.some(moment => activeFilters.moments.includes(moment))
            );
        }
        
        displaySongs(filteredSongs);
    }
    
    // Búsqueda en tiempo real
    searchInput.addEventListener('input', function() {
        const searchTerm = removeAccents(this.value.toLowerCase());
        
        if (searchTerm) {
            const filteredSongs = songs.filter(song => 
                removeAccents(song.title.toLowerCase()).includes(searchTerm) || 
                removeAccents(song.subtitle.toLowerCase()).includes(searchTerm)
            );
            displaySongs(filteredSongs);
        } else {
            filterSongs(); // Aplicar otros filtros si existen
        }
    });
    
    // Función para eliminar acentos
    function removeAccents(text) {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    
    clearSearch.addEventListener('click', function() {
        searchInput.value = '';
        activeFilters.category = null;
        activeFilters.moments = [];
        
        categoryFilters.forEach(f => f.classList.remove('active'));
        momentFilters.forEach(f => f.classList.remove('active'));
        
        displaySongs(songs);
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
    
    // Mostrar/ocultar filtros al hacer clic en los títulos
    document.querySelectorAll('.filter-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const filterContainer = document.querySelector(`.${target}`);
            
            filterContainer.classList.toggle('hidden');
            
            // Cambiar el indicador (▼/▲)
            if (filterContainer.classList.contains('hidden')) {
                this.innerHTML = this.textContent.replace('▲', '▼');
            } else {
                this.innerHTML = this.textContent.replace('▼', '▲');
            }
        });
    });
});