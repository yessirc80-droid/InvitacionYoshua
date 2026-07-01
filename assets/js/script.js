/*==========================================================
        BLUE PRESTIGE XV
        SCRIPT.JS
        PARTE 1
==========================================================*/

"use strict";

/*==========================================================
                    ELEMENTOS
==========================================================*/

const loader = document.getElementById("loader");

const music = document.getElementById("music");

const musicButton = document.getElementById("musicButton");

const playIcon = musicButton.querySelector("i");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const countdownBoxes = document.querySelectorAll(".time-box");

const invitationCard = document.querySelector(".invitation-card");

const particlesContainer = document.getElementById("particles");

/*==========================================================
                FECHA DEL EVENTO
==========================================================*/

const eventDate = new Date(

    "2026-07-18T15:00:00"

);

/*==========================================================
                LOADER
==========================================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1600);

});

/*==========================================================
            CUENTA REGRESIVA
==========================================================*/

function updateCountdown() {

    const now = new Date();

    const distance = eventDate - now;

    if (distance <= 0) {

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        mostrarMensajeEvento();

        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor(

        (distance % (1000 * 60 * 60 * 24))

        / (1000 * 60 * 60)

    );

    const m = Math.floor(

        (distance % (1000 * 60 * 60))

        / (1000 * 60)

    );

    const s = Math.floor(

        (distance % (1000 * 60))

        / 1000

    );

    actualizarNumero(days, d);

    actualizarNumero(hours, h);

    actualizarNumero(minutes, m);

    actualizarNumero(seconds, s);

}

setInterval(updateCountdown, 1000);

updateCountdown();

/*==========================================================
        ANIMACION CONTADOR
==========================================================*/

function actualizarNumero(elemento, valor) {

    const texto = String(valor).padStart(2, "0");

    if (elemento.textContent !== texto) {

        elemento.textContent = texto;

        elemento.animate(

            [

                {

                    transform: "scale(1.20)",

                    color: "#8CC8FF"

                },

                {

                    transform: "scale(1)"

                }

            ],

            {

                duration: 250

            }

        );

    }

}

/*==========================================================
        MENSAJE DIA DEL EVENTO
==========================================================*/

function mostrarMensajeEvento() {

    const titulo = document.querySelector(

        ".countdown-section h2"

    );

    titulo.textContent =

        "🎉 ¡Hoy es el gran día! 🎉";

}

/*==========================================================
            REPRODUCIR MUSICA
==========================================================*/

musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }

});

/*==========================================================
        ICONO PLAY / PAUSA
==========================================================*/

music.addEventListener("play", () => {

    playIcon.classList.remove("fa-play");

    playIcon.classList.add("fa-pause");

});

music.addEventListener("pause", () => {

    playIcon.classList.remove("fa-pause");

    playIcon.classList.add("fa-play");

});

/*==========================================================
            FIN PARTE 1
==========================================================*/
/*==========================================================
        SCRIPT.JS
        PARTE 2
        PARTICULAS - EFECTOS - TARJETA
==========================================================*/


/*==========================================================
                PARTICULAS
==========================================================*/

crearParticulas();

function crearParticulas() {

    if (!particlesContainer) return;

    for (let i = 0; i < 45; i++) {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.style.left = Math.random() * 100 + "%";

        const size = 2 + Math.random() * 5;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particle.style.opacity = .2 + Math.random() * .7;

        particle.style.animationDuration =
            8 + Math.random() * 8 + "s";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        particlesContainer.appendChild(particle);

    }

}


/*==========================================================
            EFECTO TARJETA
==========================================================*/

function iluminarTarjeta() {

    invitationCard.animate(

        [

            {
                transform: "scale(1)"
            },

            {
                transform: "scale(1.015)"
            },

            {
                transform: "scale(1)"
            }

        ],

        {

            duration: 800

        }

    );

}


/*==========================================================
        BRILLO CONTADOR
==========================================================*/

countdownBoxes.forEach(box => {

    box.addEventListener("mouseenter", () => {

        box.animate(

            [

                {

                    transform: "translateY(0px)"

                },

                {

                    transform: "translateY(-8px)"

                },

                {

                    transform: "translateY(0px)"

                }

            ],

            {

                duration: 350

            }

        );

    });

});


/*==========================================================
        ANIMACION FOTO
==========================================================*/

const photo = document.querySelector(".photo-frame");

if (photo) {

    photo.animate(

        [

            {

                transform: "translateY(0px)"

            },

            {

                transform: "translateY(-10px)"

            },

            {

                transform: "translateY(0px)"

            }

        ],

        {

            duration: 5000,

            iterations: Infinity

        }

    );

}


/*==========================================================
        MUSICA INICIADA
==========================================================*/

