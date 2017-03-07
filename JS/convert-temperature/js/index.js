// attach click event to convert button

$('#convert').click(convert);


function convert(a) {
  //clear classes each time we click
  removeAllClasses('body');
  a = $('#a').val();
  var b = Math.floor((a - 32) * (5/9));
  console.log(a);
  console.log(b);
  $('#b').html(b + "&deg celsius");
  $('#shading').css({
      "color": "white",
      "font-weight": "bold",
      "background": "rgba(0, 0, 0, .5)"
    });

  //temperature background logic
  if (b > 25) {// 78 F or greater
    $('body').toggleClass('summer');
  } else if (b > 12) {
    $('body').toggleClass('spring');
    $('#inputs p').css({
      "color": "white",
      "font-weight": "bold"
    });
  } else if (b >= 0) {
    $('body').toggleClass('autumn');

  } else if (b  < 0) {//less than 40 F
    $('body').toggleClass('winter');
  }

}// end convert

function removeAllClasses(target){
  $(target).removeClass();
}

// switch statement that we're not going to use

// function evaluateTemp(temp) {
//     switch(temp) {
//       case (temp > 26):
//         $('body').toggleClass('summer');
//         break;
//       case (temp > 10):
//         $('body').toggleClass('spring');
//         break;
//       case (temp > 4):
//         $('body').toggleClass('autumn');
//         break;
//       case (temp < 4):
//         $('body').toggleClass('winter');
//         break;
// }