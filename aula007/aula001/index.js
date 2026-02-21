//For loop, mais utilizado

for (i = 1; i <= 10; i++) {
  console.log("Numero ", i);
}

//While loop, variavel externa vc pode reaproveitar a variavel

i = 1;

while (i <= 10) {
  console.log("Numero", i);
  i++;
}

// do while, wxecuta para depois verificar

i = 1;
do {
  console.log("Numero ", i);
  i++;
} while (i <= 10);

//for loop in, analisa informações e valroes dentro de um objeto

const myCar = {
  model: "BMW",
  year: 2023,
  km: 68000,
};

for (let i in myCar) console.log(i, myCar[i]);

//For of loop

const friends = ["Marcos", "Ana", "Jão"];
for (let i of friends) console.log(i);

//Break no while loop

i = 1;

while (i <= 10) {
  if (i === 8) break;
  console.log("Numero", i);
  i++;
}
