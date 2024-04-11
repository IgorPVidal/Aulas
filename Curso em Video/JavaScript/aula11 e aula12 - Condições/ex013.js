var agora = new Date()
var dia = agora.getDay()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

var dia_hoje = ''
switch(dia) {
    case 0:
        dia_hoje = 'Domingo'
        break
    case 1:
        dia_hoje = 'Segunda'
        break
    case 2:
        dia_hoje = 'Terça'
        break
    case 3:
        dia_hoje = 'Quarta'
        break
    case 4:
        dia_hoje = 'Quinta'
        break
    case 5:
        dia_hoje = 'Sexta'
        break
    case 6:
        dia_hoje = 'Sábado'
        break
    default:
        // Default é como um else
        console.log("[ERRO] Dia inválido.")
        break
}
console.log(`Hoje é ${dia_hoje}!`)

