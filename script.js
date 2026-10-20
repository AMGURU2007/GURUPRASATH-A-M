/* ==========================================================================
   Antigravity Portfolio Client Engine
   Strict Technology: Vanilla JavaScript (ES6) + Canvas API
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   1. Portfolio Configuration Object (Guruprasath Profile)
   -------------------------------------------------------------------------- */
const portfolioConfig = {
  name: "GURUPRASATH A M",
  study: "Computer Science Student | Exploring AI & Data Science to Build Intelligent Solutions.",
  tagline: "Computer Science Student | Exploring AI & Data Science to Build Intelligent Solutions.",
  
  // Hero multiple professional photos rotation configuration
  heroPhotos: [
    "images/profile-cutout.png",
    "images/profile-cutout.png" // User can replace this with profile-2.png / WebP later
  ],

  // Easy configuration parameters to adjust hero image positioning/scale on-the-fly
  heroImageSettings: {
    width: "86%",
    height: "auto",
    objectPosition: "center center",
    scale: 1,
    offsetX: 0,
    offsetY: 0
  },

  quotes: [
    {
      originalText: "தூக்கத்தில் வருவது கனவு அல்ல; உங்களைத் தூங்க விடாமல் வருவதே கனவு.",
      originalLanguage: "Tamil",
      englishTranslation: "A dream is not what you see in sleep; a dream is what keeps you awake.",
      author: "டாக்டர் A. P. J. அப்துல் கலாம் / Dr. A. P. J. Abdul Kalam"
    },
    {
      originalText: "Past is a waste paper, present is a newspaper, future is a question paper, so read and write carefully; otherwise, your life will be tissue paper.",
      originalLanguage: "English",
      englishTranslation: "Past is a waste paper, present is a newspaper, future is a question paper, so read and write carefully; otherwise, your life will be tissue paper.",
      author: "A. P. J. Abdul Kalam"
    },
    {
      context: "I asked an old lady why only good people seem to die earlier. She replied…",
      originalText: "When you go to pick a flower, which one do you take?",
      originalLanguage: "English",
      englishTranslation: "When you go to pick a flower, which one do you take?",
      author: "Velvettt Poetry"
    },
    {
      originalText: "Everything is beautiful depending on the situation. A school bell sounds irritating at 9 AM, but the same bell sounds melodious at 4 PM.",
      originalLanguage: "English",
      englishTranslation: "Everything is beautiful depending on the situation. A school bell sounds irritating at 9 AM, but the same bell sounds melodious at 4 PM.",
      author: "A. P. J. Abdul Kalam"
    },
    {
      originalText: "Everything is easy when you are busy, but nothing is easy when you are lazy.",
      originalLanguage: "English",
      englishTranslation: "Everything is easy when you are busy, but nothing is easy when you are lazy.",
      author: "Swami Vivekananda"
    },
    {
      originalText: "Life is an EEE: Yesterday is an Experience, Today is an Experiment, Tomorrow is an Expectation. So use your Experience, work on your Experiment, to achieve your Expectation.",
      originalLanguage: "English",
      englishTranslation: "Life is an EEE: Yesterday is an Experience, Today is an Experiment, Tomorrow is an Expectation. So use your Experience, work on your Experiment, to achieve your Expectation.",
      author: ""
    }
  ],
  
  about: {
    intro: "I'm a B.Sc Computer Science student with a deep interest in Artificial Intelligence and Data Science. I focus on studying neural network architectures, data modeling techniques, and backend script automation to turn ideas into intelligent systems.",
    education: "Pursuing B.Sc Computer Science at KG College of Arts and Science. Completed primary and secondary schooling at SSVM Vidhan Matriculation Hr. Sec.school",
    interests: "My technical interests focus on machine learning algorithms, database optimization, responsive client web design, and smart home automation using IoT microcontrollers (ESP32).",
    // Clean credentials rendered dynamically in the introduction
    credentials: [
      "B.Sc Computer Science Student",
      "KG College of Arts and Science",
      "SSVM Vidhya Dhir Alumnus"
    ]
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/a-m-guruprasath-907776337?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/am.guruprasath2007/",
    github: "https://github.com/AMGURU2007",
    whatsapp: "https://wa.me/9952391071",
    email: "amguruprasath2007@gmail.com"
  },

  // Unlimited photo database for the Gallery section
  photos: [
    {
      src: "images/photo-1.jpg",
      alt: "Analyzing machine learning datasets",
      caption: "Data exploration and model training validation"
    },
    {
      src: "images/photo-2.jpg",
      alt: "IoT hardware prototype design",
      caption: "Prototyping microcontroller controllers for automated systems"
    }
  ],

  skills: [
    {
      category: "Languages",
      accent: "blue",
      items: ["Python", "Java", "JavaScript", "HTML5", "CSS3", "SQL"]
    },
    {
      category: "AI & Data Science",
      accent: "red",
      items: ["Artificial Intelligence", "Machine Learning", "Data Science", "Data Modeling", "Algorithm Design"]
    },
    {
      category: "Development & Tools",
      accent: "yellow",
      items: ["Web Development", "App Development", "Git", "GitHub", "API Integration", "VS Code"]
    },
    {
      category: "IoT & Automation",
      accent: "green",
      items: ["ESP32 Development", "Embedded C", "IoT Integration", "Automation Systems"]
    }
  ],

  projects: [
    {
      title: "Intelligent Systems Integration",
      description: "An automated workflow pipeline analyzing system metrics locally to optimize software load distributions.",
      image: "images/projects/project-1.jpg",
      technologies: ["Python", "Machine Learning", "Automation"],
      github: "https://github.com/AMGURU2007",
      demo: ""
    },
    {
      title: "Interactive Client Portal",
      description: "A fast, modular web application dashboard written in vanilla JS focusing on minimal loading speeds and high accessibility.",
      image: "images/projects/project-2.jpg",
      technologies: ["JavaScript", "HTML5", "CSS3", "Git"],
      github: "https://github.com/AMGURU2007",
      demo: ""
    }
  ]
};

