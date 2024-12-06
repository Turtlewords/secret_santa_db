// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

// const appSettings = {
//     databaseURL: "https://secret-santa-ef5e1-default-rtdb.firebaseio.com/"
// }

// const app = initializeApp(appSettings)

// console.log(app)

const output = document.getElementById("output");
const submitBtn = document.getElementById("submit-btn");
const dropDown = document.getElementById("name");

submitBtn.addEventListener("click", santaTime)

function santaTime() {
    if (dropDown.options[dropDown.selectedIndex].value == "chikuK") {
        output.classList.add("output-animation");
        output.innerHTML = "&nbsp;Obed!"
        setTimeout(() => {
            output.classList.remove("output-animation")}, 3000);
    } 
    if (dropDown.options[dropDown.selectedIndex].value == "teddy") {
        output.classList.add("output-animation");
        output.innerHTML = "&nbsp;Phonso!"
        setTimeout(() => {
            output.classList.remove("output-animation")}, 3000);
    } 
    if (dropDown.options[dropDown.selectedIndex].value == "kiyo") {
        output.classList.add("output-animation");
        output.innerHTML = "&nbsp;Jayla!"
        setTimeout(() => {
            output.classList.remove("output-animation")}, 3000);
    } 
    if (dropDown.options[dropDown.selectedIndex].value == "obed") {
        output.classList.add("output-animation");
        output.innerHTML = "&nbsp;Chiku M!"
        setTimeout(() => {
            output.classList.remove("output-animation")}, 3000);
    } 
    if (dropDown.options[dropDown.selectedIndex].value == "chikuM") {
        output.classList.add("output-animation");
        output.innerHTML = "&nbsp;Chiku K!"
        setTimeout(() => {
            output.classList.remove("output-animation")}, 3000);
    } 
    if (dropDown.options[dropDown.selectedIndex].value == "jayla") {
        output.classList.add("output-animation");
        output.innerHTML = "&nbsp;Jochebed!"
        setTimeout(() => {
            output.classList.remove("output-animation")}, 3000);
    } 
    if (dropDown.options[dropDown.selectedIndex].value == "jayden") {
        output.classList.add("output-animation");
        output.innerHTML = "&nbsp;Wambui!"
        setTimeout(() => {
            output.classList.remove("output-animation")}, 3000);
    } 
    if (dropDown.options[dropDown.selectedIndex].value == "phonso") {
        output.classList.add("output-animation");
        output.innerHTML = "&nbsp;Kiyo!"
        setTimeout(() => {
            output.classList.remove("output-animation")}, 3000);
    } 
    if (dropDown.options[dropDown.selectedIndex].value == "jochebed") {
        output.classList.add("output-animation");
        output.innerHTML = "&nbsp;Jayden!"
        setTimeout(() => {
            output.classList.remove("output-animation")}, 3000);
    } 
    if (dropDown.options[dropDown.selectedIndex].value == "wambui") {
        output.classList.add("output-animation");
        output.innerHTML = "&nbsp;Teddy!"
        setTimeout(() => {
            output.classList.remove("output-animation")}, 3000);
    } 


}