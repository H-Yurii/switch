/* ----- 1. Beispiel ----- */

let cars
let brand = 'BWM'
switch (brand) {
    case 'Audi':
        console.log('It is not my car')
        break;
    case 'Mercedes-Benz':
        console.log('It is not my car')
        break;
    case 'BWM':
        console.log('It is my car')
        break;
    default:
        console.log('There isnt any car')
}

/* ----- 2. Beispiel ----- */

let a = 10;
if (true) {
    console.log(a + ' - it is a block scope')
}
console.log(a + ' - it is a global scope')

/* ----- 1. Aufgabe ----- */

/* let input = document.querySelector('.input')
let button = document.querySelector('.button')

button.addEventListener('click', function () {
    let inputValue = input.value
    if (inputValue > 55 && inputValue < 99) {
        console.log('Число потрапляє в діапазон')
    }
    else {
        console.log('Число не потрапляє в діапазон')
    }
}) */

/* ----- 2. Aufgabe ----- */

/* if(browser == 'Edge') {
console.log("You've got the Edge!");
} else if (
    browser == 'Chrome'
|| browser == 'Firefox'
|| browser == 'Safari'
|| browser == 'Opera') {
console.log('Ми підтримуємо і ці браузери');
} else {
console.log('Маємо надію, що ця сторінка виглядає добре!');
}


switch (browser) {
    case 'Edge':
        console.log("You've got the Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log('Ми підтримуємо і ці браузери');
        break;
    default:
        console.log('Маємо надію, що ця сторінка виглядає добре!');
} */

/* ----- 3. Aufgabe ----- */

let Max = 55
let group

switch (true) {
    case (Max <= 16):
        group = 'child';
        console.log(group);
        break;
    case (Max >= 17 && Max <= 60):
        group = 'adult';
        console.log(group);
        break;
    case (Max >= 61 && Max <= 100):
        group = 'pensioner';
        console.log(group);
        break;
    default:
        group = 'something else'
        console.log(group);
}

/* ---- 4. Aufgabe ----- */

/* let fr = 'Janvier'
let sp = 'Enero'
let ua = 'Sichenj'
let en = 'January'

let choose = prompt('Write down a language')

switch (choose) {
    case (choose = 'French'):
        console.log(fr)
        break;
    case (choose = 'Spanish'):
        console.log(sp)
        break;
    case (choose = 'Ukrainian'):
        console.log(ua)
        break;
        case (choose = 'English'):
        console.log(en)
        break;
} */

/* ----- 5. Aufgabe ----- */


/* if (a === 0) {
p.textContent = 0;
}
if (a === 1) {
p.textContent = 1;
}


if (a === 2 || a === 3) {
p.textContent = '2,3';
} */

let secondInput = document.querySelector('.second__input')
let secondButton = document.querySelector('.second__button')

secondButton.addEventListener('click', function () {
    let aValue = secondInput.value
    switch (aValue) {
    case (aValue = '0'):
        console.log(0)
        break;
    case (aValue = '1'):
        console.log(1)
        break;
    case (aValue = '2'):
    case (aValue = '3'):
        console.log(2 + ',' + 3)
        break;
    }
})

/* ----- 27.04.2024 ----- */

/* ----- 1. Aufgabe ----- */

/* let fullname = prompt("Write down your full name")
if (fullname.length <= 10) {
    console.log(fullname.length)
}
else {
    console.log('Error')
} */

/* ----- 2. Aufgabe ----- */

let random = Number.parseInt(Math.random() * (5 - 1) + 1)

if (random === 1) {
    console.log(1)
} else if (random === 2) {
    console.log(2)
}   else if (random === 3) {
    console.log(3)
}   else if (random === 4) {
    console.log(4)
}
else {
    console.log(5)
}

/* ----- 3. Aufgabe ----- */

let button = document.getElementById('deliveryOption');
let message

button.addEventListener('change', function () {
    let option = parseInt(button.value)

    switch (option) {
        case 1:
            message = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
            console.log(message);
            break;
        case 2:
            message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
            console.log(message);
            break;
        case 3:
            message = "Посилка буде відправлена сьогодні";
            console.log(message);
            break;
        default:
            message = "Вам передзвонит менеджер";
            console.log(message);
    }
})

/* ----- 1. Aufgabe ----- */

let buttonDrinks = document.getElementById('drinks')
let cafe = document.querySelector('.cafe')
let tea = document.querySelector('.tea')
let juice = document.querySelector('.juice')

buttonDrinks.addEventListener('change', function () {
    let drinksOption = parseInt(buttonDrinks.value)

    switch (drinksOption) {
        case 1:
            cafe.classList.add('change')
            tea.classList.remove('change')
            juice.classList.remove('change')
            break;
        case 2:
            tea.classList.add('change')
            cafe.classList.remove('change')
            juice.classList.remove('change')
            break;
        case 3:
            juice.classList.add('change')
            cafe.classList.remove('change')
            tea.classList.remove('change')
            break;
    }
})

