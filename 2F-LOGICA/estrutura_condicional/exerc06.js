let n1

n1 = parseFloat(prompt("Digite um numero"))


if ((n1 % 3 == 0) && (n1 % 5 == 0)) {
    document.write(`O numero ${n1} é multiplo de 3 e 5`)
} else {
    document.write(`O numero ${n1} não é multiploca de 3`)
}