
//Esta função não está dando o retorno esperado:
export function tornaMaiuscula(frase) {
    const palavras = frase.split(" ");
    palavras.map((letra) => {
        return letra[0].toUpperCase().join(" ")});
 
}