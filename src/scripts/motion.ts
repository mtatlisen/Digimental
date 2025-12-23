const prefersReducedMotion = () =>
	typeof window !== 'undefined' &&
	window.matchMedia &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setupReveal() {
	const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
	if (!nodes.length) return;

	// No animation if user prefers reduced motion.
	if (prefersReducedMotion()) {
		for (const el of nodes) el.classList.add('is-in');
		return;
	}

	const io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (!e.isIntersecting) continue;
				(e.target as HTMLElement).classList.add('is-in');
				io.unobserve(e.target);
			}
		},
		{ root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
	);

	for (const el of nodes) io.observe(el);
}

function setupNavbarScroll() {
	const nav = document.querySelector<HTMLElement>('[data-navbar]');
	if (!nav) return;

	const set = () => {
		const scrolled = window.scrollY > 20;
		nav.dataset.scrolled = scrolled ? 'true' : 'false';
	};
	set();
	window.addEventListener('scroll', set, { passive: true });
}

function setupHeroParallax() {
	const hero = document.querySelector<HTMLElement>('[data-hero]');
	if (!hero) return;
	if (prefersReducedMotion()) return;

	const tick = () => {
		const y = Math.min(240, Math.max(0, window.scrollY));
		hero.style.setProperty('--hero-parallax', `${y * 0.18}px`);
	};
	tick();
	window.addEventListener('scroll', tick, { passive: true });
}

function setupProductFilter() {
	const root = document.querySelector<HTMLElement>('[data-product-filter]');
	if (!root) return;

	const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>('button[data-brand]'));
	const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-card-brand]'));
	if (!buttons.length || !cards.length) return;

	let active = 'all';

	const apply = () => {
		for (const b of buttons) {
			const isActive = (b.dataset.brand ?? 'all') === active;
			b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
			b.classList.toggle('bg-emerald-500', isActive);
			b.classList.toggle('text-white', isActive);
			b.classList.toggle('bg-slate-800', !isActive);
			b.classList.toggle('text-slate-400', !isActive);
		}
		for (const c of cards) {
			const brand = c.dataset.cardBrand ?? '';
			const show = active === 'all' || brand === active;
			c.classList.toggle('hidden', !show);
		}
	};

	const onClick = (e: Event) => {
		const t = e.target as HTMLElement | null;
		const btn = t?.closest('button[data-brand]') as HTMLButtonElement | null;
		if (!btn) return;
		active = btn.dataset.brand ?? 'all';
		apply();
	};

	root.addEventListener('click', onClick);
	apply();
}

function setupContactForm() {
	const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
	const ok = document.querySelector<HTMLElement>('[data-contact-ok]');
	const wrap = document.querySelector<HTMLElement>('[data-contact-wrap]');
	if (!form || !ok || !wrap) return;

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		wrap.classList.add('hidden');
		ok.classList.remove('hidden');
	});
}

setupReveal();
setupNavbarScroll();
setupHeroParallax();
setupProductFilter();
setupContactForm();

