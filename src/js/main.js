"use strict";
//====================== Nav-->
(function nav_controlls() {
    let nav_shower = document.querySelector(".nav_shower");
    let navbar_collapse = document.querySelector(".navbar-collapse");
    nav_shower?.addEventListener("click", () => {
        navbar_collapse?.classList.toggle("show");
    });
})();
//====================== Nav-->
//====================== Slider -->
function lines_controlls(index) {
    let scroll_conrolls = document.querySelectorAll(".scroll-conrolls .liner");
    let scroller = document.querySelectorAll(".scroller .img");
    scroll_conrolls.forEach((s) => {
        s.classList.remove("active-img-line");
    });
    scroll_conrolls[index].classList.add("active-img-line");
    scroll_conrolls.forEach((ele) => {
        ele.addEventListener("click", (ele) => {
            let index_of = Array.from(scroll_conrolls).indexOf(ele.target);
            scroll_conrolls.forEach((s) => {
                s.classList.remove("active-img-line");
            });
            scroller.forEach((s) => {
                s.classList.remove("active-img");
            });
            ele.target.classList.contains("active-img-line")
                ? ele.target.classList.remove("active-img-line")
                : ele.target.classList.add("active-img-line");
            scroller[index_of].classList.add("active-img");
        });
    });
}
lines_controlls(1);
function slider_controlls() {
    let scroller = document.querySelectorAll(".scroller .img");
    scroller.forEach((e) => {
        e.addEventListener("click", (ele) => {
            scroller.forEach((s) => {
                s.classList.remove("active-img");
            });
            ele.target.classList.contains("active-img")
                ? ele.target.classList.remove("active-img")
                : ele.target.classList.add("active-img");
            lines_controlls(Array.from(scroller).indexOf(ele.target));
        });
    });
}
slider_controlls();
//====================== Slider -->
window.addEventListener("load", () => {
    let load_animater = document.querySelector(".load-animater");
    let body = document.querySelector("body");
    let html = document.querySelector("html");
    setTimeout(() => {
        body.style.overflowY = 'auto';
        html.style.overflowY = 'auto';
        load_animater.style.display = "none";
    }, 4000);
});
window.addEventListener("scroll", () => {
    let nav = document.querySelector("#nav");
    nav.classList.toggle("active-nav", window.scrollY > 20);
    nav.classList.toggle("container", window.scrollY < 20);
});
//------------------ Set || Variables || Start --------------->
let type = document.querySelector(".type");
let index = 0;
let start = 0;
let data = ["Abdalrahman Eldip", "Front End Developer", "And Ui/Ux", "Disgner"];
let word = "";
let letter = "";
//------------------ Set || Variables || End --------------->
//------------------ Typing || Function || Start --------------->
setTimeout(() => {
    typingFun();
}, 4500);
function typingFun() {
    type.classList.add("active_after_type");
    word = data[index];
    letter = word.slice(0, start++);
    if (index == data.length - 1) {
        index = 0;
    }
    if (word.length == letter.length) {
        start = 0;
        index++;
    }
    type.innerHTML = letter;
    setTimeout(typingFun, 230);
}
//------------------ Typing || Function || End --------------->
