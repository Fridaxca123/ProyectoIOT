
//Actualizacion de datos 
<script>
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
} 
function actualizarDatos() {
    // Realizar la solicitud AJAX
    fetch('getData.php')
        .then(response => response.json())
        .then(data => {
            if (!data.error) {
                // Actualizar los elementos HTML con los datos recibidos
                document.getElementById("temperatura").innerText = `Temperatura: ${data.temperatura}°C`;
                document.getElementById("humedad").innerText = `Humedad: ${data.humedad}%`;
                document.getElementById("uv").innerText = `UV: ${data.uv}`;
            } else {
                console.error(data.error);
            }
        })
        .catch(error => console.error('Error al obtener datos:', error));
}

// Llamar a actualizarDatos cada 5 segundos para actualizar en tiempo real
setInterval(actualizarDatos, 5000);

// Ejecutar actualizarDatos cuando se carga la página por primera vez
document.addEventListener("DOMContentLoaded", actualizarDatos);
</script>



