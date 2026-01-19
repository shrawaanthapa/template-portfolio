// toggle icon and menu
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
// toggle menu
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}
// close menu when click on link
window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}
