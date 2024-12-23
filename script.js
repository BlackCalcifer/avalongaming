const datos = [
    { nombre: "Cieitos-Otatrom", imagen: "recursos/Cieitos-Otatrom.png", descripcion: "Cofres dorados: Santuarios 1, Pasillos 1, Cofres verdes: 6. Nodo de Madera: 2" },
];

function buscar() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = ''; // Limpiar resultados anteriores

    if (query === '') {
        resultados.style.display = 'none'; // Ocultar resultados
        return;
    }

    resultados.style.display = 'flex'; // Mostrar resultados
    const juegosFiltrados = datos.filter(juego => juego.nombre.toLowerCase().includes(query));

    juegosFiltrados.forEach(juego => {
        const div = document.createElement('div');
        div.classList.add('resultado');
        div.onclick = () => mostrarModal(juego);
        div.innerHTML = `
            <img src="${juego.imagen}" alt="${juego.nombre}">
            <h3>${juego.nombre}</h3>
            <p>${juego.descripcion}</p>
        `;
        resultados.appendChild(div);
    });
}


function mostrarModal(juego) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-imagen').src = juego.imagen;
    document.getElementById('modal-nombre').innerText = juego.nombre;
    document.getElementById('modal-descripcion').innerText = juego.descripcion;
    modal.style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

function abrirDiscord() {
    window.open('https://discord.gg/kuvUzurqA9', '_blank');
}
