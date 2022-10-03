const carrosDOM = document.querySelector("#carros")

const veiculos = ["Chevrolet", "Ford", "Fiat", "VW", "Honda", "Toyota", "Hyundai"];

// FUNCOES PRINCIPAIS
veiculos.unshift("Audi"); // insere no inicio do Array
veiculos.push("BMW", "Mercedes"); // insere no final do array

const primeiro = veiculos.shift(); // removendo o primeiro elemento
console.log("Removendo o primeiro ", primeiro)

const ultimo = veiculos.pop() // remove do final
console.log("Removendo o primeiro ", ultimo)

const posicao = 2; //removendo um elemento
const removido = veiculos.splice(posicao , 2);

const removidos = veiculos.splice(1 , 2); // removendo mais de um elemento (na posição 1, remove 2)

const remov2 = veiculos.splice(1,2, "Ferrari", "Lamborghini") //remove adicionando elementos (remove 2 elementos na posicao 1, e adiciona os outros 2)

veiculos.forEach((value, key) =>{
    carrosDOM.innerHTML += `<option name "${key}">${value}</option>`;
});

// spice - remove e adiciona elementos
// slice - retorna um novo array - IMUTABILIDADE - NÃO MODIFICA O ORIGINAL, RETORNA UM NOVO ARRAY

const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76eas"];

const newNba = nbaTeams.slice(-1);

console.log(nbaTeams.slice(3,5))
console.log(nbaTeams, "ultimo")

////////////////////////////////////////

//map, filter, reduce, find, findIndex, search, sort, reverse, slipt, join, substring

const nome  = "Maria Joana Souza Santos";
const novoArray = name.split("");
const nomeCompleto = [novoArray[0], novoArray.slice(-1)].join(" ");
console.log(nomeCompleto);

const procuraCeltic = (nomeTime) => {
    return nomeTime == "Celtics" || nomeTime == "Raptors";
}

const celticsMap = nbaTeams.map(procuraCeltic)
const celticsFilter = nbaTeams.filter(procuraCeltic)
const celticsFind = nbaTeams.find(procuraCeltic)

console.log(celticsMap,"MAP"); // retorna um novo array, mapeando e buscando no array anterior
console.log(celticsFilter,"Filter"); // vai do começo até o fim, acha todos 
console.log(celticsFind,"Find"); // pega o primeiro que achar