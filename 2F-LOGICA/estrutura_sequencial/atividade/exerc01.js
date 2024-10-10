//1º -> entrada de dados

let num1, num2, soma

nota1 = parseFloat(prompt ("Digite um numero "))
nota2 = parseFloat(prompt ("Digite o segundo numero "))

//2º -> processamento
soma = nota1 + nota2

//3º saída de dados -> concatenação
document.write(`A soma dos numeros ${nota1} + ${nota2} é = ${soma}`)