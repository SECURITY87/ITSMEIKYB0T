let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Drawl Nag
╠➥ Script: @Itsmeikybot
║
╠➥ Github: https://github.com/itsmeikybot
╠➥ Instagram: @itsmeikyxsec404
╠➥ YouTube: ITSMEIKY OFFICIAL
║
╠═〘 DONASI 〙 ═
╠➥ Ovo: 0812-8187-2699
╠➥ Tsel: 0812-8187-2699
╠➥ Gopay : 0821-2027-2969
║
║>Request? Wa.me/6288235435804
║
╠═〘 NfQ BOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

