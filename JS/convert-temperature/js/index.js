// attach click event to convert button

$('#convert').click(convert);


function convert(a) {
  a = $('#a').val();
  var b = Math.floor((a - 32) * (5/9));
  console.log(a);
  console.log(b);
  $('#b').html(b + "&deg celcius");
}//end convert