/* --------------------------------------------------------------------------
   2. SVG Social Icons Dictionary
   -------------------------------------------------------------------------- */
const svgIcons = {
  instagram: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  github: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
  email: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`
};

/* --------------------------------------------------------------------------
   3. DOM Binding and Population
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Bind core textual metadata
  document.getElementById('hero-name').textContent = portfolioConfig.name;
  document.getElementById('hero-study').textContent = portfolioConfig.study;
  const heroTagline = document.getElementById('hero-tagline');
  if (heroTagline) {
    heroTagline.textContent = portfolioConfig.tagline;
  }
  document.getElementById('profile-img').src = portfolioConfig.heroPhotos[0];
  document.getElementById('footer-name-strong').textContent = portfolioConfig.name;
  document.getElementById('footer-year').textContent = new Date().getFullYear().toString();
  
  // Bind About Me texts
  document.getElementById('about-intro-text').textContent = portfolioConfig.about.intro;
  document.getElementById('about-education-text').textContent = portfolioConfig.about.education;
  document.getElementById('about-interests-text').textContent = portfolioConfig.about.interests;

  // Bind About credentials tags
  const credentialsBox = document.getElementById('about-credentials-box');
  portfolioConfig.about.credentials.forEach(cred => {
    const badge = document.createElement('span');
    badge.className = 'cred-badge';
    badge.textContent = cred;
    credentialsBox.appendChild(badge);
  });

  // Populate Hero Social Media Compact Icons (no large rectangular cards)
  const socialCardsContainer = document.getElementById('hero-social-cards');
  Object.keys(portfolioConfig.socials).forEach(key => {
    const linkUrl = key === 'email' ? `mailto:${portfolioConfig.socials[key]}` : portfolioConfig.socials[key];
    
    const card = document.createElement('a');
    card.href = linkUrl;
    card.className = `social-icon-btn ${key} magnetic-element`;
    card.setAttribute('aria-label', `Guruprasath's ${key} profile`);
    if (key !== 'email') {
      card.setAttribute('target', '_blank');
      card.setAttribute('rel', 'noopener noreferrer');
    }
    
    const iconSpan = document.createElement('span');
    iconSpan.innerHTML = svgIcons[key] || '';
    iconSpan.style.display = 'inline-flex';
    iconSpan.style.alignItems = 'center';
    
    card.appendChild(iconSpan);
    socialCardsContainer.appendChild(card);
  });

  // Populate Contact Section CTA buttons
  const contactBtnContainer = document.getElementById('contact-buttons-container');
  Object.keys(portfolioConfig.socials).forEach(key => {
    const linkUrl = key === 'email' ? `mailto:${portfolioConfig.socials[key]}` : portfolioConfig.socials[key];
    
    const cLink = document.createElement('a');
    cLink.href = linkUrl;
    cLink.className = `btn contact-btn highlight-border-${getAccentColor(key)} magnetic-element`;
    cLink.setAttribute('aria-label', `Contact via ${key}`);
    if (key !== 'email') {
      cLink.setAttribute('target', '_blank');
      cLink.setAttribute('rel', 'noopener noreferrer');
    }
    
    const iconSpan = document.createElement('span');
    iconSpan.innerHTML = svgIcons[key] || '';
    iconSpan.style.display = 'inline-flex';
    iconSpan.style.alignItems = 'center';
    
    const textSpan = document.createElement('span');
    textSpan.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    
    cLink.appendChild(iconSpan);
    cLink.appendChild(textSpan);
    contactBtnContainer.appendChild(cLink);
  });

  // Populate Photos Grid (Unified clean borderless cards)
  const galleryGrid = document.getElementById('gallery-grid');
  portfolioConfig.photos.forEach((photo, idx) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-index', idx.toString());
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `View image: ${photo.alt}`);
    
    item.innerHTML = `
      <img src="${photo.src}" alt="${photo.alt}" class="gallery-image" loading="lazy">
      <div class="gallery-overlay">
        <div class="gallery-caption">${photo.caption}</div>
      </div>
    `;
    
    // Lightbox triggers
    item.addEventListener('click', () => openLightbox(idx));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(idx);
      }
    });
    
    galleryGrid.appendChild(item);
  });

  // Populate Skills layouts
  const skillsGrid = document.getElementById('skills-grid');
  portfolioConfig.skills.forEach(group => {
    const card = document.createElement('div');
    card.className = `skills-category-card glass-panel accent-${group.accent}`;
    
    const title = document.createElement('h3');
    title.className = 'skills-category-title';
    title.textContent = group.category;
    card.appendChild(title);
    
    const container = document.createElement('div');
    container.className = 'skills-badges-container';
    
    group.items.forEach(skill => {
      const badge = document.createElement('span');
      badge.className = 'skill-badge';
      badge.textContent = skill;
      container.appendChild(badge);
    });
    
    card.appendChild(container);
    skillsGrid.appendChild(card);
  });

  // Populate Projects Layout
  const projectsGrid = document.getElementById('projects-grid');
  portfolioConfig.projects.forEach((proj, idx) => {
    const article = document.createElement('article');
    const accentClass = getAccentColorClass(idx);
    article.className = `project-card glass-panel highlight-border-${accentClass}`;
    
    let demoBtnHtml = '';
    if (proj.demo) {
      demoBtnHtml = `<a href="${proj.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary project-link-btn" aria-label="View live demo of ${proj.title}">Live Demo</a>`;
    }
    
    article.innerHTML = `
      <div class="project-image-wrapper">
        <img src="${proj.image}" alt="${proj.title} project screenshot" class="project-card-image" loading="lazy">
      </div>
      <div class="project-info-wrapper">
        <h3 class="project-card-title">${proj.title}</h3>
        <p class="project-card-desc">${proj.description}</p>
        <div class="project-tags-wrapper">
          ${proj.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links-wrapper">
          <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn project-link-btn" aria-label="View source code of ${proj.title} on GitHub">GitHub</a>
          ${demoBtnHtml}
        </div>
      </div>
    `;
    projectsGrid.appendChild(article);
  });

  // Start initialization of other features
  initMobileNavigation();
  initIntersectionObservers();
  initLightbox();
  initBackToTop();
  initCustomCursor();
  initParticleSystem();
  applyHeroImageSettings();
  initQuoteCarousel();
});

