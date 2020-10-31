// Fonksiyon Tanımlama

function merhaba()
{
    console.log("Merhaba");

}

function merhaba1(name ="Bilgi yok ",age="Bilgi yok")
{
    // if(typeof name ==="undefined") name ="Bilgi yok";
    // if(typeof age ==="undefined") age ="Bilgi yok";
    console.log(`isim: ${name} Yas: ${age}`);

}
merhaba(); // Fonksiyon Çağrısı // (Function Call)

merhaba();

merhaba1("Esra",30);

merhaba1();

merhaba1("Ümit");



function square(x){
    return x*x;
    console.log("namer")/// return den sonra kullanılan hiçbirşey çalışmaz
}
function cube(x){
   return x*x*x;

}
let a = cube(square(12))

console.log(a);


function merhaba3 (){
    return "merhaba"
}
console.log(merhaba3())

///Funcution Expression
const merhaba4 =function(name ){
    console.log("merhaba "+ name)
}
merhaba4("Ümit");


/// inmediately ınvoked funciton (IIFE) //tANIMLANDĞI YERDE ÇALIŞAN FONKSİYON 
(function(name){
    console.log("Merhaba"+name);
})("Ümit")


const database={
    host:"Localhost",
    add:function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde edildi.")
    },
    update:function(id){
        console.log(`ID:${id} Güncellendi`)
    },
    delete:function(id){
        console.log(`ID: ${id} Silindi`)
    }
}

console.log(database.host);
database.add()
database.delete(10);
