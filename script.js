// JavaScript para Mi Ranchito - Modal con detalles del producto

document.addEventListener('DOMContentLoaded', () => {
  // Todas las cards con imágenes clicables
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => abrirModal(card));
  });

  // Permitir cerrar el modal al hacer clic fuera del contenido
  window.addEventListener('click', function (e) {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
      cerrarModal();
    }
  });
});

function abrirModal(card) {
  const img = card.querySelector('img').src;
  const titulo = card.querySelector('h3')?.textContent || '';
  const descripcion = card.querySelector('.descripcion')?.textContent || '';
  const precio = card.querySelector('.precio')?.textContent || '';

  document.getElementById('modal-img').src = img;
  document.getElementById('modal-titulo').textContent = titulo;
  document.getElementById('modal-descripcion').textContent = descripcion;
  document.getElementById('modal-precio').textContent = precio;

  document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const btnBuscar = document.getElementById('btnBuscar');
  const inputBuscar = document.getElementById('buscador');

  btnBuscar.addEventListener('click', () => {
    const texto = inputBuscar.value.toLowerCase();

    cards.forEach(card => {
      const titulo = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const descripcion = card.querySelector('.descripcion')?.textContent.toLowerCase() || '';

      if (titulo.includes(texto) || descripcion.includes(texto)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

  // También filtra al presionar Enter
  inputBuscar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      btnBuscar.click();
    }
  });
});

document.getElementById('toggleMusic').addEventListener('click', function () {
  const audio = document.getElementById('audio');
  if (audio.paused) {
    audio.play();
    this.textContent = '⏸️ Pausar';
  } else {
    audio.pause();
    this.textContent = '🎵 Reproducir';
  }
});

var myCarousel = document.querySelector('#carruselHeader')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  ride: 'carousel'
});
