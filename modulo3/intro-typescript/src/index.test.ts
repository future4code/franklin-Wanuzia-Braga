import { checaTriangulo } from "./Exercicio1";
import { imprimeTresCoresFavoritas } from "./Exercicio2";
import { checaAnoBissexto } from "./Exercicio3";
import { comparaDoisNumeros } from "./Exercicio4";
import { checaRenovacaoRG } from "./Exercicio5";
import { operacoesMath } from "./Exercicio6";
import { DNAtoRNA } from "./Exercicio7";
import { invertString } from "./Exercicio8";

describe('testing functions', () => {
    test('função testa triangulo deve retornar "Isósceles" - exercicio 1', () => {
        expect(checaTriangulo(5, 5, 8)).toBe('Isósceles')
    });

    test('Deve retornar lista de cores - exercício 2', () => {
        const cores = ['azul', 'rosa', 'verde']
        expect(imprimeTresCoresFavoritas('azul', 'rosa', 'verde')).toStrictEqual(cores)
    });

    test('Deve retornar true pois 2016 é ano bissexto - exercício 3', () => {
        expect(checaAnoBissexto(2016)).toBe(true)
    });
    
    test('Deve retornar 1, pois a diferença entre o maior e o menor número é = 1 -> exercício 4', () => {
        expect(comparaDoisNumeros(8, 7)).toBe(1)
    });
    
    test('Deve retornar false para a renovação do RG - exercício 5', () => {
        expect(checaRenovacaoRG(2022, 1988, 2016)).toBe(false)
    });

      test('operacoesMath function - exercicio 6', () => {
        const result = [6, 2, 8, 2, 2]
      expect(operacoesMath(4, 2)).toStrictEqual(result);
    });
    
    test('DNAtoRNA function - exercicio 7', () => {
      expect(DNAtoRNA("GATUC")).toStrictEqual("GAUUC");
    });

    test('invertString deve retornar àlo - exercício 8', () => {
        expect(invertString("OLÁ")). toBe("ÁLO")
    })
  });