function greeter(isim:string){
return "merhaba "+isim
}

let message = greeter('engin 2')
console.log(message)


let sayi:number =12
sayi=10
sayi=10.4

let sehir : string ="adana"
sehir="ankara"
sehir="istanbul"

let dogruluk : boolean =true
dogruluk=false
dogruluk=true

let sayilar:number[] = [1,2,3]
//generic
let sayilar2 :Array<number> =[1,2,3]

//tuple
let dizi =[2,"ankara"]
let dizi2:[number,string] =[2,"ankara"]


enum Renk {Red=1,Black,Blue}
let renk:Renk =Renk.Red

//tüm veri tipleri any sayesinde kullanılabilir
let deger: any = "Ankara"
deger=2
deger={}


function greeter2():void {
    
    console.log("hi")
}

//undefined -null
let yas:number

class Musteri{
    
}


