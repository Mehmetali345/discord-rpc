const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
})

rpc.on("ready", () => {
    rpc.setActivity({
        //Uygulama adının hemen altındaki kısım
        details: "Discord - RPC",
        //Detayların altındaki kısım
        state: "index.js yi kodluyor.",
        //Büyük fotoğraf
        largeImageKey: "js",
        //Büyük fotoğrafın üstüne gelince çıkan yazı
        largeImageText: "JavaScript",
        //Büyük fotorağın köşesindeki küçük fotoğraf
        smallImageKey: "kod",
        //Küçük fotoğrafın üstüne gelince çıkan yazı
        smallImageText: "Kodlama yapıyor"
    })

    console.log("RPC Aktif!");
})

rpc.login({
    clientId: "793787460420239360"
})