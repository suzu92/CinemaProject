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