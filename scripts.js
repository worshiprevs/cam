window.onscroll = function() {
    myFunction();
};

var header = document.getElementById("navBar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};


// SLIDESHOW AND ANIMATION
var myIndex = 0;
slideshow();

function slideshow() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }    
    x[myIndex-1].style.display = "block";  
    setTimeout(slideshow, 3000); // Change image every 3 seconds
}


// Animation
var theIndex = 0;
animation();

function animation() {
    var j;
    var y = document.getElementsByClassName("appText");
    for (j = 0; j < y.length; j++) {
       y[j].style.display = "none";  
    }
    theIndex++;
    if (theIndex > y.length) {
        theIndex = 1;
    } 
    y[theIndex-1].style.display = "block";  
    setTimeout(animation, 1000); // Change image every 1 seconds
}