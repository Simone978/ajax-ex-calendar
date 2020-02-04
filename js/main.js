$(document).ready(function(){

  // var monthNames = [
  //   'gennaio',
  //   'febbraio',
  //   'marzo',
  //   'aprile',
  //   'maggio',
  //   'giugno',
  //   'luglio',
  //   'agosto',
  //   'settembre',
  //   'ottobre',
  //   'novembre',
  //   'dicembre'
  // ];

  var monthName="Gennaio";

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
  url: "https://flynn.boolean.careers/exercises/api/holidays",
  method: "GET",
  success: function (data, stato) {
    var dataChange =[];
    var dataHoliday = [];
   for (var i = 0; i < data.response.length; i++) {
     dataChange.push(moment(data.response[i].date));
     dataHoliday.push(dataChange[i].format('d'));
   };

    calendarLi = $('.calendar ul li');
     // for (var j = 0; j < calendarLi.length; j++) {
     //    if(calendarLi[j].hasClass(3)){
     //      console.log(calendarLi[j]);
     //    }
     // }
    for (var j = 0; j < calendarLi.length; j++) {
      var numero = $('.day'+j+'').text();
      dataHoliday.toString();
      console.log(""+dataHoliday[j]+"");
    //   if($('.day'+j+''':contains(dataHoliday['+j+']')){
    //     console.log(j);
    //   };
    //   console.log($('.day'+j+''));
    // }
    // console.log(dataHoliday[0]);
    // $('calendar ul li').addClass('red');
    //   if($('.calendar ul li').hasClass(''+dataHoliday[0]+'')){
    //     calendarLi[6].addClass('red');
    //     console.log('sì in posizione '+j);
    //   }
    }
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
