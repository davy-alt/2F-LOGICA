let num1, num2, soma, sub, multiplicacao, div

num1 = parseFloat(prompt ("Digite um numero"))
num2 = parseFloat(prompt ("Digite um numero"))

soma = (num1 + num2)
sub = (num1 - num2)
multiplicacao = (num1 * num2)
div = (num1 / num2)

document.write(`A soma dos numeros ${num1} + ${num2} é = ${soma}, <br>`)
document.write(`a subtração dos numeros ${num1} - ${num2} é = ${sub}, <br>`)
document.write(`a multiplicação dos numeros ${num1} * ${num2} é = ${multiplicacao}, <br>`)
 document.write(`a divisão dos numeros ${num1} / ${num2} é = ${div} <br>`)