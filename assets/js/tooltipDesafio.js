const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body")
const header = document.querySelector(".top-site")

body.addEventListener('mouseover',(e)=>{
    body.style.background = "gray"
});
body.addEventListener('mouseout',(e)=>{
    body.style.background = "unset"
});

const addText = function(target, text){
    const newDiv = document.createElement(target);
    newDiv.classList.add("tooltip");
    newDiv.innerHTML = text;

    tooltip.addEventListener("mouseover", (e)=>{
        if(document.querySelector(".tooltip")){
            document.querySelector(".tooltip").remove();
        };
        newDiv.style.position = "fixed";
        newDiv.style.top = e.clientY + "px";
        newDiv.style.left = (e.clientX + 200 > body.clientWidth? e.clientX - 210 : e.clientX + 200) + "px";
        newDiv.style.display = "flex"
        header.appendChild(newDiv);
    });
};

addText("div", "AMinions ipsum gelatooo uuuhhh para tú bappleees para tú tank yuuu! Gelatooo po kass. Bappleees poopayee tulaliloo pepete belloo! Wiiiii. Baboiii hana dul sae bappleees pepete hana dul sae po kass po kass baboiii. Belloo! hahaha baboiii poopayee hahaha belloo! ");

tooltip.addEventListener("mouseout", (e)=>{
    if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }
});

/* 
const tooltip = (target, texto) => {
  const body = document.querySelector("body");
  const tooltipTarget = document.querySelector(target);

  tooltipTarget.addEventListener("mouseover", (e) => {
    if (document.querySelector(".tooltip")) {
      document.querySelector(".tooltip").remove();
    }

    const newDiv = document.createElement("div");
    newDiv.classList.add("tooltip");
    newDiv.innerHTML = texto;

    const largura = 200;
    newDiv.style.position = "fixed";
    newDiv.style.width = largura + "px";
    newDiv.style.top = e.clientY + "px";
    newDiv.style.display = "flex";
    newDiv.style.left =
      (e.clientX + largura > body.clientWidth
        ? e.clientX - largura - 20
        : e.clientX + largura) + "px";

    body.appendChild(newDiv);
  });

  tooltipTarget.addEventListener("mouseout", (e) => {
    if (document.querySelector(".tooltip")) {
      document.querySelector(".tooltip").remove();
    }
  });
};

tooltip("#tooltip", "texto do tooltip");
*/