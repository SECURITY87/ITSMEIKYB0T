let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pantun)}”`, m)
}
handler.command = /^(pantun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucin = [
1] Ada anak kecil bermain batu
Batu dilempar masuk ke sumur
Belajar itu tak kenal waktu
Juga tidak memandang umur
2]Tanam kacang di pagi hari
Tumbuh enam layu sebatang
Keburukan orang jangan dicari
Bila kalian sedang puasa
3] Akhir bulan mendapat gaji
Gaji untuk membeli ketupat
Rajin-rajinlah sholat dan mengaji
Janganlah lupa puasa dan zakat
4] Waktu daftar hari terakhir,
Waktu terasa banyak terbuang.
Kamu nggak perlu khawatir,
cintaku hanya untukmu seorang.
5] Ada anak kecil bermain batu
Batu dilempar masuk ke sumur
Belajar itu tak kenal waktu
Juga tidak memandang umur
6] Seribu bebek di kandang singa,
hanya satu berwarna belang
Beribu cewek di Indonesia,
hanya engkau yang aku sayang.
7] Hari minggu pergi ke pasar
Beli sayur dan juga beras
Tiap hari harus belajar
Pasti akan menjadi cerdas
8] Ayam goreng setengah mateng,
Belinya di depan tugu.
Abang sayang, abangku ganteng,
lneng di sini setia menunggu.
9] Api kecil dari tungku,
Apinya kecil habis kayu.
Sudah lama kutunggu-tunggu,
kapan kamu bilang I love you.
10] Seribu bebek di kandang singa,
hanya satu berwarna belang
Beribu cewek di Indonesia,
hanya engkau yang aku sayang.
11] Pergi memancing saat fajar
Pulang siang membawa ikan
Siapa yang rajin belajar
Jadi orang sukses kemudian
12] Beli computer itu biasa
Supaya belajar jadi semangat
Mari kita belajar puasa
Agar kita jadi kuat
13] Pergi memancing saat fajar
Pulang siang membawa ikan
Siapa yang rajin belajar
Jadi orang sukses kemudian
14] Seribu bebek di kandang singa,
hanya satu berwarna belang
Beribu cewek di Indonesia,
hanya engkau yang aku sayang.
15] Minum sekoteng hangat rasanya,
minum segelas ada yang minta.
Laki-laki ganteng siapa yang punya?
Bolehkah aku jatuh cinta.
]
