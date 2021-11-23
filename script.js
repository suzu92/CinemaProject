/*let qtyInput = document.getElementsByClassName('qty-input')
for (let i = 0; i < qtyInput.length; i++) {
    let input = qtyInput[i]
    input.addEventListener('change', qtyChange)
}

function qtyChange(event) {
    let input = event.target
    if (isNaN(input.value) || input.value < 0) {
        input.value = 0
    }
}*/

let minusButton = document.getElementsByClassName('minus')
let plusButton = document.getElementsByClassName('plus')
for (let i = 0; i < minusButton.length; i++) {
    let button = minusButton[i]
    button.addEventListener('click',function (event){
        let buttonClicked = event.target
        let input = buttonClicked.parentElement.children[1]
        let inputValue = input.value
        let newValue = parseInt(inputValue) - 1
        if (newValue >= 0) {
            input.value = newValue
        }
        else {
            input.value = 0
        }
        getTotalCount()
    })
}
for (let i = 0; i < plusButton.length; i++) {
    let button = plusButton[i]
    button.addEventListener('click',function (event){
        let buttonClicked = event.target
        let input = buttonClicked.parentElement.children[1]
        let inputValue = input.value
        input.value = parseInt(inputValue) + 1

        getTotalCount()
    })
}

function getTotalCount() {
    let arr = document.querySelectorAll('.qty-input')
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i].value)) {
            total += parseInt(arr[i].value)
        }
    }
    document.getElementById('ticketAmount').value = total
}






/*function updateTicketTotal() {
    let ticketSection = document.getElementsByClassName('ticket')[0]
    let total = 0
    for (let i = 0; i < ticketSection.length; i++) {
        let ticketSection = ticketSection[i]
        let ticketPrice = ticketSection[i].getElementsByClassName('price')[0]
        let ticketQty = ticketSection[i].getElementsByClassName('qty-input')[0]
        let price = parseInt(ticketPrice.innerText.replace('kr', ''))
        let qty = ticketQty.innerText
        total += (price * qty)
    }
    document.getElementsByClassName('ticket-total')[0].innerText = total + ' kr'
}

updateTicketTotal()*/


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

checkFreePopcorn()