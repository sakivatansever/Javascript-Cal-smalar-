let value ;

// VeriTiplerini String'e çevirme işlemi 
value =123;
value =String(123);
value=String(true)

value =String(function(){console.log()});
value =String([1,2,3,4]);

value =(10).toString();


//Veri Tiplerini Sayılara Çevirme 
value =Number ("123")
value=Number(null)
value=Number(undefined); //not a number NAN HATASI 
value =Number("Hello World"); //Hata NaN
value=Number ([1,2,3,4]); //NaN hATA



value=Number("3.14");
value=parseFloat("3.14")
value=parseInt("3");




const a= "Hello"+34;
console.log(a)
console.log(typeof a)





console.log(value);
console.log(typeof value)