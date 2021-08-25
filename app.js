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

    // call calculation function
    totalAmountCalculation();
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
    updatePrice('phone2', true, 51);
} )

// get input amount to calculate total
function getInput( phone )
{
    const inputValue = document.getElementById( phone + '-quantity' );
    const inputValueText = inputValue.value;
    const inputValuenum = parseFloat( inputValueText );
    return inputValuenum;
}

// total amount area
function totalAmountCalculation()
{
    const phone1 = getInput( 'phone1' );
    const phone2 = getInput( 'phone2' );
    // calculate sub total
    const subTotal = ( parseFloat( phone1 ) * 100 ) + ( parseFloat( phone2 ) * 51 );
    // calculate tax
    const tax = subTotal / 10;
    // calculate final amount
    const total = subTotal + tax;
    // update subtotal
    document.getElementById( 'sub-total' ).innerText = subTotal;
    // update tax
    document.getElementById( 'tax-amount' ).innerText = tax;
    // update total amount
    document.getElementById( 'total-amount' ).innerText = total;
}