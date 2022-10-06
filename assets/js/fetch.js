const cep = document.querySelector("#cep");

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo];
        }
    }
}

//blur - perder foco
cep.addEventListener("blur", async (e)=>{
    let search = cep.value.replace("-","");
    console.log(search);

    if(search.length < 8 || Number(search.value) === NaN){
        alert("CEP inválido")
        cep.focus();
        return;
    }

    const options = {
        method:"GET",
        mode:"cors",
        cache:"default",
    }
    try{
        const resultado = await fetch(`https://viacep.com.br/ws/${search}/json/`, options);
        const json = await resultado.json();
        showData(json);
    }catch (error){
        console.log(error.message);
    }
    

    //Recurso assíncrono, retorna uma promise por que eu não sei se vai funcionar.
    //Promisse é um recurso que não temos certeza se deu certo ou não, é uma intenção
    // resolver quer dizer que funcionou, aí usamos a função then. Se der errado usamos o catch.

    /* fetch(`https://viacep.com.br/ws/${search}/json/`, options).then(response =>{
        
        response.json().then(result =>{
            console.log(result);
        })
    }).catch(err => {console.log('e.message')});  */


});