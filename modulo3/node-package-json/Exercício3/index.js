const fs = require('fs')
const listaAnterior = fs.readFileSync('tarefas.txt')
const listaAntiga = listaAnterior.toString()
console.log(`\nLista anterior: ${listaAntiga}\n`)

const appendDataToFile = async (path, data) => {
    let filehandle = null
    try {
        filehandle = await fs.promises.open(path, mode = 'a')
        await filehandle.appendFile(data)
    } finally {
        if (filehandle) {
            await filehandle.close();
        }
    }

    const novaLista = fs.readFileSync('tarefas.txt')
    const listaAtual = novaLista.toString()
    console.log(`Lista de tarefas: ${listaAtual}`)
}

appendDataToFile('tarefas.txt',
    '\n' + process.argv[2])
    .catch(err => {
        console.log(`Error Occurs, Error code -> 
            ${err.code}, Error NO -> ${err.errno}`)
    })