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
