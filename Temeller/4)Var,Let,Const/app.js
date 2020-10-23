//Var 

var a;
a=20
console.log(a);

var name ="Ümit Saki";
console.log(name);
name ="saki";
console.log(name);

//Let
let name ="Ümit saki vatansever";   /// let ile aynı dizin içeriisnde 2 adet aynı değişken ismiyle değişken tanımlaması yapılamaz
let name= "saki";
name ="murat"
console.log(name)

let a,b;
a=10;
b=20;
console.log(a+b)


///const
const name ="saki vatansever" // const sabit demek eğer const ile tanımlanan bir değişken ver ise üzerindeki veri düzenlenemez.
console.log (name);
name="saki";
console.log(name);

//
const a ; // burdada a tanımlandıkdan sonra 10 değeri atılmıtır .const keywordü bunada izin vermiyecek ve hata verecektir. 
a=10;
console.log (a)

// Buarada referans tipili bir değer olduğu için  güncelleme olmuyor referans tipin tutuğu yer değişmiyor.sadece tutuğu alanda değer güncelleniyor
//bu neden ile const burada sıkıntı çıkartmıyor. 
const c =[1,2,3,4,5];
console.log(a);
c.push(6);
console.log(a)
// mülakat sorusu javascipt
