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
        document.querySelectorAll('.nav-item:not(.regular-only .nav-item)').forEach(function(item) {
            item.textContent = item.getAttribute('data-active');

            item.addEventListener("click", () => {
                navLinks.classList.toggle("active", false)
                menuIcon.src = "./images/hamburguer.svg";
                menuLogo.classList.remove('visible');
            })
        });
    } else {
        menuIcon.src = "/images/hamburguer.svg";
        menuLogo.classList.remove('visible');

        // Delay da atualizacao texto
        setTimeout(function() {
            document.querySelectorAll('.nav-item:not(.regular-only .nav-item)').forEach(function(item) {
                item.textContent = item.getAttribute('data-default');

                item.addEventListener("click", () => {
                    navLinks.classList.toggle("active")
                })
            });
        }, 300); 
    }
});

const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', () => {
    const modal = document.querySelector(".entre-em-contato-container");
    modal.style.display = 'none';
    overlay.style.display = 'none';
})

document.getElementById("button-entre-em-contato").addEventListener('click', function() {
    const modal = document.querySelector(".entre-em-contato-container");
    modal.style.display = 'flex';
    overlay.style.display = 'block';
})

function entrarEmContato() {
    const nome = document.getElementById("nome-entre-em-contato").value
    const email = document.getElementById("email-entre-em-contato").value
    const telefone = "+55" + document.getElementById("telefone-entre-em-contato").value
    const mensagem = document.getElementById("mensagem-entre-em-contato").value
    const text = "Nome: " + nome + "\nEmail: " + email + "\nTelefone: " + telefone + "\n\n" + mensagem;
    const uri = `https://wa.me/+5582999848562?text=${text}`;
    const encoded = encodeURI(uri);
    console.log(encoded);
}