// Utility to assign accents to contacts
function getAccentColor(key) {
  const mapping = {
    instagram: 'red',
    linkedin: 'blue',
    github: 'white',
    whatsapp: 'green',
    email: 'yellow'
  };
  return mapping[key] || 'blue';
}

// Utility to cycle through Google colors for projects
function getAccentColorClass(idx) {
  const classes = ['blue', 'red', 'yellow', 'green'];
  return classes[idx % classes.length];
}

function initQuoteCarousel() {
  const stage = document.getElementById('quote-stage');
  const language = document.getElementById('quote-language');
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const quoteContext = document.getElementById('quote-context');
  const previousButton = document.getElementById('quote-previous');
  const nextButton = document.getElementById('quote-next');
  const indicators = document.getElementById('quote-indicators');
  const quotes = portfolioConfig.quotes;

  if (!stage || !language || !quoteText || !quoteAuthor || !quotes.length) return;

  let currentIndex = 0;
  let phaseTimer = null;
  let transitionTimer = null;
  let isTranslation = false;
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  function renderQuote(index, translation = false, animate = true) {
    const quote = quotes[index];
    const nextLanguage = translation ? 'English' : quote.originalLanguage;
    const nextText = translation ? quote.englishTranslation : quote.originalText;
    isTranslation = translation;

    if (transitionTimer) window.clearTimeout(transitionTimer);

    stage.classList.remove('quote-translation-exit', 'quote-translation-enter');
    if (!animate || reducedMotionQuery.matches) {
      language.textContent = nextLanguage;
      quoteText.textContent = nextText;
      quoteAuthor.textContent = quote.author ? `— ${quote.author}` : '';
      if (quoteContext) quoteContext.textContent = quote.context || '';
      return;
    }
    stage.classList.add('quote-translation-exit');

    transitionTimer = window.setTimeout(() => {
      language.textContent = nextLanguage;
      quoteText.textContent = nextText;
      quoteAuthor.textContent = quote.author ? `— ${quote.author}` : '';
      if (quoteContext) quoteContext.textContent = quote.context || '';
      stage.classList.remove('quote-translation-exit');
      stage.classList.add('quote-translation-enter');
      window.setTimeout(() => stage.classList.remove('quote-translation-enter'), 760);
    }, 520);
  }

  function scheduleTranslation() {
    if (reducedMotionQuery.matches) return;
    const quote = quotes[currentIndex];
    if (quote.originalText === quote.englishTranslation) {
      phaseTimer = window.setTimeout(() => moveQuote(1), 7200);
      return;
    }
    phaseTimer = window.setTimeout(() => {
      renderQuote(currentIndex, true);
      if (quotes.length > 1) {
        phaseTimer = window.setTimeout(() => moveQuote(1), 5200);
      }
    }, 4800);
  }

  function moveQuote(step) {
    currentIndex = (currentIndex + step + quotes.length) % quotes.length;
    renderQuote(currentIndex, false);
    updateIndicators();
    restartTimer();
  }

  function updateIndicators() {
    if (!indicators) return;
    indicators.querySelectorAll('button').forEach((indicator, index) => {
      indicator.classList.toggle('is-active', index === currentIndex);
      indicator.setAttribute('aria-current', index === currentIndex ? 'true' : 'false');
    });
  }

  function restartTimer() {
    if (phaseTimer) window.clearTimeout(phaseTimer);
    scheduleTranslation();
  }

  renderQuote(0, false, false);

  if (previousButton) previousButton.addEventListener('click', () => moveQuote(-1));
  if (nextButton) nextButton.addEventListener('click', () => moveQuote(1));
  if (indicators) {
    quotes.forEach((quote, index) => {
      const indicator = document.createElement('button');
      indicator.type = 'button';
      indicator.className = 'quote-indicator';
      indicator.setAttribute('aria-label', `Show quote ${index + 1}`);
      indicator.addEventListener('click', () => {
        currentIndex = index;
        renderQuote(index, false);
        updateIndicators();
        restartTimer();
      });
      indicators.appendChild(indicator);
    });
  }
  updateIndicators();
  restartTimer();
}

