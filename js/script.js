let elRiceForm = document.querySelector(".rice__form");
let elRiceInput = document.querySelector(".rice__input");
let elFoot = document.querySelector(".foot");
let elBicycle = document.querySelector(".bicycle");
let elCar = document.querySelector(".car");
let elPlane = document.querySelector(".plane");
// document.querySelector(".rice__item")
let speedFoot = 3.6;
let speedBicycle = 20.1;
let speedCar = 70;
let speedPlane = 800;

const time = function(date) {
    date = date * 60;
    let hour = parseInt(date / 60);
    if (hour == 0) {
        hour = "";
    } else {
        hour = hour + " soat"
    }

    let minut = (date % 60).toFixed(0);
    if (minut == 0) {
        minut = "";
    } else {
        minut = minut + " daqiqa"
    }

    return `${hour} ${minut}`;

}

elRiceForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    let inputValue = elRiceInput.value;

    elFoot.textContent = time(inputValue / speedFoot);
    elBicycle.textContent = time(inputValue / speedBicycle);
    elCar.textContent = time(inputValue / speedCar);
    elPlane.textContent = time(inputValue / speedPlane);

    // time(elFoot.textContent, elBicycle.textContent)

} );