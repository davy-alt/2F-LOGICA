let franca, fuso, horas, minutos, seg

horas = parseInt(prompt("Quantas horas são no brasil?"))

franca = horas + 5

if ((horas < 24) && (horas >0)) {
    if (franca > 23){
        horas = franca - 24
        document.write(`a hora na frança é de ${horas} horas`)
    }else{
         horas = franca
         document.write(`o horario na franca é ${franca} horas`)
    }
    
} else {
    document.write("hora invalida")
}

