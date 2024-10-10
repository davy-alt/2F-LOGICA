let chinchilas, ano, i = 0

do{
    chinchilas = parseInt(prompt("Quantas chinchilas tem na fazenda?"))
    if(chinchilas < 2)
    document.write("O numero de chinchilas não pode ser menor que 2")
}while(chinchilas < 2 );

ano = parseInt(prompt("Quantos anos você irá esperar?"))
i = ano*3
chinchilas = chinchilas * i

document.write(`O numero de chinchilas após ${ano} anos é de ${chinchilas} `)


