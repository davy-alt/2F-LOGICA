let produto, compra, parcelas

produto = parseFloat(prompt("qual é o valor do produto que você quer comprar?"))

parcelas = produto/5

document.write(`O preço das 5 parcelas do produto que você comprou é de ${parcelas} cada`)
