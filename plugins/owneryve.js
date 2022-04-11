let handler = function (m) {
	this.sendContact(m.chat, '6287833474586', 'Owner Bot Yuuru :)', m)
}

handler.customPrefix = ['Owner bot'] 
handler.command = new RegExp

module.exports = handler
