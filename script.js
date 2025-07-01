// Log para depuración: confirmar que el script file está cargado y se ejecuta.
console.log('script.js cargado');

// JavaScript para Mi Ranchito - Funcionalidades Interactivas

// --- Modal de Detalles del Producto ---

// Espera a que el DOM esté completamente cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todas las cards (elementos con la clase 'card'). Estas son clicables para mostrar detalles.
  const cards = document.querySelectorAll('.card');

  // Itera sobre cada card y añade un event listener para el evento 'click'.
  cards.forEach(card => {
    card.addEventListener('click', () => abrirModal(card)); // Al hacer clic, llama a la función abrirModal.
  });

  // Agrega un event listener al objeto window para detectar clics en cualquier parte de la ventana.
  // Esto permite cerrar el modal al hacer clic fuera de su contenido.
  window.addEventListener('click', function (e) {
    const modal = document.getElementById('modal'); // Obtiene el elemento modal.
    // Comprueba si el objetivo del clic es el modal (el fondo oscuro fuera del contenido).
    if (e.target === modal) {
      cerrarModal(); // Si es el modal, llama a la función cerrarModal.
    }
  });
});

// Función para abrir el modal y mostrar la información del producto.
function abrirModal(card) {
  // Obtiene la URL de la imagen, título, descripción y precio de la card clicada.
  const img = card.querySelector('img').src;
  const titulo = card.querySelector('h3')?.textContent || ''; // Usa el operador ?. para evitar errores si el elemento no existe.
  const descripcion = card.querySelector('.descripcion')?.textContent || '';
  const precio = card.querySelector('.precio')?.textContent || '';

  // Asigna la información obtenida a los elementos correspondientes dentro del modal.
  document.getElementById('modal-img').src = img;
  document.getElementById('modal-titulo').textContent = titulo;
  document.getElementById('modal-descripcion').textContent = descripcion;
  document.getElementById('modal-precio').textContent = precio;

  // Muestra el modal cambiando su estilo de visualización a 'flex'.
  document.getElementById('modal').style.display = 'flex';
}

// Función para cerrar el modal.
function cerrarModal() {
  // Oculta el modal cambiando su estilo de visualización a 'none'.
  document.getElementById('modal').style.display = 'none';
}

// --- Funcionalidad de Búsqueda ---

// Espera a que el DOM esté completamente cargado antes de ejecutar el script (otro event listener para modularidad).
document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todas las cards, el botón de búsqueda y el input de búsqueda.
  // Selecciona solo las cards dentro de la sección de productos destacados para la funcionalidad de búsqueda.
  const cards = document.querySelectorAll('#productos-destacados .card');
  // Intenta seleccionar el botón de búsqueda por su ID.
  const btnBuscar = document.getElementById('btnBuscar');
  const inputBuscar = document.getElementById('buscador');
  // Log para depuración: verificar si el input fue seleccionado correctamente.
  console.log(inputBuscar);
  // Log para depuración: verificar si el botón fue encontrado. Este log se mantiene fuera del if.
  if (btnBuscar) {
 console.log('Botón Buscar encontrado!');

  // Agrega un event listener al botón de búsqueda para el evento 'click'.
  btnBuscar.addEventListener('click', () => {
    // Log para depuración: confirmar que el evento click se registra
    // Obtiene el texto del input de búsqueda y lo convierte a minúsculas para una búsqueda insensible a mayúsculas.
    const texto = inputBuscar.value.toLowerCase();

 console.log('Botón Buscar clicado!');
    console.log('Texto de búsqueda:', texto);
    // Itera sobre cada card para filtrar.
    cards.forEach(card => {
      // Obtiene el título y la descripción de la card y los convierte a minúsculas.
      const altTexto = card.querySelector('img')?.alt.toLowerCase() || ''; // Obtiene el texto del atributo alt de la imagen
      const titulo = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const descripcion = card.querySelector('.descripcion')?.textContent.toLowerCase() || '';

      // Comprueba si el texto de búsqueda está incluido en el título o la descripción.
 if (titulo.includes(texto) || descripcion.includes(texto) || altTexto.includes(texto)) { // Incluye el texto del alt en la condición
        // Si hay coincidencia, muestra la card.
        card.style.display = 'block';
      } else {
        // Si no hay coincidencia, oculta la card.
        card.style.display = 'none';
      }
    });
  });

  // Agrega un event listener al input de búsqueda para el evento 'keypress'.
  // Permite activar la búsqueda al presionar la tecla Enter.
  // Este listener se mueve dentro del if para asegurar que inputBuscar no es null.
  inputBuscar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') { // Comprueba si la tecla presionada es Enter.
      btnBuscar.click(); // Si es Enter, simula un clic en el botón de búsqueda.
    }
  });
  } else {
    // Si el botón no se encontró, registra un error en la consola.
    console.error('Error: Botón Buscar no encontrado.');
  }
}); // Fin del event listener de DOMContentLoaded para la búsqueda

// --- Reproductor de Música ---

// Agrega un event listener al botón de alternar música para el evento 'click'.
document.getElementById('toggleMusic').addEventListener('click', function () {
  // Obtiene el elemento de audio.
  const audio = document.getElementById('audio');
  // Comprueba si el audio está pausado.
  if (audio.paused) {
    audio.play(); // Si está pausado, reproduce el audio.
    this.textContent = '⏸️ Pausar'; // Cambia el texto del botón a Pausar.
  } else {
    audio.pause(); // Si no está pausado (está reproduciendo), pausa el audio.
    this.textContent = '🎵 Reproducir'; // Cambia el texto del botón a Reproducir.
  }
});

// --- Carrusel de Encabezado (Bootstrap) ---

// Selecciona el elemento del carrusel de encabezado.
var myCarousel = document.querySelector('#carruselHeader')
// Crea una nueva instancia de carrusel de Bootstrap.
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000, // Define el intervalo de cambio entre diapositivas en milisegundos (3 segundos).
  ride: 'carousel' // Inicia el carrusel automáticamente al cargar la página.
});