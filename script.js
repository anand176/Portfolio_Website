// =============================================
// Custom Cursor
// =============================================
const cursor    = document.getElementById('cursor');
const cursorDot = document.getElementById('cursor-dot');

let mouseX = -100, mouseY = -100;
let dotX   = -100, dotY   = -100;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

function animateCursor() {
  dotX += (mouseX - dotX) * 0.12;
  dotY += (mouseY - dotY) * 0.12;
  if (cursor) {
    cursor.style.left = dotX + 'px';
    cursor.style.top  = dotY + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .neo-card, .skill-tag, .tag-neo, .tech-pill, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor && cursor.classList.add('hovered'));
  el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hovered'));
});

// =============================================
// Mobile Menu
// =============================================
const menuToggle = document.getElementById('mobile-menu-toggle');
const navMenu    = document.getElementById('nav-menu');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    if (menuToggle) menuToggle.classList.remove('active');
  });
});

// =============================================
// Smooth Scroll
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navH = document.querySelector('.navbar').offsetHeight;
      window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
    }
  });
});

// =============================================
// Scroll Reveal
// =============================================
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.1 + 's';
  revealObs.observe(el);
});

// Stagger siblings within the same grid parent
const staggerObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const parent   = entry.target.closest('.projects-grid, .skills-grid, .achieve-col');
      const siblings = parent ? parent.querySelectorAll('.reveal') : [entry.target];
      siblings.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 120);
      });
      staggerObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll(
  '.projects-grid .project-card, .skills-grid .skill-block, .achieve-col .achieve-card'
).forEach(el => staggerObs.observe(el));

// =============================================
// Active Nav Link on Scroll
// =============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollPos = window.pageYOffset + 130;
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + section.id) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// =============================================
// Marquee — pause on hover
// =============================================
const marqueeInner = document.querySelector('.marquee-inner');
const marqueeStrip = document.querySelector('.marquee-strip');

if (marqueeStrip && marqueeInner) {
  marqueeStrip.addEventListener('mouseenter', () => {
    marqueeInner.style.animationPlayState = 'paused';
  });
  marqueeStrip.addEventListener('mouseleave', () => {
    marqueeInner.style.animationPlayState = 'running';
  });
}

// =============================================
// Glitch — trigger on hover for the title
// =============================================
document.querySelectorAll('.glitch').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.animation = 'none';
    el.querySelectorAll('::before, ::after');
    requestAnimationFrame(() => {
      el.style.animation = '';
    });
  });
});

// =============================================
// Counter animation for stat numbers
// =============================================
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const duration = 1200;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const statObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const raw = el.dataset.target;
      if (raw) {
        const num    = parseInt(raw);
        const suffix = raw.replace(num.toString(), '');
        animateCounter(el, num, suffix);
      }
      statObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num, .stat-num').forEach(el => {
  const text = el.textContent.trim();
  el.dataset.target = text;
  el.textContent = '0' + (text.includes('+') ? '+' : '');
  statObs.observe(el);
});

// =============================================
// Project card tilt on mouse move
// =============================================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect  = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `translate(4px, 4px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
    card.style.boxShadow = '2px 2px 0 #0a0a0a';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});

// =============================================
// Footer year
// =============================================
const yearEl = document.querySelector('.footer-copy');
if (yearEl) {
  yearEl.textContent = yearEl.textContent.replace('2026', new Date().getFullYear());
}

// =============================================
// Console Easter egg
// =============================================
console.log('%c AH_ ', 'font-size:28px; font-weight:900; background:#FFD60A; color:#0a0a0a; padding:4px 8px;');
console.log('%c github.com/anand176 ', 'font-size:13px; font-family:monospace; color:#FFD60A; background:#0a0a0a; padding:2px 6px;');
