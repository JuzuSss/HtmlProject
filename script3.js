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
