// Script para adicionar classe 'scrolled' ao header quando a página é rolada
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Script para scroll suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Script para animar as skill cards quando entram na viewport
const skillCards = document.querySelectorAll('.skill-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.5 });

skillCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});

// Script para animar os itens da timeline quando entram na viewport
// const timelineItems = document.querySelectorAll('.timeline-item');

// const timelineObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animate');
//         }
//     });
// }, { threshold: 0.5 });

// timelineItems.forEach(item => {
//     item.style.opacity = 0;
//     item.style.transform = 'translateX(-50px)';
//     item.style.transition = 'opacity 0.5s, transform 0.5s';
//     timelineObserver.observe(item);
// });


// Script para o carrossel
const carousel = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
let currentIndex = 0;

function showItem(index) {
    if (index < 0) {
        currentIndex = items.length - 1;
    } else if (index >= items.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => showItem(currentIndex - 1));
nextBtn.addEventListener('click', () => showItem(currentIndex + 1));

// Adicionar funcionalidade de swipe para dispositivos móveis
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

carousel.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
        showItem(currentIndex + 1);
    } else if (touchEndX - touchStartX > 50) {
        showItem(currentIndex - 1);
    }
});



// EFEITO ESCREVER NO TITLE

const text = "Olá, eu sou Luis Tomaz";
const typingText = document.getElementById('typing-text');
let index = 0;

function type() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (index > 0) {
        typingText.innerHTML = text.substring(0, index - 1);
        index--;
        setTimeout(erase, 50);
    } else {
        setTimeout(type, 500);
    }
}

// Inicie a animação
type();