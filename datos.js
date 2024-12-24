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
            { tipo: "V", cantidad: 7 },
            { tipo: "MI", cantidad: 2 },
			{ tipo: "AL", cantidad: 1 },
        ],
    },
    {
        nombre: "Ferites-Ohohtum t8",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1320934561793704016/Ferites-Ohohtum_t8.png?ex=676b67ad&is=676a162d&hm=87e3cccfde4d9ec97d106372dc0c4c2c67a6b01d111b099e3ef9bce034c66a7f&", // Ruta remota
        recursos: [
            { tipo: "V", cantidad: 6 },
            { tipo: "R", cantidad: 2 },
			{ tipo: "E", cantidad: 2 },
        ],
    },
	{
        nombre: "Fiees-Ohohtum t8",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320942123394273310/Fiees-Ohohtum_t8.png?ex=676b6eb8&is=676a1d38&hm=53123e5da956533e17c8c57f692435f62ae032cba5b5c00b9a9be9364517eb1a&=&format=webp&quality=lossless&width=475&height=350", // Ruta remota
        recursos: [
            { tipo: "V", cantidad: 6 },
            { tipo: "R", cantidad: 2 },
			{ tipo: "E", cantidad: 2 },
        ],
    },
	{
        nombre: "Files-Azazsum t8",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320942319817461922/Files-Azazsum_t8.png?ex=676b6ee6&is=676a1d66&hm=f595190cbe82fce4c47a2ba0819f4ab6fcdb135d769d30d07146a4da01480529&=&format=webp&quality=lossless&width=468&height=350", // Ruta remota
        recursos: [
            { tipo: "V", cantidad: 7 },
            { tipo: "MI", cantidad: 2 },
			{ tipo: "AL", cantidad: 2 },
        ],
    },
	{
        nombre: "Hiles-Izizaum t8",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320945023755489371/Files-Izizaum_t8.png?ex=676b716b&is=676a1feb&hm=31d6661a9e6c2e17bd2261a3578057f84fca34391b1af55b835a5a38ff74f133&=&format=webp&quality=lossless&width=851&height=640", // Ruta remota
        recursos: [
            { tipo: "V", cantidad: 6 },
            { tipo: "M", cantidad: 2 },
			{ tipo: "R", cantidad: 2 },
        ],
    },
	{
        nombre: "Filitos-Uzazlum t8",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1320947139379200041/Filitos-Uzazlum_t8.png?ex=676b7364&is=676a21e4&hm=287b2b27c74b309f4fda0f17a8b5f8ae0c73d4c2ed302b2802223359124accdd&", // Ruta remota
        recursos: [
			{ tipo: "V", cantidad: 6 },
            { tipo: "PI", cantidad: 1 },
			{ tipo: "AL", cantidad: 1 },
			{ tipo: "R", cantidad: 1 },
			{ tipo: "MI", cantidad: 1 },
        ],
    },
	{
        nombre: "Fones-Opavun t8",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1320949298711494699/Fones-Opavun_t8.png?ex=676b7566&is=676a23e6&hm=23d0aa73f55957f2a97d90105dc04e9c17b6b9909c9218a06bff8be8980f21c7&", // Ruta remota
        recursos: [
			{ tipo: "D", cantidad: 3 },
            { tipo: "V", cantidad: 2 },
			{ tipo: "M", cantidad: 1 },
			{ tipo: "E", cantidad: 1 },
        ],
    },
	{
        nombre: "Foros-Uzazlum t8",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1320950126327496858/Foros-Uzazlum_t8.png?ex=676b762c&is=676a24ac&hm=8ab6cf2ea53115ad2a203b9725a3253a0cc97e4180125bc728f7441536acf2ea&", // Ruta remota
        recursos: [
			{ tipo: "V", cantidad: 6 },
            { tipo: "PI", cantidad: 1 },
			{ tipo: "AL", cantidad: 1 },
			{ tipo: "R", cantidad: 1 },
			{ tipo: "MI", cantidad: 1 },
        ],
    },
	{
        nombre: "Fuyes-Izohun T8",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1320949715201818624/Fuyes-Izohun_T8.png?ex=676b75ca&is=676a244a&hm=93b47ec6f3e9a03926115bc3bf963ab490ff9d2b2650a22d27260bf01af41d5d&", // Ruta remota
        recursos: [
			{ tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 5 },
			{ tipo: "PI", cantidad: 1 },
        ],
    },
	{
        nombre: "Fynitos-Ezatam t8",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1320950748539781170/Fynitos-Ezatam_t8.png?ex=676b76c0&is=676a2540&hm=905af2f68c678cdf325f50dab23b9a53f4dd8ec5e9392bc7ff1783beedd52652&", // Ruta remota
        recursos: [
			{ tipo: "D", cantidad: 1 },
            { tipo: "A", cantidad: 1 },
			{ tipo: "V", cantidad: 4 },
			{ tipo: "AL", cantidad: 1 },
        ],
    },
	{
        nombre: "Hiles-Izizaum T8",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320953423025274994/Hiles-Izizaum_T8.png?ex=676b793e&is=676a27be&hm=7c77df9d59352ddde534e9182cf4a154af7d90d95a6f794be9b706eb9b992c01&=&format=webp&quality=lossless&width=491&height=350", // Ruta remota
        recursos: [
			{ tipo: "V", cantidad: 6 },
            { tipo: "M", cantidad: 2 },
			{ tipo: "R", cantidad: 1 },
			{ tipo: "E", cantidad: 1 },
        ],
    },
	{
        nombre: "Honites-Izizaum_T8",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320953818522980382/Honites-Izizaum_T8.png?ex=676b799c&is=676a281c&hm=5cccd16a794c575a4a54daecd4998f096d0965616d27f5bde4d47d6dab1d1cee&=&format=webp&quality=lossless&width=387&height=350", // Ruta remota
        recursos: [
			{ tipo: "V", cantidad: 6 },
            { tipo: "M", cantidad: 2 },
			{ tipo: "R", cantidad: 1 },
			{ tipo: "E", cantidad: 1 },
        ],
    },
	{
        nombre: "Honos-Oyezam T8",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1320954447559397379/Honos-Oyezam_T8.png?ex=676b7a32&is=676a28b2&hm=1369a0216381e7479c4b8cd1d63827acaa8d12839212be93ade8cfa7d75c5fc3&", // Ruta remota
        recursos: [
			{ tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 5 },
			{ tipo: "PI", cantidad: 1 },
			{ tipo: "E", cantidad: 1 },
        ],
    },
	{
        nombre: "Hurites-Ieatun t8",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320954857514860605/Hurites-Ieatun_t8.png?ex=676b7a94&is=676a2914&hm=594591ec5ee10b15a7b7fa9e0a303c7c50c394804d17102f8d62fe1bfeeaf747&=&format=webp&quality=lossless&width=464&height=350", // Ruta remota
        recursos: [
			{ tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
			{ tipo: "PI", cantidad: 1 },
			{ tipo: "E", cantidad: 1 },
        ],
    },
	{
        nombre: "Hynes-Ieatun t8",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1320955199585521704/Hynes-Ieatun_t8.png?ex=676b7ae5&is=676a2965&hm=5832b12f779de26f1358b16e10b3ec02e22387367a28d63db891ae230a38db42&", // Ruta remota
        recursos: [
			{ tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
			{ tipo: "PI", cantidad: 1 },
			{ tipo: "E", cantidad: 1 },
        ],
    },
	{
        nombre: "Sebos-Oyohun t8",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320955789116182689/Sebos-Oyohun_t8.png?ex=676b7b72&is=676a29f2&hm=5e9b3af2d73513ae951d8a421dd3a33b776698ea9b833f5a4092a9f092f9a060&=&format=webp&quality=lossless&width=465&height=350", // Ruta remota
        recursos: [
			{ tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
			{ tipo: "M", cantidad: 1 },
			{ tipo: "AL", cantidad: 1 },
			{ tipo: "R", cantidad: 1 },
			{ tipo: "E", cantidad: 1 },
        ],
    },
	{
        nombre: "Silitos-Abizaum t8",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1320956404789673985/Silitos-Abizaum_t8.png?ex=676b7c05&is=676a2a85&hm=e8201b2985412dd1943c964067e67c1449013c742e1a8155a6486726c1d56e2c&", // Ruta remota
        recursos: [
			{ tipo: "D", cantidad: 3 },
            { tipo: "V", cantidad: 2 },
			{ tipo: "MI", cantidad: 1 },
			{ tipo: "PI", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
	{
        nombre: "",
        imagen: "", // Ruta remota
        recursos: [
			{ tipo: "", cantidad: 1 },
            { tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
			{ tipo: "", cantidad: 1 },
        ],
    },
];
