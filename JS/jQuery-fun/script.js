$('div').css('background', 'purple');
$('.highlight').css('width', '200px');
$('#third').css('border', '2px solid orange');
$('div:first-of-type').css('color', 'pink');
$('h1').text("New Text!!");
//.attr() is used to get/set attributes for html
//.val() is used to get/set attributes for inputs

$('button').click(function(){
  alert("Someone clicked a button");
});

$('input').keypress(function(event){
  //do something
  if(event.which === 13){
    alert("You hit Enter!");
  }
});

//on is the most used event method, works simliarly to addEventListenr
// in that you can specify the type of event to listen for.
$('element').on('click', function(){
  //do thing
});

$('button').on('mouseenter', function(){
  $(this).css('font-weight', 'bold');
});

$('button').on('mouseleave', function(){
  %(this).css('font-weight', 'normal');
});

$('button').on('click', function(){
  $('element').fadeOut(1000, function(){
    $(this).remove();
  });
})