// datos.js
const datos = [
    { 
        nombre: "Cieitos-Otatrom", 
        imagen: "recursos/Cieitos-Otatrom.png", 
        recursos: {
            recurso1: { imagen: "nodos/A.PNG", cantidad: 1 }, 
            recurso2: { imagen: "nodos/AL.PNG", cantidad: 0 }, 
            recurso3: { imagen: "nodos/D.PNG", cantidad: 2 }, 
            recurso4: { imagen: "nodos/E.PNG", cantidad: 0 }, 
            recurso5: { imagen: "nodos/M.PNG", cantidad: 3 }, 
            recurso6: { imagen: "nodos/MI.PNG", cantidad: 0 }, 
            recurso7: { imagen: "nodos/PI.PNG", cantidad: 1 }, 
            recurso8: { imagen: "nodos/R.PNG", cantidad: 0 }, 
            recurso9: { imagen: "nodos/V.PNG", cantidad: 2 }
        }
    }
    // Puedes agregar más objetos de mapa si es necesario
];// Función para buscar el mapa
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
        
        // Generar imágenes y números
        let recursosHtml = '';
        for (let i = 1; i <= 9; i++) {
            const recurso = juego.recursos[`recurso${i}`];
            if (recurso.cantidad > 0) {
                recursosHtml += `
                    <div class="recurso">
                        <img src="${recurso.imagen}" alt="Recurso ${i}">
                        <div class="numero">${recurso.cantidad}</div>
                    </div>
                `;
            }
        }

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
    let recursosHtml = '';
    for (let i = 1; i <= 9; i++) {
        const recurso = juego.recursos[`recurso${i}`];
        if (recurso.cantidad > 0) {
            recursosHtml += `
                <div class="recurso">
                    <img src="${recurso.imagen}" alt="Recurso ${i}">
                    <div class="numero">${recurso.cantidad}</div>
                </div>
            `;
        }
    }
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
