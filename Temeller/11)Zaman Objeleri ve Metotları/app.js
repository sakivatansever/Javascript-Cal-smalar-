let value;


 const now = new Date(); //İçine değer göndermedğim için şuanki zamanı alır .

 const date1=new Date("9-19-1993 06:12:00")

 const date2=new Date("October 05 1995")

 const date3= new Date("9/19/1993");

 value=date1;

 value=date1.getMonth();
 value=date1.getDate();
 value=date1.getDay();

 value=date1.getHours();
value=date1.getMinutes();
value=date1.getSeconds();
value=date1.getMilliseconds();

date1.setMonth(10);
date1.setDate(15)
date1.setFullYear(1995);
date1.setHours(23)
date1.setMinutes(15);
date1.setSeconds(30);

value=date1;


console.log(now);
