



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
var monthName = monthNames[n-1];
$('.month_name').text('mese di ' + monthName);

var month = moment("2018-0"+n+"", "YYYY-MM").daysInMonth(); // 29
console.log("2018-0"+n+"");
console.log(month);
for (var i = 1; i <= month; i++) {
  var source = document.getElementById("entry-template").innerHTML;
  var template = Handlebars.compile(source);
  var context = { numero: i };
  var html = template(context);
  $('.calendar').append(html);
};
