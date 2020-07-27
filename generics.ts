function deger( x : number) : number{
    
    return x;
}
let sayi = deger(10);
console.log(sayi);



function deger2( x : string) : string{
    
    return x;
}
let sayi2 = deger2("ankara");
console.log(sayi2);


//değer tipini daha sonra biz tercih ediyoruz
function deger3<T> ( x : T ) : T{
    
    return x;
}

let sayi3 = deger3<number> (22);
console.log(sayi3);

let sehir = deger3<string> ("konya");
console.log(sehir);


class GenericsClass<T> {
    
    degisken : T;

    fonksiyon(paramatre : T) : T {
        
        return paramatre;
    }

}

let sinif = new GenericsClass<string>();

console.log( sinif.fonksiyon("izmir") );


