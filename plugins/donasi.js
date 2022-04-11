let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
╭═══════════════
║╭─── [ DONASI ] ───
║│➸ *Dana* : 6287833474586
║│➸ *OVO* : 6287833474586
║│➸ *LinkAja* : 6287833474586
║│➸ *Gopay* : 6287833474586
║│➸ *Owner*: wa.me/6287833474586
║╰────────────
╰═══════════════
`.trim(), 'Donasi jan asal mencet', 'Owner Bot👤', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
