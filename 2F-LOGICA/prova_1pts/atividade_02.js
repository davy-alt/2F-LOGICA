let contas, valor, qnt, valorf = 0, contadora = 0

do{
    contas = prompt("Qual conta você irá pagar?")
    if((contas != "nenhuma") && (contas != "nenhuma") && (contas != nada) && (contas != "")){
    valor = Number(prompt("qual valor da conta de? ${contas}"))
    valorf = valorf + valor
    contadora = contadora + 1
    }
}while((contas != "nenhuma") && (contas != "nenhuma") && (contas != nada) && (contas != ""))

document.write(`Você tem o total de ${contadora} de contas para pagar no valor de ${valorF}`)



