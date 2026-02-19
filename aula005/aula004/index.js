//Operador de Atribuição =, +=

let num1 = 3;

num1 += 20;

console.log(num1);

//Operador de comparação

let num2 = 3;

console.log(num2 > 0);
console.log(num2 < 0);
console.log(num2 >= 3);
console.log(num2 <= 3);

console.log(num2 === 3);
console.log(num2 !== 3);

//Operador de igualdade

let num3 = "1";
let num4 = 1;

console.log(num3 === num4);
console.log(num3 == num4);

//Operador ternário

let driver = 90;
let speed = driver > 110 ? "Above" : "Below";

console.log(speed);

//Operador lógico

let temIdadeMinima = true;
let temTituloEleitor = true;

let podevotar = temIdadeMinima && temTituloEleitor;
console.log("Pode Votar: " + podevotar);

let podeviajar = !podevotar;
console.log("Pode viajar: " + podeviajar);

//Operador lógico com strings

let corCliente = undefined;
let corEstoque = "black";
let corVendida = corCliente || corEstoque;

console.log(corVendida);
