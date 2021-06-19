const toggleButton= document.getElementById('toggle__button');
const navbarLinks= document.getElementById('navbar__links');

/* toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active') */
    toggleButton.addEventListener('click', function () {     
        navbarLinks.classList.toggle('active');
})


/* window.onscroll = function() {myFunction()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
 */