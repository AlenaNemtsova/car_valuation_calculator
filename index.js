let audiModels = ["Q2", "Q3", "Q5", "Q7", "Q8"];
let bmwModels = ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series"];

function selectMake(sender) { //sender - тот, кто отправляет действие, отправитель функции, имеет свои свойства, к которым мы можем обращаться 
    let optionsString = "";

    if(sender.options[sender.selectedIndex].value == "none") {
        optionsString += `<option>${"Модель"}</option>`;
    }

    if (sender.options[sender.selectedIndex].value == "audi") {
        for(let model of audiModels)
        optionsString += `<option>${model}</option>`;
    }

    if (sender.options[sender.selectedIndex].value == "bmw") {
        for(let model of bmwModels)
        optionsString += `<option>${model}</option>`;
    }
    document.getElementById("models").innerHTML = optionsString;
}



function getSelectedItems() {
    let prices = document.querySelectorAll('.selectVal');

    let sum = 0;
    for(p of prices) {
        let currentPrice;

        if(p.type == "radio" || p.type == "checkbox") {
            if(p.checked) {
                currentPrice = Number(p.value);
            }
            else { 
                currentPrice = 0;
            }
        } else {
            currentPrice = Number(p.value);
        }

    sum += currentPrice;
    }

    document.getElementById('result').innerText = "Стоимость автомобиля " + sum + " у.е.";
}
