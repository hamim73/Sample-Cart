// function updateQuantity(isIncrease) {
//     // get quantity
//     const inputValue = document.getElementById( 'quantity' );
//     let inputValueText = inputValue.value;

//     // increase decrease handle
//     if (isIncrease == true)
//     {
//         inputValueText = parseFloat(inputValueText) + 1;
//     }
//     else if (isIncrease == false && inputValueText > 0)
//     {
//         inputValueText = parseFloat(inputValueText) - 1;
//     }
//     else
//     {
//         alert( 'Wrong!' );
//     }

//     inputValue.value = inputValueText;
//     // update amount
//     const amount = document.getElementById( 'amount' );
//     amount.innerText = inputValueText * 100;
// }
// // phone 1
// document.getElementById('case-plus').addEventListener('click', function () {
//     updateQuantity( true );
// })

// document.getElementById('case-minus').addEventListener('click', function () {
//     updateQuantity( false );
// })

// update Quantity
function updatePrice(phone, isIncrease, unit_price)
{
    // get input amount
    const inputValue = document.getElementById( phone + '-quantity' );
    let inputValueText = inputValue.value;
    
    // handle inc-dec
    if ( isIncrease == true )
    {
        inputValueText = parseFloat( inputValueText ) + 1;
    }
    else if ( isIncrease == false && inputValueText > 0 )
    {
        inputValueText = parseFloat( inputValueText ) - 1;
    }
    else
    {
        alert( 'Wrong!' );
    }

    // update quantity field
    inputValue.value = inputValueText;

    // update amount
    const amount = document.getElementById( phone + '-amount' );
    amount.innerText = inputValueText * unit_price;
}

// phone 1
// minus
document.getElementById( 'phone1-minus' ).addEventListener( 'click', function ()
{
    updatePrice('phone1', false, 100);
} )
// plus
document.getElementById( 'phone1-plus' ).addEventListener( 'click', function ()
{
    updatePrice('phone1', true, 100);
} )

// phone 2
// minus
document.getElementById( 'phone2-minus' ).addEventListener( 'click', function ()
{
    updatePrice('phone2', false, 50);
} )
// plus
document.getElementById( 'phone2-plus' ).addEventListener( 'click', function ()
{
    updatePrice('phone2', true, 50);
} )