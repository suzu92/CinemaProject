//biljettkostnader
let priceOrdinary = 129
let pricePensioner = 99
let priceChildren = 99

let amountOrdinary = 0
let amountPensioner = 0
let amountChildren = 0

//minus och plus knappar
let minusButton = document.getElementsByClassName('minus')
let plusButton = document.getElementsByClassName('plus')
for (let i = 0; i < minusButton.length; i++) {
    let button = minusButton[i]
    button.addEventListener('click', function (event) {
        let buttonClicked = event.target
        let input = buttonClicked.parentElement.children[1]
        let inputValue = input.value
        let newValue = parseInt(inputValue) - 1
        let getID = input.id
        if (newValue >= 0) {
            input.value = newValue
            if (getID === 'q0' && newValue >= 0) {
                amountOrdinary = newValue
            } else if (getID === 'q1' && newValue >= 0) {
                amountPensioner = newValue
            } else if (getID === 'q2' && newValue >= 0) {
                amountChildren = newValue
            }
        } else {
            input.value = 0
            if (getID === 'q0') {
                amountOrdinary = 0
            } else if (getID === 'q1') {
                amountPensioner = 0
            } else if (getID === 'q2') {
                amountChildren = 0
            }
        }
        getTotalCount()
        totalAmount()
    })
}
for (let i = 0; i < plusButton.length; i++) {
    let button = plusButton[i]
    button.addEventListener('click', function (event) {
        let buttonClicked = event.target
        let input = buttonClicked.parentElement.children[1]
        let inputValue = input.value
        let getID = input.id
        input.value = parseInt(inputValue) + 1

        if (getID === 'q0') {
            amountOrdinary = parseInt(inputValue) + 1
        } else if (getID === 'q1') {
            amountPensioner = parseInt(inputValue) + 1
        } else if (getID === 'q2') {
            amountChildren = parseInt(inputValue) + 1
        }

        getTotalCount()
        totalAmount()
    })
}

//totalt antal biljetter samt totalsumman för varje kategori
function getTotalCount() {
    let tickets = document.querySelectorAll('.qty-input')
    let total = 0
    for (let i = 0; i < tickets.length; i++) {
        if (parseInt(tickets[i].value)) {
            total += parseInt(tickets[i].value)
        }
    }
    document.getElementById('ticketAmount').value = total
    document.getElementById('ticketAmountOrdinary').value = priceOrdinary * amountOrdinary
    document.getElementById('ticketAmountPensioner').value = pricePensioner * amountPensioner
    document.getElementById('ticketAmountChildren').value = priceChildren * amountChildren
}
//totalen av alla biljettpriser
function totalAmount() {
    let grandTotal = (amountChildren * priceChildren) + (amountOrdinary * priceOrdinary) + (amountPensioner * pricePensioner)

    document.getElementById('grandTotal').textContent = grandTotal
    checkFreePopcorn(grandTotal)
}

//popcorn över 500 kr
function checkFreePopcorn(total) {
    if (total >= 500) {
        let freePopcorn = document.getElementById('free-Pop');
        freePopcorn.innerHTML = "You get free popcorn!"
    } else if (total === 0) {
        let freePopcorn = document.getElementById('free-Pop');
        freePopcorn.innerText = '';
        document.querySelector('.ticket-types').classList.remove('hidden');
    } else {
        let popcornNumber = 500 - total;
        let freePopcorn = document.getElementById('free-Pop');
        freePopcorn.innerHTML = "Get popcorn for free over 500 kr (" + popcornNumber + " kr left)";
    }
}

//order button
document.querySelector('.order-btn').addEventListener('click', checkoutMessage);

function checkoutMessage() {
    let totalOrder = document.getElementById('ticketAmount').value;
    if (totalOrder <= 0) {
        alert('You have no ordered tickets yet');
    } else {
        alert('Thank you for your order! Hope you enjoy the movie!');
    }
}