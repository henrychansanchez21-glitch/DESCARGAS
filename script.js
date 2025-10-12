document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener elementos clave
    const searchInput = document.querySelector('.search-bar input');
    const appCards = document.querySelectorAll('.app-card');

    // 2. Escuchar el evento de entrada (mientras el usuario escribe)
    searchInput.addEventListener('input', (e) => {
        // Obtener el término de búsqueda y convertirlo a minúsculas
        const searchTerm = e.target.value.toLowerCase().trim();

        // 3. Iterar sobre cada tarjeta de aplicación
        appCards.forEach(card => {
            // Obtener el título y la categoría de la aplicación en minúsculas
            const title = card.querySelector('h3').textContent.toLowerCase();
            const category = card.querySelector('.category').textContent.toLowerCase();

            // 4. Verificar si la tarjeta coincide con el término de búsqueda
            // Buscar en el título O en la categoría
            const matches = title.includes(searchTerm) || category.includes(searchTerm);

            // 5. Mostrar u ocultar la tarjeta según la coincidencia
            if (matches) {
                card.style.display = 'block'; // Mostrar la tarjeta
            } else {
                card.style.display = 'none'; // Ocultar la tarjeta
            }
        });
    });
});
  