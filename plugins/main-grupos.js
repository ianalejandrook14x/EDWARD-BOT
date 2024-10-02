import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://qu.ax/NHlB.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Hola!, te invito a formar parte de la comunidad de 
> BOT EDWARD / TEAM

>  Enlace Grupo 🌀EdwardBot🌀

*👑* ${group}

*◆━━━━━━━▣✦▣━━━━━━━━◆ *

> 🌙 Enlace anulado? entre aquí! 

Canal :
*🪐* ${canal}
*◆━━━━━━━▣✦▣━━━━━━━━◆ *
> TEAM FυƚαɾσBσƚ

> CANAL 
https://whatsapp.com/channel/0029ValIBdM2f3EI1tGGQ93S

> GRUPO https://chat.whatsapp.com/KiJY7gZS17aLcP6qaGatFX


> 🚩 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler
