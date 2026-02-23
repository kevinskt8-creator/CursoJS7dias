//adc valores em um array

const num = [7, 8, 9]

num.push(10, 11, 12) //adc ao final

num.unshift(1, 2, 3) // adc ao inicio

num.splice(3, 0, 4, 5, 6) // por onde comecar, quantidade que deve ser deletado, numeros a serem adc

console.log(num)

// localizando itens em uma array primitiva

const num2 = [6, 7, 8, 9];

console.log(num2.indexOf(8));
console.log(num2.includes(6));
