let numero

numero = parseFloat(prompt("Qual é seu numero"))

if ((numero >=10 ) && (numero <= 20)){
    document.write(`O numero ${numero} está entre 10 e 20`)
} else {
    document.write(`O numero ${numero} não está entre 10 e 20`)
}