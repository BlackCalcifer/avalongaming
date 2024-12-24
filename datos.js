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
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320932396765417534/Cilos-Otatrom.png?ex=676b65a9&is=676a1429&hm=adc33095fbe6ed08caa212e5635b9c78366388cb7f44ff8098b60406f5d070ca&=&format=webp&quality=lossless&width=473&height=350", // Ruta remota
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "V", cantidad: 6 },
            { tipo: "M", cantidad: 2 },
        ],
    },
    {
        nombre: "Fasites-Azazsum t8",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320932868909699233/Fasites-Azazsum_t8.png?ex=676b6619&is=676a1499&hm=4ca2f7dd85e78b01385d0c617afdd23b1acae1a6e786c4132e2c163df635d88d&=&format=webp&quality=lossless&width=960&height=540", // Ruta remota
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
