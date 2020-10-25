let value;
const numbers=[43,56,33,23,44,55,96,7];
//const numbers= new Array(1,2,3,4,5,6,7);

const langs=["Python","java","c++","Javascirpt"]
const a=["Merhaba",11,null,undefined,3.14];
//Uzunluk
value=numbers.length;

//indekseleme
value=numbers[0];
value=numbers[2];
value=numbers[numbers.length-1];
//Hernahngi bir indeksteki değeri değiştirme
numbers[2]=1000;

//indexof
value=numbers.indexOf(1000);

//Arrayin sonuna değer ekleme -push
numbers.push(2000);
value=numbers;
///Başına değer ekleme
numbers.unshift(3000); 
value=numbers;

//sonundan değer atme pop

numbers.pop();
value=numbers;
//Başından değer atma 
numbers.shift()
value=numbers;
//Belli bir kısmı aralığı atma
numbers.splice(0,3);
value=numbers;


//Reverse
numbers.reverse();
value=numbers;
//sort
value=numbers.sort();
//sort


//Küçükten Büyüğe sıralama
value=numbers.sort(function(x,y){

return x-y;
});

    //Büyükten Küçüğe  sıralama
value=numbers.sort(function(x,y){

    return y-x;
 });

console.log(value);