/* --------------------------------------------------------------------------
   4. Sticky Header & Mobile Overlay Navigation
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const menuOverlay = document.getElementById('mobile-menu');
  const header = document.querySelector('.navbar-header');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const body = document.body;

  // Toggle overlay opening/closing
  function toggleMenu() {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    menuOverlay.classList.toggle('active');
    
    if (!isExpanded) {
      menuOverlay.setAttribute('aria-hidden', 'false');
      body.style.overflow = 'hidden'; // Lock background scrolling
    } else {
      menuOverlay.setAttribute('aria-hidden', 'true');
      body.style.overflow = '';
    }
  }

  toggleBtn.addEventListener('click', toggleMenu);

  // Close when navigation clicks take place
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Close mobile menu
      if (menuOverlay.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // Close overlay when clicking outside
  menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
      toggleMenu();
    }
  });

  // Track scroll to update sticky navbar styles
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   5. Scroll Animation & Active Link Highlight (Intersection Observers)
   -------------------------------------------------------------------------- */
function initIntersectionObservers() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  // Entrance reveal observer
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // Reveal only once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Current navigation highlight observer
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px' // Focus middle viewport range
  });

  sections.forEach(sec => navObserver.observe(sec));
}

/* --------------------------------------------------------------------------
   6. Custom Lightbox Engine
   -------------------------------------------------------------------------- */
