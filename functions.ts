function sum(x,y){
    return x+y;
}

function sum2(x:number,y:number) : number{
    return x+y;
}

let sum3 = function(x:number,y:number) : number{
    return x+y;
}

console.log(sum(2,3));
console.log(sum("ankara",2));
console.log(sum2(2,4));
console.log(sum3(4,8));

function sum4(x:number,y:number=4) : number{
    return x+y;
}
console.log(sum4(3));

//y? undefined 
function sum5(x:number,y?:number) : number{
    
    if(y){ //y tanımlı ise
        return x+y;
    }

    return x;
}
console.log(sum5(3));
console.log(sum5(3,40));


//REST PARAMETRELER
function davetEt(ilkDavetli:string,...digerleri:string[]) : string{
    
    return ilkDavetli + digerleri.join(" ");
}
//istenilen tüm isimler yazılabilir sonu yok
console.log(davetEt("engin","derin","salih"))


//İLK DEĞERİN VERİLMESİNE GEREK YOK
function davetEt2(...digerleri:string[]) : string{
    
    return digerleri.join(" ");
}
console.log(davetEt2("engin","derin","salih"))
