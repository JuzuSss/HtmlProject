function scrollFunction() {

    var windowHeight = window.innerHeight;
    var elementresume = document.getElementById("hiddenText");
    var elementPositionresume = elementresume.getBoundingClientRect().top;
    if (elementPositionresume < windowHeight) {
      elementresume.classList.add("visible");
    } else {
      elementresume.classList.remove("visible");
    }


    for (var i = 0; i <= 22; i++) {
        var elementLink = document.getElementById("hiddenText" + i);
        var elementPositionLink = elementLink.getBoundingClientRect().top;
    
        if (elementPositionLink < windowHeight) {
            elementLink.classList.add("visible" + i); 
         } else {
                elementLink.classList.remove("visible" + i); 
        }
    }
    

    

}


window.onscroll = function() {
  scrollFunction();
};


scrollFunction();
