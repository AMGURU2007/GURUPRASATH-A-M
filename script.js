'use strict';

const portfolioConfig = {
  name: "GURUPRASATH A M",
  study: "Computer Science Student | Exploring AI & Data Science to Build Intelligent Solutions.",
  // Add your 2-3 hero portrait photos here; they will automatically animate at the exact same size!
 heroPhotos: [
    "images/profile-cutout.png",
    "images/profile-cutout-1.png",
    "images/profile-cutout-2.png",
    "images/profile-cutout-3.png"
  ],
  quotes: [
    { originalText: "தூக்கத்தில் வருவது கனவு அல்ல; உங்களைத் தூங்க விடாமல் வருவதே கனவு.", originalLanguage: "Tamil", englishTranslation: "A dream is not what you see in sleep; a dream is what keeps you awake.", author: "டாக்டர் A. P. J. அப்துல் கலாம் / Dr. A. P. J. Abdul Kalam" },
    { originalText: "Past is a waste paper, present is a newspaper, future is a question paper, so read and write carefully; otherwise, your life will be tissue paper.", originalLanguage: "English", englishTranslation: "Past is a waste paper, present is a newspaper, future is a question paper, so read and write carefully; otherwise, your life will be tissue paper.", author: "A. P. J. Abdul Kalam" },
    { context: "I asked an old lady why only good people seem to die earlier. She replied…", originalText: "When you go to pick a flower, which one do you take?", originalLanguage: "English", englishTranslation: "When you go to pick a flower, which one do you take?", author: "Velvettt Poetry" },
    { originalText: "Everything is beautiful depending on the situation. A school bell sounds irritating at 9 AM, but the same bell sounds melodious at 4 PM.", originalLanguage: "English", englishTranslation: "Everything is beautiful depending on the situation. A school bell sounds irritating at 9 AM, but the same bell sounds melodious at 4 PM.", author: "A. P. J. Abdul Kalam" },
    { originalText: "Everything is easy when you are busy, but nothing is easy when you are lazy.", originalLanguage: "English", englishTranslation: "Everything is easy when you are busy, but nothing is easy when you are lazy.", author: "Swami Vivekananda" },
    { originalText: "Life is an EEE: Yesterday is an Experience, Today is an Experiment, Tomorrow is an Expectation. So use your Experience, work on your Experiment, to achieve your Expectation.", originalLanguage: "English", englishTranslation: "Life is an EEE: Yesterday is an Experience, Today is an Experiment, Tomorrow is an Expectation. So use your Experience, work on your Experiment, to achieve your Expectation.", author: "" }
  ],
  about: {
    intro: "I'm a B.Sc Computer Science student with a deep interest in Artificial Intelligence and Data Science. I focus on studying neural network architectures, data modeling techniques, and backend script automation to turn ideas into intelligent systems.",
    education: "Pursuing B.Sc Computer Science at KG College of Arts and Science. Completed primary and secondary schooling at SSVM Vidhan Matriculation Hr. Sec. School.",
    interests: "My technical interests focus on machine learning algorithms, database optimization, responsive client web design, and smart home automation using IoT microcontrollers (ESP32).",
    credentials: ["B.Sc Computer Science Student", "KG College of Arts and Science", "SSVM Vidhan Matriculation Hr. Sec. School"]
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/a-m-guruprasath-907776337?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/am.guruprasath2007/",
    github: "https://github.com/AMGURU2007",
    whatsapp: "https://wa.me/9952391071",
    email: "amguruprasath2007@gmail.com"
  },
  photos: [
    { title: "Data Exploration & Model Validation", image: "images/photo-1.jpg", year: "AI / ML" },
    { title: "IoT Microcontroller Prototyping", image: "images/photo-2.jpg", year: "ESP32" }
  ],
  skills: [
    { category: "Languages", accent: "blue", items: ["Python", "Java", "JavaScript", "HTML5", "CSS3", "SQL"] },
    { category: "AI & Data Science", accent: "red", items: ["Artificial Intelligence", "Machine Learning", "Data Science", "Data Modeling", "Algorithm Design"] },
    { category: "Development & Tools", accent: "yellow", items: ["Web Development", "App Development", "Git", "GitHub", "API Integration", "VS Code"] },
    { category: "IoT & Automation", accent: "green", items: ["ESP32 Development", "Embedded C", "IoT Integration", "Automation Systems"] }
  ],
  projects: [
    { title: "Intelligent Systems Integration", description: "An automated workflow pipeline analyzing system metrics locally to optimize software load distributions.", image: "images/projects/project-1.jpg", technologies: ["Python", "Machine Learning", "Automation"], github: "https://github.com/AMGURU2007", demo: "" },
    { title: "Interactive Client Portal", description: "A fast, modular web application dashboard written in vanilla JS focusing on minimal loading speeds and high accessibility.", image: "images/projects/project-2.jpg", technologies: ["JavaScript", "HTML5", "CSS3", "Git"], github: "https://github.com/AMGURU2007", demo: "" }
  ]
};

