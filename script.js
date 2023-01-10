const personagem = document.querySelector(".character");
let personagembot = 0;

const point = document.querySelector(".points");
let points = 0;

const carros = document.querySelectorAll('.car');

document.addEventListener("keydown", function(e){
    personagembot = +window.getComputedStyle(personagem).bottom.replace('px', '');
    
    
    if(e.code === "ArrowUp"){
        if(personagembot >= 569){
            personagem.style.bottom = `0px`;
            points++;
            point.innerText = `Score = ${points}`;

        }else{
            personagem.style.bottom = `${personagembot + 30}px`;
        }
        
    }else if(e.code === "ArrowDown" && personagembot > 0){
        personagem.style.bottom = `${personagembot - 30}px`;
    }
    
})

const loop = setInterval(function(){
    carros.forEach(element => {
        x = +window.getComputedStyle(element).right.replace('px', '');
        y = +window.getComputedStyle(element).bottom.replace('px', '');
        ypers = +window.getComputedStyle(personagem).bottom.replace('px', '');

        if((x<=992 && x>850) && (ypers <= y+46 && ypers >= y-46)){
            personagem.style.bottom = `0px`;
        }
    });
}, 0.1)