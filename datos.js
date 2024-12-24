const datos = [
    {
        nombre: "Cieitos-Otatrom T8",
        imagen: "recursos/Cieitos-Otatrom.png", // Ruta local
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "V", cantidad: 6 },
            { tipo: "M", cantidad: 2 },
        ],
    },
    {
        nombre: "Cilos-Otatrom T8",
        imagen: "https://avalonroads-97617.web.app/img/Cilos-Otatrom%20t8.png", // Ruta remota
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "V", cantidad: 6 },
            { tipo: "M", cantidad: 2 },
        ],
    },
];

// Mostrar las imágenes en la página
datos.forEach((dato) => {
    const img = document.createElement("img");
    img.src = dato.imagen; // Carga dinámica de la imagen
    img.alt = dato.nombre;
    img.style.width = "300px"; // Ajusta el tamaño según sea necesario
    document.body.appendChild(img);
});
