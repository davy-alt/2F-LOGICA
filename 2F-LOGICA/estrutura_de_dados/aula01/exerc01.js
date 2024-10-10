let tempanual = []
let mediatemp, acumuladora = 0

//1 parte, armazenar dados na estrutura de dados
for(let i = 0; i < 12; i++){
    tempanual[i] = Number(prompt("Digite a temperatura do mês"))
}

//2 estrutura
for(let i = 0; i<tempanual.length; i++){
    acumuladora = acumuladora + tempanual[1]
}

//mediatemp = acumuladora/12
mediatemp = acumuladora/tempanual.length
console.log(typeof acumuladora) //number
console.log(typeof 12) //number
console.log(mediatemp)
document.write(`<p>tempanual: ${tempanual}</p>`)