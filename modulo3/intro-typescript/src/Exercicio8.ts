export function invertString(frase: string): string {
    var frasePadrão: string = frase.toUpperCase()
    var reverseFrase: string = frasePadrão.split('').reverse().join('');
    return (
      reverseFrase 
    );
  }

  console.log(invertString("Seja bem vinde!"))