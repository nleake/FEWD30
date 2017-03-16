//function to wait until the document finishes loading
$( document ).ready(function() {
//wrapping stuff in here, but is it totally necessary this time?
  // function to prevent links from going to a new page
  $( "a" ).click(function( event ) {
    event.preventDefault();
  });

  //function to show the Read More text, hide the Read More button
  // and show the Read Less text on click of Read More
  $( ".hamburger" ).click(function() {
    $( "nav" ).slideDown( "medium", function() {
      // Animation complete.
    });
    //show Read Less
    //$( ".readless" ).show( "slow" );
    //hide Read More
   // $( ".readmore" ).hide( "slow" );
  });

  //function to hide the Read More text, Read Less button
  // and display the Read More text on click of Read Less
  $( ".hamburger" ).click(function() {
    $( "#nav" ).slideUp( "medium", function() {
      // Animation complete.
    });
  });

}); //end document.ready
