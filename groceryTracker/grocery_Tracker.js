let firstAmount;
let secondAmount;
let thirdAmount;

function groceryTracker() {
    firstAmount = parseFloat(document.getElementById('first').value);
    secondAmount = parseFloat(document.getElementById('second').value);
    thirdAmount = parseFloat(document.getElementById('third').value);

    let total = firstAmount + secondAmount + thirdAmount;
    document.getElementById('result').innerText = `The total amount is: ${total}`;
}