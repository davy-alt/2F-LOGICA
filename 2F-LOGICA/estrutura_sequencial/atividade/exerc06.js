//Faça um algoritmo para ler duas variáveis A e B, e efetuar as trocas dos valores de forma que a variável A passe a possuir o valor da variável B e a varia´vel B passe a possuir o valor da variaável A. apresenta natela os dois valores trocados (antes AB, depois AB)

let A,B,Y

A=parseFloat(prompt("Digite o valor de A"))
B=parseFloat(prompt("Digite o valor de B"))

document.write(`A = ${A} e B = ${B} <br>`)

Y = A
A = B
B = Y

document.write(`A = ${A} e b = ${B}`)