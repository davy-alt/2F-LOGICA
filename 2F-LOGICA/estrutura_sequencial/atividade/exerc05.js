let nota1, nota2, nota3, soma, media

nota1 = parseFloat(prompt ("Digite sua nota "))
nota2 = parseFloat(prompt ("Digite sua nota "))
nota3 = parseFloat(prompt ("Digite sua nota "))

soma = nota1 + nota2 + nota3

media = soma / 3

document.write(`a média aritmética entre as 3 notas é de` + (media).toFixed(1))

