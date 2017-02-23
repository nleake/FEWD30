// attach click event to Compare button

$('#submit').click(compare)

// compare a && b and return the result

// add an text to the comparison element based on restults from our comparison


function compare() {
  var a = $('#a').val();
  var b = $('#b').val();
  console.log(a);

  if (a > b) {
    $('#comparison').html('>');
  } else if (a < b) {
    $('#comparison').html("<");
  } else if (a === b) {
    $('#comparison').html('=');
  }
}