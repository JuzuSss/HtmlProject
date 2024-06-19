function scrollFunction() {
    var windowHeight = window.innerHeight;



    for (var i = 1; i <= 1; i++) {
        var elementLink = document.getElementById("hiddenText" + i);
        var elementPositionLink = elementLink.getBoundingClientRect().top;
    
        if (elementPositionLink < windowHeight) {
            elementLink.classList.add("visible" + i); 
         } else {
                elementLink.classList.remove("visible" + i); 
        }
    }
    
    for (var i = 3; i <= 4; i++) {
        var elementLink = document.getElementById("hiddenText" + i);
        var elementPositionLink = elementLink.getBoundingClientRect().top;
    
        if (elementPositionLink < windowHeight) {
            elementLink.classList.add("visible" + i); 
         } else {
                elementLink.classList.remove("visible" + i); 
        }
    }
    
    for (var i = 22; i <= 22; i++) {
        var elementLink = document.getElementById("hiddenText" + i);
        var elementPositionLink = elementLink.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
    
        if (elementPositionLink < windowHeight) {
            elementLink.classList.add("visible" + i); 
        } else {
            elementLink.classList.remove("visible" + i); 
        }
    }
    
    


     var images = ["Cyberpunk.jpg", "Japon.png", "Viking.jpg", "Pirate.jpg", "egypte.png"];
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
