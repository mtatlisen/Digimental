/* DIM landing: tiny client JS (no frameworks) */

function onReady(fn) {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true });
  else fn();
}

onReady(() => {
  // Navbar: scrolled style (rAF throttled)
  const nav = document.querySelector('.nav');
  let rafId = 0;
  const updateScrolled = () => {
    rafId = 0;
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 50);
  };
  const onScroll = () => {
    if (rafId) return;
    rafId = window.requestAnimationFrame(updateScrolled);
  };
  updateScrolled();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const toggleBtn = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const iconMenu = document.querySelector('.icon-menu');
  const iconClose = document.querySelector('.icon-close');

  const setMenuOpen = (open) => {
    if (!toggleBtn || !mobileMenu) return;
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobileMenu.classList.toggle('hidden', !open);
    iconMenu?.classList.toggle('hidden', open);
    iconClose?.classList.toggle('hidden', !open);
  };

  toggleBtn?.addEventListener('click', () => {
    const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  mobileMenu?.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    setMenuOpen(false);
  });

  // Close menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (toggleBtn?.getAttribute('aria-expanded') === 'true') setMenuOpen(false);
  });

  // Product filters
  const filterButtons = Array.from(document.querySelectorAll('.filter[data-filter]'));
  const productsGrid = document.getElementById('productsGrid');
  if (filterButtons.length && productsGrid) {
    const products = Array.from(productsGrid.querySelectorAll('[data-brand]'));

    const applyFilter = (brand) => {
      for (const btn of filterButtons) {
        const isActive = btn.dataset.filter === brand;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      }

      for (const card of products) {
        const matches = brand === 'all' || card.dataset.brand === brand;
        card.classList.toggle('hidden', !matches);
      }
    };

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => applyFilter(btn.dataset.filter || 'all'));
    });
  }

  // Contact form: lightweight client success state (demo)
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!success) return;

    // Basic HTML validity check
    if (typeof form.reportValidity === 'function' && !form.reportValidity()) return;

    success.classList.remove('hidden');
    form.classList.add('hidden');
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

