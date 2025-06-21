const prompt = require('prompt-sync')();

let c = 's';
let ra = null;

function numero(m) {
    let numero;
    while (true) {
        numero = parseFloat(prompt(m));
        if (!isNaN(numero)) {
            return numero;
        }
        console.log("Digite um número válido!");
    }
}

function operacao() {
    let op;
    while (true) {
        op = prompt(" Escolha a operação (+, -, *, /): ");
        if (op === "+" || op === "-" || op === "*" || op === "/") {
            return op;
        }
        console.log(" Digite uma operação válida: +, -, *, /");
    }
}

while (c === 's') {
    let n1;

    if (ra === null) {
        n1 = numero("Digite o primeiro número: ");
    } else {
        console.log(`Resultado anterior: ${ra}`);
        n1 = ra;
    }

    let o = operacao();
    let n2 = numero("Digite o próximo número: ");

    switch (o) {
        case '+':
            ra = n1 + n2;
            break;
        case '-':
            ra = n1 - n2;
            break;
        case '*':
            ra = n1 * n2;
            break;
        case '/':
            ra = n1 / n2;
            break;
    }

    console.log(`O resultado é: ${ra}`);

    c = prompt("Deseja continuar calculando? (s/n): ").toLowerCase();
    if (c !== 's') {
        console.log("Desligando a calculadora...");
    }
}
