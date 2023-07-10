function clearDisplay() {
    document.getElementById("display").value = ""; //getElementById vai no html buscar o id, que nesse caso é displayestá no input
}

function deleteChar() {
    var displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.slice(0,-1); //slice vai selecionar só um elemento para apagar
}

function appendChar(char) {
    document.getElementById("display").value += char;
}

function calculate() {
    var displayValue = document.getElementById("display").value;
    var result = eval(displayValue);
    document.getElementById("display").value = result;
}
