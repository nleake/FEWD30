// TODO: Write onready function  using $.ready() to delay code from executing
// until page loads.

// TODO: select DOM elements with CSS selectors using $.click() handler

// TODO:  - If a user clicks "Read More" on the primary column:

//   - have the text in the ```<p>``` tag slide down along with a "Read Less" link in the blog post using  ```$.slideDown()``` and ```$.show()```
//   - hide the "Read More" link using ```$.hide()```

//

$( document ).ready(function() {

});

$( "a" ).click(function( event ) {
  event.preventDefault();
});

    $( ".readmore" ).click(function() {
      $( "#show-this-on-click" ).slideToggle( "medium", function() {
        // Animation complete.
      });
    });




