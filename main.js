$(document).ready(function(){
  var data = moment('2017-01-01');
  var ggInMese = data.daysInMonth();

  for (var i = 1; i <= ggInMese ; i++) {
    var num_giorno = i;
    var source = $('#giorno_temp').html();
    var template = Handlebars.compile(source);
    var context = {giorno: num_giorno};
    var html = template(context);
    $('.header_wrapper .lista_giorni').append(html);
  }
});
