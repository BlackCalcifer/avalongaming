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
        nombre: "Fasites-Azazsum t8",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320932868909699233/Fasites-Azazsum_t8.png?ex=676d6059&is=676c0ed9&hm=88646c07943468468d039e193164bac7f1a6d9678c2458c21ba061523e022208&=&format=webp&quality=lossless&width=550&height=309", // Ruta remota
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
        nombre: "Siritos-Oyohun t8",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320958235754369106/Siritos-Oyohun_t8.png?ex=676b7db9&is=676a2c39&hm=d71628ec81f1fb61bf5073ee1bea5d369cc05da869f849ee9c54f5ecf3eab387&=&format=webp&quality=lossless&width=465&height=350", // Ruta remota
        recursos: [
			{ tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
			{ tipo: "R", cantidad: 1 },
			{ tipo: "E", cantidad: 2 },
        ],
    },
	{
        nombre: "Suyitos-Oyarlos t8",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1320958836890275840/Suyitos-Oyarlos_t8.png?ex=676b7e48&is=676a2cc8&hm=b1d0a5eeb097f8f79540372cbe5459272583ee6cec5c254bdcb40d682fdb737b&", // Ruta remota
        recursos: [
			{ tipo: "V", cantidad: 6 },
            { tipo: "R", cantidad: 1 },
			{ tipo: "MI", cantidad: 1 },
			{ tipo: "E", cantidad: 1 },
        ],
    },
	{
        nombre: "Synos-Oyarlos T8",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320960444101558354/Synos-Oyarlos_T8.png?ex=676b7fc8&is=676a2e48&hm=0da4e031a416155ae8bdbb1d119f4d908ac59a4af5a566264381813046eaafee&=&format=webp&quality=lossless&width=446&height=350", // Ruta remota
        recursos: [
			{ tipo: "V", cantidad: 6 },
            { tipo: "R", cantidad: 1 },
			{ tipo: "MI", cantidad: 1 },
        ],
    },
	{
        nombre: "Tilitos-Ataglos t8",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1320960696342544445/Tilitos-Ataglos_t8.png?ex=676b8004&is=676a2e84&hm=25c6a7d8fa5e4e776b6619ec8d0f0f8579f1f84d074c7693eb4a1a8b188b6426&", // Ruta remota
        recursos: [
			{ tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 9 },
			{ tipo: "E", cantidad: 1 },
        ],
    },
	{
        nombre: "Touos-Ataglos t8",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320961358044598354/Touos-Ataglos_t8.png?ex=676b80a2&is=676a2f22&hm=8aba2ff6f6208c4742d1b5e3cf9b561835f5ce958f2dc522e306101bbdd234e9&=&format=webp&quality=lossless&width=489&height=350", // Ruta remota
        recursos: [
			{ tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 9 },
			{ tipo: "PI", cantidad: 1 },
			{ tipo: "E", cantidad: 1 },
        ],
    },
	{
        nombre: "Tuyitos-Aboysum t8",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1320961960111767582/Tuyitos-Aboysum_t8.png?ex=676b8131&is=676a2fb1&hm=da3e860ed1588a226e940e288d14a6c5a8d3c8dc110aadbf95852e004a5272f4&", // Ruta remota
        recursos: [
			{ tipo: "D", cantidad: 2 },
            { tipo: "V", cantidad: 1 },
			{ tipo: "AL", cantidad: 1 },
			{ tipo: "MI", cantidad: 1 },
			{ tipo: "E", cantidad: 1 },
        ],
    },
	{
        nombre: "Cases-Ugumlos T6",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1320962866550931506/Cases-Ugumlos_T6.png?ex=676b8209&is=676a3089&hm=00475ef9ad65ce04c8943e7935f630ac1d4d2256576301bcbcac9da70f0bb458&", // Ruta remota
        recursos: [
			{ tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 1 },
			{ tipo: "R", cantidad: 1 },
			{ tipo: "E", cantidad: 1 },
			{ tipo: "M", cantidad: 1 },
			{ tipo: "MI", cantidad: 1 },
			{ tipo: "PI", cantidad: 1 },
        ],
    },
	{
        nombre: "Settun-In-Nusis t6",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1320964116440940716/Settun-In-Nusis_t6.png?ex=676b8333&is=676a31b3&hm=df9988770052669e679074e417ecfe9930a840e763933b178b59c4ee63401f56&", // Ruta remota
        recursos: [
			{ tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 5 },
			{ tipo: "PI", cantidad: 1 },
        ],
    },
	{
        nombre: "Casitos-Atinaum T6",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320965091730128896/Casitos-Atinaum_T6.png?ex=676b841c&is=676a329c&hm=49d220349c4c0cabe633b5b27d77e74fb48b552cd138be25ddfc3992c2261826&=&format=webp&quality=lossless&width=485&height=350", // Ruta remota
        recursos: [
			{ tipo: "D", cantidad: 3 },
            { tipo: "A", cantidad: 1 },
			{ tipo: "V", cantidad: 3 },
			{ tipo: "AL", cantidad: 1 },
        ],
    },
	{
        nombre: "Casos-Aximam t6",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320965585009381456/Casos-Aximam_t6.png?ex=676b8491&is=676a3311&hm=9ac76f508309ae16574445006f68a83b7dbce27f9f43b90616f318e9cd37afd4&=&format=webp&quality=lossless&width=466&height=350", // Ruta remota
        recursos: [
			{ tipo: "A", cantidad: 2 },
            { tipo: "V", cantidad: 2 },
			{ tipo: "MI", cantidad: 2 },
			{ tipo: "E", cantidad: 2 },
        ],
    },
	{
        nombre: "Casos-Ayosrom T6",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320967099488927785/Casos-Ayosrom_T6.png?ex=676b85fa&is=676a347a&hm=ba6efa941023eb5ac0c7fc5b51c0c9bdd152d88dd69ad60df747a8422088c0f0&=&format=webp&quality=lossless&width=485&height=350", // Ruta remota
        recursos: [
			{ tipo: "V", cantidad: 6 },
            { tipo: "M", cantidad: 2 },
			{ tipo: "R", cantidad: 1 },
			{ tipo: "PI", cantidad: 1 },
			{ tipo: "E", cantidad: 1 },
        ],
    },
	{
        nombre: "Cetitos-Aiayrom T6",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1320967558974668931/Cetitos-Aiayrom_T6.png?ex=676b8668&is=676a34e8&hm=788780deb3c859ac85a05b38d559165f3d6ef1ca58af802d8d9e3ba36c6ded31&=&format=webp&quality=lossless&width=452&height=350", // Ruta remota
        recursos: [
			{ tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 3 },
			{ tipo: "AL", cantidad: 1 },
			{ tipo: "R", cantidad: 1 },
			{ tipo: "E", cantidad: 1 },
        ],
    },
	{
        nombre: "Cetitos-Avixnum t6",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1320968666870972499/Cetitos-Avixnum_t6.png?ex=676b8770&is=676a35f0&hm=38c69877010c37cdb2876c10dc9dd11129b43ab879fbbb8c4483bd41368f416d&", // Ruta remota
        recursos: [
			{ tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 7 },
			{ tipo: "AL", cantidad: 1 },
			{ tipo: "M", cantidad: 1 },
			{ tipo: "MI", cantidad: 1 },
        ],
    },
	{
        nombre: "cetitos-aximam t6",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1321559065805193246/cetitos-aximam_t6.png?ex=676dad4a&is=676c5bca&hm=d60b8777aee42e37dfa509d6a220774bb45b6209b9d40ee85a47a9936e4f2a2c&=&format=webp&quality=lossless&width=466&height=350", // Ruta remota
        recursos: [
			{ tipo: "A", cantidad: 2 },
            { tipo: "V", cantidad: 1 },
			{ tipo: "MI", cantidad: 2 },
			{ tipo: "E", cantidad: 2 },
        ],
    },
	{
        nombre: "Cieites-Ugumlos T6",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1321560098619002921/Cieites-Ugumlos_T6.png?ex=676dae40&is=676c5cc0&hm=46162d48cab8b7334fd7d38160c58083a42e9ef10a9cbee5245d9b7c1d3cf3c4&", // Ruta remota
        recursos: [
			{ tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 1 },
			{ tipo: "M", cantidad: 1 },
			{ tipo: "R", cantidad: 1 },
			{ tipo: "PI", cantidad: 1 },
			{ tipo: "MI", cantidad: 1 },
			{ tipo: "E", cantidad: 1 },
        ],
    },
	{
        nombre: "Cieites-Ugumlos T6",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1321561148717535263/Ferites-Ohohtum_t8.png?ex=676daf3b&is=676c5dbb&hm=86d1f3ae823b303af5967ecbcd028b44b0d1d84328e2918c0d4619dbd7612b17&=&format=webp&quality=lossless&width=485&height=350", // Ruta remota
        recursos: [
			{ tipo: "V", cantidad: 6 },
            { tipo: "R", cantidad: 1 },
			{ tipo: "PI", cantidad: 1 },
			{ tipo: "M", cantidad: 2 },
			{ tipo: "E", cantidad: 1 },
        ],
    },
	{
        nombre: "Cieos-Atatlum t6",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1321561763346645134/Cieos-Atatlum_t6.png?ex=676dafcd&is=676c5e4d&hm=e2af602be259e459867bdf748d6b8878d585b2ef3588df6279b6dd15a9eede79&", // Ruta remota
        recursos: [
			{ tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 5 },
			{ tipo: "E", cantidad: 2 },
        ],
    },
	{
        nombre: "Cilitos-Opodam t6",
        imagen: "https://cdn.discordapp.com/attachments/1320932318109630464/1321562230575333396/Cilitos-Opodam.png?ex=676db03d&is=676c5ebd&hm=b757dc64b3bb7a73465d29fc33193afe6d8d780e334c2208fc51f543b74a8323&", // Ruta remota
        recursos: [
			{ tipo: "D", cantidad: 3 },
            { tipo: "A", cantidad: 1 },
			{ tipo: "V", cantidad: 2 },
			{ tipo: "AL", cantidad: 1 },
        ],
    },
	{
        nombre: "Conos-Avaelum t6",
        imagen: "https://media.discordapp.net/attachments/1320932318109630464/1321562704795668480/Conos-Avaelum_t6.png?ex=676db0ae&is=676c5f2e&hm=a5fa5e016fa630842f8a86ced0496360a00c63a199cab3bd18d265ba1ab33912&=&format=webp&quality=lossless&width=474&height=350", // Ruta remota
        recursos: [
			{ tipo: "V", cantidad: 8 },
            { tipo: "D", cantidad: 1 },
			{ tipo: "R", cantidad: 1 },
        ],
    },
	{
        "nombre": "Coros-Atinaum",
        "imagen": "recursos/Coros-Atinaum t6 v2.png",
        "recursos": [
            { "tipo": "D", "cantidad": 3 },
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 3 },
            { "tipo": "AL", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Couos-Ayayaum",
        "imagen": "recursos/Couos-Ayayaum t6.png",
        "recursos": [
            { "tipo": "D", "cantidad": 2 },
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 3 },
            { "tipo": "R", "cantidad": 1 },
            { "tipo": "M", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Curites-Exakrom",
        "imagen": "recursos/Curites-Exakrom t4.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 8 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Cuyites-Iooinum",
        "imagen": "recursos/cuyites-iooinum.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 2 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Cynitos-Aiagsum",
        "imagen": "recursos/Cynitos-Aiagsum T4.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 2 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 2 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Cynitos-Atatlum",
        "imagen": "recursos/Cynitos-Atatlum T6.png",
        "recursos": [
            { "tipo": "D", "cantidad": 1 },
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Cynos-Avixnum",
        "imagen": "recursos/Cynos-Avixnum t6.png",
        "recursos": [
            { "tipo": "V", "cantidad": 7 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Fasitos-Oleraum",
        "imagen": "recursos/Fasitos-Oleraum T6.png",
        "recursos": [
            { "tipo": "D", "cantidad": 3 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Fasos-Ayiotum",
        "imagen": "recursos/Fasos-Ayiotum T6.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 3 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "R", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Feritos-Enomaum",
        "imagen": "",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Fetos-Aiaylos",
        "imagen": "recursos/Fetos-Aiaylos T6.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 6 },
            { "tipo": "E", "cantidad": 4 }
        ]
    },
    {
        "nombre": "Fiees-Ohohtum",
        "imagen": "recursos/Fiees-Ohohtum t8.png",
        "recursos": [
            { "tipo": "V", "cantidad": 6 },
            { "tipo": "R", "cantidad": 2 },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Fieos-Aiuttum",
        "imagen": "",
        "recursos": [
            { "tipo": "D", "cantidad": 3 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "V", "cantidad": 2 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Filites-Izohun",
        "imagen": "recursos/Filites-Izohun t8.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Firos-Enomaum",
        "imagen": "",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Firos-Ezatam",
        "imagen": "recursos/firos-ezatam.png",
        "recursos": [
            { "tipo": "D", "cantidad": 1 },
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 4 },
            { "tipo": "AL", "cantidad": 1 }
        ]
    },
	{
        nombre: "Fonos-Aiugsum t4",
        imagen: "recursos/Fonos-Aiugsum.png", // Ruta local
        recursos: [
            { tipo: "R", cantidad: 2 },
            { tipo: "E", cantidad: 2 },
            { tipo: "M", cantidad: 1 },
            { tipo: "AL", cantidad: 1 }
        ]
    },
    {
        nombre: "Fonos-Oleraum t6",
        imagen: "recursos/Fonos-Oleraum.png", // Ruta local
        recursos: [
            { tipo: "D", cantidad: 3 },
            { tipo: "V", cantidad: 1 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Foritos-Aiaylos t6",
        imagen: "recursos/Foritos-Aiaylos.png", // Ruta local
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 6 },
            { tipo: "E", cantidad: 4 }
        ]
    },
    {
        nombre: "Foues-Aeaosum t4",
        imagen: "recursos/Foues-Aeaosum.png", // Ruta local
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Fouitos-Aiattum t6",
        imagen: "recursos/Fouitos-Aiattum.png", // Ruta local
        recursos: [
            { tipo: "D", cantidad: 3 },
            { tipo: "V", cantidad: 2 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "MI", cantidad: 1 }
        ]
    },
    {
        nombre: "Furitos-Aiavam t6",
        imagen: "recursos/Furitos-Aiavam.png", // Ruta local
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 3 },
            { tipo: "MI", cantidad: 1 }
        ]
    },
    {
        nombre: "Fuyes-Izohun t8",
        imagen: "recursos/Fuyes-Izohun.png", // Ruta local
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 5 },
            { tipo: "PI", cantidad: 1 }
        ]
    },
    {
        nombre: "Fynitos-Abalam t4",
        imagen: "recursos/Fynitos-Abalam.png", // Ruta local
        recursos: [
            { tipo: "A", cantidad: 2 },
            { tipo: "V", cantidad: 4 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Fynitos-Ezatam t8",
        imagen: "recursos/Fynitos-Ezatam.png", // Ruta local
        recursos: [
            { tipo: "D", cantidad: 1 },
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 4 },
            { tipo: "AL", cantidad: 1 }
        ]
    },
    {
        nombre: "Hasitos-Avaolum t6",
        imagen: "recursos/Hasitos-Avaolum.png", // Ruta local
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 6 },
            { tipo: "R", cantidad: 1 },
            { tipo: "PI", cantidad: 1 }
        ]
    },
	{
        nombre: "Qiient-Tersom t6",
        imagen: "recursos/Qiient-Tersom.png",
        recursos: [
            { tipo: "A", cantidad: 2 },
            { tipo: "V", cantidad: 1 },
            { tipo: "R", cantidad: 1 },
            { tipo: "M", cantidad: 1 }
        ]
    },
    {
        nombre: "Quaent-Al-Viesom t6",
        imagen: "recursos/quaent-al-Viesom.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "MI", cantidad: 2 }
        ]
    },
    {
        nombre: "Quaent-Al-Vynsum t6",
        imagen: "recursos/quaent-al-vynsum.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 5 },
            { tipo: "PI", cantidad: 1 }
        ]
    },
    {
        nombre: "Quaent-Al-Nusis t6",
        imagen: "recursos/quaent-al-nusis.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 1 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "R", cantidad: 1 }
        ]
    },
    {
        nombre: "Quatun-Et-Nusas t6",
        imagen: "recursos/Quatun-et-Nusas.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "R", cantidad: 2 }
        ]
    },
    {
        nombre: "Quatun-Nusas t6",
        imagen: "recursos/Quatun-Nusas.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "R", cantidad: 2 },
            { tipo: "M", cantidad: 1 }
        ]
    },
    {
        nombre: "Sases-Aoarsum t4",
        imagen: "recursos/Sases-Aorsum.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 1 },
            { tipo: "AL", cantidad: 2 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "MI", cantidad: 1 }
        ]
    },
    {
        nombre: "Sasitos-Umogaum t4",
        imagen: "recursos/sasitos-umogaum.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 1 },
            { tipo: "M", cantidad: 2 },
            { tipo: "R", cantidad: 1 },
            { tipo: "MI", cantidad: 1 }
        ]
    },
    {
        nombre: "Secent-AI-Odetis t6",
        imagen: "recursos/Secent-AI-Odetis.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "R", cantidad: 1 }
        ]
    },
    {
        nombre: "Secent-Al-Duosom t6",
        imagen: "recursos/Secent-Al-Duosom.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "M", cantidad: 1 },
            { tipo: "MI", cantidad: 1 }
        ]
    },
    {
        nombre: "Secent-Et-Vyntum t6",
        imagen: "recursos/Secent-Et-Vyntum.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 1 },
            { tipo: "M", cantidad: 2 }
        ]
    },
    {
        nombre: "Sectun-in-Vyntis t6",
        imagen: "recursos/Sectun-in-Vyntis.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "R", cantidad: 1 },
            { tipo: "PI", cantidad: 1 }
        ]
    },
    {
        nombre: "Sectun-Tersas t6",
        imagen: "recursos/sectun-tersas.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "M", cantidad: 1 },
            { tipo: "MI", cantidad: 1 }
        ]
    },
    {
        nombre: "Setitos-Obobrom t6",
        imagen: "recursos/Setitos-Obobrom.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
            { tipo: "E", cantidad: 2 }
        ]
    },
    {
        nombre: "Settun-Al-Odetum t6",
        imagen: "recursos/Settun-Al-Odetum.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 1 },
            { tipo: "R", cantidad: 1 }
        ]
    },
    {
        nombre: "Sieos-Ofugtum t6",
        imagen: "recursos/sieos-ofugtum.png",
        recursos: [
            { tipo: "D", cantidad: 3 },
            { tipo: "V", cantidad: 2 },
            { tipo: "R", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Siritos-Avoirom t4",
        imagen: "recursos/Siritos-Avoirom.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 8 },
            { tipo: "E", cantidad: 1 },
            { tipo: "AL", cantidad: 1 }
        ]
    },
    {
        nombre: "Soritos-Aiaitum t6",
        imagen: "recursos/soritos-aiaitum.png",
        recursos: [
            { tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
            { tipo: "M", cantidad: 1 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Soritos-Apenlum t4",
        imagen: "recursos/Soritos-Apenlum.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "M", cantidad: 2 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "R", cantidad: 1 }
        ]
    },
    {
        nombre: "Soritos-Avamsum t6",
        imagen: "recursos/Soritos-Avamsum.png",
        recursos: [
            { tipo: "V", cantidad: 6 },
            { tipo: "E", cantidad: 1 },
            { tipo: "M", cantidad: 1 },
            { tipo: "PI", cantidad: 1 }
        ]
    },
    {
        nombre: "Souitos-Oiozlum t6",
        imagen: "recursos/Souitos-Oiozlum.png",
        recursos: [
            { tipo: "D", cantidad: 3 },
            { tipo: "V", cantidad: 1 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "R", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Souos-Ososlos t6",
        imagen: "recursos/Souos-Ososlos.png",
        recursos: [
            { tipo: "A", cantidad: 2 },
            { tipo: "V", cantidad: 4 },
            { tipo: "E", cantidad: 2 }
        ]
    },
    {
        nombre: "Synites-Aoarsum t4",
        imagen: "recursos/Synites-aoarsum.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 1 },
            { tipo: "AL", cantidad: 2 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "PI", cantidad: 1 }
        ]
    },
	{
		nombre: "Synitos-Availos",
		imagen: "img/synitos-availos.png",
		recursos: [
			{ tipo: "D", cantidad: 1 },
			{ tipo: "V", cantidad: 3 },
			{ tipo: "AL", cantidad: 2 },
			{ tipo: "M", cantidad: 1 },
			{ tipo: "R", cantidad: 1 }
		]
	},
	{
		nombre: "Synitos-Ofurlos",
		imagen: "img/Synitos-Ofurlos T6.png",
		recursos: [
			{ tipo: "D", cantidad: 2 },
			{ tipo: "V", cantidad: 1 },
			{ tipo: "E", cantidad: 1 },
			{ tipo: "AL", cantidad: 1 }
		]
	},
	{
		nombre: "Synos-Ayailos",
		imagen: "img/Synos-Ayailos t4.png",
		recursos: [
			{ tipo: "A", cantidad: 1 },
			{ tipo: "V", cantidad: 7 },
			{ tipo: "E", cantidad: 1 }
		]
	},
	{
		nombre: "Synos-Oyarlos",
		imagen: "img/Synos-Oyarlos T8.png",
		recursos: [
			{ tipo: "V", cantidad: 6 },
			{ tipo: "MI", cantidad: 1 },
			{ tipo: "R", cantidad: 1 }
		]
	},
	{
		nombre: "Tasitos-Obayam",
		imagen: "img/Tasitos-Obayam T6.png",
		recursos: [
			{ tipo: "A", cantidad: 3 },
			{ tipo: "V", cantidad: 3 },
			{ tipo: "E", cantidad: 1 }
		]
	},
	{
		nombre: "Teros-Auiusum",
		imagen: "img/teros-auiusum.png",
		recursos: [
			{ tipo: "A", cantidad: 1 },
			{ tipo: "V", cantidad: 2 },
			{ tipo: "PI", cantidad: 1 },
			{ tipo: "R", cantidad: 2 }
		]
	},
	{
		nombre: "Tetos-Igaelum",
		imagen: "img/tetos-igaelum.png",
		recursos: [
			{ tipo: "A", cantidad: 1 },
			{ tipo: "V", cantidad: 7 },
			{ tipo: "AL", cantidad: 1 },
			{ tipo: "M", cantidad: 1 },
			{ tipo: "E", cantidad: 1 }
		]
	},
	{
		nombre: "Tetos-Ulaurom",
		imagen: "img/Tetos-Ulaurom t6.png",
		recursos: [
			{ tipo: "V", cantidad: 8 },
			{ tipo: "AL", cantidad: 1 },
			{ tipo: "MI", cantidad: 2 },
			{ tipo: "E", cantidad: 1 }
		]
	},
	{
		nombre: "Tilitos-Ataglos",
		imagen: "img/Tilitos-Ataglos t8.png",
		recursos: [
			{ tipo: "A", cantidad: 1 },
			{ tipo: "V", cantidad: 9 },
			{ tipo: "E", cantidad: 1 }
		]
	},
	{
		nombre: "Tonitos-Igurlum",
		imagen: "img/Tonitos-Igurlum t6.png",
		recursos: [
			{ tipo: "D", cantidad: 1 },
			{ tipo: "A", cantidad: 1 },
			{ tipo: "V", cantidad: 1 },
			{ tipo: "E", cantidad: 2 },
			{ tipo: "R", cantidad: 1 },
			{ tipo: "MI", cantidad: 1 }
		]
	},
	{
		nombre: "Tynos-Eyexrom",
		imagen: "img/Tynos-Eyexrom t6 v2.png",
		recursos: [
			{ tipo: "A", cantidad: 2 },
			{ tipo: "E", cantidad: 2 },
			{ tipo: "R", cantidad: 2 },
			{ tipo: "PI", cantidad: 1 },
			{ tipo: "AL", cantidad: 1 }
		]
	},
	{
		nombre: "Tynos-Uxavrom",
		imagen: "img/Tynos-Uxavrom T6.png",
		recursos: [
			{ tipo: "D", cantidad: 1 },
			{ tipo: "A", cantidad: 1 },
			{ tipo: "V", cantidad: 4 },
			{ tipo: "E", cantidad: 1 },
			{ tipo: "R", cantidad: 2 }
		]
	},
	{
		nombre: "Xases-Oxoulum",
		imagen: "img/Xases-Oxoulum T6.png",
		recursos: [
			{ tipo: "A", cantidad: 1 },
			{ tipo: "V", cantidad: 5 },
			{ tipo: "E", cantidad: 1 },
			{ tipo: "M", cantidad: 1 },
			{ tipo: "PI", cantidad: 1 }
		]
	},
	{
		nombre: "Xebos-Emimsum",
		imagen: "img/Xebos-Emimsum T6.png",
		recursos: [
			{ tipo: "V", cantidad: 4 },
			{ tipo: "MI", cantidad: 2 },
			{ tipo: "M", cantidad: 1 },
			{ tipo: "R", cantidad: 1 },
			{ tipo: "E", cantidad: 1 }
		]
	},
	{
		nombre: "Xerites-Oxoulum",
		imagen: "img/xerites-oxoulum t6 tunnel black low.png",
		recursos: [
			{ tipo: "A", cantidad: 1 },
			{ tipo: "V", cantidad: 5 },
			{ tipo: "M", cantidad: 1 },
			{ tipo: "PI", cantidad: 1 },
			{ tipo: "E", cantidad: 1 }
		]
	},
	{
		nombre: "Xetitos-Emimsum",
		imagen: "img/Xetitos-Emimsum T6.png",
		recursos: [
			{ tipo: "V", cantidad: 4 },
			{ tipo: "E", cantidad: 1 },
			{ tipo: "R", cantidad: 1 },
			{ tipo: "M", cantidad: 1 },
			{ tipo: "MI", cantidad: 2 }
		]
	},
	{
		nombre: "Xetos-Obursum",
		imagen: "img/xetos-obursum t6.png",
		recursos: [
			{ tipo: "A", cantidad: 1 },
			{ tipo: "V", cantidad: 5 },
			{ tipo: "MI", cantidad: 1 },
			{ tipo: "PI", cantidad: 1 },
			{ tipo: "E", cantidad: 1 }
		]
	},
	{
		nombre: "Xiles-Aiavlum",
		imagen: "img/Xiles-Aiavlum T4.png",
		recursos: [
			{ tipo: "A", cantidad: 1 },
			{ tipo: "V", cantidad: 6 },
			{ tipo: "M", cantidad: 1 },
			{ tipo: "AL", cantidad: 1 }
		]
	},
	{
		nombre: "Xilitos-Aoemaum",
		imagen: "img/Xilitos-Aoemaum t6.png",
		recursos: [
			{ tipo: "D", cantidad: 1 },
			{ tipo: "V", cantidad: 4 },
			{ tipo: "MI", cantidad: 1 },
			{ tipo: "AL", cantidad: 1 },
			{ tipo: "PI", cantidad: 1 },
			{ tipo: "M", cantidad: 1 },
			{ tipo: "E", cantidad: 1 }
		]
	},
	{
		nombre: "v",
		imagen: "img/Xilos-Osayam t6.png",
		recursos: [
			{ tipo: "D", cantidad: 1 },
			{ tipo: "A", cantidad: 2 },
			{ tipo: "V", cantidad: 2 },
			{ tipo: "E", cantidad: 2 }
		]
	},
	{
        nombre: "Xiros-Aiairom",
        imagen: "recursos/xiros-aiairom t6.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
            { tipo: "MI", cantidad: 1 }
        ]
    },
    {
        nombre: "Xoritos-Exostum",
        imagen: "recursos/Xoritos-Exostum T6.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 5 },
            { tipo: "M", cantidad: 1 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Xoritos-Osayam",
        imagen: "recursos/Xoritos-Osayam T6.png",
        recursos: [
            { tipo: "D", cantidad: 1 },
            { tipo: "A", cantidad: 2 },
            { tipo: "V", cantidad: 2 },
            { tipo: "E", cantidad: 2 }
        ]
    },
    {
        nombre: "Xuyitos-Aioblos",
        imagen: "recursos/Xuyitos-Aioblos T4.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 6 },
            { tipo: "R", cantidad: 1 },
            { tipo: "E", cantidad: 3 }
        ]
    },
    {
        nombre: "Xynos-Oyogam",
        imagen: "recursos/Xynos-Oyogam T6.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "A", cantidad: 2 },
            { tipo: "V", cantidad: 1 },
            { tipo: "E", cantidad: 1 },
            { tipo: "R", cantidad: 2 }
        ]
    },
    {
        nombre: "Ceres-Iooinum",
        imagen: "recursos/Ceres-Iooinum t4.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "MI", cantidad: 2 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "E", cantidad: 2 }
        ]
    },
    {
        nombre: "Hebes-Ouaylos",
        imagen: "recursos/Hebes-Ouaylos t4.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 8 },
            { tipo: "R", cantidad: 1 }
        ]
    },
    {
        nombre: "Coros-Aiayrom",
        imagen: "recursos/Coros-Aiayrom T6.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 3 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "R", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Hasitos-Umayaum",
        imagen: "recursos/Hasitos-Umayaum T6.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 3 },
            { tipo: "AL", cantidad: 2 },
            { tipo: "R", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Hebos-Ulamsum",
        imagen: "recursos/Hebos-Ulamsum T6.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "R", cantidad: 2 },
            { tipo: "M", cantidad: 1 },
            { tipo: "PI", cantidad: 2 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Hilitos-Aiigaum",
        imagen: "recursos/Hilitos-Aiigaum T4.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 1 },
            { tipo: "MI", cantidad: 2 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "R", cantidad: 1 },
            { tipo: "E", cantidad: 2 }
        ]
    },
    {
        nombre: "Oiros-Alaiam",
        imagen: "recursos/Oiros-Alaiam T6.png",
        recursos: [
            { tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
            { tipo: "E", cantidad: 2 }
        ]
    },
    {
        nombre: "Pilitos-Eterrom",
        imagen: "recursos/Pilitos-Eterrom T4.png",
        recursos: [
            { tipo: "V", cantidad: 6 },
            { tipo: "R", cantidad: 2 },
            { tipo: "M", cantidad: 1 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "PI", cantidad: 1 }
        ]
    },
    {
        nombre: "Secent-Et-Odesis",
        imagen: "recursos/Secent-Et-Odesis T6.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "PI", cantidad: 1 }
        ]
    },
    {
        nombre: "Secent-Qi-Qinsom",
        imagen: "recursos/Secent-Qi-Qinsom T6.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "MI", cantidad: 1 }
        ]
    },
    {
        nombre: "Toritos-Iriglos",
        imagen: "recursos/Toritos-Iriglos T6.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "V", cantidad: 5 },
            { tipo: "M", cantidad: 1 },
            { tipo: "R", cantidad: 1 }
        ]
    },
    {
        nombre: "Secent-Odesom",
        imagen: "recursos/Secent-Odesom t6.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "R", cantidad: 1 }
        ]
    },
    {
        nombre: "Souos-Availos",
        imagen: "recursos/Souos-Availos t6.png",
        recursos: [
            { tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 3 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "M", cantidad: 1 },
            { tipo: "R", cantidad: 1 }
        ]
    },
    {
        nombre: "Curitos-Ayayaum",
        imagen: "recursos/Curitos-Ayayaum t6.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 3 },
            { tipo: "M", cantidad: 1 },
            { tipo: "R", cantidad: 1 }
        ]
    },
    {
        nombre: "Fasitos-Atezsum",
        imagen: "recursos/Fasitos-Atezsum t4.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "M", cantidad: 2 }
        ]
    },
    {
        nombre: "Febos-Acalun",
        imagen: "recursos/Febos-Acalun t4.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "R", cantidad: 1 },
            { tipo: "M", cantidad: 1 },
            { tipo: "E", cantidad: 3 }
        ]
    },
    {
        nombre: "Filitos-Uzazlum",
        imagen: "recursos/Filitos-Uzazlum t8.png",
        recursos: [
            { tipo: "V", cantidad: 6 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "R", cantidad: 1 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "MI", cantidad: 1 }
        ]
    },
    {
        nombre: "Fynitos-Aiugsum",
        imagen: "recursos/Fynitos-Aiugsum t4.png",
        recursos: [
            { tipo: "R", cantidad: 2 },
            { tipo: "M", cantidad: 1 },
            { tipo: "V", cantidad: 1 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "PI", cantidad: 1 }
        ]
    },
    {
        nombre: "Imotos-Aiii",
        imagen: "recursos/Imotos-Aiii t6.png",
        recursos: [
            { tipo: "V", cantidad: 3 },
            { tipo: "R", cantidad: 2 },
            { tipo: "A", cantidad: 2 },
            { tipo: "M", cantidad: 1 }
        ]
    },
	{
        nombre: "Piritos-Ofavam",
        imagen: "recursos/Piritos-Ofavam t6.png",
        recursos: [
            { tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 3 },
            { tipo: "E", cantidad: 4 }
        ]
    },
    {
        nombre: "Pures-Ouozlum",
        imagen: "recursos/Pures-Ouozlum.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 1 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "R", cantidad: 1 }
        ]
    },
    {
        nombre: "Qiient-Et-Nusas",
        imagen: "recursos/Qiient-Et-Nusas t6.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "MI", cantidad: 1 }
        ]
    },
    {
        nombre: "Secent-Sa-Odesis",
        imagen: "recursos/Secent-Sa-Odesis t6.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "PI", cantidad: 1 }
        ]
    },
    {
        nombre: "Xuros-Eyoztum",
        imagen: "recursos/Xuros-Eyoztum t4.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 6 },
            { tipo: "R", cantidad: 1 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Petos-Aietam",
        imagen: "recursos/Petos-Aietam t6.png",
        recursos: [
            { tipo: "D", cantidad: 4 },
            { tipo: "V", cantidad: 1 },
            { tipo: "M", cantidad: 1 },
            { tipo: "AL", cantidad: 1 }
        ]
    },
    {
        nombre: "Qiient-Si-Odesum",
        imagen: "recursos/Qiient-Si-Odesum t6.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 5 },
            { tipo: "M", cantidad: 1 }
        ]
    },
    {
        nombre: "Setent-Nusum",
        imagen: "recursos/Setent-Nusum t6.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "R", cantidad: 1 },
            { tipo: "AL", cantidad: 1 }
        ]
    },
    {
        nombre: "Siros-Obobrom",
        imagen: "recursos/Siros-Obobrom t6.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 2 }
        ]
    },
    {
        nombre: "Xasos-Oneulum",
        imagen: "recursos/Xasos-Oneulum t6.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "A", cantidad: 2 },
            { tipo: "PI", cantidad: 2 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Files-Azazsum",
        imagen: "recursos/Files-Azazsum t8.png",
        recursos: [
            { tipo: "V", cantidad: 7 },
            { tipo: "MI", cantidad: 2 },
            { tipo: "AL", cantidad: 1 }
        ]
    },
    {
        nombre: "Foros-Egoisum",
        imagen: "recursos/Foros-Egoisum t6.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 1 },
            { tipo: "R", cantidad: 1 },
            { tipo: "M", cantidad: 1 },
            { tipo: "E", cantidad: 2 }
        ]
    },
    {
        nombre: "Ponitos-Aiayrom",
        imagen: "recursos/Ponitos-Aiayrom t4.png",
        recursos: [
            { tipo: "V", cantidad: 4 },
            { tipo: "R", cantidad: 1 },
            { tipo: "M", cantidad: 1 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Synitos-Ososlos",
        imagen: "recursos/Synitos-Ososlos t6.png",
        recursos: [
            { tipo: "A", cantidad: 2 },
            { tipo: "V", cantidad: 4 },
            { tipo: "E", cantidad: 2 }
        ]
    },
    {
        nombre: "Huyitos-Ohenlum",
        imagen: "recursos/Huyitos-Ohenlum t6.png",
        recursos: [
            { tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 3 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "M", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Oires-Oloblum",
        imagen: "recursos/Oires-Oloblum t6.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "V", cantidad: 1 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "E", cantidad: 3 }
        ]
    },
    {
        nombre: "Pynitos-Aietam",
        imagen: "recursos/Pynitos-Aietam t6.png",
        recursos: [
            { tipo: "D", cantidad: 4 },
            { tipo: "V", cantidad: 1 },
            { tipo: "M", cantidad: 1 },
            { tipo: "AL", cantidad: 1 }
        ]
    },
    {
        nombre: "Feritos-Osinsum",
        imagen: "recursos/Feritos-Osinsum t6.png",
        recursos: [
            { tipo: "D", cantidad: 3 },
            { tipo: "A", cantidad: 1 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Casitos-Alieam",
        imagen: "recursos/Casitos-Alieam t4.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "R", cantidad: 1 }
        ]
    },
    {
        nombre: "Pieos-Ofairom",
        imagen: "recursos/Pieos-Ofairom t6.png",
        recursos: [
            { tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 5 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Qiient-Al-Qinsis",
        imagen: "recursos/Qiient-Al-Qinsis t6.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 1 },
            { tipo: "R", cantidad: 1 },
            { tipo: "PI", cantidad: 1 }
        ]
    },
    {
        nombre: "Fasitos-Oyuctum",
        imagen: "recursos/Fasitos-Oyuctum t6.png",
        recursos: [
            { tipo: "D", cantidad: 3 },
            { tipo: "V", cantidad: 1 },
            { tipo: "R", cantidad: 1 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Feros-Oyuctum",
        imagen: "recursos/Feros-Oyuctum t6.png",
        recursos: [
            { tipo: "D", cantidad: 3 },
            { tipo: "V", cantidad: 1 },
            { tipo: "R", cantidad: 1 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Fones-Opavun",
        imagen: "recursos/Fones-Opavun t8.png",
        recursos: [
            { tipo: "D", cantidad: 3 },
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 4 }
        ]
    },
    {
        nombre: "Bilos-Syentum",
        imagen: "recursos/Bilos-Syentum t6.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "A", cantidad: 2 },
            { tipo: "M", cantidad: 1 }
        ]
    },
    {
        nombre: "Bertos-Sa-Aryom",
        imagen: "recursos/Bertos-Sa-Aryom t6.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "V", cantidad: 1 },
            { tipo: "E", cantidad: 2 }
        ]
    },
    {
        nombre: "Piens-Sainosum",
        imagen: "recursos/Piens-Sainosum t6.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "V", cantidad: 4 },
            { tipo: "R", cantidad: 1 }
        ]
    },
	{
        nombre: "Fynes-Unavtum t6",
        imagen: "recursos/Fynes-Unavtum.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 1 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "MI", cantidad: 3 },
            { tipo: "E", cantidad: 3 }
        ]
    },
    {
        nombre: "Oynitos-Uromlum t4",
        imagen: "recursos/Oynitos-Uromlum.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Sases-Avuotum t6",
        imagen: "recursos/Sases-Avuotum.png",
        recursos: [
            { tipo: "V", cantidad: 6 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "MI", cantidad: 1 }
        ]
    },
    {
        nombre: "Qiient-Oc-Odetum t6",
        imagen: "recursos/Qiient-Oc-Odetum.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "M", cantidad: 1 }
        ]
    },
    {
        nombre: "Xasos-Aeoilos t4",
        imagen: "recursos/Xasos-Aeoilos.png",
        recursos: [
            { tipo: "A", cantidad: 3 },
            { tipo: "V", cantidad: 3 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Xebos-Exostum t6",
        imagen: "recursos/Xebos-Exostum.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 5 },
            { tipo: "M", cantidad: 1 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Suyitos-Ofugtum t6",
        imagen: "recursos/Suyitos-Ofugtum.png",
        recursos: [
            { tipo: "D", cantidad: 3 },
            { tipo: "V", cantidad: 2 },
            { tipo: "R", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Xebitos-Oyogam t6",
        imagen: "recursos/Xebitos-Oyogam.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "A", cantidad: 2 },
            { tipo: "V", cantidad: 1 },
            { tipo: "R", cantidad: 2 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Tynos-Atatlos t4",
        imagen: "recursos/Tynos-Atatlos.png",
        recursos: [
            { tipo: "A", cantidad: 3 },
            { tipo: "V", cantidad: 3 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Suyos-Onaytum t6",
        imagen: "recursos/Suyos-Onaytum.png",
        recursos: [
            { tipo: "D", cantidad: 1 },
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 1 },
            { tipo: "AL", cantidad: 2 }
        ]
    },
    {
        nombre: "Setent-Et-Qintis t6",
        imagen: "recursos/Setent-Et-Qintis.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "M", cantidad: 2 }
        ]
    },
    {
        nombre: "Siritos-Oyohun t8",
        imagen: "recursos/Siritos-Oyohun.png",
        recursos: [
            { tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
            { tipo: "R", cantidad: 1 },
            { tipo: "E", cantidad: 2 }
        ]
    },
    {
        nombre: "Suyites-Uzurtum t6",
        imagen: "recursos/Suyites-Uzurtum.png",
        recursos: [
            { tipo: "D", cantidad: 3 },
            { tipo: "AL", cantidad: 2 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Oonitos-Umiutum t4",
        imagen: "recursos/Oonitos-Umiutum.png",
        recursos: [
            { tipo: "V", cantidad: 3 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "R", cantidad: 1 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Ooros-Ataltum t6",
        imagen: "recursos/Ooros-Ataltum.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "V", cantidad: 5 },
            { tipo: "PI", cantidad: 1 }
        ]
    },
    {
        nombre: "Poues-Unatam t6",
        imagen: "recursos/Poues-Unatam.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "V", cantidad: 2 },
            { tipo: "M", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Qiient-Al-Nusom t6",
        imagen: "recursos/Qiient-Al-Nusom.png",
        recursos: [
            { tipo: "A", cantidad: 2 },
            { tipo: "V", cantidad: 1 },
            { tipo: "MI", cantidad: 1 }
        ]
    },
    {
        nombre: "Qiitun-Duosum t6",
        imagen: "recursos/Qiitun-Duosum.png",
        recursos: [
            { tipo: "A", cantidad: 2 },
            { tipo: "V", cantidad: 1 },
            { tipo: "AL", cantidad: 1 }
        ]
    },
	{
        nombre: "Sasos-Oiozlum",
        imagen: "img/Sasos-Oiozlum T6.png",
        recursos: [
            { tipo: "D", cantidad: 3 },
            { tipo: "V", cantidad: 1 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "R", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Xoritos-Aiairom",
        imagen: "img/Xoritos-Aiairom T6.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
            { tipo: "MI", cantidad: 1 }
        ]
    },
    {
        nombre: "Cilos-Avioaum",
        imagen: "img/Cilos-Avioaum t4.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "R", cantidad: 2 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Hasos-Ayousum",
        imagen: "img/Hasos-Ayousum T6.png",
        recursos: [
            { tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "AL", cantidad: 2 }
        ]
    },
    {
        nombre: "Pebos-Avosrom",
        imagen: "img/Pebos-Avosrom t6.png",
        recursos: [
            { tipo: "V", cantidad: 3 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "AL", cantidad: 2 },
            { tipo: "E", cantidad: 4 }
        ]
    },
    {
        nombre: "Tiros-Ouultum",
        imagen: "img/Tiros-Ouultum T6.png",
        recursos: [
            { tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 4 },
            { tipo: "PI", cantidad: 2 },
            { tipo: "MI", cantidad: 2 }
        ]
    },
    {
        nombre: "Ferites-Ohohtum",
        imagen: "img/Ferites-Ohohtum t8.png",
        recursos: [
            { tipo: "V", cantidad: 6 },
            { tipo: "R", cantidad: 2 },
            { tipo: "E", cantidad: 2 }
        ]
    },
    {
        nombre: "Files-Izizaum",
        imagen: "img/Files-Izizaum t8.png",
        recursos: [
            { tipo: "V", cantidad: 6 },
            { tipo: "M", cantidad: 2 },
            { tipo: "R", cantidad: 1 }
        ]
    },
    {
        nombre: "Oebitos-Eraerom",
        imagen: "img/Oebitos-Eraerom t4.png",
        recursos: [
            { tipo: "V", cantidad: 4 },
            { tipo: "M", cantidad: 1 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "E", cantidad: 2 }
        ]
    },
    {
        nombre: "Cilos-Otatrom",
        imagen: "img/Cilos-Otatrom t8.png",
        recursos: [
            { tipo: "D", cantidad: 2 },
            { tipo: "V", cantidad: 6 },
            { tipo: "M", cantidad: 2 }
        ]
    },
    {
        nombre: "Foros-Uzazlum",
        imagen: "img/Foros-Uzazlum t8.png",
        recursos: [
            { tipo: "V", cantidad: 6 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "AL", cantidad: 1 },
            { tipo: "R", cantidad: 1 },
            { tipo: "MI", cantidad: 1 }
        ]
    },
    {
        nombre: "Fouos-Agosaum",
        imagen: "img/Fouos-Agosaum t6.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 5 },
            { tipo: "R", cantidad: 1 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Hiros-Exozlos",
        imagen: "img/Hiros-Exozlos t6.png",
        recursos: [
            { tipo: "V", cantidad: 5 },
            { tipo: "PI", cantidad: 3 },
            { tipo: "E", cantidad: 2 }
        ]
    },
    {
        nombre: "Hynes-Ieatun",
        imagen: "img/Hynes-Ieatun t8.png",
        recursos: [
            { tipo: "D", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
            { tipo: "PI", cantidad: 1 },
            { tipo: "E", cantidad: 1 }
        ]
    },
    {
        nombre: "Oasitos-Aoeuam",
        imagen: "img/Oasitos-Aoeuam t4.png",
        recursos: [
            { tipo: "A", cantidad: 1 },
            { tipo: "V", cantidad: 2 },
            { tipo: "MI", cantidad: 1 },
            { tipo: "M", cantidad: 1 },
            { tipo: "E", cantidad: 2 }
        ]
    },
	{
        "nombre": "Oiritos-Eramtum t6",
        "imagen": "recursos/Oiritos-Eramtum.png",
        "recursos": [
            { "tipo": "D", "cantidad": 2 },
            { "tipo": "R", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "M", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Petitos-Avosrom t6",
        "imagen": "recursos/Petitos-Avosrom.png",
        "recursos": [
            { "tipo": "V", "cantidad": 3 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "E", "cantidad": 4 }
        ]
    },
    {
        "nombre": "Tasitos-Ulaurom t6",
        "imagen": "recursos/Tasitos-Ulaurom.png",
        "recursos": [
            { "tipo": "V", "cantidad": 8 },
            { "tipo": "MI", "cantidad": 2 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Tieos-Ayoslum t4",
        "imagen": "recursos/Tieos-Ayoslum.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 6 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Cilos-Ofailos t4",
        "imagen": "recursos/Cilos-Ofailos.png",
        "recursos": [
            { "tipo": "A", "cantidad": 2 },
            { "tipo": "V", "cantidad": 3 },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Cynos-Oxaeaum t4",
        "imagen": "recursos/Cynos-Oxaeaum.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 2 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Honos-Oyezam t8",
        "imagen": "recursos/Honos-Oyezam.png",
        "recursos": [
            { "tipo": "D", "cantidad": 1 },
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Hynites-Ogozlum t6",
        "imagen": "recursos/Hynites-Ogozlum.png",
        "recursos": [
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "PI", "cantidad": 2 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Ouyos-Aoeuam t4",
        "imagen": "recursos/Ouyos-Aoeuam.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 2 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Qiitun-Et-Vietis t6",
        "imagen": "recursos/Qiitun-Et-Vietis.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "R", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Sebos-Ugersum t6",
        "imagen": "recursos/Sebos-Ugersum.png",
        "recursos": [
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "M", "cantidad": 2 },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Secent-Nutum t6",
        "imagen": "recursos/Secent-Nutum.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "M", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Seritos-Egeylos t6",
        "imagen": "recursos/Seritos-Egeylos.png",
        "recursos": [
            { "tipo": "A", "cantidad": 5 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Settun-Odetum t6",
        "imagen": "recursos/Settun-Odetum.png",
        "recursos": [
            { "tipo": "A", "cantidad": 5 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "AL", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Siros-Ofurlos t6",
        "imagen": "recursos/Siros-Ofurlos.png",
        "recursos": [
            { "tipo": "D", "cantidad": 2 },
            { "tipo": "AL", "cantidad": 2 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Soros-Axaesum t4",
        "imagen": "recursos/Soros-Axaesum.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 7 },
            { "tipo": "PI", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Tieitos-Ouultum t6",
        "imagen": "recursos/Tieitos-Ouultum.png",
        "recursos": [
            { "tipo": "D", "cantidad": 1 },
            { "tipo": "V", "cantidad": 4 },
            { "tipo": "PI", "cantidad": 2 },
            { "tipo": "MI", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Touos-Uoemtum t4",
        "imagen": "recursos/Touos-Uoemtum.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 6 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "R", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Firitos-Alodrom t4",
        "imagen": "recursos/Firitos-Alodrom.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 2 },
            { "tipo": "AL", "cantidad": 3 },
            { "tipo": "M", "cantidad": 1 }
        ]
    },
	{
        "nombre": "Qiient-Qi-Odesas",
        "imagen": "img/Qiient-Qi-Odesas T6.png",
        "recursos": [
            { "tipo": "A" },
            { "tipo": "V" },
            { "tipo": "PI" },
            { "tipo": "MI" }
        ]
    },
    {
        "nombre": "Sebos-Avoirom",
        "imagen": "img/Sebos-Avoirom T4.png",
        "recursos": [
            { "tipo": "A" },
            { "tipo": "V", "cantidad": 8 },
            { "tipo": "AL" },
            { "tipo": "E" }
        ]
    },
    {
        "nombre": "Sebos-Oyohun",
        "imagen": "img/Sebos-Oyohun t8.png",
        "recursos": [
            { "tipo": "D" },
            { "tipo": "V", "cantidad": 2 },
            { "tipo": "M" },
            { "tipo": "AL" },
            { "tipo": "R" },
            { "tipo": "E" }
        ]
    },
    {
        "nombre": "Setent-Vietis",
        "imagen": "img/Setent-Vietis T6.png",
        "recursos": [
            { "tipo": "A", "cantidad": 2 },
            { "tipo": "V" },
            { "tipo": "M" }
        ]
    },
    {
        "nombre": "Casos-Uruxtum",
        "imagen": "img/Casos-Uruxtum t4.png",
        "recursos": [
            { "tipo": "A" },
            { "tipo": "V", "cantidad": 6 },
            { "tipo": "M" },
            { "tipo": "E" }
        ]
    },
    {
        "nombre": "Cieitos-Avioaum",
        "imagen": "img/Cieitos-Avioaum t4.png",
        "recursos": [
            { "tipo": "A" },
            { "tipo": "V", "cantidad": 2 },
            { "tipo": "MI" },
            { "tipo": "R", "cantidad": 2 },
            { "tipo": "PI" },
            { "tipo": "E" }
        ]
    },
    {
        "nombre": "Fasites-Azazsum",
        "imagen": "img/Fasites-Azazsum t8.png",
        "recursos": [
            { "tipo": "V", "cantidad": 7 },
            { "tipo": "MI", "cantidad": 2 },
            { "tipo": "AL" }
        ]
    },
    {
        "nombre": "Fieites-Unavtum",
        "imagen": "img/Fieites-Unavtum t6.png",
        "recursos": [
            { "tipo": "A" },
            { "tipo": "V" },
            { "tipo": "MI", "cantidad": 2 },
            { "tipo": "E", "cantidad": 3 }
        ]
    },
    {
        "nombre": "Filos-Abalam",
        "imagen": "img/Filos-Abalam T4.png",
        "recursos": [
            { "tipo": "A", "cantidad": 2 },
            { "tipo": "V", "cantidad": 3 },
            { "tipo": "E" }
        ]
    },
    {
        "nombre": "Fonitos-Amaurom",
        "imagen": "img/Fonitos-Amaurom t6.png",
        "recursos": [
            { "tipo": "D" },
            { "tipo": "A" },
            { "tipo": "V" },
            { "tipo": "M" },
            { "tipo": "PI" },
            { "tipo": "E" }
        ]
    },
    {
        "nombre": "Oasos-Eraerom",
        "imagen": "img/Oasos-Eraerom t4.png",
        "recursos": [
            { "tipo": "V", "cantidad": 4 },
            { "tipo": "M" },
            { "tipo": "AL" },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Oeritos-Ecunsum",
        "imagen": "img/Oeritos-Ecunsum T4.png",
        "recursos": [
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "MI", "cantidad": 3 },
            { "tipo": "M" },
            { "tipo": "M" },
            { "tipo": "AL" },
            { "tipo": "PI" }
        ]
    },
    {
        "nombre": "Pirites-Unatam",
        "imagen": "img/Pirites-Unatam t6.png",
        "recursos": [
            { "tipo": "D", "cantidad": 2 },
            { "tipo": "V", "cantidad": 2 },
            { "tipo": "M" },
            { "tipo": "AL" },
            { "tipo": "E" }
        ]
    },
    {
        "nombre": "Pynos-Opabrom",
        "imagen": "img/Pynos-Opabrom t6.png",
        "recursos": [
            { "tipo": "D", "cantidad": 2 },
            { "tipo": "V", "cantidad": 4 },
            { "tipo": "AL" },
            { "tipo": "E" }
        ]
    },
    {
        "nombre": "Qiient-Al-Vynsis",
        "imagen": "img/Qiient-Al-Vynsis t6.png",
        "recursos": [
            { "tipo": "A", "cantidad": 2 },
            { "tipo": "V" },
            { "tipo": "AL" }
        ]
    },
    {
        "nombre": "Quaent-In-Odesum",
        "imagen": "img/Quaent-In-Odesum t6.png",
        "recursos": [
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "R" },
            { "tipo": "AL" }
        ]
    },
    {
        "nombre": "Sasos-Egeylos",
        "imagen": "img/Sasos-Egeylos t6.png",
        "recursos": [
            { "tipo": "V", "cantidad": 6 },
            { "tipo": "M" },
            { "tipo": "MI" },
            { "tipo": "AL" },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Tetitos-Ayoslum",
        "imagen": "img/Tetitos-Ayoslum t4.png",
        "recursos": [
            { "tipo": "A" },
            { "tipo": "V", "cantidad": 6 },
            { "tipo": "PI" },
            { "tipo": "AL" }
        ]
    },
    {
        "nombre": "Casos-Aximam",
        "imagen": "img/Casos-Aximam t6.png",
        "recursos": [
            { "tipo": "A", "cantidad": 2 },
            { "tipo": "V", "cantidad": 2 },
            { "tipo": "MI", "cantidad": 2 },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
	{
        "nombre": "Fynitos-Egoisum t6",
        "imagen": "recursos/Fynitos-Egoisum.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "R", "cantidad": 1 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Conitos-Oxaeaum t4",
        "imagen": "recursos/Conitos-Oxaeaum.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 2 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Curos-Avulsum t6",
        "imagen": "recursos/Curos-Avulsum.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "R", "cantidad": 1 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Oeritos-Oyexlos t6",
        "imagen": "recursos/Oeritos-Oyexlos.png",
        "recursos": [
            { "tipo": "D", "cantidad": 1 },
            { "tipo": "V", "cantidad": 4 },
            { "tipo": "M", "cantidad": 2 },
            { "tipo": "R", "cantidad": 1 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Ooros-Ecunsum t4",
        "imagen": "recursos/Ooros-Ecunsum.png",
        "recursos": [
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 3 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Puros-Amayam t4",
        "imagen": "recursos/Puros-Amayam.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 4 },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Cieitos-Otatrom t8",
        "imagen": "recursos/Cieitos-Otatrom.png",
        "recursos": [
            { "tipo": "D", "cantidad": 2 },
            { "tipo": "V", "cantidad": 6 },
            { "tipo": "M", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Conitos-Ofailos t4",
        "imagen": "recursos/Conitos-Ofailos.png",
        "recursos": [
            { "tipo": "A", "cantidad": 2 },
            { "tipo": "V", "cantidad": 3 },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Couos-Opodam t6",
        "imagen": "recursos/Couos-Opodam.png",
        "recursos": [
            { "tipo": "D", "cantidad": 3 },
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 2 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Firos-Aiavam t6",
        "imagen": "recursos/Firos-Aiavam.png",
        "recursos": [
            { "tipo": "D", "cantidad": 2 },
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 3 },
            { "tipo": "MI", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Hetitos-Iuaerom t6",
        "imagen": "recursos/Hetitos-Iuaerom.png",
        "recursos": [
            { "tipo": "V", "cantidad": 6 },
            { "tipo": "PI", "cantidad": 2 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Quatun-Odetum t6",
        "imagen": "recursos/Quatun-Odetum.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "M", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Settun-AL-Nusis t6",
        "imagen": "recursos/Settun-AL-Nusis.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "PI", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Xouitos-Aeoilos t4",
        "imagen": "recursos/Xouitos-Aeoilos.png",
        "recursos": [
            { "tipo": "A", "cantidad": 3 },
            { "tipo": "V", "cantidad": 3 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Quaent-Tersis t6",
        "imagen": "recursos/Quaent-Tersis.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Setent-Et-Nusum t6",
        "imagen": "recursos/Setent-Et-Nusum.png",
        "recursos": [
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "R", "cantidad": 1 },
            { "tipo": "AL", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Ceros-Aeaylum t4",
        "imagen": "recursos/Ceros-Aeaylum.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 3 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Sectun-In-Odesis t6",
        "imagen": "recursos/Sectun-In-Odesis.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "R", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Sectun-Qinsom t6",
        "imagen": "recursos/Sectun-Qinsom.png",
        "recursos": [
            { "tipo": "A", "cantidad": 2 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "R", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Setent-Qintis t6",
        "imagen": "recursos/Setent-Qintis.png",
        "recursos": [
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "M", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Settun-In-Odetum t6",
        "imagen": "recursos/Settun-In-Odetum.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "R", "cantidad": 1 },
            { "tipo": "M", "cantidad": 1 }
        ]
    },
	{
        "nombre": "Qiitun-Vietis t6",
        "imagen": "img/Qiitun-Vietis t6.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "R", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Quaent-In-Nusis t6",
        "imagen": "img/Quaent-In-Nusis t6.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "R", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Tebitos-Odoxlum t6",
        "imagen": "img/Tebitos-Odoxlum t6.png",
        "recursos": [
            { "tipo": "D", "cantidad": 2 },
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "AL", "cantidad": 2 },
            { "tipo": "M", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Xynitos-Obursum t6",
        "imagen": "img/Xynitos-Obursum t6.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Conitos-Uruxtum t4",
        "imagen": "img/Conitos-Uruxtum t4.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 6 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Coues-Exakrom t4",
        "imagen": "img/Coues-Exakrom t4.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 8 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Hasos-Inayaum t6",
        "imagen": "img/Hasos-Inayaum t6.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 2 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Oieos-Umiutum t4",
        "imagen": "img/Oieos-Umiutum t4.png",
        "recursos": [
            { "tipo": "V", "cantidad": 3 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "R", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Secent-al-tersum t6",
        "imagen": "img/Secent-al-tersum t6.png",
        "recursos": [
            { "tipo": "A", "cantidad": 2 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "AL", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Setent-Al-Vietis t6",
        "imagen": "img/Setent-Al-Vietis t6.png",
        "recursos": [
            { "tipo": "A", "cantidad": 2 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "M", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Soues-Uzurtum t6",
        "imagen": "img/Soues-Uzurtum t6.png",
        "recursos": [
            { "tipo": "D", "cantidad": 3 },
            { "tipo": "AL", "cantidad": 2 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Tuyitos-Auiusum t4",
        "imagen": "img/Tuyitos-Auiusum t4.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 2 },
            { "tipo": "R", "cantidad": 2 },
            { "tipo": "PI", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Cebitos-Aeaylum t4",
        "imagen": "img/Cebitos-Aeaylum_t4.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 3 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Cetos-Obaelos t4",
        "imagen": "img/Cetos-Obaelos_T4.png",
        "recursos": [
            { "tipo": "A", "cantidad": 2 },
            { "tipo": "V", "cantidad": 3 },
            { "tipo": "E", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Cieitos-Avioaum t4",
        "imagen": "img/Cieitos-Avioaum_T4.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 2 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "R", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Coros-Alieam t4",
        "imagen": "img/Coros-Alieam_T4.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 2 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "R", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Coues-Exakrom t4",
        "imagen": "img/Coues-Exakrom_T4.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 8 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Honites-Izizaum t8",
        "imagen": "img/Honites-Izizaum_T8.png",
        "recursos": [
            { "tipo": "V", "cantidad": 6 },
            { "tipo": "M", "cantidad": 2 },
            { "tipo": "R", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Pouitos-Ofairom t6",
        "imagen": "img/Pouitos-Ofairom_T6.png",
        "recursos": [
            { "tipo": "D", "cantidad": 1 },
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Huyos-Uxeulum t4",
        "imagen": "img/Huyos-Uxeulum t4.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 8 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Coritos-Avemlum t6",
        "imagen": "img/Coritos-Avemlum t6.png",
        "recursos": [
            { "tipo": "A", "cantidad": 2 },
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "R", "cantidad": 1 }
        ]
    },
	{
        "nombre": "Firos-Osinsum",
        "imagen": "img/Firos-Osinsum t6.png",
        "recursos": [
            { "tipo": "D", "cantidad": 3 },
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Qiient-Sa-Odetis",
        "imagen": "img/Qiient-Sa-Odetis t6.png",
        "recursos": [
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "PI", "cantidad": 1 },
            { "tipo": "R", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Secent-Viesum",
        "imagen": "img/Secent-Viesum t6.png",
        "recursos": [
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "PI", "cantidad": 2 }
        ]
    },
    {
        "nombre": "Settun-Tersom",
        "imagen": "img/Settun-Tersom t6.png",
        "recursos": [
            { "tipo": "A", "cantidad": 2 },
            { "tipo": "V", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Firos-Osinsum",
        "imagen": "img/Firos-Osinsum_T6.png",
        "recursos": [
            { "tipo": "D", "cantidad": 3 },
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 1 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Oebitos-Oyozam",
        "imagen": "img/Oebitos-Oyozam_T6.png",
        "recursos": [
            { "tipo": "D", "cantidad": 1 },
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "MI", "cantidad": 3 },
            { "tipo": "E", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Puros-Ofavam",
        "imagen": "img/Puros-_Ofavam_T6.png",
        "recursos": [
            { "tipo": "D", "cantidad": 1 },
            { "tipo": "V", "cantidad": 3 },
            { "tipo": "E", "cantidad": 4 }
        ]
    },
    {
        "nombre": "Qiient-Nutis",
        "imagen": "img/Qiient-Nutis t6.png",
        "recursos": [
            { "tipo": "V", "cantidad": 5 },
            { "tipo": "AL", "cantidad": 1 },
            { "tipo": "M", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Setos-Avamsum",
        "imagen": "img/Setos-Avamsum t6.png",
        "recursos": [
            { "tipo": "V", "cantidad": 6 },
            { "tipo": "M", "cantidad": 1 },
            { "tipo": "PI", "cantidad": 1 }
        ]
    },
    {
        "nombre": "Sonitos-Ayailos",
        "imagen": "img/Sonitos-Ayailos_T4.png",
        "recursos": [
            { "tipo": "A", "cantidad": 1 },
            { "tipo": "V", "cantidad": 7 },
            { "tipo": "E", "cantidad": 1 }
        ]
    }
];
