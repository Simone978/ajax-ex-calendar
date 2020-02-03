var month = moment("2018-02", "YYYY-MM").daysInMonth() // 29
console.log(month);

for (var i = 1; i <= month; i++) {
  var source = document.getElementById("entry-template").innerHTML;
  var template = Handlebars.compile(source);
  var context = { numero: i };
  var html = template(context);
  $('.calendar').append(html);
};
