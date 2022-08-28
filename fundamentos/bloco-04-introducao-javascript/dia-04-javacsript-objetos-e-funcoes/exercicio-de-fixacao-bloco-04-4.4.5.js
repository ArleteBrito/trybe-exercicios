// 2 - Acesse as chaves name, lastName e age e 
// concatene as suas informações para 
//imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

let name = 'Marta';
let lastName = 'Silva';
let age = 34;

let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
}
console.log("A jogadora" + " " + player.name + " " + player.lastName + " " + "tem" + " " + player.age + " "+"anos"+ " " +"de" + "" + " "+ "idade" + ".");