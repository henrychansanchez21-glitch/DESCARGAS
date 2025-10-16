document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener los elementos del DOM
    const alerta = document.getElementById('alertaActuacion');
    const botonCerrarX = document.querySelector('.close-button');
    const botonAceptar = document.getElementById('btnAceptar');

    // 2. Función para mostrar la alerta
    function mostrarAlerta() {
        alerta.style.display = 'block';
    }

    // 3. Función para ocultar la alerta
    function ocultarAlerta() {
        alerta.style.display = 'none';
    }

    // 4. Asignar los eventos de clic
    botonCerrarX.addEventListener('click', ocultarAlerta);
    botonAceptar.addEventListener('click', ocultarAlerta);

    // 5. Ocultar la alerta si el usuario hace clic fuera de ella (opcional)
    window.addEventListener('click', function(event) {
        if (event.target === alerta) {
            ocultarAlerta();
        }
    });

    // 6. Mostrar la alerta automáticamente al cargar la página
    mostrarAlerta(); 
    
    /* Si solo quieres mostrarla bajo ciertas condiciones (ej. después de una acción), 
    puedes llamar a mostrarAlerta() cuando sea necesario, en lugar de al inicio. 
    */
});
