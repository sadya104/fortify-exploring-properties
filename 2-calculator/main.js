const input = document.getElementById("input");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const buttonValue = button.textContent;

        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
});

function clearResult() {
    input.value = "";
}

function calculateResult() {
    input.value = eval(input.value);
}

function appendValue(buttonValue) {
    input.value += buttonValue;
}
