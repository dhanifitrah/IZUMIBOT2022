let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭══════════════════════
║╭─❉ *𝐁𝐈𝐎𝐃𝐀𝐓𝐀 𝐎𝐖𝐍𝐄𝐑* ❉─
║│➸ *Nama* : Yuuru
║│➸ *Gender* : Femboy
║│➸ *Tempat Tinggal* :
║│➸ Indonesia
║│➸ *Umur* : 18
║│➸ *Status* : Tuhan Anime
║│➸ *Hobi* : 
║│➸ Menghina Anak Yatim
║╰────────────────────
╰══════════════════════
╭══════════════════════
║╭─❉ *𝐒𝐎𝐒𝐈𝐀𝐋 𝐌𝐄𝐃𝐈𝐀* ❉──
║│➸ *No.Owner* : 
║│➸ wa.me/6287833474586
║│➸ *No.Bot* : 
║│➸ wa.me/6287833474586
║│➸ *Website* : 
║│➸ narahoshi.com
║│➸ *Github* : males isi
║╰─────────────────────
╰═══════════════════════
_Oke segitu aja_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Biodata')).buffer(), ext, 'Sc By narahoshi.com', 'Nomor Owner👤', '.owner', 'Donasi💰', '.donasi', 'Sewa Bot🤖', '.sewa', m)

}
handler.help = ['infoowner', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoowner|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
