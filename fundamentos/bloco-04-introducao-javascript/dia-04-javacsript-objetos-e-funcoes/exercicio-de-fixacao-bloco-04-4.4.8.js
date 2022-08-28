// 5 - Acesse a chave medals e faça um console.log no seguinte formato: 
//"A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
//Agora veremos uma variação do laço for, que nos garante facilidade ao lidar com objetos.

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = {
    golden: 2,
    silver: 3
};

let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: { golden: 2, silver: 3 }
}

player["fullName"] = player.name + " " + player.lastName

console.log("A jogadora" + " " + player.fullName + " " + player.medals.golden + " medalhas de ouro e" + " " + player.medals.silver + " " + "medalhas de prata");