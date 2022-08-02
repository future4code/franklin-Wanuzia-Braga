
// Para acessar os parâmetros passados na linha de comando, com o node utilizamos o process.argv[]
const nome = process.argv[2]
const idade = process.argv[3]
const soma7 = Number(idade) + 7;

var red = '\033[91m';
var blue = '\u001b[34m';
var yellow = "\x1b[33m";
var green = "\x1b[32m";
var reset = '\u001b[0m';

if (!nome || !idade) {
    return console.log(red + "Você deve passar dois parâmetros:" 
    + yellow + "nome e idade," + red + "respectivamente.")
}else{
    console.log("Olá, " + green + nome + "! " 
    + yellow + "Você tem " + blue + idade + " anos. " + green + 
    "Em sete anos você terá " + reset + soma7 + blue + " anos.")
}