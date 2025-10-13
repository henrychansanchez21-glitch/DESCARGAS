document.addEventListener('DOMContentLoaded', function() {
    const updateModal = document.getElementById('updateModal');
    const closeBtn = document.querySelector('.close-btn');
    const understoodBtn = document.getElementById('understoodBtn');

    // Función para mostrar el modal
    function showModal() {
        updateModal.classList.add('active');
    }

    // Función para ocultar el modal (utilizada por la 'X' y el clic fuera)
    function hideModal() {
        updateModal.classList.remove('active');
        setTimeout(() => {
            updateModal.style.display = 'none';
        }, 300);
    }

    // ** LÓGICA CLAVE DE CIERRE **
    function closeWindow() {
        // Primero, ocultamos la alerta para una mejor experiencia visual
        hideModal();
        
        // El navegador intentará cerrar la ventana/pestaña actual.
        // ADVERTENCIA: Solo funcionará si la página fue abierta con window.open() o en algunos 
        // navegadores antiguos/configuraciones específicas, debido a las restricciones de seguridad.
        window.close();

        // Si window.close() falla (que es lo más probable si la abrió el usuario), 
        // puedes redirigir a una página en blanco como alternativa:
        // Si no se cierra, verás este alert:
        alert("La web ha intentado cerrarse, pero tu navegador no lo permite por seguridad. La web permanecerá abierta.");
    }
    // ** FIN DE LÓGICA CLAVE DE CIERRE **


    // Evento para el botón de cerrar (la 'X') - Sigue solo ocultando el modal
    closeBtn.addEventListener('click', hideModal);

    // Evento para el botón "Entendido" - ¡Ahora intenta cerrar la web!
    understoodBtn.addEventListener('click', closeWindow);

    // Opcional: cerrar el modal al hacer clic fuera de la tarjeta
    updateModal.addEventListener('click', function(event) {
        if (event.target === updateModal) {
            hideModal();
        }
    });

    // Mostrar el modal automáticamente cuando la página carga
    showModal();
});
