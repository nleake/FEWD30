//function to wait until the document finishes loading
$( document ).ready(function() {
//wrapping stuff in here, but is it totally necessary this time?
  // function to prevent links from going to a new page

  //function to show the Read More text, hide the Read More button
  // and show the Read Less text on click of Read More
  $( ".hamburger" ).click(function() {
    $( "nav" ).slideToggle( "medium", function() {
      // Animation complete.
    });
  });

}); //end document.ready
