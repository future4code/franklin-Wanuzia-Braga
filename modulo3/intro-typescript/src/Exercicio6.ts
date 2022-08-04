export function operacoesMath(num1: number, num2: number): number[] {

  const diferenca: number = num1 - num2;
  const soma:number = num1 + num2;
  const sub:number = num1 - num2;
  const mult:number = num1 * num2;
  const div:number = num1 / num2;

    return [soma, sub, mult, div, diferenca] 
}

const n1 = Number(process.argv[2])
const n2 = Number(process.argv[3])
const resposta = "\x1b[33m Resultado das operações matemáticas: \x1b[32m" 

console.log(resposta, operacoesMath(n1, n2))