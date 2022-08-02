
const expr = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])
const resposta = "\x1b[33m Resposta: \x1b[32m" 

switch(expr){
	case "soma":
		return console.log(resposta + (num1 + num2))
		break;
	case "subt":
		return console.log(resposta + (num1 - num2))
		break;
    case "mult":
            return console.log(resposta + (num1 * num2))
            break;
    case "div":
		return console.log(resposta + (num1 / num2))
		break;
    default:
        return console.log("Desculpe, estamos sem a operação " + expr + "."); 
}
