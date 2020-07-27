var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydet = function () {
        console.log("kaydedildi");
    };
    return KrediBase;
}());
var TuketiciKredi = /** @class */ (function (_super) {
    __extends(TuketiciKredi, _super);
    function TuketiciKredi() {
        return _super.call(this) || this;
    }
    TuketiciKredi.prototype.hesapla = function () {
        console.log("tüketici kredisine göre hesap yapıldı");
    };
    return TuketiciKredi;
}(KrediBase));
var MortagageKredi = /** @class */ (function (_super) {
    __extends(MortagageKredi, _super);
    function MortagageKredi() {
        return _super.call(this) || this;
    }
    MortagageKredi.prototype.hesapla = function () {
        console.log("Mortagage kredisine göre hesap yapıldı");
    };
    return MortagageKredi;
}(KrediBase));
var tuketiciKredi = new TuketiciKredi();
tuketiciKredi.hesapla();
tuketiciKredi.kaydet();
var mortagageKredi = new MortagageKredi();
mortagageKredi.hesapla();
mortagageKredi.kaydet();
var kredi;
kredi = new TuketiciKredi();
kredi = new MortagageKredi();
