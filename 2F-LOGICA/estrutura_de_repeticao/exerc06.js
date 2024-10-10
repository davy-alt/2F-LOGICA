let salario, novosalario, anoatual, porcentagem

salario = Number(prompt("Digite o salario"))
anoatual = Number(prompt("Digite o ano atual"))

document.write(`<h3>salário 2005: ${salario} </h3>`)

//processamento
percentual = 0.15
novosalario = salario + (percentual * salario)
document.write(`<h3>salário 2006: ${novosalario.toFixed(2)} </h3>`)

for(let i = 2007 ; i<= anoatual; i++){
    percentual = percentual*2
    novosalario = salario + (percentual*salario)
    document.write(`<h3> salário ${i}: ${novosalario.toFixed(2)} </h3>`)
}

document.write(`<h3 class="sfinal">salário final: ${novosalario.toFixed(2)} </h3>`)