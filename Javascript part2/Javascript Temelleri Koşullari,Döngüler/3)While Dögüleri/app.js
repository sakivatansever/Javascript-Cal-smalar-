// While Döngüleri

// let i =0;
// while(i<10)
// {
//     console.log(i);
    
//     i=i+1// i++ //i+=1
// }




// let i =10;

// while (i>0)
// {
//     console.log(i);
//     i-=2  //i-=1
// }



//Break ve Continue

// let i=0
// while(i<10)
// {
//     console.log(i)
//     if(i==5)
//     {
//         break
//     }
//     i++
// }


//Countinue

// let i= 0;
// while (i<10){  // sonsoz döngü 
//     if  (i==3|| i==5){
//         i++;
//         continue;
//     }
//     console.log(i)
//     i++;
// }


// Do while 

// let i=0;
// do {
// console.log(i);
// i++
// }while(i<10)






// const langs=["Python","Javascript","Java"];
// let index=0;
// while(index <langs.length){
//     console.log(langs[index]);
//     index++;
// }


//For


// const langs=["Python","Javascript","Java"];
// for(let index=0 ; index<langs.length;index++)
// {
//     console.log(langs[index]);
// }


//Foreach
// const langs=["Python","Javascript","Java"];
// langs.forEach(function(lang){
// console.log(lang);
// });



//Map Fonk
// const users = [
//     {name:"Mustafa",age:25},
//     {name:"Zeynep",age:40},
//     {name:"Ali",age:12}
// ];
// const names = users.map(function(user){
//     return user.name;
// });
// const ages =users.map(function(user){
//   return user.age
// });

// console.log(names)
// console.log(ages)




const user ={
    name:"Mustafa",
    age:25
};

for(let key in user){
    console.log(key,user[key])
}