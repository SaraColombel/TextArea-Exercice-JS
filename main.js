//? Variables TextArea
let here = document.querySelector(".here");
let textarea = document.querySelector("textarea");

//! Function TextArea
textarea.addEventListener('keyup', function(eventClavier){
    here.innerText = textarea.value; });

// Style TextArea
textarea.style.width = "400px";
textarea.style.marginLeft = "5px";
textarea.style.marginTop = "10px";
document.querySelector("#here").style.marginTop = "20px";
document.querySelector("#writeHere").style.marginTop = "20px";

//___________________________________________________________________//

//? Variable Button Delete
let button = document.querySelectorAll("button");

//! Fonction Button Delete
button[0].addEventListener('click', () =>{
    here.innerText = ""; });

// Style Button Delete
button[0].style.marginLeft = "5px";
button[0].style.marginBottom = "15px";
button[0].style.width = "90px";
button[0].style.borderRadius = "3px";

//___________________________________________________________________//

//! Fonction Button Send
button[1].addEventListener('click', () =>{
    alert("Votre commentaire n'était pas intéressant, on ne l'a pas posté. Bonne journée !"); });

// Style Button Send
button[1].style.marginLeft = "5px";
button[1].style.marginBottom = "15px";
button[1].style.width = "90px";
button[1].style.borderRadius = "3px";