let currentPhotoIndex = 0;
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', showPrevPhoto);
  nextBtn.addEventListener('click', showNextPhoto);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-image-container')) {
      closeLightbox();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevPhoto();
    if (e.key === 'ArrowRight') showNextPhoto();
  });
}

function openLightbox(index) {
  currentPhotoIndex = index;
  const modal = document.getElementById('lightbox-modal');
  const body = document.body;
  
  updateLightboxContent();
  
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const body = document.body;
  
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  body.style.overflow = '';
}

function showPrevPhoto() {
  const photos = portfolioConfig.photos;
  currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
  updateLightboxContent();
}

function showNextPhoto() {
  const photos = portfolioConfig.photos;
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const imgElement = document.getElementById('lightbox-image');
  const captionText = document.getElementById('lightbox-caption-text');
  const photo = portfolioConfig.photos[currentPhotoIndex];
  
  imgElement.src = photo.src;
  imgElement.alt = photo.alt;
  captionText.textContent = photo.caption;
}

/* --------------------------------------------------------------------------
   7. Reusable Hero Image Configurations & Rotation Loop
   -------------------------------------------------------------------------- */
function applyHeroImageSettings() {
  const profileImg = document.getElementById('profile-img');
  const settings = portfolioConfig.heroImageSettings;
  if (!profileImg || !settings) return;

  profileImg.style.width = settings.width || '86%';
  profileImg.style.height = settings.height || 'auto';
  profileImg.style.objectPosition = settings.objectPosition || 'center center';
  profileImg.style.objectFit = 'contain';

  profileImg.style.transform = 'translateY(0.05rem)';
}

function initHeroPhotoRotation() {
  const heroPhotos = portfolioConfig.heroPhotos;
  const profileImg = document.getElementById('profile-img');
  
  if (!profileImg || !heroPhotos || heroPhotos.length <= 1) return;
  
  let currentIndex = 0;
  setInterval(() => {
    profileImg.classList.add('fade-out');
    
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % heroPhotos.length;
      profileImg.src = heroPhotos[currentIndex];
      
      profileImg.onload = () => {
        // Re-apply layout sizing/scaling specifications
        applyHeroImageSettings();
        profileImg.classList.remove('fade-out');
      };
    }, 500); // Wait for transition fade-out to finish
  }, 4000); // Changes image every 4 seconds
}

/* --------------------------------------------------------------------------
   8. Back to Top Mechanism
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   9. Premium Custom trailing cursor & Wide Magnetic Interactions Loop
   -------------------------------------------------------------------------- */
