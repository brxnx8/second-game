const personagem = document.querySelector(".character");
let personagembot = 0;
const xpers = +window.getComputedStyle(personagem).right.replace('px', ''); 

const point = document.querySelector(".points");
let points = 0;

const btn = document.querySelector(".restart");

const carros = document.querySelectorAll('.car');

const andar = function(e){
    personagembot = +window.getComputedStyle(personagem).bottom.replace('px', '');
    
    
    if(e.code === "ArrowUp"){
        if(personagembot >= 540){
            personagem.style.bottom = `0px`;
            points++;
            point.innerText = `Score = ${points}`;

        }else{
            personagem.style.bottom = `${personagembot + 30}px`;
        }
        
    }else if(e.code === "ArrowDown" && personagembot > 0){
        personagem.style.bottom = `${personagembot - 30}px`;
    }
    
}

document.addEventListener("keydown", andar)

btn.addEventListener("click", () => {
    document.location.reload(true);
} )

const loop = setInterval(function(){
    carros.forEach(element => {
        let x = +window.getComputedStyle(element).right.replace('px', '');
        let y = +window.getComputedStyle(element).bottom.replace('px', '');
        let ypers = +window.getComputedStyle(personagem).bottom.replace('px', '');

        if((x<=xpers+65 && x>=xpers-85) && (ypers <= y+56 && ypers >= y-56)){
            clearInterval(loop);
            element.style.animation = 'none';
            element.style.right = `${x}px`;
            personagem.style.bottom = `${ypers}px`;
            restart();
            
            
            
        }
    });
}, 0.1)

function restart(){
    document.removeEventListener("keydown", andar);
    document.querySelector(".container").style.opacity = '0.8'
    point.classList.add("pointrestart");
    btn.classList.add("restartblock");
    
}