music.addEventListener("play", () => {

    iluminarTarjeta();

});


/*==========================================================
        TITULO
==========================================================*/

const title = document.querySelector(".title");

setInterval(() => {

    if (!title) return;

    title.animate(

        [

            {

                letterSpacing: "4px"

            },

            {

                letterSpacing: "8px"

            },

            {

                letterSpacing: "4px"

            }

        ],

        {

            duration: 2200

        }

    );

}, 5000);


/*==========================================================
            DESTELLO BOTON PLAY
==========================================================*/

setInterval(() => {

    if (!music.paused) return;

    musicButton.animate(

        [

            {

                transform: "scale(1)"

            },

            {

                transform: "scale(1.08)"

            },

            {

                transform: "scale(1)"

            }

        ],

        {

            duration: 1800

        }

    );

}, 2500);


/*==========================================================
        FIN PARTE 2
==========================================================*/
/*==========================================================
        SCRIPT.JS
        PARTE 3
        ECUALIZADOR - EFECTOS DE MÚSICA
==========================================================*/


/*==========================================================
            CREAR ECUALIZADOR
==========================================================*/

let equalizerCreated = false;

function crearEcualizador() {

    if (equalizerCreated) return;

    equalizerCreated = true;

    const musicSection = document.querySelector(".music-section");

    const equalizer = document.createElement("div");

    equalizer.id = "equalizer";

    for (let i = 0; i < 5; i++) {

        const bar = document.createElement("span");

        bar.className = "eq-bar";

        equalizer.appendChild(bar);

    }

    musicSection.appendChild(equalizer);

}


/*==========================================================
        ANIMACION ECUALIZADOR
==========================================================*/

let equalizerInterval = null;

function iniciarEcualizador() {

    crearEcualizador();

    const bars = document.querySelectorAll(".eq-bar");

    if (equalizerInterval) {

        clearInterval(equalizerInterval);

    }

    equalizerInterval = setInterval(() => {

        bars.forEach(bar => {

            bar.style.height =
                (10 + Math.random() * 35) + "px";

        });

    }, 180);

}


function detenerEcualizador() {

    clearInterval(equalizerInterval);

    equalizerInterval = null;

    document.querySelectorAll(".eq-bar").forEach(bar => {

        bar.style.height = "10px";

    });

}


/*==========================================================
        REPRODUCCION
==========================================================*/

music.addEventListener("play", () => {

    iniciarEcualizador();

});


music.addEventListener("pause", () => {

    detenerEcualizador();

});


music.addEventListener("ended", () => {

    detenerEcualizador();

    playIcon.classList.remove("fa-pause");

    playIcon.classList.add("fa-play");

});


/*==========================================================
        EFECTO BOTON PLAY
==========================================================*/

musicButton.addEventListener("mouseenter", () => {

    musicButton.animate(

        [

            {

                transform: "scale(1)"

            },

            {

                transform: "scale(1.12)"

            },

            {

                transform: "scale(1)"

            }

        ],

        {

            duration: 500

        }

    );

});


/*==========================================================
        RESPUESTA DE LA TARJETA
==========================================================*/

music.addEventListener("play", () => {

    invitationCard.animate(

        [

            {

                boxShadow:
                    "0 0 25px rgba(30,91,255,.20)"

            },

            {

                boxShadow:
                    "0 0 70px rgba(77,163,255,.65)"

            },

            {

                boxShadow:
                    "0 0 25px rgba(30,91,255,.20)"

            }

        ],

        {

            duration: 1800

        }

    );

});


/*==========================================================
        BRILLO PERIODICO
==========================================================*/

setInterval(() => {

    if (music.paused) return;

    invitationCard.animate(

        [

            {

                transform: "scale(1)"

            },

            {

                transform: "scale(1.01)"

            },

            {

                transform: "scale(1)"

            }

        ],

        {

            duration: 900

        }

    );

}, 3000);


/*==========================================================
        EFECTO BOTONES
==========================================================*/

document.querySelectorAll(".btn-custom").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.animate(

            [

                {

                    transform: "scale(.97)"

                },

                {

                    transform: "scale(1.03)"

                },

                {

                    transform: "scale(1)"

                }

            ],

            {

                duration: 250

            }

        );

    });

});


/*==========================================================
            FIN PARTE 3
==========================================================*/
/*==========================================================
        SCRIPT.JS
        PARTE 4
        EFECTOS PREMIUM - INTERACCIONES
==========================================================*/


/*==========================================================
        EFECTO PARALLAX
==========================================================*/

document.addEventListener("mousemove", (e) => {

    if (window.innerWidth < 768) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;

    invitationCard.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave", () => {

    invitationCard.style.transform =
        "rotateY(0deg) rotateX(0deg)";

});


