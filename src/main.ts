import './style.css'
import { profile, projects, skillGroups, education, navLinks } from './data'

const featuredProjects = projects.filter((p) => p.featured)
const otherProjects = projects.filter((p) => !p.featured)

function renderNav() {
  return `
    <nav class="nav" aria-label="Main navigation">
      <a href="#" class="nav__logo" aria-label="Home">${profile.name.split(' ')[0]}<span>.</span></a>
      <ul class="nav__links">
        ${navLinks.map((link) => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
      </ul>
      <a href="#contact" class="nav__cta">Let's talk</a>
      <button class="nav__toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
      ${navLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join('')}
      <a href="#contact" class="mobile-menu__cta">Let's talk</a>
    </div>
  `
}

function renderHero() {
  return `
    <section class="hero" id="home">
      <div class="hero__content">
        <div class="hero__badge reveal revealed">Available for opportunities</div>
        <p class="hero__eyebrow reveal revealed">${profile.title}</p>
        <h1 class="hero__title reveal revealed">
          Hi, I'm <span class="gradient-text">${profile.name}</span>
        </h1>
        <p class="hero__subtitle reveal revealed">${profile.location} · React · TypeScript · ASP.NET Core</p>
        <p class="hero__desc reveal revealed">${profile.summary}</p>
        <div class="hero__actions reveal revealed">
          <a href="#projects" class="btn btn--primary">View my work</a>
          <a href="${profile.github}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
        <div class="hero__stats reveal revealed">
          <div class="stat">
            <span class="stat__num">${projects.length}+</span>
            <span class="stat__label">Projects delivered</span>
          </div>
          <div class="stat">
            <span class="stat__num">React</span>
            <span class="stat__label">Primary stack</span>
          </div>
          <div class="stat">
            <span class="stat__num">JWT</span>
            <span class="stat__label">Auth & APIs</span>
          </div>
        </div>
      </div>
      <div class="hero__panel reveal revealed" aria-hidden="true">
        <div class="code-window">
          <div class="code-window__bar">
            <span></span><span></span><span></span>
            <p>developer.ts</p>
          </div>
          <pre><code><span class="code-kw">const</span> <span class="code-var">developer</span> = {
  <span class="code-key">name</span>: <span class="code-str">"${profile.name}"</span>,
  <span class="code-key">role</span>: <span class="code-str">"${profile.title}"</span>,
  <span class="code-key">stack</span>: [<span class="code-str">"React"</span>, <span class="code-str">"TypeScript"</span>, <span class="code-str">".NET"</span>],
  <span class="code-key">focus</span>: <span class="code-str">"clean UI & scalable apps"</span>,
  <span class="code-key">available</span>: <span class="code-bool">true</span>
}</code></pre>
        </div>
      </div>
    </section>
  `
}

