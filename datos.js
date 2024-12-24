const datos = [
    {
        nombre: "Cieitos-Otatrom t8",
        imagen: "recursos/Cieitos-Otatrom.png", // Ruta local
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "V", cantidad: 6 },
            { tipo: "M", cantidad: 2 },
        ],
    },
    {
        nombre: "Cilos-Otatrom t8",
        imagen: "recursos/Cieitos-Otatrom.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "V", cantidad: 6 },
            { tipo: "M", cantidad: 2 },
        ],
    },
    {
        nombre: "Fasites-Azazsum t8",
        imagen: "recursos/Cieitos-Otatrom.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "V", cantidad: 6 },
            { tipo: "M", cantidad: 2 },
        ],
    },
    {
        nombre: "Ferites-Ohohtum t8",
        imagen: "recursos/Cieitos-Otatrom.png",
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
