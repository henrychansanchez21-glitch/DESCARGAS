document.addEventListener('DOMContentLoaded', () => {
    // 1. Definir versiones
    const REQUIRED_APP_VERSION = "1.1.0"; // Versión requerida desde tu API/servidor
    const LOCAL_APP_VERSION = "1.0.5";   // Versión actual de la app del usuario

    // Mostrar versión en el HTML (solo para fines de prueba)
    document.getElementById('current-version').textContent = `Versión actual: ${LOCAL_APP_VERSION}`;

    const modal = document.getElementById('update-modal');
    const updateButton = document.getElementById('update-button');
    const closeButton = document.getElementById('close-button');
    const closeButtonTop = document.getElementById('close-button-top'); // Nuevo botón de cierre superior

    // Función para mostrar el modal con animación
    function showModal() {
        modal.classList.add('modal-visible');
        modal.classList.remove('modal-hidden'); // Solo para asegurar, modal-visible ya gestiona la visibilidad
    }

    // Función para ocultar el modal con animación
    function hideModal() {
        modal.classList.remove('modal-visible');
        modal.classList.add('modal-hidden'); // Oculta visualmente y hace no interactivo
    }

    // Función principal para comprobar la versión
    function checkForUpdate() {
        // Simple comparación de cadenas de versión (funciona para versiones sencillas como X.Y.Z)
        if (LOCAL_APP_VERSION < REQUIRED_APP_VERSION) {
            showModal(); // Mostramos el modal alegre
        } else {
            hideModal(); // Si no hay actualización, aseguramos que esté oculto
        }
    }

    // 2. Manejadores de eventos (botones)
    updateButton.addEventListener('click', () => {
        // Redirige o fuerza una recarga completa para obtener la nueva versión
        // window.location.reload(true); // Recarga y limpia caché (puede ser intrusivo)
        
        // Mejor opción para PWA o si quieres limpiar el localStorage/cache antes de recargar
        alert('¡Genial! La aplicación se actualizará. Prepara tus marcadores y caché si es necesario.');
        localStorage.clear(); // Por ejemplo, limpiar caché para asegurar la nueva versión
        window.location.href = window.location.href; // Recarga "fuerte" sin el 'true' del reload
    });

    closeButton.addEventListener('click', hideModal); // Cierra el modal con el botón de "Luego"
    closeButtonTop.addEventListener('click', hideModal); // Cierra el modal con el botón 'x' superior

    // 3. Ejecutar la comprobación al cargar la página
    checkForUpdate();
});
