/*let numero, E = 1, fat = 1

do{
    numero = parseInt(prompt("Digite um número: "))
    if ((numero <= 0) || (isNaN(numero))) {
        alert("O número digitado deve ser inteiro e positivo!!")
    }
} while((numero <= 0) || (isNaN(numero)));

for(let y = 1; y <= numero; y++){
    fat = fat * y
    E = E + (1/fat)
}

document.write(`O valor de E é igual a ${E.toFixed(2)}`)*/

let numero, e, fatorial;

e=1
for(let i = 1; i <= numero; i++){

    fatorial = 1
    for(let j = 1; j <= i; j++){
    fatorial = fatorial*j
    }
}

document.write(`valor final de E = ${e  }`)