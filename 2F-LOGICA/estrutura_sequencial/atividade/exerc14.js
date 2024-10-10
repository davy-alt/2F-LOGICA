let nome, salario, vendas, comissao, salariofixo

nome = prompt("Qual é o seu nome?")

salario = parseFloat(prompt("qual é o seu salario?"))

vendas = parseFloat(prompt("Qual foi a quantidade de vendas que você fez esse mês em R$?"))

comissao = vendas*0.15

salariofixo = salario+comissao

document.write(`${nome} O seu salário após a sua comissão de 15% do valor ${vendas} é de ${salariofixo}`)

