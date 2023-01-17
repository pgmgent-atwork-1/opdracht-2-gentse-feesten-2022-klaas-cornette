//dag-hamburger//
const hamburgerButtonDag = document.getElementById('hamburger-dag');
let hamburgerButtonCloseDag = document.getElementById('hamburger-close-dag');

document.getElementById('hamburger-content-dag').style.display = "none";

hamburgerButtonCloseDag.addEventListener('click', () => {
    document.getElementById('hamburger-content-dag').style.display = "none";              
});   

hamburgerButtonDag.addEventListener('click', () => {
    document.getElementById('hamburger-content-dag').style.display = "block";
});
//dag-wijzig//
const wijzigDag = document.getElementById('wijzigDag');
let wijzigDagClose = document.getElementById('wijzigDag-close');

document.getElementById('hamburger-wijzig-dag').style.display = "none";

wijzigDagClose.addEventListener('click', () => {
    document.getElementById('hamburger-wijzig-dag').style.display = "none";              
});   

wijzigDag.addEventListener('click', () => {
    document.getElementById('hamburger-wijzig-dag').style.display = "block";
});