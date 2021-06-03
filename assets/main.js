//calc function

function calc() {
    let a = parseInt(document.querySelector("#first_input").value);
    let operator = document.querySelector("#operator_input").value;
    let b = parseInt(document.querySelector("#second_input").value);
    let operation;

    if (operator=="+") {
        operation=a+b;
    } else if (operator=="-") {
        operation=a-b;
    } else if (operator="*") {
        operation=a*b;
    } else if (operator="/") {
        operation=a/b;
    }

    document.querySelector("#result").innerHTML = operation;

}


