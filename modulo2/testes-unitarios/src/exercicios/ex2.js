
export function checaPalindromo(frase) {
  var ignoreCaracter = /[^A-Za-z0-9]/g;
  var frasePadrão = frase.toLowerCase().replace(ignoreCaracter, '')
  var reverseFrase = frasePadrão.split('').reverse().join('');
  return (
    reverseFrase === frasePadrão
  );
}
