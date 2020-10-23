const name ="Ümit saki Vatansever"
const Departman ="Bilişim";
const salary =4000;
//const a="isim: "+name+"\n"+"Departman:"+Departman+"\n"+"Maaş:"+salary;

const a=`İsim:${name}\nDepartman:${Departman}\nMaaş:${salary}`;
//Tırnak işareti için altgr basılı tut ardından 2kere noktalı virgüle bas 


// const html="<ul>"+
//            "<li>"+name+"</li>"+
//            "<li>"+Departman+"</li>"+
//            "<li>"+salary+"</li>"+
//            "</ul>";



console.log(a)
function b(){
    return "merhaba";
}

const html =`
    <ul>
      <li>${name} </li>
      <li>${Departman} </li>
      <li>${salary} </li>
      <li>${10/4} </li>
      <li>${b()} </li>
    </ul>
      `;

document.body.innerHTML=html;