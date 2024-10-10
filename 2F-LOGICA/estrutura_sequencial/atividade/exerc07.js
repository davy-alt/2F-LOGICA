//faça um algoritmo para ler uma temperatura em celsius e apresentá-la convertida em graus fahrenheit.

let celsius, fahrenheit

celsius = parseFloat(prompt("Digite a temperatura em graus celsius"))

fahrenheit = (celsius * 9) / 5 + 32

document.write(`A temperatura em fahrenheit é de ${fahrenheit}`)