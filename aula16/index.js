//Testa itens dentro de uma array e retorna true ou false

const tempLondon = [18, 13, 8, 2]

const tempPositive = tempLondon.every(function(value) {
    return value >= 0
})

console.log(tempPositive)


//Filtrando com filter uma array, retorna valores e nao só booleans

const tempChina = [18, -13, 8, 2]

const tempOk = tempChina.filter(value => value >= 0 )


console.log(tempOk)



