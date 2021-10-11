
const schemeSvg = document.querySelector('.scheme-svg'); //вся схема svg

const totalPriceTag = document.querySelector('.span-total');

const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');

let cost = 800; // цена билета 800
let totalPrice = 0; //сначала 0

schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains("booked")){
        event.target.classList.toggle("active");

        let totalSeats = schemeSvg.querySelectorAll(".active").length;

        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;


    };
});

menuButton.addEventListener('click', ()=>{
    console.log('Click on menu');
    menu.classList.toggle("is-open");
});