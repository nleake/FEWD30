//track total in a var
var total = 0;

// define function to add to the total
var formEnter = function(){
  var newValue = $('#newEntry').val();

  total = parseInt(newValue) + total;

  var newTotal = convertTotal(total);

  $('#entries').append('<tr><td>$' + newValue + '</td></tr>');

  $('#total').html(newTotal);

  return false;
}

function convertTotal(number) {
  var converted = parseFloat(number);

  converted = converted.toFixed(2);

  converted = "$" + converted;

  return converted;
}

// add an event for the form to listen to stuff
$('#entry').submit(formEnter)


