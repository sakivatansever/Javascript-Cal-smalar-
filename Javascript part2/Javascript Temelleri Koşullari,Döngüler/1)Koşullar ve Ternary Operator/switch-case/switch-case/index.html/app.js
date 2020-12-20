console.log(2==2)
console.log("js"=="Java")
console.log(2=="2")
console.log(2==="2");//3.eşittir değerler aynımı tipler aynımı 2 türlü doğrulama yapar. 
console.log(4>2);
console.log(2>4);
console.log(2!=4);
console.log(2<4);
console.log(4<2);

console.log(4>=2);

console.log(2<=4);

///Mantıksal Bağlaçlar
//not operatörü 
console.log(!(2==2))

//and operatörü 

console.log((2==2) && ("Ahmet"=="Ahmet"));

//or operatörü 

console.log((4==2) || ("Ahmet"=="Ahmet"));


const error = true;
if(error==true){
    console.log("Hata Oluştu")
}

else {
    console.log("Hata Oluşmadı.")
}


const user="mmc";
if (user==="mmc"){
    console.log("Kullanıcı Bulundu");
}
else{
    console.log("Kullanıcı bulunamadı.");

}


//const process ="1";
// if (process==="1")
// {
//     console.log("İşlem 1")
// }
// else if(process==="2")
// {
//   console.log("İşlem 2")
// }
// else if(process==="3")
// {
//       console.log("İşlem 3")
// }
// else if(process==="4")
// {
//       console.log("İşlem 4")
// }
// else{
//     console.log("Geçersiz işlem")

// }


const number =100;
if(number ===100){
    console.log("sayı 100'e eşit")
}
else{
    console.log("sayı 100'e eşit değil");
}

//Ternary Operatoru
console.log(number===100 ? "sayı 100":"Sayı 100 değil")



if (number ===100) console.log("sayı 100");
else console.log ("sayı 100 değil ")

///Switch -Case 

const process =2;

switch(process){
    case  1:
        console.log("işlem 1");
        break;
    case  2:
        console.log("işlem 2");
        break;
    case  3:
        console.log("işlem 3");
        break;
    case  4:
        console.log("işlem 4");
        break;
    default:
        console.log("geçersiz işlem");

}