function renderProjectCard(project: (typeof projects)[0], large = false) {
  const demoLink = project.demo
    ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-card__link">
         Live demo
         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
       </a>`
    : ''

  return `
    <article class="project-card ${large ? 'project-card--featured' : ''} reveal">
      <div class="project-card__header">
        <div class="project-card__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 7h18M3 12h18M3 17h18"/>
          </svg>
        </div>
        ${demoLink}
      </div>
      <h3 class="project-card__title">${project.title}</h3>
      <p class="project-card__role">${project.role}</p>
      <p class="project-card__desc">${project.description}</p>
      <ul class="project-card__stack">
        ${project.stack.map((s) => `<li>${s}</li>`).join('')}
      </ul>
    </article>
  `
}

function renderAbout() {
  return `
    <section class="section" id="about">
      <div class="section__header reveal">
        <span class="section__tag">01 — About</span>
        <h2 class="section__title">Building interfaces that work in the real world</h2>
      </div>
      <div class="about-grid reveal">
        <div class="about-card">
          <h3>What I do</h3>
          <p>
            I specialize in turning business requirements into polished, responsive web applications.
            From dashboard CRMs to booking systems, I focus on reusable components, clean architecture,
            and smooth API integration.
          </p>
        </div>
        <div class="about-card">
          <h3>How I work</h3>
          <p>
            JWT authentication, protected routes, REST API integration, and maintainable TypeScript code —
            I build features that teams can extend and ship with confidence.
          </p>
        </div>
        <div class="about-card about-card--accent">
          <h3>Education</h3>
          <p class="about-card__degree">${education.degree}</p>
          <p>${education.school}</p>
          <p class="about-card__period">${education.period}</p>
        </div>
      </div>
    </section>
  `
}

function renderProjects() {
  return `
    <section class="section" id="projects">
      <div class="section__header reveal">
        <span class="section__tag">02 — Projects</span>
        <h2 class="section__title">Selected work</h2>
        <p class="section__subtitle">Real business applications — CRMs, marketplaces, and healthcare systems.</p>
      </div>
      <div class="projects-featured">
        ${featuredProjects.map((p) => renderProjectCard(p, true)).join('')}
      </div>
      <div class="projects-grid">
        ${otherProjects.map((p) => renderProjectCard(p)).join('')}
      </div>
    </section>
  `
}

function renderSkills() {
  return `
    <section class="section" id="skills">
      <div class="section__header reveal">
        <span class="section__tag">03 — Skills</span>
        <h2 class="section__title">Technical toolkit</h2>
      </div>
      <div class="skills-grid">
        ${skillGroups
          .map(
            (group) => `
          <div class="skill-group reveal">
            <h3 class="skill-group__label">${group.label}</h3>
            <ul class="skill-group__list">
              ${group.skills.map((s) => `<li><span>${s}</span></li>`).join('')}
            </ul>
          </div>
        `
          )
          .join('')}
      </div>
    </section>
  `
}

function renderContact() {
  return `
    <section class="section section--contact" id="contact">
      <div class="contact reveal">
        <span class="section__tag">04 — Contact</span>
        <h2 class="section__title">Let's build something together</h2>
        <p class="contact__text">
          Open to frontend roles and freelance projects. Reach out — I'd love to hear from you.
        </p>
        <div class="contact__links">
          <a href="mailto:${profile.email}" class="contact__link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
            ${profile.email}
          </a>
          <a href="tel:${profile.phone.replace(/\s/g, '')}" class="contact__link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            ${profile.phone}
          </a>
          <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="contact__link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="${profile.github}" target="_blank" rel="noopener noreferrer" class="contact__link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  `
}

function renderFooter() {
  return `
    <footer class="footer">
      <p>&copy; ${new Date().getFullYear()} ${profile.name}. Built with TypeScript & Vite.</p>
      <a href="#home" class="footer__top" aria-label="Back to top">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </a>
    </footer>
  `
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="bg-grid" aria-hidden="true"></div>
  <div class="bg-glow bg-glow--1" aria-hidden="true"></div>
  <div class="bg-glow bg-glow--2" aria-hidden="true"></div>
  ${renderNav()}
  <main>
    ${renderHero()}
    ${renderAbout()}
    ${renderProjects()}
    ${renderSkills()}
    ${renderContact()}
  </main>
  ${renderFooter()}
`

function closeMobileMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('.nav__toggle')
  const menu = document.querySelector<HTMLDivElement>('.mobile-menu')
  if (!toggle || !menu) return
  toggle.setAttribute('aria-expanded', 'false')
  menu.classList.remove('mobile-menu--open')
  menu.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('menu-open')
}

function setupNav() {
  const toggle = document.querySelector<HTMLButtonElement>('.nav__toggle')!
  const menu = document.querySelector<HTMLDivElement>('.mobile-menu')!

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', String(!open))
    menu.classList.toggle('mobile-menu--open', !open)
    menu.setAttribute('aria-hidden', String(open))
    document.body.classList.toggle('menu-open', !open)
  })

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileMenu)
  })

  const nav = document.querySelector<HTMLElement>('.nav')!
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40)
  })
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
}

setupNav()
setupReveal()
setupSmoothScroll()
