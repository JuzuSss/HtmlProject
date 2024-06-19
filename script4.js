<<<<<<< HEAD
function scrollFunction() {
    var windowHeight = window.innerHeight;

    for (var i = 0; i <= 9; i++) {
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
=======
function scrollFunction() {
    var windowHeight = window.innerHeight;

    for (var i = 0; i <= 9; i++) {
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
>>>>>>> d5dd62110e4b246918ef641173366a38b858c81d
