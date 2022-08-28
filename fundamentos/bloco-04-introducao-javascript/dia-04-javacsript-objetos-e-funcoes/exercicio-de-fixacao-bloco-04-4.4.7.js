//4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: 
//"A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];


let player = {
    name: "Marta",
    lastName: "Silva",
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}
console.log("A jogadora" + " " + player.name + " " + player.lastName + " " + "foi eleita a melhor do mundo por " + " " + player.bestInTheWorld.length + " " + "vezes");
