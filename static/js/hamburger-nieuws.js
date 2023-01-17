//nieuws//
const hamburgerButtonNieuws = document.getElementById('hamburger-nieuws');
let hamburgerButtonCloseNieuws = document.getElementById('hamburger-close-nieuws');

document.getElementById('hamburger-content-nieuws').style.display = "none";

hamburgerButtonCloseNieuws.addEventListener('click', () => {
    document.getElementById('hamburger-content-nieuws').style.display = "none";              
});   

hamburgerButtonNieuws.addEventListener('click', () => {
    document.getElementById('hamburger-content-nieuws').style.display = "block";
}); 
