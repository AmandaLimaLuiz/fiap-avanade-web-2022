// diferenças entre arrow functions e funções nominais:

const resultado = document.querySelector("#resultado");
let myFunc1 = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments)
    }
}

//chamando a função
myFunc1.showArguments(
    "Amanda", 
    "Full-Stack Developer", 
    "React", 
    "NodeJS", 
    "TypeScript"
);

let myFunc2 = {
    showArguments: () => {
//       resultado.innerHTML = arguments; //Arrow function não acessa arguments
        console.log(...arguments)
    }
}
/*myFunc2.showArguments(
    "Amanda", 
    "Full-Stack Developer", 
    "React", 
    "NodeJS", 
    "TypeScript"
);*/

let user = {
    name: "Amanda Lima",
    usandoArrow: () =>{ //Arrow function não funciona o this
        console.log("Meu nome é: ", this.name, "Arrow function")
    },
    usandoNominal(){
        console.log("Meu nome é: ", this.name, "Nominal function")
    }
}
user.usandoArrow();
user.usandoNominal();



/**
 
{
    "name":"Nome pessoa",
    "email":"email@gmail.com",
    "password": "123456"
}

const {password, ...data} = await prisma.user.findById(1);

return data;

 */
