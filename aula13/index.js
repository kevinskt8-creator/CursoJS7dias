//adc valores em um array

const num = [7, 8, 9]

num.push(10, 11, 12) //adc ao final

num.unshift(1, 2, 3) // adc ao inicio

num.splice(3, 0, 4, 5, 6) // por onde comecar, quantidade que deve ser deletado, numeros a serem adc

console.log(num)

//localizando itens em uma array primitiva

const num2 = [6, 7, 8, 9];

console.log(num2.indexOf(8));
console.log(num2.includes(6));


 //Removendo itens da array

const num3 = [5, 6, 7, 8]

const final= num3.pop() // Remove o ultimo item da array

const final2 = num3.shift() // remove primeiro item da array

const final3 = num3.splice(0, 1) // seleciona a posição e depois escolhe qual  item vc quer excluir

console.log(num3)

// Esvaziando uma array

let num4 = [5, 6, 7, 8, 2 , 5]

//num4 = []
//num.length = 0

num4.splice(0, num4.length)



console.log(num4)