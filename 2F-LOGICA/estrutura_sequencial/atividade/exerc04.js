let distancia, gasto, media

distancia = parseFloat(prompt ("Digite a distancia percorrida em km "))
gasto = parseFloat(prompt ("Digite o tanto combustível gasto em Litros "))

media = distancia/gasto

document.write(`a media de consumo do seu veiculo é de ${media} km/1 `)