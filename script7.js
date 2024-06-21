function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '10px';
    }
  }
  



  
function scrollFunction() {

    var windowHeight = window.innerHeight;
    
    for (var i = 1; i <= 43; i++) {
      if (i == 8 || i == 34 || i == 35 || i == 36 || i == 37 || i == 38){
          continue
      }
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