// Función para buscar el mapa
function buscar() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = ''; // Limpiar resultados anteriores

    if (query === '') {
        resultados.style.display = 'none'; // Ocultar resultados
        return;
    }

    resultados.style.display = 'flex'; // Mostrar resultados
    const juegosFiltrados = datos.filter(juego =>
        juego.nombre.toLowerCase().includes(query)
    );

    juegosFiltrados.forEach(juego => {
        const div = document.createElement('div');
        div.classList.add('resultado');
        div.onclick = () => mostrarModal(juego);

        // Generar imágenes y números de los recursos
        const recursosHtml = juego.recursos
            .filter(recurso => recursos[recurso.tipo] && recurso.cantidad > 0)
            .map(
                recurso => `
                <div class="recurso">
                    <img src="${recursos[recurso.tipo].imagen}" alt="Recurso ${recurso.tipo}">
                    <div class="numero">${recurso.cantidad}</div>
                </div>
            `
            )
            .join('');

        div.innerHTML = `
            <img src="${juego.imagen}" alt="${juego.nombre}">
            <h3>${juego.nombre}</h3>
            <div class="recursos">${recursosHtml}</div>
        `;
        resultados.appendChild(div);
    });
}

// Función para mostrar el modal
function mostrarModal(juego) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-imagen').src = juego.imagen;
    document.getElementById('modal-nombre').innerText = juego.nombre;

    const recursosHtml = juego.recursos
        .filter(recurso => recursos[recurso.tipo] && recurso.cantidad > 0)
        .map(
            recurso => `
            <div class="recurso">
                <img src="${recursos[recurso.tipo].imagen}" alt="Recurso ${recurso.tipo}">
                <div class="numero">${recurso.cantidad}</div>
            </div>
        `
        )
        .join('');

    document.getElementById('modal-descripcion').innerHTML = recursosHtml;
    modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

// Función para abrir el Discord
function abrirDiscord() {
    window.open('https://discord.gg/kuvUzurqA9', '_blank');
}
// Función para insertar el video de YouTube solo si hay un enlace disponible
// Función para insertar el video de YouTube solo si hay un enlace disponible
function insertarVideo() {
    const videoLink = "https://www.youtube.com/watch?v=WAAlqgMXgxY"; // URL del video
    const container = document.getElementById("video-container");

    // Limpiar contenido previo
    container.innerHTML = "";

    if (videoLink) {
        // Extraer el ID del video
        const videoID = videoLink.split("v=")[1]?.split("&")[0]; // Obtiene solo el ID del video
        if (!videoID) {
            console.error("ID del video no válido.");
            return;
        }

        // Crear iframe del video
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoID}`;
        iframe.width = "560";
        iframe.height = "315";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        // Insertar iframe en el contenedor
        container.appendChild(iframe);
    } else {
        // Ocultar el contenedor si no hay video
        container.style.display = "none";
    }
}

// Llamar a la función al cargar la página
window.onload = insertarVideo;
