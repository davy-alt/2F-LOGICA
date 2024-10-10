let salario, aumento = 0.25

salario = parseFloat(prompt("Qual é o seu salario?"))

salario = salario + (salario*aumento)

document.write(`O seu novo salario após o aumento é de ${salario.toFixed(2)}`)