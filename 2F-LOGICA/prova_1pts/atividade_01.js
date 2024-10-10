let numero, mais
do{
    numero = parseFloat(prompt("Qual é o numero que você está pensando?"))
    if(isNaN(numero)  || (numero <= 0 )){
        alert("digite um numero valido acima de 0")  
    }  if (numero%2 == 0){
        numero = numero*2
        document.write(`O numero é par, portanto o numero desse numero será multiplicado por 2. <br> ${numero}`);
    }else{
        numero = numero*3
        document.write(`O numero é impar, portanto numero será multiplicado por 3. <br> ${numero}`);
    }

}while((isNaN(numero)) || (numero < 0 ));

do{
    mais = parseInt(prompt("Deseja repetir?"))
        if(mais = sim){
            numero = parseFloat(prompt("Qual é o numero que você está pensando?"))
            if(isNaN(numero)  || (numero <= 0 )){
                alert("digite um numero valido acima de 0")  
            }  if (numero%2 == 0){
                numero = numero*2
                document.write(`O numero é par, portanto o numero desse numero será multiplicado por 2. <br> ${numero}`);
            }else{
                numero = numero*3
                document.write(`O numero é impar, portanto numero será multiplicado por 3. <br> ${numero}`);
            }
        }

}while((isNaN(numero)) || (numero < 0 ));


