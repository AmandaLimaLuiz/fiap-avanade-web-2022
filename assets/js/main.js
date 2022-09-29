//trabalhando com JS em um arquivo externo

console.log(nome, 'chamando variavel criada com var');
var nome = "FIAP";

escreve("Exemplo de função nominal");

//função nominal  escopo e orientação a objeto
function escreve(titulo){
    alert(titulo);
}

// função nominal  -  sofre hoisting

function mudaTitulo(novoTitulo){
    document.querySelector("h1").innerHTML = novoTitulo;
}
//mudaTitulo("vai corinthians");

//expressão de função
//função anonima  não sofre hoisting
const mudaTitulo2 = function (novoTitulo){
    document.querySelector("h2").innerHTML = novoTitulo;
}
//mudaTitulo2("Trocando subtitulo");

// é uma função criada no ES6 ou ES2015.
//não existe o this dentro da errow function
//não existe metodo construtor
//sintaxe mais simples e pratica
const relogio = () =>{
    const date = new Date();
    mudaTitulo2(date.toLocaleTimeString());
}
//setInterval(relogio, 1000);