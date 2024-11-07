

// load-components.js

function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        });
}

// Carrega o cabeçalho e rodapé em cada página
window.addEventListener("DOMContentLoaded", function() {
    loadComponent("header", "components/header.html");
    loadComponent("footer", "components/footer.html");
});




function redirectToSearchPage(event) {
    event.preventDefault(); // Impede que o campo de entrada seja focado
    window.location.href = '/inicio/emdesenvolvimento.html'; // Redireciona para a nova página
  }


// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}



    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
    
  var close = document.getElementsByClassName("closebtn");
  var i;
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
      var div = this.parentElement;
      div.style.opacity = "0";
      setTimeout(function(){ div.style.display = "none"; }, 600);
    }
  }
  