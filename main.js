function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
// Obtener la fecha actual
const dateElement = document.getElementById('current-date');
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };

// Formatear la fecha y actualizar el contenido del elemento
dateElement.textContent = today.toLocaleDateString('en-US', options);


