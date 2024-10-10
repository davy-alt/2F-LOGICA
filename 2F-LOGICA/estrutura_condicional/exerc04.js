let nota1, nota2, nota3, media

nota1 = parseFloat(prompt("Digite a 1 nota que você tirou"))
nota2 = parseFloat(prompt("Digite a 2 nota que você tirou"))
nota3 = parseFloat(prompt("Digite a 3 nota que você tirou"))

media = (nota1 + nota2 + nota3) / 3

if (((nota1 || nota2 || nota3) >= 0) && ((nota1 || nota2 || nota3) <= 10)) {
    if (media >= 7) {
        document.write(`Com a sua media ${media} você está aprovado, pois o minimo para passar é 7`)
    } else {
        document.write(`Com sua média de ${media}, você foi reprovado, pois é menor que 7 `)
    }
} else {
    document.write("Alguma de suas notas está errada")
}

// || = ou