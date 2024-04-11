//const readline = require('readline').createInterface({input: process.stdin, output: process.stdout}) // Utilizado para pegar input no terminal do node

var limite_velocidade = 80
var velocidade = 80.5

console.log(`A velocidade do seu triciclo é ${velocidade}Km/h!`)
if (velocidade > limite_velocidade) { // Condição simples
    console.log('Velocidade permitida ultrapassada. MULTADO!')
}
console.log('Dirija sempre utilizando cinto de segurança!')
