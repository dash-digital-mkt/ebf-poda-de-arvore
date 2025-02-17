document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    var menuIcon = document.getElementById('menu-icon');
    var menuLogo = document.getElementById('menu-logo');
    // Visibilidade menu
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        menuIcon.src = "./images/fechar-menu.png";
        menuLogo.classList.add('visible');

        // mudando os textos instantaneamente
        item.addEventListener("click", () => {
            navLinks.classList.toggle("active", false)
            menuIcon.src = "./images/hamburguer.svg";
            menuLogo.classList.remove('visible');
        })

    } else {
        menuIcon.src = "/images/hamburguer.svg";
        menuLogo.classList.remove('visible');
    }
});

const overlay = document.querySelector('.overlay');
if (overlay) {
    overlay.addEventListener('click', () => {
        const modal = document.querySelector(".entre-em-contato-container");
        modal.style.display = 'none';
        overlay.style.display = 'none';
    })
}

const botaoEntreEmContato = document.getElementById("button-entre-em-contato");
if (botaoEntreEmContato) {
    botaoEntreEmContato.addEventListener('click', function() {
        const modal = document.querySelector(".entre-em-contato-container");
        modal.style.display = 'flex';
        overlay.style.display = 'block';
    })
}

const botaoEntreEmContatoFooter = document.getElementById("button-entre-em-contato-footer");
if (botaoEntreEmContatoFooter) {
    botaoEntreEmContatoFooter.addEventListener('click', function() {
        const modal = document.querySelector(".entre-em-contato-container");
        modal.style.display = 'flex';
        overlay.style.display = 'block';
    });
}

const setaServicos = document.querySelector('.seta-servicos');
if (setaServicos) {
    setaServicos.addEventListener('click', (event) => {
        colapsar(event);
    })
}

const navServicos = document.querySelectorAll('.nav-servicos');
if (navServicos.length) {
    navServicos.forEach(ns => {
        ns.addEventListener('click', (event) => {
            if (window.location.href.includes("index.html")) {
                colapsar(event);
            } else {
                window.location.href = "index.html?abrir=colapsavel"
            }
        })
    })
}

window.addEventListener("load", e => {
    const params = new URLSearchParams(window.location.search);
    const classeElemento = params.get("abrir");
    if (classeElemento) {
        colapsar(e);
    }
})

function colapsar(event) {
    event.preventDefault();
    const colapsaveis = document.querySelectorAll('.colapsavel');
    colapsaveis.forEach(colapsavel => {
        if (colapsavel.style.display !== 'block') {            
            colapsavel.style.display = 'block';
            if (colapsavel.classList.contains('destaque')) {
                colapsavel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            colapsavel.style.display = 'none';
        }
    });
}

function entrarEmContato() {
    const nome = document.getElementById("nome-entre-em-contato").value
    const email = document.getElementById("email-entre-em-contato").value
    const telefone = "+55" + document.getElementById("telefone-entre-em-contato").value
    const mensagem = document.getElementById("mensagem-entre-em-contato").value
    const text = "Nome: " + nome + "\nEmail: " + email + "\nTelefone: " + telefone + "\n\n" + mensagem;
    const uri = `https://wa.me/+556198052164?text=${text}`;
    const encoded = encodeURI(uri);
    window.open(encoded, "_blank");
}