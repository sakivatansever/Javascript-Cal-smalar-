//Scope Kavramı

//global alan herhangi bir scopeda bulunmayan alan


//function a(){

    //Function Scope
//}

//if(){
    //Block Scope

//}



var value1=10;
let value2=20;
const value3=30;


// function Func(){
//     var value1=40;
//     let value2=50;
//     const value3=60;
//     console.log(value1,value2,value3)
// }

// Func();


if(true)
{
    var a=10;
    let b=20;
    const c=30;


}
console.log(a)   ///burada b değeri tanımlı değil hatası verir nedeni 
console.log(b)  // a var ile tanımlanmışır .diğer iki değer let ve const ile
console.log(c) // var ile tanımlanan değişkenler scope dışında da tanınırlar görülürler ,Ama let ve const  sadece tanımlandıkları yerde görünürler

console.log(value1,value2,value3)