const svgIcons = {
  instagram: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  github: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
  email: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`
};

const $ = (id) => document.getElementById(id);

document.addEventListener('DOMContentLoaded', () => {
  // First-time Welcome Animation Dismissal
  setTimeout(() => $('welcome-loader')?.classList.add('hide'), 1150);

  $('hero-name').textContent = portfolioConfig.name;
  $('hero-study').textContent = portfolioConfig.study;
  $('profile-img').src = portfolioConfig.heroPhotos[0];$('footer-name-strong').textContent = portfolioConfig.name;
  $('footer-year').textContent = new Date().getFullYear();$('about-intro-text').textContent = portfolioConfig.about.intro;
  $('about-education-text').textContent = portfolioConfig.about.education;
  $('about-interests-text').textContent = portfolioConfig.about.interests;
  $('about-credentials-box').innerHTML = portfolioConfig.about.credentials.map(c => `<span class="cred-badge prox-word">${c}</span>`).join('');

  const socialCards = $('hero-social-cards'), contactBtns =$('contact-buttons-container');
  Object.entries(portfolioConfig.socials).forEach(([k, val]) => {
    const url = k === 'email' ? `mailto:${val}` : val, ext = k !== 'email' ? 'target="_blank" rel="noopener noreferrer"' : '';
    socialCards.insertAdjacentHTML('beforeend', `<a href="${url}" class="social-icon-btn ${k} magnetic-element" aria-label="${k}" ${ext}><span style="display:inline-flex">${svgIcons[k] || ''}</span></a>`);
    contactBtns.insertAdjacentHTML('beforeend', `<a href="${url}" class="btn contact-btn magnetic-element" ${ext}><span style="display:inline-flex">${svgIcons[k] || ''}</span><span class="prox-word">${k[0].toUpperCase() + k.slice(1)}</span></a>`);
  });

  $('skills-grid').innerHTML = portfolioConfig.skills.map(g => `
    <div class="skills-category-card glass-panel accent-${g.accent} scroll-item">
      <h3 class="skills-category-title">${g.category}</h3>
      <div class="skills-badges-container">${g.items.map(s => `<span class="skill-badge prox-word">${s}</span>`).join('')}</div>
    </div>`).join('');

  $('projects-grid').innerHTML = portfolioConfig.projects.map(p => `
    <article class="project-card glass-panel scroll-item">
      <div class="project-image-wrapper"><img src="${p.image}" alt="${p.title}" class="project-card-image" loading="lazy"></div>
      <div class="project-info-wrapper">
        <h3 class="project-card-title">${p.title}</h3>
        <p class="project-card-desc">${p.description}</p>
        <div class="project-tags-wrapper">${p.technologies.map(t => `<span class="project-tag prox-word">${t}</span>`).join('')}</div>
        <div class="project-links-wrapper">
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn project-link-btn">GitHub</a>
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary project-link-btn">Live Demo</a>` : ''}
        </div>
      </div>
    </article>`).join('');

  initPortfolioAdditions();
  initAllTextColorSplitting();
  initHeroPhotoSwitcher();
  initMobileNavAndBackToTop();
  initScrollAnimations();
  initAllDeviceCursorAndTextFX();
  initParticleSystem();
  initQuoteCarousel();
});

/* Split ALL titles, hero name, headings & text into multi-color interactive words */
function initAllTextColorSplitting() {
  const targets = document.querySelectorAll('#hero-name, #hero-study, .section-pretitle, .section-title, .about-intro-heading, .about-card h3, .vision-mission-card h3, .skills-category-title, .project-card-title, .journey-card h3, .contact-title, .about-left-text p, .about-card p, .vision-mission-card p, .project-card-desc, .journey-card p, .contact-description');
  let colorCounter = 0;
  targets.forEach(el => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map(w => `<span class="prox-word" data-c="${(colorCounter++) % 4}">${w}</span>`).join(' ');
  });
  document.querySelectorAll('.prox-word').forEach((el, i) => {
    if (!el.hasAttribute('data-c')) el.setAttribute('data-c', i % 4);
  });
}

/* Multi-Photo Hero Rotation at Uniform Size */
/* Multi-Photo Hero Rotation at Uniform Size */
function initHeroPhotoSwitcher() {
  const img = $('profile-img'), photos = portfolioConfig.heroPhotos;
  if (!img || !photos || photos.length <= 1) return;
  let idx = 0;
  setInterval(() => {
    img.classList.add('photo-switch-out');
    setTimeout(() => {
      idx = (idx + 1) % photos.length;
      img.src = photos[idx];
      img.onload = () => img.classList.remove('photo-switch-out');
      setTimeout(() => img.classList.remove('photo-switch-out'), 120);
    }, 420);
  }, 5500); 
}

/* Fast Inspired Words Carousel with Auto Tamil-to-English Translation */
function initQuoteCarousel() {
  const stage = $('quote-stage'), lang =$('quote-language'), text = $('quote-text'), auth =$('quote-author'), ctx = $('quote-context'), inds =$('quote-indicators'), quotes = portfolioConfig.quotes;
  if (!stage || !quotes.length) return;
  let idx = 0, timer = null;

  const setContent = (i, trans = false) => {
    const q = quotes[i];
    stage.classList.add('quote-fade');
    setTimeout(() => {
      lang.textContent = trans ? 'English Translation' : q.originalLanguage;
      const raw = trans ? q.englishTranslation : q.originalText;
      text.innerHTML = raw.split(/\s+/).map((w, wi) => `<span class="prox-word" data-c="${wi % 4}">${w}</span>`).join(' ');
      auth.textContent = q.author ? `— ${q.author}` : '';
      if (ctx) ctx.textContent = q.context || '';
      stage.classList.remove('quote-fade');
    }, 240);
    inds?.querySelectorAll('button').forEach((b, bi) => b.classList.toggle('is-active', bi === i));
  };

  const runCycle = () => {
    clearTimeout(timer);
    const q = quotes[idx];
    if (q.originalText !== q.englishTranslation) {
      timer = setTimeout(() => {
        setContent(idx, true);
        timer = setTimeout(() => move(1), 3200);
      }, 2400);
    } else {
      timer = setTimeout(() => move(1), 3500);
    }
  };

  const move = (step) => { idx = (idx + step + quotes.length) % quotes.length; setContent(idx, false); runCycle(); };
  quotes.forEach((_, i) => {
    const b = document.createElement('button'); b.className = 'quote-indicator';
    b.onclick = () => { idx = i; setContent(idx, false); runCycle(); }; inds?.appendChild(b);
  });
  $('quote-previous')?.addEventListener('click', () => move(-1));$('quote-next')?.addEventListener('click', () => move(1));
  setContent(0, false); runCycle();
}

/* Staggered Scroll Reveal Animations */
function initScrollAnimations() {
  const sections = document.querySelectorAll('section'), navLinks = document.querySelectorAll('.nav-link');
  document.querySelectorAll('.about-card, .vision-mission-card, .journey-item, .certificate-card, .event-photo-card').forEach((el, i) => {
    el.classList.add('scroll-item');
    el.style.setProperty('--delay', `${(i % 4) * 0.07}s`);
  });

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
      else if (e.boundingClientRect.top > window.innerHeight) e.target.classList.remove('visible');
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal-on-scroll, .scroll-item').forEach(el => revealObs.observe(el));

  const navObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  sections.forEach(s => navObs.observe(s));
}

/* All-Device Cursor & Touch Proximity Multi-Color Text Engine */
function initAllDeviceCursorAndTextFX() {
  const dot = $('cursor-dot'), follower =$('cursor-follower');
  let px = -999, py = -999, fx = 0, fy = 0, pointerActive = false, hue = 220;

  const updatePointer = (x, y) => {
    px = x; py = y; pointerActive = true;
    if (dot && follower && window.innerWidth > 768) {
      dot.style.opacity = follower.style.opacity = '1';
      dot.style.transform = `translate3d(${px}px,${py}px,0) translate(-50%,-50%)`;
    }
  };

  window.addEventListener('mousemove', e => updatePointer(e.clientX, e.clientY), { passive: true });
  window.addEventListener('touchstart', e => e.touches[0] && updatePointer(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  window.addEventListener('touchmove', e => e.touches[0] && updatePointer(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  window.addEventListener('touchend', () => { setTimeout(() => { pointerActive = false; document.querySelectorAll('.prox-active').forEach(el => el.classList.remove('prox-active')); }, 600); }, { passive: true });

  document.querySelectorAll('a, button, [role="button"], .certificate-card, .event-photo-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  function animate() {
    if (pointerActive) {
      fx += (px - fx) * 0.18; fy += (py - fy) * 0.18;
      hue = (hue + 1.5) % 360;
      if (follower && window.innerWidth > 768) {
        follower.style.transform = `translate3d(${fx}px,${fy}px,0) translate(-50%,-50%)`;
        dot.style.background = `hsl(${hue}, 85%, 55%)`;
      }

      let nearAny = false;
      const radius = window.innerWidth <= 768 ? 95 : 75;
      document.querySelectorAll('.prox-word').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const dist = Math.hypot(px - (r.left + r.width / 2), py - (r.top + r.height / 2));
        const hit = dist < Math.max(radius, r.width * 0.55);
        el.classList.toggle('prox-active', hit);
        if (hit) nearAny = true;
      });
      document.body.classList.toggle('cursor-text-near', nearAny);
    }
    requestAnimationFrame(animate);
  }
  animate();
}

/* Mobile Nav & Back to Top */
function initMobileNavAndBackToTop() {
  const toggleBtn = document.querySelector('.mobile-toggle'), menu = $('mobile-menu'), header = document.querySelector('.navbar-header'), btt =$('back-to-top');
  const toggle = () => {
    const exp = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !exp);
    menu.classList.toggle('active');
    document.body.style.overflow = !exp ? 'hidden' : '';
  };
  toggleBtn?.addEventListener('click', toggle);
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(l => l.addEventListener('click', () => menu.classList.contains('active') && toggle()));
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 40);
    btt?.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });
  btt?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* Hero Particle System */
function initParticleSystem() {
  const canvas = $('particle-canvas'), hero = canvas?.closest('.hero-section');
  if (!canvas || !hero) return;
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, bubbles = [];
  const resize = () => { w = canvas.width = hero.offsetWidth; h = canvas.height = hero.offsetHeight; bubbles = Array.from({ length: 30 }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4, r: Math.random() * 3.5 + 1.5, hue: Math.random() > 0.5 ? 264 : 218 })); };
  window.addEventListener('resize', resize, { passive: true }); resize();
  (function draw() {
    ctx.clearRect(0, 0, w, h);
    bubbles.forEach(b => {
      b.x = (b.x + b.vx + w) % w; b.y = (b.y + b.vy + h) % h;
      ctx.beginPath(); ctx.fillStyle = `hsla(${b.hue},80%,70%,0.18)`; ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctx.fill();
    });
    requestAnimationFrame(draw);
  })();
}

/* Redesigned Journey, Certificates & Unified Photo Gallery */
function initPortfolioAdditions() {
  const data = window.PORTFOLIO_CONTENT || { journey: [], certificates: [], events: [] };
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const journey = $('journey-timeline'), certGrid = $('certificate-grid'), search =$('certificate-search'), filter = $('certificate-filter'), eventGrid =$('event-gallery-grid');

  if (journey) {
    journey.innerHTML = data.journey.map((x, idx) => `
      <article class="journey-item scroll-item">
        <div class="journey-top-bar">
          <span class="journey-year">${esc(x.year)}</span>
          <span class="journey-step-num">STEP 0${idx + 1}</span>
        </div>
        <div class="journey-card">
          ${x.image ? `<img loading="lazy" src="${esc(x.image)}" alt="${esc(x.title)}" onerror="this.style.display='none'">` : ''}
          <div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div>
        </div>
      </article>`).join('');
  }

  const renderCerts = () => {
    if (!certGrid) return;
    const q = (search?.value || '').toLowerCase().trim(), cat = filter?.value || 'all';
    const items = data.certificates.filter(c => (cat === 'all' || c.category === cat) && (`${c.title} ${c.category}`).toLowerCase().includes(q));
    certGrid.innerHTML = items.length ? items.map(c => `<button class="certificate-card scroll-item visible" type="button" data-lightbox="${esc(c.image)}" data-caption="${esc(c.title)}"><img loading="lazy" src="${esc(c.image)}" alt="${esc(c.title)}"><span class="certificate-card-copy"><strong class="prox-word">${esc(c.title)}</strong><small>${esc(c.category)}</small></span></button>`).join('') : '<p class="empty-gallery">No certificates match your search.</p>';
  };
  search?.addEventListener('input', renderCerts); filter?.addEventListener('change', renderCerts); renderCerts();

  // Merge initial photos + event photos into the single unified Photo Gallery
  const allPhotos = [...portfolioConfig.photos, ...(data.events || [])];
  if (eventGrid) {
    eventGrid.innerHTML = allPhotos.map((e, i) => `
      <button class="event-photo-card scroll-item" type="button" data-lightbox="${esc(e.image)}" data-caption="${esc(e.title)}">
        <img loading="lazy" src="${esc(e.image)}" alt="${esc(e.title)}">
        <span><strong class="prox-word" data-c="${i % 4}">${esc(e.title)}</strong> <small>${esc(e.year || '')}</small></span>
      </button>`).join('');
  }

  let modal = $('portfolio-lightbox');
  if (!modal) {
    modal = document.createElement('div'); modal.id = 'portfolio-lightbox'; modal.className = 'portfolio-lightbox';
    modal.innerHTML = '<button class="lightbox-close" aria-label="Close">×</button><img alt=""><p></p>';
    document.body.appendChild(modal);
  }
  const close = () => { modal.classList.remove('open'); modal.querySelector('img').src = ''; };
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-lightbox]');
    if (b) { modal.querySelector('img').src = b.dataset.lightbox; modal.querySelector('p').textContent = b.dataset.caption || ''; modal.classList.add('open'); }
    if (e.target === modal || e.target.closest('.lightbox-close')) close();
  });
  document.addEventListener('keydown', e => e.key === 'Escape' && close());
}