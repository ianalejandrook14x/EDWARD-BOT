//C贸digo creador por matias-crypto colaborador De EdwardBot 
//Audio puesto por Iα?
//si usa el audio para su bot deje los cr茅ditos 
//No seas gey no quites los cr茅ditos 馃槕馃嚘馃嚤

import fs from 'fs';

let handler = async (m, { conn }) => {
  let text = m.text.toLowerCase(); 
  let user = global.db.data.users[m.sender];

  const audioMap = {
    'linda': './goku/hdpta.mp3',
    'sin sentimiento': './goku/elcorazon.mp3',
    'elcorazone': './goku/elcorazon.mp3',
    'ayuda': './goku/ayuda.mp3',
    'gey': './goku/gey.mp3', 
    'negra': './goku/negra.mp3', 
    'callate': './goku/callate.mp3', 
    'super alba帽il': './goku/super alba帽il.mp3', 
    'peruano': './goku/peruano.mp3', 
    'viva venezuela': './goku/viva venezuela.mp3', 
    'que me importa': './goku/que me importa.mp3', 
    'mondongo': './goku/mondongo.mp3',
    'bebitofiufiu': './goku/bebitofiufiu.mp3',
    'lala': './goku/lala.mp3',
    'dios': './goku/dios.mp3', 
    'sad': './goku/sad.mp3', 
    'risa': './goku/jaja.mp3', 
    'motivar': './goku/motivar.mp3',
    'se uni贸 usando el enlace de invitaci贸n del este grupo': './goku/se uni贸 usando el enlace de invitaci贸n del este grupo.mp3',
    'calculadora': './goku/calculadora.mp3', 
    'tengo novia': './goku/tengo novia.mp3'
    
  };

  for (let key in audioMap) {
    if (text.includes(key)) {
      try {
        if (fs.existsSync(audioMap[key])) {
          await conn.sendFile(m.chat, audioMap[key], `${key}.mp3`, '', m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument });
        } else {
          m.reply('El audio correspondiente no se encontr贸.');
        }
      } catch (err) {
        console.error(err);
        m.reply('Ocurri贸 un error al intentar enviar el audio.');
      }
      break;
    }
  }
};

handler.help = ['ayuda', 'gey', 'ayuda', 'elcorazon', 'sin sentimiento', 'linda','negra', 'callate', 'super alba帽il', 'que me importa', 'mondongo', 'bebitofiufiu', 'lala', 'dios', 'risa', 'tengo novia', 'calculadora', 'motivar',
'peruano', 'se uni贸 usando el enlace de invitaci贸n del este grupo', 'viva venezuela', 'sad']
handler.customPrefix = /^(hola|c贸mo est谩s|goku|gey|si te mueves|ayuda|sin sentimiento|linda|negra|eres tu|callate|super alba帽il|peruano|viva venezuela|que me importa|mondongo|bebitofiufiu|lala|dios|sad|jaja|motivar|calculadora|tengo novia|se uni贸 usando el enlace de invitaci贸n del este grupo)/i;
handler.command = new RegExp;
handler.tags = ['Audios Dbz'] 
export default handler;