//Faça um algoritmo que receba o valor das horas em segundos e transforme em dias, horas, minutos
let horas, segundos, dias, minutos

segundos = parseInt(prompt("escreva os segundos "))

minutos = segundos/60
horas = minutos / 60
dias = horas/24


document.write(`${segundos}s em minutos é equivalente a ${minutos.toFixed(0)} <br>
em horas ${horas.toFixed(0)} <br>
em dias ${dias.toFixed(0)}`)