let globalMouseX = 0;
let globalMouseY = 0;

function initCustomCursor() {
  const dot = document.getElementById('cursor-dot');
  const follower = document.getElementById('cursor-follower');
  if (!dot || !follower) return;

  const pointerQuery = window.matchMedia('(pointer: fine)');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!pointerQuery.matches || window.innerWidth <= 768 || reducedMotionQuery.matches) return;

  let followerX = 0;
  let followerY = 0;
  let active = false;
  const controller = new AbortController();
  const { signal } = controller;

  const magneticElements = document.querySelectorAll('.nav-link, .mobile-nav-link, .btn, .social-icon-btn');

  window.addEventListener('mousemove', (e) => {
    globalMouseX = e.clientX;
    globalMouseY = e.clientY;
    active = true;
    
    dot.style.opacity = '1';
    follower.style.opacity = '1';
    
    // Move center point instantly using translate3d centered at mouse coordinates
    dot.style.transform = `translate3d(${globalMouseX}px, ${globalMouseY}px, 0) translate3d(-50%, -50%, 0)`;
  }, { signal });

  // Track page leaves/enters to show/hide custom cursor
  document.addEventListener('mouseenter', () => {
    if (active) {
      dot.style.opacity = '1';
      follower.style.opacity = '1';
    }
  }, { signal });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    follower.style.opacity = '0';
  }, { signal });

  // Touchscreen laptop handling: disable cursor instantly when finger touch is active
  window.addEventListener('touchstart', (e) => {
    active = false;
    dot.style.opacity = '0';
    follower.style.opacity = '0';
    if (e.touches.length > 0) {
      globalMouseX = e.touches[0].clientX;
      globalMouseY = e.touches[0].clientY;
    }
  }, { passive: true, signal });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      globalMouseX = e.touches[0].clientX;
      globalMouseY = e.touches[0].clientY;
    }
  }, { passive: true, signal });

  window.addEventListener('touchend', () => {
    globalMouseX = 0;
    globalMouseY = 0;
  }, { passive: true, signal });

  // Smooth LERP lagging trailing loop with absolute GPU translating
  function animateFollower() {
    if (active) {
      const lerp = 0.14;
      followerX += (globalMouseX - followerX) * lerp;
      followerY += (globalMouseY - followerY) * lerp;

      // Global proximity checks across all magnetic elements
      let magneticTarget = null;
      let closestDist = Infinity;
      let targetCX = 0;
      let targetCY = 0;

      const proximityRadius = window.innerWidth < 768 ? 80 : 160;

      magneticElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = globalMouseX - cx;
        const dy = globalMouseY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < proximityRadius) {
          if (dist < closestDist) {
            closestDist = dist;
            magneticTarget = el;
            targetCX = cx;
            targetCY = cy;
          }
        } else {
          el.style.transform = 'translate3d(0px, 0px, 0)';
        }
      });

      if (magneticTarget) {
        const dx = globalMouseX - targetCX;
        const dy = globalMouseY - targetCY;
        
        const force = (proximityRadius - closestDist) / proximityRadius;
        const pullFactor = 0.04;
        
        magneticTarget.style.transform = `translate3d(${dx * pullFactor * force}px, ${dy * pullFactor * force}px, 0)`;
        
        if (closestDist < 45) {
          document.body.classList.add('cursor-magnetic');
          followerX += (targetCX - followerX) * 0.15;
          followerY += (targetCY - followerY) * 0.15;
        } else {
          document.body.classList.remove('cursor-magnetic');
        }
      } else {
        document.body.classList.remove('cursor-magnetic');
      }
      
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate3d(-50%, -50%, 0)`;
    }
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Dynamic hover sizes on interactive targets
  const hoverTargets = document.querySelectorAll('a, button, [role="button"], .gallery-item, .social-icon-btn, .skill-badge');
  hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    }, { signal });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    }, { signal });
  });
  window.addEventListener('beforeunload', () => controller.abort(), { signal });
}

/* --------------------------------------------------------------------------
   11. Fluid Panel Cursor Effect (inside the main portfolio panel only)
   -------------------------------------------------------------------------- */
function initPanelFluidCursor() {
  const canvas = document.getElementById('portfolio-fluid-canvas');
  if (!canvas) return;

  const panel = canvas.closest('.boxed-site-container');
  if (!panel) return;

  const ctx = canvas.getContext('2d');
  const isCoarse = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768;
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isCoarse || isReducedMotion) {
    canvas.style.display = 'none';
    return;
  }

  let width = 0;
  let height = 0;
  let particles = [];
  let ripples = [];
  let pointer = { x: 0, y: 0, active: false };

  function resize() {
    const rect = panel.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    createParticles();
  }

  function createParticles() {
    const count = Math.max(40, Math.min(90, Math.floor((width * height) / 18)));
    particles = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.2 + 1.2,
        hue: Math.random() > 0.5 ? 228 : 271,
        alpha: Math.random() * 0.7 + 0.15
      });
    }
  }

  function addRipple(x, y) {
    ripples.push({
      x,
      y,
      radius: 10,
      life: 1,
      maxRadius: Math.max(85, Math.min(width, height) * 0.2)
    });
  }

  function updatePointer(event) {
    const rect = panel.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
    pointer.active = true;
  }

  window.addEventListener('pointermove', updatePointer, { passive: true });
  panel.addEventListener('pointermove', updatePointer, { passive: true });
  panel.addEventListener('pointerleave', () => {
    pointer.active = false;
  }, { passive: true });
  panel.addEventListener('pointerdown', (event) => {
    const rect = panel.getBoundingClientRect();
    addRipple(event.clientX - rect.left, event.clientY - rect.top);
  }, { passive: true });
  window.addEventListener('resize', resize, { passive: true });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    if (pointer.active) {
      const glow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, Math.min(width, height) * 0.42);
      glow.addColorStop(0, 'rgba(168, 85, 247, 0.18)');
      glow.addColorStop(0.25, 'rgba(59, 130, 246, 0.12)');
      glow.addColorStop(1, 'rgba(37, 99, 235, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(pointer.x - Math.min(width, height) * 0.42, pointer.y - Math.min(width, height) * 0.42, Math.min(width, height) * 0.84, Math.min(width, height) * 0.84);
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      if (pointer.active) {
        const dx = pointer.x - p.x;
        const dy = pointer.y - p.y;
        const dist = Math.hypot(dx, dy) || 1;
        const influence = Math.max(0, 1 - dist / 165);
        if (influence > 0) {
          p.vx += (dx / dist) * influence * 0.18;
          p.vy += (dy / dist) * influence * 0.18;
        }
      }

      p.vx *= 0.985;
      p.vy *= 0.985;
      p.vx += (Math.random() - 0.5) * 0.03;
      p.vy += (Math.random() - 0.5) * 0.03;

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.x = ((p.x % width) + width) % width;
      if (p.y < 0 || p.y > height) p.y = ((p.y % height) + height) % height;

      const trail = 0.6 + (Math.abs(p.vx) + Math.abs(p.vy)) * 0.7;
      ctx.beginPath();
      ctx.fillStyle = `hsla(${p.hue}, 85%, 70%, ${Math.min(0.95, p.alpha * trail)})`;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = ripples.length - 1; i >= 0; i--) {
      const ripple = ripples[i];
      ripple.radius += 2.1;
      ripple.life *= 0.96;

      if (ripple.life <= 0.03) {
        ripples.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(168, 85, 247, ${0.22 * ripple.life})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(ripple.x, ripple.y, ripple.radius * 0.62, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(37, 99, 235, ${0.18 * ripple.life})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    requestAnimationFrame(draw);
  }

  resize();
  requestAnimationFrame(draw);
}

/* --------------------------------------------------------------------------
   10. Hero Ambient Anti-Gravity Bubbles
   -------------------------------------------------------------------------- */
function initParticleSystem() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const hero = canvas.closest('.hero-section');
  if (!hero) return;
  const controller = new AbortController();
  const { signal } = controller;
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pointerQuery = window.matchMedia('(pointer: fine)');
  let width = 0;
  let height = 0;
  let bubbles = [];
  let trails = [];
  let pointer = { x: 0, y: 0, active: false, lastX: 0, lastY: 0, speed: 0 };
  let animationId = 0;
  let lastTime = performance.now();

  function createBubble(trail = false, x = Math.random() * width, y = Math.random() * height) {
    const violet = Math.random() > 0.58;
    return {
      x, y,
      vx: (Math.random() - 0.5) * (trail ? 0.35 : 0.18),
      vy: (Math.random() - 0.5) * (trail ? 0.35 : 0.18),
      radius: trail ? Math.random() * 2 + 1 : Math.random() * 4 + 1.5,
      alpha: trail ? 0.25 : Math.random() * 0.12 + 0.08,
      life: trail ? 1 : 0,
      hue: violet ? 264 : 218,
      trail
    };
  }

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = width < 480 ? 18 : width < 768 ? 26 : 42;
    bubbles = Array.from({ length: count }, () => createBubble());
  }

  function updatePointer(event) {
    const rect = hero.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const dx = x - pointer.lastX;
    const dy = y - pointer.lastY;
    pointer.speed = Math.hypot(dx, dy);
    pointer.x = x;
    pointer.y = y;
    pointer.lastX = x;
    pointer.lastY = y;
    pointer.active = x >= 0 && x <= width && y >= 0 && y <= height;
    if (pointer.speed > 2.2 && trails.length < 5) {
      trails.push(createBubble(true, x, y));
    }
  }

  window.addEventListener('resize', resize, { passive: true, signal });
  if (pointerQuery.matches && window.innerWidth > 768) {
    window.addEventListener('pointermove', updatePointer, { passive: true, signal });
    window.addEventListener('pointerleave', () => { pointer.active = false; }, { passive: true, signal });
  }
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') cancelAnimationFrame(animationId);
    else { lastTime = performance.now(); animationId = requestAnimationFrame(animate); }
  }, { signal });
  window.addEventListener('beforeunload', () => controller.abort(), { signal });

  function updateBubble(bubble, delta) {
    if (pointer.active) {
      const dx = bubble.x - pointer.x;
      const dy = bubble.y - pointer.y;
      const distance = Math.hypot(dx, dy) || 1;
      const influence = Math.max(0, 1 - distance / 130);
      bubble.vx += (dx / distance) * influence * 0.035 * delta;
      bubble.vy += (dy / distance) * influence * 0.035 * delta;
    }
    bubble.vx += ((Math.random() - 0.5) * 0.002 - bubble.vx) * 0.01 * delta;
    bubble.vy += ((Math.random() - 0.5) * 0.002 - bubble.vy) * 0.01 * delta;
    bubble.x += bubble.vx * delta;
    bubble.y += bubble.vy * delta;
    if (bubble.x < -bubble.radius) bubble.x = width + bubble.radius;
    if (bubble.x > width + bubble.radius) bubble.x = -bubble.radius;
    if (bubble.y < -bubble.radius) bubble.y = height + bubble.radius;
    if (bubble.y > height + bubble.radius) bubble.y = -bubble.radius;
    if (bubble.trail) bubble.life -= 0.018 * delta;
  }

  function drawBubble(bubble) {
    const alpha = bubble.alpha * (bubble.trail ? bubble.life : 1);
    ctx.beginPath();
    ctx.fillStyle = `hsla(${bubble.hue}, 80%, 70%, ${alpha})`;
    ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  function animate(now = performance.now()) {
    const delta = Math.min(2, (now - lastTime) / 16.67);
    lastTime = now;
    ctx.clearRect(0, 0, width, height);
    bubbles.forEach(bubble => { updateBubble(bubble, delta); drawBubble(bubble); });
    trails = trails.filter(bubble => { updateBubble(bubble, delta); drawBubble(bubble); return bubble.life > 0.02; });
    pointer.speed *= 0.9;
    animationId = requestAnimationFrame(animate);
  }

  resize();
  if (reducedMotionQuery.matches) {
    bubbles.forEach(drawBubble);
    return;
  }
  animationId = requestAnimationFrame(animate);
}
