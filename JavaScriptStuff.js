// JavaScript source code
function calculateTotal() {
    var pretzel = 3.99;
    var userInput = document.getElementById("quantity");
    var userSelection = userInput.elements["pretzelNum"].value; //get value of object
    var totalSale = pretzel * userSelection;
    document.getElementById("receipt").innerHTML = totalSale;
    

}