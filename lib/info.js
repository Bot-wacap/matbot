exports.info = (id, botname, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube, aku) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *About ${botname}*
╠════════════════════
║   *⚠️WARNING⚠️*
╠════════════════════
╠════════════════════
║ *TIDAK BOLEH*
║  *MENGGANTI INFO!!!*
╠════════════════════
║├≽️⚜ *AUTHOR*: _${aku}_
║├≽️⚜ *DESIGNER*: _${aku}_
║├≽️⚜ *YOUTUBE*: _${aku}_
╠════════════════════
╠════════════════════
║  *${botname}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${botname}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY ${aku}*_
╚════════════════════`
}