/*==========================================================
        BRILLO BOTONES
==========================================================*/

document.querySelectorAll(".btn-custom").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.animate(

            [
                {
                    transform: "translateY(0)"
                },
                {
                    transform: "translateY(-6px)"
                },
                {
                    transform: "translateY(0)"
                }

            ],

            {
                duration: 450
            }

        );

    });

});


/*==========================================================
        EFECTO FOTO
==========================================================*/

if (photo) {

    photo.addEventListener("mouseenter", () => {

        photo.animate(

            [

                {
                    transform: "scale(1)"
                },

                {
                    transform: "scale(1.04)"
                },

                {
                    transform: "scale(1)"
                }

            ],

            {

                duration: 600

            }

        );

    });

}


/*==========================================================
        EFECTO TITULO
==========================================================*/

function brilloTitulo() {

    if (!title) return;

    title.animate(

        [

            {

                textShadow:
                    "0 0 10px rgba(77,163,255,.3)"

            },

            {

                textShadow:
                    "0 0 35px rgba(77,163,255,.9)"

            },

            {

                textShadow:
                    "0 0 10px rgba(77,163,255,.3)"

            }

        ],

        {

            duration: 2200

        }

    );

}

setInterval(brilloTitulo, 4500);


/*==========================================================
        EFECTO CONTADOR
==========================================================*/

countdownBoxes.forEach(box => {

    box.addEventListener("mouseenter", () => {

        box.animate(

            [

                {

                    transform: "scale(1)"

                },

                {

                    transform: "scale(1.05)"

                },

                {

                    transform: "scale(1)"

                }

            ],

            {

                duration: 350

            }

        );

    });

});


/*==========================================================
        REACCION A LA MUSICA
==========================================================*/

music.addEventListener("play", () => {

    document.body.classList.add("music-playing");

});

music.addEventListener("pause", () => {

    document.body.classList.remove("music-playing");

});


/*==========================================================
        EFECTO TARJETA
==========================================================*/

setInterval(() => {

    if (music.paused) return;

    invitationCard.animate(

        [

            {

                transform: "scale(1)"

            },

            {

                transform: "scale(1.008)"

            },

            {

                transform: "scale(1)"

            }

        ],

        {

            duration: 1200

        }

    );

}, 2800);


/*==========================================================
        MENSAJE CONSOLA
==========================================================*/

console.log(

"%c✨ Invitación XV Yoshua cargada correctamente",

"color:#4DA3FF;font-size:14px;font-weight:bold;"

);


/*==========================================================
        FIN PARTE 4
==========================================================*/
/*==========================================================
        SCRIPT.JS
        PARTE 5 (FINAL)
        OPTIMIZACIÓN Y CIERRE
==========================================================*/


/*==========================================================
        PREVENIR DOBLE CLICK PLAY
==========================================================*/

let reproduciendo = false;

music.addEventListener("play", () => {

    reproduciendo = true;

});

music.addEventListener("pause", () => {

    reproduciendo = false;

});

musicButton.addEventListener("dblclick", (e) => {

    e.preventDefault();

});


/*==========================================================
        ENFOQUE DE LA PESTAÑA
==========================================================*/

document.addEventListener("visibilitychange", () => {

    if (document.hidden && !music.paused) {

        music.pause();

    }

});


/*==========================================================
        EFECTO DE ENTRADA
==========================================================*/

window.addEventListener("load", () => {

    invitationCard.animate(

        [

            {

                opacity:0,

                transform:"translateY(40px)"

            },

            {

                opacity:1,

                transform:"translateY(0)"

            }

        ],

        {

            duration:1200,

            easing:"ease-out"

        }

    );

});


/*==========================================================
        MENSAJE ESPECIAL
==========================================================*/

(function(){

    const hoy = new Date();

    const dia = hoy.getDate();

    const mes = hoy.getMonth() + 1;

    const anio = hoy.getFullYear();

    if(
        dia===18 &&
        mes===7 &&
        anio===2026
    ){

        const mensaje = document.createElement("div");

        mensaje.className = "eventoday";

        mensaje.innerHTML =

        "🎉<br>¡Hoy celebramos los XV años de Yoshua!<br>🎉";

        const contador = document.querySelector(".countdown-section");

        contador.parentNode.insertBefore(

            mensaje,

            contador

        );

    }

})();


/*==========================================================
        SALUDO EN CONSOLA
==========================================================*/

console.log(
"%cGracias por formar parte de este momento especial.",
"color:#8CC8FF;font-size:13px;font-weight:bold;"
);

console.log(
"%cInvitación desarrollada especialmente para Yoshua.",
"color:#FFFFFF;font-size:12px;"
);


/*==========================================================
        FIN
==========================================================*/
