let acumuladora = 0
num = [];

for(let i = 0; i < 5; i++){
    num[i] = Number(prompt("Digite um número"))
    acumuladora = acumuladora + num[i]
}

document.write(num + "<br>")
document.write(`A soma desses números é: ${acumuladora}`)
