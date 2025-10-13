document.addEventListener('DOMContentLoaded', () => {
    
    // Asignar un retraso de animación escalonado al cargar
    const appCards = document.querySelectorAll('.app-card');
    appCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // 1. Manejo de Filtros por Categoría (Interactividad en la navegación)
    const categoryLinks = document.querySelectorAll('.category-link');
    const appListContainer = document.getElementById('app-results');

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.category;

            // 1.1 Actualiza la clase activa
            categoryLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');

            // 1.2 Filtra las tarjetas con animación
            // Creamos un array temporal para reordenar y aplicar animación
            const cardsArray = Array.from(appCards);
            
            cardsArray.forEach(card => {
                const category = card.dataset.category;
                const shouldShow = filter === 'all' || category === filter || (filter === 'free' && card.dataset.type === 'free');
                
                if (shouldShow) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Re-aplica la animación de entrada a los elementos visibles
            // Esto le da el efecto "pop-in" al cambiar de categoría
            const visibleCards = appListContainer.querySelectorAll('.app-card[style*="display: flex"]');
            visibleCards.forEach((card, index) => {
                card.style.animation = 'none'; // Resetea la animación
                void card.offsetWidth; // Truco para forzar el reinicio de la animación
                card.style.animation = `fadeIn 0.5s ease forwards`;
                card.style.animationDelay = `${index * 0.05}s`;
            });
        });
    });
});

// 2. Función de búsqueda en tiempo real (llamada desde el input HTML)
function filterApps() {
    const searchTerm = document.getElementById('app-search').value.toLowerCase().trim();
    const appCards = document.querySelectorAll('.app-card');
    
    appCards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        
        if (name.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}


// 3. Efecto Parallax en el Banner (Movimiento sutil del fondo)
function handleParallax(e) {
    const banner = document.querySelector('.premium-card');
    const layer = document.querySelector('.parallax-layer');
    
    if (layer) {
        const rect = banner.getBoundingClientRect();
        // Normaliza las coordenadas del ratón a un rango de 0 a 1
        const offsetX = (e.clientX - rect.left) / rect.width;
        const offsetY = (e.clientY - rect.top) / rect.height;

        // Calcula el movimiento (máximo 10px)
        const moveX = (offsetX - 0.5) * -10; 
        const moveY = (offsetY - 0.5) * -10;

        layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
}
