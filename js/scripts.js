var viewIcon = document.getElementsByClassName( "view-icon" );
var style = document.getElementsByClassName( "current-stylesheet" );

//loop through the array of view icons
for( var index = 0; index < viewIcon.length; index++ ) {
  // put a click even listener on this element.  If clicked, do one of the next two steps
  viewIcon[index].addEventListener( "click", function() {
    // if the first icon is selected, I want it to be blue and the second to be gray
    if( this.classList.contains( "grid-icon" ) ) {
      // if this icon is not selected, toggle the class to view-grid and the other class to hide-list
      if( this.classList.contains( "hide-grid" ) ) {
        this.classList.remove( "hide-grid" );
        this.classList.add( "view-grid" );
        this.nextElementSibling.classList.remove( "view-list" );
        this.nextElementSibling.classList.add( "hide-list" );
        style[0].setAttribute( "href", "css/grid-view.css" );
        // this.style.color = "blue"; -- testing
        // this.nextElementSibling.style.color = "red"; -- testing
      } // end inner if
    } // end outer if

    // if the second icon is selected, I want it to be blue and the first to be gray
    else if( this.classList.contains( "list-icon" ) ) {
      if( this.classList.contains( "hide-list" ) ) {
        this.classList.remove( "hide-list" );
        this.classList.add( "view-list" );
        this.previousElementSibling.classList.remove( "view-grid" );
        this.previousElementSibling.classList.add( "hide-grid" );
        style[0].setAttribute( "href", "css/list-view.css" );
        // this.style.color = "blue"; -- testing
        // this.previousElementSibling.style.color = "red"; -- testing
      }
    }

    else {
      // do nothing
    }
  });
}


























/* this code block works!!!!!!!!!!!!!!!
var viewIcon = document.getElementsByClassName( "view-icon" );

//loop through the array of view icons
for( var index = 0; index < viewIcon.length; index++ ) {
  // put a click even listener on this element.  If clicked, do one of the next two steps
  viewIcon[index].addEventListener( "click", function() {
    // if the first icon is selected, I want it to be blue and the second to be gray
    if( this.classList.contains( "grid-icon" ) ) {
      this.style.color = "blue";
      this.nextElementSibling.style.color = "red";
    }

    // if the second icon is selected, I want it to be blue and the first to be gray
    else {
      this.style.color = "blue";
      this.previousElementSibling.style.color = "red";
    }
  });
}
*/
































/*
for( var index = 0; index < viewGrid.length; index++ ) {
  viewGrid[index].addEventListener( "click", function() {
    if( this.classList.contains("hide-grid") && this.nextElementSibling.classList.contains("view-list") ) {
      this.classList.toggle( "view-grid");
      this.nextElementSibling.classList.toggle( "hide-list" );
    }

    else {
      for( var index = 0; index < viewList.length; index++ ) {
        viewList[index].addEventListener( "click", function() {
          if( this.classList.contains( "hide-list" && this.previousElementSibling.classList.contains("view-grid") ) ) {
            this.classList.toggle( "view-list" );
            this.previousElementSibling.classList.toggle( "hide-grid" );
          }
          });
      } // end for loop

    }
  } );
} // end for loop
*/



// this.classList.toggle( "unselect-grid-view" );
// this.nextElementSibling.classList.toggle( "select-list-view" );
