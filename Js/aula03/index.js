//Copie o código da aula anterio e use para calcular o seu IMC, e o seu ano de nascimento 
//IMC = alt * alt / pes

const nome = "Tayane Cristina"
const sobrenome = "Alves dos Santos"
const idade = "22"
const peso = "53"
const altura = "1.59"
let anoDeNscimento = 2023 - idade

const IMCResult = peso / (altura * altura) 
console.log(IMCResult)
console.log(nome, sobrenome, "nasceu em", anoDeNscimento)

