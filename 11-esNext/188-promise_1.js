let p = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

p
    .then(valor => valor[0])
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)  