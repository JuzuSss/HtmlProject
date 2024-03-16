function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}


function scrollFunction() {
  var element1 = document.getElementById("hiddenText");
  var elementPosition1 = element1.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  
  if (elementPosition1 < windowHeight) {
    element1.classList.add("visible"); 
  } else {
    element1.classList.remove("visible"); 
  }

  var element2 = document.getElementById("hiddenText2");
  var elementPosition2 = element2.getBoundingClientRect().top;
  
  if (elementPosition2 < windowHeight) {
    element2.classList.add("visible2"); 
  } else {
    element2.classList.remove("visible2");
  }

  var element3 = document.getElementById("hiddenText3");
  var elementPosition3 = element3.getBoundingClientRect().top;
  
  if (elementPosition3 < windowHeight) {
    element3.classList.add("visible3"); 
  } else {
    element3.classList.remove("visible3"); 
  }

  var element4 = document.getElementById("hiddenText4");
  var elementPosition4 = element4.getBoundingClientRect().top;
  if (elementPosition4 < windowHeight) {
    element4.classList.add("visible4"); 
  } else {
    element4.classList.remove("visible4"); 
  }

  
  var images = ["Cyberpunk.jpg", "Japon.jpg", "Viking.jpg", "Pirate.jpg"];
  var currentIndex = 0;

  document.getElementById("prevButton").addEventListener("click", function() {
    document.getElementById("carouselImage").style.opacity = 0;
    setTimeout(function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        document.getElementById("carouselImage").src = images[currentIndex];
        document.getElementById("carouselImage").style.opacity = 1; 
    }, 500); 
});

document.getElementById("nextButton").addEventListener("click", function() {
    document.getElementById("carouselImage").style.opacity = 0;
    setTimeout(function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        document.getElementById("carouselImage").src = images[currentIndex];
        document.getElementById("carouselImage").style.opacity = 1; 
    }, 200); 
});



}





window.onscroll = function() {
  scrollFunction();
};


scrollFunction();