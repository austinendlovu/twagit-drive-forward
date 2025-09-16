// Force dark theme, remove toggle logic
(function () {
  document.documentElement.classList.add('dark');
  try { localStorage.setItem('twagit-ui-theme', 'dark'); } catch (_) {}
  window.toggleTheme = function () { /* no-op */ };
})();

// Smooth scroll
function scrollToHash(href) {
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: 'smooth' });
}

// Mobile menu
const menuBtn = document.getElementById('open-menu');
const menuBackdrop = document.getElementById('menu-backdrop');
const menuPanel = document.getElementById('menu-panel');
const closeMenuBtn = document.getElementById('close-menu');

function openMenu() {
  menuBackdrop.classList.remove('hidden');
  menuPanel.classList.remove('hidden');
  requestAnimationFrame(() => {
    menuBackdrop.classList.add('open');
    menuPanel.classList.add('open');
  });
}
function closeMenu() {
  menuBackdrop.classList.remove('open');
  menuPanel.classList.remove('open');
  // wait for transition to finish then hide
  setTimeout(() => {
    menuBackdrop.classList.add('hidden');
    menuPanel.classList.add('hidden');
  }, 250);
}
if (menuBtn) menuBtn.addEventListener('click', openMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);

// Stats counters (IntersectionObserver + requestAnimationFrame)
function countUp(el, end, duration = 2000) {
  let startTime;
  function step(ts) {
    if (!startTime) startTime = ts;
    const progress = Math.min((ts - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(end * ease);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statsSection = document.getElementById('stats-section');
if (statsSection) {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      statsSection.querySelectorAll('[data-count]')
        .forEach(el => countUp(el, Number(el.getAttribute('data-count')), 2000));
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  observer.observe(statsSection);
}

// CTA buttons smooth scroll
document.querySelectorAll('[data-scroll]')
  .forEach(btn => btn.addEventListener('click', () => scrollToHash(btn.getAttribute('data-scroll'))));

// Initialize Lucide icons after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
  // Formspree submission with reload on success
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const action = form.getAttribute('action');
      try {
        const response = await fetch(action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });
        if (response.ok) {
          window.location.reload();
        } else {
          // fallback: still reload to clear fields per request
          window.location.reload();
        }
      } catch (_) {
        // network error: reload to keep behavior consistent
        window.location.reload();
      }
    });
  }
});


