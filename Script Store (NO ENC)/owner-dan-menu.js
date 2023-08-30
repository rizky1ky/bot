const fs = require('fs')

global.namabot = "NX BOT"
global.namaowner = "KYY"
global.footer_text = "©NX BOT" + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6285156255964']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Halo Kak! Terima Kasih sudah donasi.
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

━━━━━━[ DAFTAR MENU ]━━━━━━

⊷ infobot
⊷ owner
⊷ addsewa
⊷ delsewa
⊷ mlid
⊷ ffid
⊷ setpayment
⊷ updatepayment
⊷ renamepayment
⊷ dellpayment
⊷ list
⊷ addlist
⊷ updatelist
⊷ renamelist
⊷ dellist
⊷ jeda
⊷ tambah
⊷ kurang
⊷ kali
⊷ bagi
⊷ setproses
⊷ changeproses
⊷ delsetproses
⊷ setdone
⊷ changedone
⊷ delsetdone
⊷ proses
⊷ done
⊷ welcome
⊷ goodbye
⊷ setwelcome
⊷ changewelcome
⊷ delsetwelcome
⊷ setleft
⊷ changeleft
⊷ delsetleft
⊷ antiwame
⊷ antiwame2
⊷ antilink
⊷ antilink2
⊷ open
⊷ close
⊷ hidetag
⊷ add
⊷ kick
⊷ stiker
⊷ setppgc
⊷ setnamegc
⊷ setdesgc
⊷ linkgc
⊷ resetlinkgc
⊷ promote
⊷ demote
⊷ setbot
⊷ updatesetbot
⊷ delsetbot
⊷ bot
━━━━━━━━━━━━━━━━━━━━━━━
NX BOT
━━━━━━━━━━━━━━━━━━━━━━━
`
}