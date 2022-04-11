let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 SEWA BOT 〙 ═
╠➥ *3 Minggu* :   *34000*
╠➥ *1 Bulan* :        *35000*
║
╠═〘 USER PREMIUM 〙 ═
╠➥ *1 Minggu* : *Rp 10.000*
╠➥ *2 Minggu* : *Rp 15.000*
╠➥ *3 Minggu* : *Rp 20.000*
╠➥ *1 Bulan* :  *Rp 25.000*
║
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ TOPUP/PIN
║- 6287833474586 (Dana)
║- 6287833474586 (OVO)
║- 6287833474586 (LinkAja)
║- 6287833474586 (Gopay)
║- 6555 0103 2119 535 (BRI)
║- SCAN QRIS
║
╠═〘 INGIN BELI BOT? 〙 ═
╠➥Klik Button Di Bawah
║
╠═〘 IZUMI-BOT 〙 ═`.trim(), '©IZUMI-BOT', 'Dana', '#LinkAja', 'OVO', '#BRI', m)
}

handler.command = /^sewabot$/i

module.exports = handler
