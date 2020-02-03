

$(document).ready(function(){

var monthNames = [
  'gennaio',
  'febbraio',
  'marzo',
  'aprile',
  'maggio',
  'giugno',
  'luglio',
  'agosto',
  'settembre',
  'ottobre',
  'novembre',
  'dicembre'
];
var n = 1;
cambioMese()
$('.next').click(function(){
  $('.calendar ul li').remove();
  n++;
  if(n > 12){
    n = 1;
  }
  cambioMese();
});
$('.prev').click(function(){
  $('.calendar ul li').remove();
  n--;
  if(n < 1){
    n = 12;
  }
  cambioMese();
});
function cambioMese(){
  var monthName = monthNames[n-1];
  $('.month_name').text('mese di ' + monthName);

  var month = moment("2018-0"+n+"", "YYYY-MM").daysInMonth();
  console.log("2018-0" + n + "");
  console.log(month);
  for (var i = 1; i <= month; i++) {
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    var context = { numero : i, mese : monthNames[n - 1] };
    var html = template(context);
    $('.calendar ul').append(html);
  };
};



$.ajax(
{
url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
method: "GET",
success: function (data, stato) {
  var dataChange =[];
  var dataHoliday = [];
 for (var i = 0; i < data.response.length; i++) {
   dataChange.push(moment(data.response[i].date));
   // dataChange.push(moment(dataChange[i]));
   dataHoliday.push(dataChange[i].format('d'));

 }
 // var calendarDays = $('.calendar li');
 // for (var j = 0; j < calendarDays.length; j++) {
 //   if($('.calendar li').includes(dataHoliday[j])){
 //     console.log(j);
 //   }
 // }
},
error: function (richiesta, stato, errori) {
alert("E' avvenuto un errore. " + errore);
}
}
);




});
// {
//     "success": true,
//     "response": [
//         {
//             "name": "Capodanno",
//             "date": "2018-01-01"
//         },
//         {
//             "name": "Epifania",
//             "date": "2018-01-06"
//         }
//     ]
// }
