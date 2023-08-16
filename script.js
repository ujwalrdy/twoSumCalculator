function clc(){
    let digit1 = parseFloat(document.getElementById("num1").value);
    let digit2 = parseFloat(document.getElementById("num2").value);

    let oper = document.getElementById("operator").value;

    let op = document.getElementById("output");

    switch(oper){
        case '+':
            op.textContent=digit1+digit2;
            op.style.backgroundColor="green";
            break;

        case '-':
            op.textContent=digit1-digit2;
            op.style.backgroundColor="green";
            break;

        case '*':
            op.textContent=digit1*digit2;
            op.style.backgroundColor="green";
            break;

        case '/':
            op.textContent=digit1/digit2;
            op.style.backgroundColor="green";
            break;
    }
}