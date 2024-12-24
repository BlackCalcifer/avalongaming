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
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320932396765417534/Cilos-Otatrom.png?ex=676b65a9&is=676a1429&hm=adc33095fbe6ed08caa212e5635b9c78366388cb7f44ff8098b60406f5d070ca&=&format=webp&quality=lossless&width=473&height=350", // Ruta remota
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
