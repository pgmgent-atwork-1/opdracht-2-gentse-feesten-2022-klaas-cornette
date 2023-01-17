//index//
const hamburgerButtonIndex = document.getElementById('hamburger-index');
let hamburgerButtonCloseIndex = document.getElementById('hamburger-close-index');

document.getElementById('hamburger-content-index').style.display = "none";

hamburgerButtonCloseIndex.addEventListener('click', () => {
    document.getElementById('hamburger-content-index').style.display = "none";              
});   

hamburgerButtonIndex.addEventListener('click', () => {
    document.getElementById('hamburger-content-index').style.display = "block";
}); 
