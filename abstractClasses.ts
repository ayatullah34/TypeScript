abstract class KrediBase{
    constructor(){

    }

    kaydet() : void{

        console.log("kaydedildi")
    }

    abstract hesapla() : void;


}


class TuketiciKredi extends KrediBase {
    
    constructor() {
        super();
    }

    hesapla(): void {

        console.log("tüketici kredisine göre hesap yapıldı")
    }
}



class MortagageKredi extends KrediBase {
    
    constructor() {
        super();
    }

    hesapla(): void {

        console.log("Mortagage kredisine göre hesap yapıldı")
    }
}

let tuketiciKredi = new TuketiciKredi();
tuketiciKredi.hesapla();
tuketiciKredi.kaydet();

let mortagageKredi = new MortagageKredi();
mortagageKredi.hesapla();
mortagageKredi.kaydet();

let kredi : KrediBase
kredi = new TuketiciKredi();

kredi = new MortagageKredi();

