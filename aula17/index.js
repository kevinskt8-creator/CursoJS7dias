//Function Declaration
//escreve algo no console

function movie() {
  console.log("The Matrix");
}

movie();

//Function Expression
//também escreve ao no console mas se coloca a funcao direto na variavel

const car = function () {
  console.log("Fiat");
};

car();

const truck = car;
truck();

// Argumentos em funções

function price() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(price(10, 20, 30, 40));

function carLoan(loan , rate = 2.9, years = 5) {
    return ( loan * rate / 100* years) + loan
}

console.log(carLoan(20000))
