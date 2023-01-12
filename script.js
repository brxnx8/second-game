const personagem = document.querySelector(".character");
let personagembot = 0;

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
        x = +window.getComputedStyle(element).right.replace('px', '');
        y = +window.getComputedStyle(element).bottom.replace('px', '');
        ypers = +window.getComputedStyle(personagem).bottom.replace('px', '');

        if((x<=900 && x>=760) && (ypers <= y+46 && ypers >= y-46)){
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