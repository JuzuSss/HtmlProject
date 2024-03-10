// Fonction pour détecter le niveau de défilement
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
}

// Événement de défilement
window.onscroll = function() {
  scrollFunction();
};

// Call the function once to check if the element is visible on page load
scrollFunction();
