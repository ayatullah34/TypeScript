class Ev{

    odaSayisi:number;
    pencereSayisi:number;
    kat:number;

    constructor(odaSayisi:number,pencereSayisi:number, kat:number){
        this.odaSayisi=odaSayisi
        this.kat=kat
        this.pencereSayisi=pencereSayisi
    }

    yemekYe(){
        console.log(this.kat + ". katlı evde " + "yemek yiyildi")
    } 

}

let ev = new Ev(3,4,5)
ev.yemekYe()
console.log(ev.kat)

//-----------INHERITANCE--------------
class Kisi{

    private _isim:string;
    
    get isim() : string{

        return " sayın " + this._isim;
    }

    set isim(ad:string){

        this._isim=ad;
    }

    kaydet(){
        console.log("kişi kaydedildi")
    }

}

class Musteri extends Kisi{

    satisYap(){
        console.log("satış yapıldı")
    }

}

class Personel extends Kisi{

    maasOde(){
        console.log("maaş ödendi")
    }

}

let musteri=new Musteri();
musteri.isim="engin";
musteri.kaydet();
musteri.satisYap();
console.log(musteri.isim)

let personel=new Personel();
personel.kaydet();
personel.maasOde();

