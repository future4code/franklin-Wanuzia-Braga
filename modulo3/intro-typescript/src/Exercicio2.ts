

export function imprimeTresCoresFavoritas(
    cor1:string, cor2: string, cor3: string): Array<String> {

    return([cor1, cor2, cor3])
 }

 const cor1: string = process.argv[2]
 const cor2: string = process.argv[3]
 const cor3: string = process.argv[4]
 console.log(`Suas cores favoritas são: ${imprimeTresCoresFavoritas(cor1, cor2, cor3)}`)