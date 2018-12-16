$(document).ready(function(){
  var data = moment('2018-12-16');
  var max_data = moment('2018-12-16')
  printlist(data);

  $('#next').click(function(){
    data = data.add(1, 'M');

    if (data.diff(max_data , 'days') > 0) {
      alert("data futura");
      data = data.subtract(1, 'M')
    }
    else {
      printlist(data);
    }
  });
  $('#prev').click(function(){
    data = data.subtract(1, 'M');
    printlist(data);
  });


});

function printlist(data) {
  $('.header_wrapper h2').text(data.format('MMMM YYYY'))
  var ggInMese = data.daysInMonth();
  $('.header_wrapper .lista_giorni').html('');
  for (var i = 1; i <= ggInMese ; i++) {
    var num_giorno = i;
    var diquestomese = data.format('MMM');
    var source = $('#giorno_temp').html();
    var template = Handlebars.compile(source);
    var context = {giorno: num_giorno, mese: diquestomese};
    var html = template(context);
    $('.header_wrapper .lista_giorni').append(html);
  }
}
