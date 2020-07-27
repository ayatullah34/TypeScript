function greeter(isim) {
    return "merhaba " + isim;
}
var message = greeter('engin 2');
console.log(message);
var sayi = 12;
sayi = 10;
sayi = 10.4;
var sehir = "adana";
sehir = "ankara";
sehir = "istanbul";
var dogruluk = true;
dogruluk = false;
dogruluk = true;
var sayilar = [1, 2, 3];
//generic
var sayilar2 = [1, 2, 3];
//tuple
var dizi = [2, "ankara"];
var dizi2 = [2, "ankara"];
var Renk;
(function (Renk) {
    Renk[Renk["Red"] = 1] = "Red";
    Renk[Renk["Black"] = 2] = "Black";
    Renk[Renk["Blue"] = 3] = "Blue";
})(Renk || (Renk = {}));
var renk = Renk.Red;
//tüm veri tipleri any sayesinde kullanılabilir
var deger = "Ankara";
deger = 2;
deger = {};
function greeter2() {
    console.log("hi");
}
//undefined -null
var yas;
var Musteri = /** @class */ (function () {
    function Musteri() {
    }
    return Musteri;
}());
