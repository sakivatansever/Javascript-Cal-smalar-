//DEğişken oluşturma

// var a =20;
// var b=10;
// var c=40;

// console.log(a,b,c);

// Primitive veritipleri
var a = 10; // otomatik algılayıp  yapar number olur 
var b=3.14 // number veri tpip
console.log(typeof a);
console.log(typeof b);

//string 
var name ="Mustafa"; //tırnağı alılar ve string olduğunu otomatik alır
console.log(name);
console.log(typeof name)

//boolean
var a= true ; // true görür görmez boolean olduğunu anlar,koşul durumda kullanılır 
console.log (typeof a) 

//null
var a=null ; // hiçbir değer taşımadığını içiçn boş olduğunu söyler

console.log(a);
console.log(typeof a);

//undefined
var a; // eğer hiç değer atamsı yapılmaz ise undifend yani tanımsız olur .
a=20;
console.log(a);



//Reference Veri Tipleri

var numbers =[1,2,3,4,5];
console.log(numbers);
console.log(typeof numbers);

var person ={
    name:"mustafa murat",
    age :25
}
console.log(person);
console.log(typeof person)


var date =new Date();
console.log (date);

console.log(typeof date);
var merhaba =function (){
    console.log(merhaba);
}
console.log(merhaba);
console.log(typeof merhaba)
