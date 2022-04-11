let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╠═〘 PEMBAYARAN 〙 ═
║│➸ *Dana* : 6287833474586
║│➸ *OVO* : 6287833474586
║│➸ *LinkAja* : 6287833474586
║│➸ *Gopay* : 6287833474586
║│➸ *Owner*: wa.me/6287833474586
║- Owner Bot:
║- wa.me/6287833474586
╠═〘 IZUMI-BOT 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viadigi']
handler.tags = ['info']
handler.command = /^viadigi$/i

module.exports = handler
