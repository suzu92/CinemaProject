let qtyInput = document.getElementsByClassName('qty-input')
for (let i = 0; i < qtyInput.length; i++) {
    let input = qtyInput[i]
    input.addEventListener('change', qtyChange)
}
function qtyChange(event) {
    let input = event.target
    if (isNaN(input.value) || input.value < 0) {
        input.value = 0
    }
}

function updateTicketTotal() {
    let ticketSection = document.getElementsByClassName('ticket')[0][1][2]
    let total = 0
    for (let i = 0; i < ticketSection.length; i++) {
        let ticketSection = ticketSection[i]
        let ticketPrice = ticketSection.getElementsByClassName('price')[0][1][2]
        let ticketQty = ticketSection.getElementsByClassName('qty-input')[0][1][2]
        let price = parseInt(ticketPrice.innerText.replace('kr', ''))
        let qty = ticketQty.value
        total += (price * qty)
    }
    document.getElementsByClassName('ticket-total')[0].innerText = total + ' kr'
}
updateTicketTotal()


function checkFreePopcorn(total) {
    if (total >= 500) {
        let freePopcorn = document.getElementById('free-Pop');
        freePopcorn.innerHTML = "You get free popcorn!"
    } else if (total === 0) {
        let freePopcorn = document.getElementById('free-Pop');
        freePopcorn.innerText = '';
        document.querySelector('.ticket').classList.remove('hidden');
    } else {
        let popcornNumber = 500 - total;
        let freePopcorn = document.getElementById('free-Pop');
        freePopcorn.innerHTML = "Get popcorn for free over 500 kr (" + popcornNumber + " kr left)";
    }
}
checkFreePopcorn()