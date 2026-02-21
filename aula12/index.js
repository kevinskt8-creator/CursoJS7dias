//template literals, imrpimir a mesma formatação de variavel no console

let firstName = "Joe";

const email = "Hi " + firstName + ",\nThe meeting is confirmed! \nKevin";
const email2 = `Hi ${firstName},
The meeting is confirmed!
Kevin`;

console.log(email);
console.log(email2);
