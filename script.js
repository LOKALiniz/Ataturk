const quotes = [
  "Egemenlik verilmez, alınır.",
  "Zafer, 'Zafer benimdir' diyebilenindir. Başarı ise, 'Başaracağım' diye başlayarak sonunda 'Başardım' diyebilenindir.",
  "Büyük şeyleri büyük milletler yapar.",
  "İstiklal, istikbal, hürriyet, herşey adaletle kaimdir!",
  "Söz konusu olan vatansa, gerisi teferruat.",
  "Medeniyetin emir ve talep ettiğini yapmak insan olmak için yeterlidir.",
  "Yurtta sulh, cihanda sulh.",
  "Basın milletin müşterek sesidir. Başlıbaşına bir kuvvet, bir okul, bir öncüdür.",
  "Tarih bir milletin kanını, varlığını hiçbir zaman inkar edemez.",
  "Tüketici yaşamak iyi değildir. Üretici olalım.",
  "Herkes ulusal görevini ve sorumluluğunu bilmeli, memleket meseleleri üzerinde o düşünceyle, düşünüp çalışmayı görev edinmelidir.",
  "Kendiniz için değil, bağlı bulunduğunuz ulus için elbirliği ile çalışınız. Çalışmaların en yükseği budur.",
  "Bugün hepimize düşen ortak görev; ulusal değerlere, bilince, Cumhuriyet’e sahip çıkmak, Çanakkale’yi, Kurtuluş Savaşı’nı kazanan ruhu korumak ve bu bilinci gelecek kuşaklara aktarmaktır.",
  "Hiçbir şeye ihtiyacımız yok, yalnız bir şeye ihtiyacımız vardır; çalışkan olmak!",
  "Devrimin amacını kavramış olanlar sürekli olarak onu koruma gücüne sahip olacaklardır.",
  "Ne mutlu Türküm diyene!",
  "Türkiye Cumhuriyeti’ni kuran Türkiye halkına Türk milleti denir…",
  "Benim Türk milletine, Türk cemiyetine, Türklüğün istikbaline ait ödevlerim bitmemiştir, siz onları tamamlayacaksınız.",
  "Bilelim ki, milli benliğini bilmeyen milletler, başka milletlere yem olurlar.",
  "Birçok güçlükler ve engeller karşısında bulunduğumuzu biliyoruz. Bunların hepsini inceleme ile, gayret ve iman ile ve millet aşkının sarsılmaz kuvvetiyle birer birer çözüp sonuçlandıracağız.",
  "Biz Türkler, bütün tarihimiz boyunca hürriyet ve istiklâle timsal olmuş bir milletiz.",
  "Türk milletinin istidadı ve kati kararı medeniyet yolunda durmadan, yılmadan ilerlemektir.",
  "Bütün ümidim gençliktedir.",
  "Ey yükselen yeni nesil, istikbal sizindir. Cumhuriyet’i biz kurduk, O’nu yükseltecek ve sürdürecek sizlersiniz.",
  "Ey Türk Gençliği! Birinci vazifen, Türk istiklâlini, Türk Cumhuriyetini, ilelebet, muhafaza ve müdafaa etmektir.",
  "Sizler, yani yeni Türkiye’nin genç evlatları! Yorulsanız dahi beni takip edeceksiniz… Dinlenmemek üzere yürümeye karar verenler, asla ve asla yorulmazlar.",
  "Türk çocuğu ecdadını tanıdıkça daha büyük işler yapmak için kendinde kuvvet bulacaktır.",
  "Türkiye Cumhuriyetinin, özellikle bugünkü gençliğine ve yetişmekte olan çocuklarına hitap ediyorum: Batı senden, Türk’ten çok geriydi. Eğer bugün batı teknikte bir üstünlük gösteriyorsa, ey Türk Çocuğu, o kabahat da senin değil, senden öncekilerin affedilmez ihmalinin bir sonucudur.",
  "Gençler cesaretimizi takviye ve idame eden sizlersiniz. Siz, almakta olduğunuz terbiye ve irfan ile insanlık ve medeniyetin, vatan sevgisinin, fikir hürriyetinin en kıymetli timsali olacaksınız.",
  "Cumhuriyeti kuranlar onu korumaya da muktedir olmalıdır.",
  "Tarihi yaşadığımız gibi yazdık, fakat geleceği cumhuriyete inananlara, onu koruyanlara ve yaşatacaklara emanet etmek lazımdır.",
  "Cumhuriyet fikir serbestliği taraftarıdır. Samimi ve meşru olmak şartıyla her fikre saygı duyarız.",
  "Türk milletinin karakter ve adetlerine en uygun olan idare, cumhuriyet idaresidir.",
  "Arkadaşlar, efendiler ve ey millet, iyi biliniz ki, Türkiye Cumhuriyeti şeyhler, dervişler, müritler, meczuplar memleketi olamaz.",
  "Bütün dünya bilsin ki, benim için bir yandaşlık vardır: Cumhuriyet yandaşlığı.",
  "Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye Cumhuriyeti ilelebet payidar kalacaktır.",
  "Öğretmenler! Cumhuriyet sizden düşünceleri hür, vicdanı hür, irfanı hür nesiller ister.",
  "Milletleri kurtaranlar yalnız ve ancak öğretmenlerdir.",
  "Yeni kuşak, en büyük cumhuriyetçilik dersini bugünkü öğretmenler topluluğundan alacaktır.",
  "Öğretmen bir kandile benzer, kendini tüketerek başkalarına ışık verir.",
  "Okul, genç beyinlere insanlığa saygıyı, millet ve ülkeye sevgiyi, bağımsızlık onurunu öğretir.",
  "İnsan topluluğu kadın ve erkek denilen iki cins insandan mürekkeptir."
];

function newQuote() {
  const quoteBox = document.getElementById("quote");
  const random = Math.floor(Math.random() * quotes.length);
  quoteBox.textContent = `"${quotes[random]}"`;
}

document.getElementById("newBtn").addEventListener("click", newQuote);
