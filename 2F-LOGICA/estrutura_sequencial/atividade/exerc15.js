let salario, aumento, salariof, valor

salario = parseFloat(prompt('Qual é o seu salário?'))

aumento = parseFloat(prompt('Qual vai ser o seu aumento em %?'))

aumento = aumento/100

salariof = salario*aumento

valor = salariof - salario



document.write(`O seu aumento é de ${valor}, e o seu novo salário é de ${salariof}`)