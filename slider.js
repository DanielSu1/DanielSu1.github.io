const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const bntLeft = document.querySelector("#btn-left");
const btnRigth = document.querySelector("#btn-rigth");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moverD(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.getElementsByClassName.marginLeft = "-300%";
    slider.getElementsByClassName.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition ="none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.getElementsByClassName.marginLeft = "-100%";
    }, 500);
}
btnRigth.addEventListener('click', function(){
    moverD();
});

setInterval(function(){
    moverD();
},5000);