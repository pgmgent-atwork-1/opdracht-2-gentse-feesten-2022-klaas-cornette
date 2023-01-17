//search//
const hamburgerButtonSearch = document.getElementById('hamburger-search');
let hamburgerButtonCloseSearch = document.getElementById('hamburger-close-search');

document.getElementById('hamburger-content-search').style.display = "none";

hamburgerButtonCloseSearch.addEventListener('click', () => {
    document.getElementById('hamburger-content-search').style.display = "none";              
});   

hamburgerButtonSearch.addEventListener('click', () => {
    document.getElementById('hamburger-content-search').style.display = "block";
}); 