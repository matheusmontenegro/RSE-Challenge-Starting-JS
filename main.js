// Challenges
//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World')

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
var num1 = 4
var num2 = 2
alert('O total da soma é: ' + (num1+num2))

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número.
// Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
var n = 1
if (typeof n == "number") {
    alert("É um número")
} else {
    alert("Não é um número")
}

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. 
//Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
var s = "Sim"
if (typeof s == "string") {
    alert("É uma string")
} else {
    alert("Não é uma string")
}

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. 
//Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
var b = false
if (typeof b == "boolean") {
    alert("É um booleano")
} else {
    alert("Não é um booleano")
}

//6. Crie um script que declare duas variáveis e exiba o resultado da subtração
// entre elas.
var n1 = 27
var n2 = 7
alert(n1-n2)

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação
// entre elas.
var numero1 = 15
var numero2 = 2
alert(numero1*numero2)

//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
var nro1 = 75
var nro2 = 3
alert(nro1/nro2)

//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. 
// Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
var p = 366544658
if (p % 2 == 0){
    alert('É um número par')
}else{
    alert('Não é um número par')
}

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
// Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
var i = 375
if (i % 2 == 0){
    alert('Não é um número ímpar')
}else{
    alert('É um número ímpar')
}