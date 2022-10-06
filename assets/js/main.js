//trabalhando com JS em um arquivo externo

/*console.log(nome, 'chamando variavel criada com var');
var nome = "FIAP";

escreve("Exemplo de função nominal");

//função nominal  escopo e orientação a objeto
function escreve(titulo){
    alert(titulo);
}

// função nominal  -  sofre hoisting

function mudaTitulo(novoTitulo){
    document.querySelector("h2").innerHTML = novoTitulo;
}
//mudaTitulo("vai corinthians");

//expressão de função
//função anonima  não sofre hoisting
const mudaTitulo2 = function (target,novoTitulo){
    document.querySelector(target).innerHTML = novoTitulo;
}
//mudaTitulo2("Trocando subtitulo");*/

// é uma função criada no ES6 ou ES2015.
//não existe o this dentro da errow function
//não existe metodo construtor
//sintaxe mais simples e pratica
/*
const relogio = () =>{
    const date = new Date();
    mudaTitulo2("h2",date.toLocaleTimeString());
}*/
//setInterval(relogio, 1000);
/* muda frase
const frases = ["A vida é bela", "A vida é curta", "A vida é uma dádiva"]
function time (){
    const turn = Math.floor(Math.random() * (+0 - +3)) + +3;
    document.querySelector("h1").innerHTML = frases[turn];
}
setInterval(time, 4000);
*/
/*const frases = ["A vida é bela", "A vida é curta", "A vida é uma dádiva"];
const mudaFrase = function(target,frases){
    document.querySelector(target).innerHTML = frases;
}
const tempo = () =>{
    const date = new Date();
    mudaFrase("h1",date.toLocaleTimeString());
}
setInterval(tempo,4000);
//mudas no h1 a cada 4 segundos a frase 
//muda frase("h1", frases, 4)*/

const frase = ["A vida é bela", "A vida é curta", "A vida é uma dádiva"];
let total = 0;
const mudaFrase = (target, frases, tempo) =>{
    setInterval(()=>{
        document.querySelector(target).innerHTML = frases[total >= frases.length -1? (total = 0) : (total += 1)]

    },tempo*1000);
}
mudaFrase("h1", frase, 4);