function updateQuantity(isIncrease) {
    // get quantity
    const inputValue = document.getElementById( 'quantity' );
    let inputValueText = inputValue.value;

    // increase decrease handle
    if (isIncrease == true)
    {
        inputValueText = parseFloat(inputValueText) + 1;
    }
    else if (isIncrease == false && inputValueText > 0)
    {
        inputValueText = parseFloat(inputValueText) - 1;
    }
    else
    {
        alert( 'Wrong!' );
    }

    inputValue.value = inputValueText;
    // update amount
    const amount = document.getElementById( 'amount' );
    amount.innerText = inputValueText * 100;
}
// phone 1
document.getElementById('case-plus').addEventListener('click', function () {
    updateQuantity( true );
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateQuantity( false );
})