// define function that applies colors based on "this" scope dynamically

//Apply aforementioned function to every li button

function switchColor() {
  console.log(this);
  console.log($(this).attr('class'));
  var color = $(this).attr('class');
  $('body').attr('class', color);
}

$(document).ready(function(){
  $('#switcher li').click(switchColor);
})