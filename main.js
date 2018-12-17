$(document).ready(function(){
  var data = moment('2018-11-16');
  var max_data = moment('2018-11-16')
  printlist(data);

  $.ajax({
    url: 'https://holidayapi.com/v1/holidays',
    method: 'GET',
    data: {
      key: '870ee5f4-7ea5-4e4e-b0ec-985c0d6d9b3e',
      country: 'IT',
      month: data.format('MM'),
      year: data.format('YYYY'),
    },
    success: function(data){
      var holidays = data.holidays;
      console.log(data);
    },
    error: function() {
      alert("Errore");
    },
  });

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
    var formatodata = data.format('YYYY-MM-DD');
    // manca procedura per paragonare la data con holidays
    var source = $('#giorno_temp').html();
    var template = Handlebars.compile(source);
    var context = {giorno: num_giorno, mese: diquestomese};
    var html = template(context);
    $('.header_wrapper .lista_giorni').append(html);
  }
}
