<script language = "javascript">
    // declare all variables
    var numDogs, numFries, numSoda;
    const DISCOUNT = .1;
    const TAX = .0625;

    // gathers order
    numDogs = prompt("How many hotdogs do you want?");
    numFries = prompt("How many fries do you want?");
    numSodas = prompt("How many sodas do you want?");

    // calculates subtotal and writes current info
    var subTotal = (numDogs * 3.75) + (numFries * 2) + (numSodas * 1.8);
    document.write("Hotdogs: " + numDogs + "<br />Fries: " + numFries + 
                   "<br />Drinks: " + numSodas + "<br />Subtotal: $" + subTotal.toFixed(2));

    // checks for discount
    if (subTotal < 20) 
    {
        document.write("<br />Discount applied: $" + (subTotal * DISCOUNT).toFixed(2));
        subTotal = (subTotal - (subTotal * DISCOUNT));
        document.write("<br />Subtotal after discount: $" + subTotal.toFixed(2));
    }

    // calculates tax
    document.write("<br />Tax: $" + (subTotal * TAX).toFixed(2));
    subTotal = (subTotal + (subTotal * TAX));

    // writes final total to doc
    document.write("<br />Total: $" + subTotal.toFixed(2));
</script>
