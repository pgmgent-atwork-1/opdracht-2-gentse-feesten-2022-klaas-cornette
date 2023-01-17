//detail//
const hamburgerButtonDetail = document.getElementById('hamburger-detail');
let hamburgerButtonCloseDetail = document.getElementById('hamburger-close-detail');

document.getElementById('hamburger-content-detail').style.display = "none";

hamburgerButtonCloseDetail.addEventListener('click', () => {
    document.getElementById('hamburger-content-detail').style.display = "none";              
});   

hamburgerButtonDetail.addEventListener('click', () => {
    document.getElementById('hamburger-content-detail').style.display = "block";
}); 
