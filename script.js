/* ========================
   script.js — Eric Geovane
======================== */

// ── Cursor personalizado ──────────────────────────────────────────
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = `${e.clientX}px`;
  cursorDot.style.top  = `${e.clientY}px`;
});

function animateCursor() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  cursor.style.left = `${curX}px`;
  cursor.style.top  = `${curY}px`;
  requestAnimationFrame(animateCursor);
}
animateCursor();


// ── Header scroll ─────────────────────────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});


// ── Menu mobile ───────────────────────────────────────────────────
const menuBtn   = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});


// ── Canvas partículas ─────────────────────────────────────────────
const canvas = document.getElementById('bgCanvas');
const ctx    = canvas.getContext('2d');

let particles = [];
const PARTICLE_COUNT = 60;

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

function randomBetween(a, b) { return a + Math.random() * (b - a); }

function createParticle() {
  return {
    x:     randomBetween(0, canvas.width),
    y:     randomBetween(0, canvas.height),
    r:     randomBetween(0.5, 2.5),
    vx:    randomBetween(-0.3, 0.3),
    vy:    randomBetween(-0.4, -0.1),
    alpha: randomBetween(0.2, 0.7),
    hue:   randomBetween(260, 290),
  };
}

for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(createParticle());

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.alpha})`;
    ctx.fill();

    p.x += p.vx;
    p.y += p.vy;

    if (p.y < -10) {
      p.y = canvas.height + 10;
      p.x = randomBetween(0, canvas.width);
    }
    if (p.x < -10)  p.x = canvas.width + 10;
    if (p.x > canvas.width + 10) p.x = -10;
  });

  // Connections
  particles.forEach((p, i) => {
    particles.slice(i + 1).forEach(q => {
      const dx = p.x - q.x;
      const dy = p.y - q.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `hsla(270, 70%, 65%, ${0.12 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    });
  });

  requestAnimationFrame(drawParticles);
}
drawParticles();


// ── Reveal on scroll ──────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// Reveal hero immediately on load
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal').forEach(el => {
    el.classList.add('visible');
  });

  // Reveal outras seções
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll('.stat-card, .skill-item, .project-card, .form-group, .contato-item');
        children.forEach((child, i) => {
          setTimeout(() => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          }, i * 80);
        });
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.sobre, .habilidades, .projetos, .contato').forEach(sec => {
    // Prepare children for animation
    sec.querySelectorAll('.stat-card, .skill-item, .project-card, .form-group, .contato-item').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    sectionObserver.observe(sec);
  });
});


// ── Smooth active nav highlight ───────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--purple-light)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => navObserver.observe(sec));


// ── Formulário de contato (simulado) ─────────────────────────────
const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
      contactForm.reset();
      submitBtn.textContent = 'Enviar mensagem';
      submitBtn.disabled = false;
      formSuccess.classList.add('show');

      setTimeout(() => formSuccess.classList.remove('show'), 4000);
    }, 1200);
  });
}


// ── Skill tooltip ─────────────────────────────────────────────────
document.querySelectorAll('.skill-item').forEach(item => {
  item.setAttribute('title', item.dataset.skill);
});


// ── Typed effect — hero tag ───────────────────────────────────────
const heroTag = document.querySelector('.hero-tag');
if (heroTag) {
  const texts = ['Desenvolvedor Web', 'Front-end Dev', 'UI Enthusiast'];
  let idx = 0;
  let charIdx = 0;
  let deleting = false;
  let waiting = false;

  function typeEffect() {
    if (waiting) return;
    const current = texts[idx];

    if (!deleting) {
      heroTag.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        waiting = true;
        setTimeout(() => { waiting = false; }, 1800);
      }
    } else {
      heroTag.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        idx = (idx + 1) % texts.length;
      }
    }
  }

  setInterval(typeEffect, 80);
}