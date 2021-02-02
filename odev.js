// Cevap 1
/* Hakkı Sabah 02.02.2021
 *
 * Cevap olarak istenmediği için var let yapılmamıştır.
 * Sadece myCarDetails expression functionun 2. FAZI düzenlenmiştir.*/
var car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function () {
    console.log(this.registrationNumber + " " + this.brand);
  },
};

var myCarDetails = car.displayDetails.bind({
  registrationNumber: car.registrationNumber,
  brand: car.brand,
});
myCarDetails();

// Cevap 2
/* Hakkı Sabah 02.02.2021
 *
 * İlk önce string kontrol edilmeli eğer edilmez ise gönderilen sayı tipindeki argüman,
 * boşluk kontrolü yapılan name parametresinde hata verecektir.
 * Son olarak fonksiyonun istenen çıktıyı verdiğini gösteren 19 adet console.log() kullanımı hazırlanmıştır.
 * */
function isValidName(name) {
  //ilk string kontrolü
  if (typeof name != "string") {
    return false;
  }
  // ifadenin başındaki ve sonundaki boşluklar temizlenir, bunun sebebi aşağıdaki koşulların sağlıklı çalışması içindir.
  name = name.trim();
  // yukarıdaki koşulları tamamlayan string ifade aralarda kalan boşluklar var ise splittedName değişkenine sırasıyla ve dizi olarak aktarılır.
  let splittedName = name.split(" ");
  // splittedName eğer 3 isimden fazlasını içeriyorsa fonksiyon false döner
  if (splittedName.length > 3) {
    return false;
  } else {
    // eğer 3 veya daha küçükse diğer koşulların sorgulanması için for döngüsüne alınır.
    for (let i = 0; i < splittedName.length; i++) {
      // splittedName dizisi içersindeki i. elemanın toplam harf sayısı sorgulanır
      if (splittedName[i].length < 2) {
        // koşula uymayan durumda false değeri döndürülür ve break ile döngüden çıkılır.
        return false;
        break;
      }
    }
  }
  // test koşullarına eklenen, tab ve enter klavye girişleri tespit edildikten ve döngüye girmeyen ifadeler için
  return name.replaceAll("\t\n", "").length > 1 ? true : false;
}
console.log(isValidName() === false);
console.log(isValidName("Ahmet") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(isValidName("Ha") === true);
console.log(isValidName("Ha Sa") === true);
console.log(isValidName("Ha Sa Ba") === true);
console.log(isValidName("Hakki Sabah Sabah \t\n") === true);
console.log(isValidName("Hakki Sabah Sabah ") === true);
console.log(isValidName("Hakki Sabah Sabah Sa") === false);
console.log(isValidName("Hakki Sabah Sabah S") === false);
console.log(isValidName("Hakki Sabah S") === false);
console.log(isValidName("H S S") === false);
console.log(isValidName("H S") === false);
console.log(isValidName("H ") === false);

// Cevap 3
/* Hakkı Sabah 02.02.2021
 *
 * */
const book = {
  title: "Brave New World",
  author: "Aldous Huxley",
};

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
  );
}
summary.call(book, "dystopian", "1932");
