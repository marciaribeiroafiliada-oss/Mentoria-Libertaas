// =========================
// ROLAGEM SUAVE
// =========================
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


// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("mostrar");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(sec=>{

    sec.classList.add("esconder");

    observer.observe(sec);

});


// =========================
// BOTÕES PULSANDO
// =========================

const botoes = document.querySelectorAll(".btn");

setInterval(()=>{

    botoes.forEach(btn=>{

        btn.style.transform="scale(1.05)";

        setTimeout(()=>{

            btn.style.transform="scale(1)";

        },350);

    });

},3000);


// =========================
// PIXEL FACEBOOK
// CLIQUE NO BOTÃO
// =========================

document.querySelectorAll(".btn").forEach(botao=>{

    botao.addEventListener("click",()=>{

        if(typeof fbq !== "undefined"){

            fbq('track','Lead');

        }

    });

});


// =========================
// BOTÃO VOLTA AO TOPO
// =========================

const voltarTopo=document.createElement("button");

voltarTopo.innerHTML="↑";

voltarTopo.style.position="fixed";
voltarTopo.style.right="20px";
voltarTopo.style.bottom="20px";
voltarTopo.style.width="50px";
voltarTopo.style.height="50px";
voltarTopo.style.borderRadius="50%";
voltarTopo.style.border="none";
voltarTopo.style.background="#C78572";
voltarTopo.style.color="#fff";
voltarTopo.style.fontSize="22px";
voltarTopo.style.cursor="pointer";
voltarTopo.style.display="none";
voltarTopo.style.boxShadow="0 5px 15px rgba(0,0,0,.2)";
voltarTopo.style.zIndex="999";

document.body.appendChild(voltarTopo);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        voltarTopo.style.display="block";

    }else{

        voltarTopo.style.display="none";

    }

});

voltarTopo.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
