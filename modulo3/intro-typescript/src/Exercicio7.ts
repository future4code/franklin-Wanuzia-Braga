export function DNAtoRNA(dna: string): string {
    let reg = /T/g
    return dna.replace(reg, "U"); 
  }

  //const dna: string = process.argv[2]

  console.log(DNAtoRNA("ATT GCT GCG CAT TAA CGA CGC GTA"))    
