/* ------------------------------
   Script dinâmico e interativo
   (Pronto para expansão futura)
--------------------------------*/

// Animação suave de rolagem entre seções
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de fade-in ao rolar a página
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('section, .card');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
});

// Adiciona classe CSS dinamicamente
// (Os elementos com a classe "visible" podem ganhar efeitos de animação definidos no CSS)
/* =========================
   MENU FIXO E NAVEGAÇÃO SUAVE
========================= */

// Destacar o item ativo conforme o usuário rola
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let atual = "";

    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
            atual = sec.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${atual}`) {
            link.classList.add("active");
        }
    });
});
/* =========================
   MENU RESPONSIVO (HAMBÚRGUER)
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.querySelector(".nav-links");

// Alterna o menu ao clicar no ícone
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinksContainer.classList.toggle("open");
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navLinksContainer.classList.remove("open");
    });
});
