function scrollFunction() {
    var windowHeight = window.innerHeight;

    var elementTitre2 = document.getElementById("hiddenTexttitre2");
    var elementPositionTitre2 = elementTitre2.getBoundingClientRect().top;
    if (elementPositionTitre2 < windowHeight) {
      elementTitre2.classList.add("visibletitre2");
    } else {
      elementTitre2.classList.remove("visibletitre2");
    }


    var elementHtml = document.getElementById("hiddenTexthtml");
    var elementPositionHtml = elementHtml.getBoundingClientRect().top;
    if (elementPositionHtml < windowHeight) {
      elementHtml.classList.add("visiblehtml");
    } else {
      elementHtml.classList.remove("visiblehtml");
    }


    var elementSite1 = document.getElementById("hiddenTextsite1");
    var elementPositionSite1 = elementSite1.getBoundingClientRect().top;
    if (elementPositionSite1 < windowHeight) {
      elementSite1.classList.add("visiblesite1");
    } else {
      elementSite1.classList.remove("visiblesite1");
    }

    var elementSite2 = document.getElementById("hiddenTextsite2");
    var elementPositionSite2 = elementSite2.getBoundingClientRect().top;
    if (elementPositionSite2 < windowHeight) {
      elementSite2.classList.add("visiblesite2");
    } else {
      elementSite2.classList.remove("visiblesite2");
    }

    var elementSite3 = document.getElementById("hiddenTextsite3");
    var elementPositionSite3 = elementSite3.getBoundingClientRect().top;
    if (elementPositionSite3 < windowHeight) {
      elementSite3.classList.add("visiblesite3");
    } else {
      elementSite3.classList.remove("visiblesite3");
    }


    for (var i = 1; i <= 9; i++) {
        var elementLink = document.getElementById("hiddenTextlink" + i);
        var elementPositionLink = elementLink.getBoundingClientRect().top;

        if (elementPositionLink < windowHeight) {
            elementLink.classList.add("visiblesitelink" + i); 
        } else {
            elementLink.classList.remove("visiblesitelink" + i); 
        }
    }
}


window.onscroll = function() {
  scrollFunction();
};


scrollFunction();
