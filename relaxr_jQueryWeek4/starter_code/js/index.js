//function to wait until the document finishes loading
$( document ).ready(function() {
//wrapping stuff in here, but is it totally necessary this time?
  // function to prevent links from going to a new page
  $( "a" ).click(function( event ) {
    event.preventDefault();
  });

  //function to show the Read More text, hide the Read More button
  // and show the Read Less text on click of Read More
  $( ".readmore" ).click(function() {
    $( "#show-this-on-click" ).slideDown( "medium", function() {
      // Animation complete.
          //show Read Less
        $( ".readless" ).show( "medium" );
        //hide Read More
        $( ".readmore" ).hide( "slow" );
    });
    //show Read Less
    //$( ".readless" ).show( "slow" );
    //hide Read More
   // $( ".readmore" ).hide( "slow" );
  });

  //function to hide the Read More text, Read Less button
  // and display the Read More text on click of Read Less
  $( ".readless" ).click(function() {
    $( "#show-this-on-click" ).slideUp( "medium", function() {
      // Animation complete.
    });
    $( ".readless" ).hide( "slow" );
    $( ".readmore" ).show( "slow" );
  });

  //functions below are similar to the above two, but for the sidebar
  $( ".learnmore" ).click(function() {
    $( ".learnmore" ).hide( "medium", function() {
        $( "#learnmoretext" ).slideDown( "medium", function() {
      // Animation complete.
    });
    } );
  });

}); //end document.ready



