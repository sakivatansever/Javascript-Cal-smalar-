let value;

const firstName="Louis"
const lastName="Armstrong"

const langs="Java,Python,C++";

value=firstName+lastName;
value=firstName+" "+lastName;


value="Ümit Saki";

value+=" vatansever" ; //value=value+" Vatansever "
value=firstName.length;
value=firstName.concat(" ",lastName,"","Caz");
value=firstName.toLowerCase();
value=firstName.toUpperCase();
value=firstName[0];
value=firstName[2];
value=firstName[4];
value=firstName[firstName.length -1];

//index of
value=firstName.indexOf("L");
value=firstName.indexOf("o");
value=firstName.indexOf("l") //İçinde aradğımız değer yoksa -1

//char at
value=firstName.charAt(0);
value=firstName.charAt(firstName.length-1);

//split metodu

value=langs.split(",");

//Replace
value=langs.replace("Python","CSS");

//iNCLUDES

value=langs.includes("Java")

value=langs.includes("asd")




console.log(value)