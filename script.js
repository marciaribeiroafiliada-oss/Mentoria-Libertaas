// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){
            destino.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// Animação de entrada dos elementos
const elementos = document.querySelectorAll(".card, .sobre, .cta, .video");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:0.2
});

elementos.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="all .8s ease";

    observer.observe(el);

});

// Botão pulsando
const botoes = document.querySelectorAll(".botao,.botao2,.botao3");

setInterval(()=>{

    botoes.forEach(botao=>{

        botao.style.transform="scale(1.03)";

        setTimeout(()=>{
            botao.style.transform="scale(1)";
        },400);

    });

},3000);
