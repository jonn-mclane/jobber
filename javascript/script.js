const jobberButton = document.getElementById("jobber");
const chatsButton = document.getElementById("chats");
const eventosButton = document.getElementById("eventos");
const mainButton = document.getElementById("main");
const options = document.getElementById("options");
const optionsBanner = document.getElementById("options_banner")
const optionsButton = document.querySelector(".button_nav.config");

var info = document.getElementById("info");
var infoButton = document.getElementById("info_button");

function clearButtons() {
    if(mainButton.classList.contains("active_button")) {
        mainButton.classList.remove("active_button");
    }
    if(jobberButton.classList.contains("active_button")) {
        jobberButton.classList.remove("active_button");
    }
    if(chatsButton.classList.contains("active_button")) {
        chatsButton.classList.remove("active_button");
    }
    if(eventosButton.classList.contains("active_button")) {
        eventosButton.classList.remove("active_button");
    }
}

function addColorButtons() {
    if(window.location.pathname == '/main.html') {
        mainButton.classList.add("active_button");
    }
    if (window.location.pathname == '/jobber.html') {
        jobberButton.classList.add("active_button");
    }
    if (window.location.pathname == '/chats.html') {
        chatsButton.classList.add("active_button");
    }
    if (window.location.pathname == '/eventos.html') {
        eventosButton.classList.add("active_button");
    }
    if(window.location.pathname == '/Challenge/main.html') {
        mainButton.classList.add("active_button");
    }
    if(window.location.pathname == '/Challenge/jobber.html') {
        jobberButton.classList.add("active_button");
    }
    if (window.location.pathname == '/Challenge/chats.html') {
        chatsButton.classList.add("active_button");
    }
    if (window.location.pathname == '/Challenge/eventos.html') {
        eventosButton.classList.add("active_button");
    }
}

function buttonFooter() {
    clearButtons();
    addColorButtons();
}

buttonFooter();

function openCloseInfo() {
    if (info.classList.contains("closed")) {
        info.classList.remove("closed");
        infoButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }
    else {
        info.classList.add("closed");
        infoButton.innerHTML = '<i class="fa-solid fa-info"></i>'
    }
}

optionsButton.addEventListener("click", openCloseOptions);
optionsBanner.addEventListener("click", openCloseOptions);

function openCloseOptions() {
    console.log("working");
    if (options.classList.contains("closed")) {
        options.classList.remove("closed");
        optionsBanner.classList.remove("closed");
        optionsButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }
    else {
        options.classList.add("closed");
        optionsBanner.classList.add("closed");
        optionsButton.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>'
    }
};

// window.onload(){
//     if (options.classList.contains("closed")) {
//         options.classList.remove("closed");
//         optionsBanner.classList.remove("closed");
//         optionsButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
//     }
// }