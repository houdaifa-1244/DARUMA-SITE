// Fichier JavaScript principal pour Daruma Construction 

// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navbarLinks = document.querySelector('.navbar-links');
  
  if (hamburger && navbarLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navbarLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = navbarLinks.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbarLinks.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navbarLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navbarLinks.classList.remove('active');
      }
    });
  }
});

// Carousel Projets
const carouselImages = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.carousel-dots .dot');
let currentIndex = 0;
let carouselInterval = null;

function showImage(index) {
  carouselImages.forEach((img, i) => {
    img.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentIndex = index;
}

function nextImage() {
  let next = (currentIndex + 1) % carouselImages.length;
  showImage(next);
}

function startCarousel() {
  carouselInterval = setInterval(nextImage, 3000);
}

function stopCarousel() {
  clearInterval(carouselInterval);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showImage(i);
    stopCarousel();
    startCarousel();
  });
});

if (carouselImages.length > 0) {
  showImage(0);
  startCarousel();
} 

// Hero Background Slideshow
const heroSlides = document.querySelectorAll('.hero-bg-slide');
let currentSlideIndex = 0;

function nextHeroSlide() {
  heroSlides[currentSlideIndex].classList.remove('active');
  currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
  heroSlides[currentSlideIndex].classList.add('active');
}

function startHeroSlideshow() {
  setInterval(nextHeroSlide, 4000);
}

if (heroSlides.length > 0) {
  startHeroSlideshow();
} 

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScrollTop = scrollTop;
});

// ===== NOUVEAUX EFFETS AVANCÉS =====

// Animation au scroll avec Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observer tous les éléments avec la classe 'animate-on-scroll'
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach(el => observer.observe(el));
});

// Effet de parallaxe pour les images
function parallaxEffect() {
  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach(element => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    element.style.transform = `translateY(${rate}px)`;
  });
}

window.addEventListener('scroll', parallaxEffect);

// Compteurs animés
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 secondes
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  });
}

// Observer pour déclencher les compteurs
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Effet de typing pour les titres
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Effet de hover 3D pour les cartes
function init3DCards() {
  const cards = document.querySelectorAll('.domaine-card, .mission-card, .vision-card, .engagements-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
}

// Effet de particules flottantes
function createFloatingParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'floating-particles';
  document.body.appendChild(particlesContainer);
  
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
  }
}

// Effet de scroll smooth avec indicateur de progression
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
}

// Effet de révélation de texte au scroll
function initTextReveal() {
  const textElements = document.querySelectorAll('h1, h2, h3, p');
  
  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('text-revealed');
      }
    });
  }, { threshold: 0.3 });
  
  textElements.forEach(el => textObserver.observe(el));
}

// Effet de morphing pour les boutons
function initMorphingButtons() {
  const buttons = document.querySelectorAll('.cta-btn, .premium-btn, .best-btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      button.style.setProperty('--mouse-x', x + 'px');
      button.style.setProperty('--mouse-y', y + 'px');
      button.classList.add('morphing');
    });
    
    button.addEventListener('mouseleave', () => {
      button.classList.remove('morphing');
    });
  });
}

// Initialisation de tous les effets
document.addEventListener('DOMContentLoaded', () => {
  // Initialiser les effets 3D
  init3DCards();
  
  // Créer les particules flottantes
  createFloatingParticles();
  
  // Initialiser la barre de progression
  initScrollProgress();
  
  // Initialiser la révélation de texte
  initTextReveal();
  
  // Initialiser les boutons morphing
  initMorphingButtons();
  
  // Observer les sections avec compteurs
  const counterSections = document.querySelectorAll('.confiance, .presentation-section');
  counterSections.forEach(section => counterObserver.observe(section));
  
  // Effet de typing sur le titre principal
  const mainTitle = document.querySelector('.hero-title, .page-header-content h1');
  if (mainTitle) {
    const originalText = mainTitle.textContent;
    typeWriter(mainTitle, originalText, 80);
  }
});

 