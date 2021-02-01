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
* Son olarak fonksiyonun istenen çıktıyı verdiğini gösteren 5 adet console.log() kullanımı hazırlanmıştır.
* */
function isValidName(name) {
    return typeof name == "string" && name.replaceAll(" ", "").length >= 2
        ? true
        : false;
}
console.log(isValidName("Hakki")); // true
console.log(isValidName("")); // false
console.log(isValidName(" ")); // false
console.log(isValidName("  ")); // false
console.log(isValidName("  a")); // false

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