/* ----- 2. Aufgabe ----- */

let input = document.querySelector('.days__input')
let daysButton = document.querySelector('.days__button')

daysButton.addEventListener('click', function () {
    let inputValue = input.value

    switch (inputValue) {
        case (inputValue = 'monday'):
            console.log('It is monday')
            break;
        case (inputValue = 'tuesday'):
            alert('It is tuesday')
            break;
        case (inputValue = 'wednesday'):
            alert('It is wednesday')
            break;
        case (inputValue = 'thursday'):
            alert('It is thursday')
            break;
        case (inputValue = 'friday'):
            alert('It is friday')
            break;
        case (inputValue = 'saturday'):
            alert('It is saturday')
            break;
        case (inputValue = 'sunday'):
            alert('It is sunday')
            break;
        default:
            alert('Write a day of the week!')
    }
})

/* ----- 3. Aufgabe ----- */

let dateInput = document.querySelector('.date__input')
let dateButton = document.querySelector('.date__button')

dateButton.addEventListener('click', function () {
    let dateInputValue = dateInput.value

    switch (dateInputValue) {
        case (dateInputValue = '1'):
            console.log('It is winter')
            break;
        case (dateInputValue = '2'):
            console.log('It is winter')
            break;
        case (dateInputValue = '3'):
            console.log('It is spring')
            break;
        case (dateInputValue = '4'):
            console.log('It is spring')
            break;
        case (dateInputValue = '5'):
            console.log('It is spring')
            break;
        case (dateInputValue = '6'):
            console.log('It is summer')
            break;
        case (dateInputValue = '7'):
            console.log('It is summer')
            break;
        case (dateInputValue = '8'):
            console.log('It is summer')
            break;
        case (dateInputValue = '9'):
            console.log('It is autumn')
            break;
        case (dateInputValue = '10'):
            console.log('It is autumn')
            break;
        case (dateInputValue = '11'):
            console.log('It is autumn ')
            break;
        case (dateInputValue = '12'):
            console.log('It is winter')
            break;
        default:
            console.log('Write down a number of month, you Bastard!')
    }
})

/* ----- 4. Aufgabe ----- */

let monthInput = document.querySelector('.month__input')
let monthButton = document.querySelector('.month__button')

monthButton.addEventListener('click', function () {
    let monthInputValue = monthInput.value

    switch (monthInputValue) {
        case (monthInputValue = '1'):
            console.log('This month has 31 days')
            break;
        case (monthInputValue = '3'):
            console.log('This month has 31 days')
            break;
        case (monthInputValue = '5'):
            console.log('This month has 31 days')
            break;
        case (monthInputValue = '7'):
            console.log('This month has 31 days')
            break;
        case (monthInputValue = '9'):
            console.log('This month has 31 days')
            break;
        case (monthInputValue = '11'):
            console.log('This month has 31 days')
            break;
        case (monthInputValue = '2'):
            console.log('This month has 28 days')
            break;
        case (monthInputValue = '4'):
            console.log('This month has 30 days')
            break;
        case (monthInputValue = '6'):
            console.log('This month has 30 days')
            break;
        case (monthInputValue = '8'):
            console.log('This month has 30 days')
            break;
        case (monthInputValue = '10'):
            console.log('This month has 30 days')
            break;
        case (monthInputValue = '12'):
            console.log('This month has 30 days')
            break;
        default:
            console.log('Write the correct number of a month!')
    }
})

/* ----- 5. Aufgabe ----- */

let colorInput = document.querySelector('.colors__input')
let colorButton = document.querySelector('.colors__button')

colorButton.addEventListener('click', function () {
    let colorInputValue = colorInput.value

    switch (colorInputValue) {
        case (colorInputValue = 'red'):
            console.log('STOP')
            break;
        case (colorInputValue = 'green'):
            console.log('GO')
            break;
        case (colorInputValue = 'yellow'):
            console.log('WAIT')
            break;
        default:
            console.log('You must write a color!')
    }
})

/* ----- 6. Aufagbe ----- */

let numberOne = document.querySelector('.number__one')
let numberTwo = document.querySelector('.number__two')
let oparetor = document.getElementById('operator')
let numberButton = document.querySelector('.number__button')
let result

numberButton.addEventListener('click', function () {
    let numberOneV = parseInt(numberOne.value)
    let numberTwoV = parseInt(numberTwo.value)
    let oparetorV = (oparetor.value)

    switch (oparetorV) {
        case '+':
            result = numberOneV + numberTwoV
            console.log(result)
            break;
        case '-':
            result = numberOneV - numberTwoV
            console.log(result)
            break;
        case '*':
            result = numberOneV * numberTwoV
            console.log(result)
            break;
        case '/':
            if (numberTwoV === 0) {
                console.log("I can't solve it")
                return;
            }
            result = numberOneV / numberTwoV
            console.log(result)
            break;
        default: 
            console.log("I don't want to solve it!")
    }
})