/* let prevScrollpos = window.pageYOffset;
console.log('prevScrollpos ' + prevScrollpos);
window.onscroll = slideDown;
function slideDown() {
 // Votre code ici
    let currentScrollPos = window.pageYOffset;
    console.log('currentScrollPos ' + currentScrollPos);
    if(prevScrollpos > currentScrollPos){
        document.getElementById('navbar').style.top ='-56px';
    } else{
        document.getElementById('navbar').style.top ='0';
    }
    prevScrollpos < currentScrollPos;
} */

window.onscroll = function (){
    if(window.scrollY > 0) {
        document.getElementById('navbar').style.top = "0";     
    } else {
        document.getElementById('navbar').style.top ="-56px";
    }
};

const toggleButton= document.getElementById('toggle__button');
const navbarLinks= document.getElementById('navbar__links');

/* toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active') */
    toggleButton.addEventListener('click', function () {     
        navbarLinks.classList.toggle('active');
})

