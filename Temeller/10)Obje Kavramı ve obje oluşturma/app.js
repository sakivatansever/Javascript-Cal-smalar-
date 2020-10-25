let value;
const programmer = {
    name :"Ümit Saki Vatansever",
    age:25,
    email:"umit.vatansever@bilgeadam.com",
    langs:["Python","Java","Javascript"],
    address:{
            city:"İstanbul",
            street:"Bayrampaşa"
    },

    work: function(){
        console.log("Programcı Çalışıyor.....");
    }

}
value=programmer;
value=programmer.email;// Genel Kullanılan
value=programmer["email"];
value=programmer.langs;
value=programmer.address.city;
programmer.work();

const programmers=[
{name: "Ümit Saki vatansever",age:25},
{name: "Oğuz", age:25}
];

value=programmers[0].name;

console.log(value);