let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Iαɳ;;\nFN:Iαɳ \nORG:Iαɳ 🌟\nTITLE:\nitem1.TEL;waid=51907376960:51907376960\nitem1.X-ABLabel:Iαɳ 🌟\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Iαɳ  🌟\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Iαɳ.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
