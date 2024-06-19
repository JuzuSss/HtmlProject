<<<<<<< HEAD
function scrollFunction() {
    var windowHeight = window.innerHeight;

    var elementresume = document.getElementById("hiddenTextresume");
    var elementPositionresume = elementresume.getBoundingClientRect().top;
    if (elementPositionresume < windowHeight) {
      elementresume.classList.add("visibleresume");
    } else {
      elementresume.classList.remove("visibleresume");
    }

}


window.onscroll = function() {
  scrollFunction();
};


scrollFunction();
=======
function scrollFunction() {
    var windowHeight = window.innerHeight;

    var elementresume = document.getElementById("hiddenTextresume");
    var elementPositionresume = elementresume.getBoundingClientRect().top;
    if (elementPositionresume < windowHeight) {
      elementresume.classList.add("visibleresume");
    } else {
      elementresume.classList.remove("visibleresume");
    }

}


window.onscroll = function() {
  scrollFunction();
};


scrollFunction();
>>>>>>> d5dd62110e4b246918ef641173366a38b858c81d
