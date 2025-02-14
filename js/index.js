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