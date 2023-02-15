function getPin() {
    const pin = generatePin();
    const pinString = pin + "";

    if(pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
 
function generatePin() {
    const random = Math.round(Math.random()*10000);

    return random;
}

document.getElementById("btn-generate-pin").addEventListener("click", function() {
    const pin = getPin();
    
    // display pin
    const displayPinField = document.getElementById("display-pin");
    displayPinField.value = pin;
});

document.getElementById("calculator").addEventListener("click", function(e) {
    const number = e.target.innerText;
    const typeNumberField = document.getElementById("typed-number");
    const previousTypeNumber = typeNumberField.value;

    if(isNaN(number)) {
        if(number === "C") {
            typeNumberField.value = "";
        }
        else if (number === "<") {
            const digits = previousTypeNumber.split("");
            digits.pop();
            const remainingDigits = digits.join("");
            typeNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
});

document.getElementById("btn-submit").addEventListener("click", function() {
    const displayPinField = document.getElementById("display-pin");
    const currentPin = displayPinField.value;

    const typePinField = document.getElementById("typed-number");
    const typePin = typePinField.value;

    const pinSuccessMessage = document.getElementById("pin-success");
    const pinFailureMessage = document.getElementById("pin-failure");

    if(typePin === currentPin) {
        pinSuccessMessage.style.display = "block";
        pinFailureMessage.style.display = "none";
    }
    else {
        pinSuccessMessage.style.display = "none";
        pinFailureMessage.style.display = "block";
    }


})