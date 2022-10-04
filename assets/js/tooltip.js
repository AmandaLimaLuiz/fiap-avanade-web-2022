 const tooltip = document.querySelector("#tooltip");
 const body = document.querySelector("body")
 const header = document.querySelector(".top-site")

body.addEventListener('mouseover',(e)=>{
    body.style.background = "gray"
})
body.addEventListener('mouseout',(e)=>{
    body.style.background = "unset"
})

tooltip.addEventListener("mouseover", (e)=>{

    console.log("Altura da página",body.clientHeight);
    console.log("Largura da página",body.clientWidth);
    console.log("Altura do tooltip",tooltip.clientHeight);
    console.log("Largura da tooltip",tooltip.clientWidth);
    console.log("Altura do mouse",e.clientY);
    console.log("Largura do mouse",e.clientX);
    

    if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }

    const newDiv = document.createElement("div");
    newDiv.classList.add("tooltip")
    newDiv.innerHTML = "Minions ipsum gelatooo uuuhhh para tú bappleees para tú tank yuuu! Gelatooo po kass. Bappleees poopayee tulaliloo pepete belloo! Wiiiii. Baboiii hana dul sae bappleees pepete hana dul sae po kass po kass baboiii. Belloo! hahaha baboiii poopayee hahaha belloo! La bodaaa bee do bee do bee do chasy.";

    newDiv.style.position = "fixed";
    newDiv.style.top = e.clientY + "px";
    newDiv.style.left = (e.clientX + 200 > body.clientWidth? e.clientX - 210 : e.clientX + 200) + "px";
    newDiv.style.display = "flex"
    header.appendChild(newDiv);
});

tooltip.addEventListener("mouseout", (e)=>{
    if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }
});

//criar função para tooltip em varios icones. tooltip("#local","texto do icone"); responsivo