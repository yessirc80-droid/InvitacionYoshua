/*=========================================
            INTRO
=========================================*/

const intro=document.getElementById("intro");

const enterButton=document.getElementById("enterButton");

enterButton.addEventListener("click",()=>{

    intro.style.opacity="0";

    intro.style.transition="opacity .8s ease";

    setTimeout(()=>{

        intro.style.display="none";

    },800);

});

/*=========================================
        CUENTA REGRESIVA
=========================================*/

const targetDate=new Date("July 18, 2026 15:00:00").getTime();

const days=document.getElementById("days");

const hours=document.getElementById("hours");

const minutes=document.getElementById("minutes");

const seconds=document.getElementById("seconds");

function updateCountdown(){

    const now=new Date().getTime();

    const distance=targetDate-now;

    if(distance<=0){

        days.textContent="00";
        hours.textContent="00";
        minutes.textContent="00";
        seconds.textContent="00";

        return;

    }

    days.textContent=Math.floor(distance/(1000*60*60*24));

    hours.textContent=String(
        Math.floor((distance%(1000*60*60*24))/(1000*60*60))
    ).padStart(2,"0");

    minutes.textContent=String(
        Math.floor((distance%(1000*60*60))/(1000*60))
    ).padStart(2,"0");

    seconds.textContent=String(
        Math.floor((distance%(1000*60))/1000)
    ).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);

/*=========================================
            MÚSICA
=========================================*/

const music=document.getElementById("music");

const musicButton=document.getElementById("musicButton");

const musicIcon=document.getElementById("musicIcon");

let playing=false;

musicButton.addEventListener("click",()=>{

    if(!playing){

        music.play();

        playing=true;

        musicIcon.classList.remove("fa-play");

        musicIcon.classList.add("fa-pause");

    }else{

        music.pause();

        playing=false;

        musicIcon.classList.remove("fa-pause");

        musicIcon.classList.add("fa-play");

    }

});

/*=========================================
    REPRODUCCIÓN AL ENTRAR
=========================================*/

enterButton.addEventListener("click",()=>{

    setTimeout(()=>{

        music.play().then(()=>{

            playing=true;

            musicIcon.classList.remove("fa-play");

            musicIcon.classList.add("fa-pause");

        }).catch(()=>{});

    },400);

});

/*=========================================
            PARTÍCULAS
=========================================*/

const particles=document.getElementById("particles");

function createParticle(){

    const particle=document.createElement("div");

    particle.className="particle";

    particle.style.left=Math.random()*100+"vw";

    particle.style.animationDuration=(6+Math.random()*8)+"s";

    particle.style.animationDelay=Math.random()*2+"s";

    particle.style.opacity=(0.3+Math.random()*0.7);

    const size=2+Math.random()*4;

    particle.style.width=size+"px";

    particle.style.height=size+"px";

    particles.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },15000);

}

for(let i=0;i<35;i++){

    setTimeout(createParticle,i*250);

}

setInterval(createParticle,350);

/*=========================================
        ANIMACIÓN AL HACER SCROLL
=========================================*/

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(

".hero,.photo-section,.message,.event-info,.countdown,.music-section,.actions,.thanks,footer"

).forEach(section=>{

    observer.observe(section);

});

/*=========================================
        EFECTO BOTONES
=========================================*/

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-6px) scale(1.02)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});

/*=========================================
        EFECTO FLOTANTE DE LA FOTO
=========================================*/

const photo=document.querySelector(".photo-frame");

if(photo){

    let direction=1;

    let offset=0;

    setInterval(()=>{

        offset+=0.15*direction;

        if(offset>=8) direction=-1;

        if(offset<=0) direction=1;

        photo.style.transform=`translateY(${-offset}px)`;

    },30);

}

/*=========================================
        BRILLO DINÁMICO BOTÓN MÚSICA
=========================================*/

const musicBtn=document.getElementById("musicButton");

if(musicBtn){

    setInterval(()=>{

        musicBtn.animate([

            {
                boxShadow:"0 0 20px rgba(77,163,255,.35)"
            },

            {
                boxShadow:"0 0 45px rgba(77,163,255,.75)"
            },

            {
                boxShadow:"0 0 20px rgba(77,163,255,.35)"
            }

        ],{

            duration:2200,

            iterations:1

        });

    },2200);

}

/*=========================================
        AÑO AUTOMÁTICO
=========================================*/

console.log("Invitación XV Yoshua lista.");

