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
    element1.classList.add("visible"); // Ajouter la classe pour faire apparaître le texte
  } else {
    element1.classList.remove("visible"); // Retirer la classe si le texte n'est pas visible
  }

  var element2 = document.getElementById("hiddenText2");
  var elementPosition2 = element2.getBoundingClientRect().top;
  
  if (elementPosition2 < windowHeight) {
    element2.classList.add("visible2"); // Ajouter la classe pour faire apparaître le texte
  } else {
    element2.classList.remove("visible2"); // Retirer la classe si le texte n'est pas visible
  }

  var element3 = document.getElementById("hiddenText3");
  var elementPosition3 = element3.getBoundingClientRect().top;
  
  if (elementPosition3 < windowHeight) {
    element3.classList.add("visible3"); // Ajouter la classe pour faire apparaître le texte
  } else {
    element3.classList.remove("visible3"); // Retirer la classe si le texte n'est pas visible
  }

  var element4 = document.getElementById("hiddenText4");
  var elementPosition4 = element4.getBoundingClientRect().top;
  if (elementPosition4 < windowHeight) {
    element4.classList.add("visible4"); // Ajouter la classe pour faire apparaître le texte
  } else {
    element4.classList.remove("visible4"); // Retirer la classe si le texte n'est pas visible
  }

  
  var images = ["Cyberpunk.jpg", "Japon.jpg", "Viking.jpg", "Pirate.jpg"];
  var currentIndex = 0;

  document.getElementById("prevButton").addEventListener("click", function() {
    document.getElementById("carouselImage").style.opacity = 0; /* Rend l'image transparente avant le changement */
    setTimeout(function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        document.getElementById("carouselImage").src = images[currentIndex];
        document.getElementById("carouselImage").style.opacity = 1; /* Rend l'image visible après le changement */
    }, 500); /* Attend 200 millisecondes avant de changer l'image et de rendre l'image visible */
});

document.getElementById("nextButton").addEventListener("click", function() {
    document.getElementById("carouselImage").style.opacity = 0; /* Rend l'image transparente avant le changement */
    setTimeout(function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        document.getElementById("carouselImage").src = images[currentIndex];
        document.getElementById("carouselImage").style.opacity = 1; /* Rend l'image visible après le changement */
    }, 200); /* Attend 200 millisecondes avant de changer l'image et de rendre l'image visible */
});



}




// Événement de défilement
window.onscroll = function() {
  scrollFunction();
};

// Call the function once to check if the element is visible on page load
scrollFunction();
