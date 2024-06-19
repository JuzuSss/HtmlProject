

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

  


}





window.onscroll = function() {
  scrollFunction();
};


scrollFunction();