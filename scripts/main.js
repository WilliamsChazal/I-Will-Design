//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.addEventListener('scroll', function(){
  let  a = document.documentElement.scrollTop; // Permet de voir le nombre de pixels qui ont défilé // 
  console.log("a="+ a); // combien on descend //
  let b = document.documentElement.scrollHeight;
  console.log("b="+ b); // la hauteur total qui nous reste à scroller //
  let c = document.documentElement.clientHeight;
  console.log("c="+c);
  let d = (b-c); // 
  console.log("d="+d);
  let e =(a/d)*100;
  console.log(e)

  document.getElementById("progress-bar").style.width=e+"%";
});




