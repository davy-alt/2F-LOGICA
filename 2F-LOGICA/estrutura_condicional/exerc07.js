let l1, l2, l3 

l1 = parseFloat(prompt("Digite o tamanho do lado1"))
l2 = parseFloat(prompt("Digite o tamanho do lado2"))
l3 = parseFloat(prompt("Digite o tamanho do lado3"))

if(( (l1 + l2) > l3) && ((l2 + l3) > l1) && ((l1 + l3) > l2)){
    document.write(`O tringalo com os lados equivalente a ${l1}, ${l2}, ${l3}, é valido`)
}else{
    document.write(`O triangulo não é valido`)
}

