function deger(x) {
    return x;
}
var sayi = deger(10);
console.log(sayi);
function deger2(x) {
    return x;
}
var sayi2 = deger2("ankara");
console.log(sayi2);
//değer tipini daha sonra biz tercih ediyoruz
function deger3(x) {
    return x;
}
var sayi3 = deger3(22);
console.log(sayi3);
var sehir = deger3("konya");
console.log(sehir);
var GenericsClass = /** @class */ (function () {
    function GenericsClass() {
    }
    GenericsClass.prototype.fonksiyon = function (paramatre) {
        return paramatre;
    };
    return GenericsClass;
}());
var sinif = new GenericsClass();
console.log(sinif.fonksiyon("izmir"));
