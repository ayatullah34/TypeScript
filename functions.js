function sum(x, y) {
    return x + y;
}
function sum2(x, y) {
    return x + y;
}
var sum3 = function (x, y) {
    return x + y;
};
console.log(sum(2, 3));
console.log(sum("ankara", 2));
console.log(sum2(2, 4));
console.log(sum3(4, 8));
function sum4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(sum4(3));
//y? undefined 
function sum5(x, y) {
    if (y) { //y tanımlı ise
        return x + y;
    }
    return x;
}
console.log(sum5(3));
console.log(sum5(3, 40));
//REST PARAMETRELER
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + digerleri.join(" ");
}
//istenilen tüm isimler yazılabilir sonu yok
console.log(davetEt("engin", "derin", "salih"));
//İLK DEĞERİN VERİLMESİNE GEREK YOK
function davetEt2() {
    var digerleri = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        digerleri[_i] = arguments[_i];
    }
    return digerleri.join(" ");
}
console.log(davetEt2("engin", "derin", "salih"));
