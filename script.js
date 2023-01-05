const personagem = document.querySelector(".character");
let personagembot = 0;

document.addEventListener("keydown", function(e){
    personagembot = +window.getComputedStyle(personagem).bottom.replace('px', '');
    
    
    if(e.code === "ArrowUp"){
        if(personagembot >= 569){
            personagem.style.bottom = `0px`;
        }else{
            personagem.style.bottom = `${personagembot + 30}px`;
        }
        
    }else if(e.code === "ArrowDown" && personagembot > 0){
        personagem.style.bottom = `${personagembot - 30}px`;
    }
    
})