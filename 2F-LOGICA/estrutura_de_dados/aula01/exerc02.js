let n = []
let seq;

seq = Number(prompt("Quantos numeros você irá digitar?"));

for(let i = 0; i <  seq; i++){
    n[i] = Number(prompt("Digite os números "))
}

document.write(`Vector: ${n}`)

//0:4, 1:5, 2:5, 3:7 -> length = 4
for(let i = numeros.length - 1; i >= 0; i--){
    document.write(`<p>${numeros[i]}</p>`)
}