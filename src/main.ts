import './style.css'
import { education, navLinks, profile, projects, skillGroups, type Project } from './data'

const featuredProjects = projects.filter((project) => project.featured)

function icon(name: 'github' | 'external' | 'play' | 'mail' | 'phone' | 'linkedin' | 'arrow') {
  const icons = {
    github: '<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>',
    external: '<path d="M7 17L17 7M17 7H7M17 7v10"/>',
    play: '<path d="M8 5v14l11-7z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>',
    phone: '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>',
    linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>',
    arrow: '<path d="M12 19V5M5 12l7-7 7 7"/>',
  }

  const filled = name === 'github' || name === 'play' || name === 'linkedin'
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" stroke="${filled ? 'none' : 'currentColor'}" stroke-width="1.8" aria-hidden="true">${icons[name]}</svg>`
}

function renderNav() {
  return `
    <div class="scroll-progress" aria-hidden="true"><span></span></div>
    <nav class="nav" aria-label="Main navigation">
      <a href="#home" class="nav__logo" aria-label="Go to homepage">${profile.name.split(' ')[0]}<span>.</span></a>
      <ul class="nav__links">
        ${navLinks.map((link) => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
      </ul>
      <a href="#contact" class="nav__cta">Let's talk</a>
      <button class="nav__toggle" aria-label="Toggle navigation menu" aria-expanded="false">
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
        <div class="hero__badge reveal">Available for opportunities</div>
        <p class="hero__eyebrow reveal">${profile.title}</p>
        <h1 class="hero__title reveal">
          I build <span class="gradient-text">useful, polished interfaces</span><br />
          for real products.
        </h1>
        <p class="hero__subtitle reveal">${profile.name} · ${profile.location}</p>
        <p class="hero__desc reveal">${profile.summary}</p>
        <div class="hero__actions reveal">
          <a href="#projects" class="btn btn--primary">Explore selected work</a>
          <a href="${profile.resume}" class="btn btn--ghost" download>Download resume</a>
          <a href="${profile.github}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost">
            ${icon('github')} GitHub
          </a>
        </div>
        <div class="hero__stats reveal">
          <div class="stat"><span class="stat__num">${projects.length}</span><span class="stat__label">Selected projects</span></div>
          <div class="stat"><span class="stat__num">React</span><span class="stat__label">Primary frontend stack</span></div>
          <div class="stat"><span class="stat__num">Full Stack</span><span class="stat__label">Frontend + API experience</span></div>
        </div>
      </div>
      <div class="hero__panel reveal" aria-hidden="true">
        <div class="code-window">
          <div class="code-window__bar"><span></span><span></span><span></span><p>developer.ts</p></div>
          <pre><code><span class="code-kw">const</span> <span class="code-var">developer</span> = {
  <span class="code-key">name</span>: <span class="code-str">"${profile.name}"</span>,
  <span class="code-key">role</span>: <span class="code-str">"${profile.title}"</span>,
  <span class="code-key">stack</span>: [
    <span class="code-str">"React"</span>,
    <span class="code-str">"TypeScript"</span>,
    <span class="code-str">"ASP.NET Core"</span>
  ],
  <span class="code-key">focus</span>: <span class="code-str">"product UI & business workflows"</span>,
  <span class="code-key">available</span>: <span class="code-bool">true</span>
}</code></pre>
        </div>
      </div>
    </section>
  `
}

function renderAbout() {
  return `
    <section class="section" id="about">
      <div class="section__header reveal">
        <span class="section__tag">01 — About</span>
        <h2 class="section__title">Building interfaces that work in the real world</h2>
        <p class="section__subtitle">I focus on practical products, reusable UI, clear workflows, and reliable API integration.</p>
      </div>
      <div class="about-grid">
        <article class="about-card reveal"><h3>What I build</h3><p>Responsive dashboards, client-facing websites, booking systems, marketplaces, role-based admin platforms, and data-driven business workflows.</p></article>
        <article class="about-card reveal"><h3>How I work</h3><p>I separate concerns, build reusable components, handle loading and error states carefully, and keep frontend behavior aligned with the backend contract.</p></article>
        <article class="about-card about-card--accent reveal"><h3>Education</h3><p class="about-card__degree">${education.degree}</p><p>${education.school}</p><p class="about-card__period">${education.period}</p></article>
      </div>
    </section>
  `
}

function actionLink(label: string, href: string, primary = false) {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="project-action ${primary ? 'project-action--primary' : ''}">${label}${icon('external')}</a>`
}

function renderProjectCard(project: Project) {
  const actions = [
    project.liveUrl ? actionLink('Live Website', project.liveUrl, true) : '',
    project.publicUrl ? actionLink('Public Website', project.publicUrl) : '',
    project.videoUrl
      ? `<button type="button" class="project-action project-action--video" data-video-url="${project.videoUrl}" data-video-poster="${project.videoPoster ?? project.cover}" data-video-title="${project.title}">${icon('play')}Watch Demo</button>`
      : '',
  ].join('')

  return `
    <article class="project-card reveal">
      <div class="project-card__media">
        <img src="${project.cover}" alt="${project.title} interface preview" loading="lazy" width="960" height="600" />
        <div class="project-card__overlay"><span>${project.category}</span></div>
      </div>
      <div class="project-card__body">
        <div class="project-card__topline">
          <span class="project-card__category">${project.category}</span>
          <span class="project-card__role">${project.role}</span>
        </div>
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__desc">${project.description}</p>
        <ul class="project-card__highlights">
          ${project.highlights.slice(0, 3).map((item) => `<li><span>✓</span>${item}</li>`).join('')}
        </ul>
        <ul class="project-card__stack">
          ${project.stack.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        <div class="project-card__actions">${actions}</div>
      </div>
    </article>
  `
}

function renderProjects() {
  return `
    <section class="section" id="projects">
      <div class="section__header reveal">
        <span class="section__tag">02 — Selected Product Work</span>
        <h2 class="section__title">Business problems, interfaces, and workflows I helped build</h2>
        <p class="section__subtitle">Public websites include live links. Private systems include safe demo videos with anonymized data.</p>
      </div>
      <div class="projects-grid">${featuredProjects.map(renderProjectCard).join('')}</div>
    </section>
  `
}

function renderSkills() {
  return `
    <section class="section" id="skills">
      <div class="section__header reveal">
        <span class="section__tag">03 — Technical Toolkit</span>
        <h2 class="section__title">Technologies I use to ship products</h2>
      </div>
      <div class="skills-grid">
        ${skillGroups.map((group) => `
          <article class="skill-group reveal">
            <h3 class="skill-group__label">${group.label}</h3>
            <ul class="skill-group__list">${group.skills.map((skill) => `<li><span>${skill}</span></li>`).join('')}</ul>
          </article>
        `).join('')}
      </div>
    </section>
  `
}

function renderContact() {
  return `
    <section class="section section--contact" id="contact">
      <div class="contact reveal">
        <span class="section__tag">04 — Contact</span>
        <h2 class="section__title">Let’s build something useful.</h2>
        <p class="contact__text">Open to frontend and full-stack opportunities where I can contribute to real products, improve user experiences, and keep growing with a strong engineering team.</p>
        <div class="contact__links">
          <a href="mailto:${profile.email}" class="contact__link">${icon('mail')}${profile.email}</a>
          <a href="tel:${profile.phone.replace(/\s/g, '')}" class="contact__link">${icon('phone')}${profile.phone}</a>
          <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="contact__link">${icon('linkedin')}LinkedIn</a>
          <a href="${profile.github}" target="_blank" rel="noopener noreferrer" class="contact__link">${icon('github')}GitHub</a>
          <a href="${profile.resume}" download class="contact__link">Download Resume</a>
        </div>
      </div>
    </section>
  `
}

function renderFooter() {
  return `
    <footer class="footer">
      <p>&copy; ${new Date().getFullYear()} ${profile.name}. Built with TypeScript & Vite.</p>
      <div class="footer__socials">
        <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${icon('linkedin')}</a>
        <a href="${profile.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${icon('github')}</a>
        <a href="mailto:${profile.email}" aria-label="Email">${icon('mail')}</a>
      </div>
      <a href="#home" class="footer__top" aria-label="Back to top">${icon('arrow')}</a>
    </footer>
  `
}

function renderVideoModal() {
  return `
    <div class="video-modal" id="video-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
      <button type="button" class="video-modal__backdrop" data-close-video aria-label="Close video"></button>
      <div class="video-modal__dialog">
        <div class="video-modal__header">
          <div><span class="video-modal__label">Product walkthrough</span><h2 id="video-modal-title">Project demo</h2></div>
          <button type="button" class="video-modal__close" data-close-video aria-label="Close video">×</button>
        </div>
        <div class="video-modal__player"><video id="project-video" controls preload="metadata" playsinline></video></div>
        <p class="video-modal__privacy">Demo content uses protected or anonymized data.</p>
      </div>
    </div>
  `
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="bg-grid" aria-hidden="true"></div>
  <div class="bg-glow bg-glow--1" aria-hidden="true"></div>
  <div class="bg-glow bg-glow--2" aria-hidden="true"></div>
  ${renderNav()}
  <main>${renderHero()}${renderAbout()}${renderProjects()}${renderSkills()}${renderContact()}</main>
  ${renderFooter()}
  ${renderVideoModal()}
`

function setupNav() {
  const toggle = document.querySelector<HTMLButtonElement>('.nav__toggle')
  const menu = document.querySelector<HTMLDivElement>('.mobile-menu')
  const nav = document.querySelector<HTMLElement>('.nav')
  const progress = document.querySelector<HTMLElement>('.scroll-progress span')

  if (!toggle || !menu || !nav || !progress) return

  const close = () => {
    toggle.setAttribute('aria-expanded', 'false')
    menu.classList.remove('mobile-menu--open')
    menu.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('menu-open')
  }

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', String(!open))
    menu.classList.toggle('mobile-menu--open', !open)
    menu.setAttribute('aria-hidden', String(open))
    document.body.classList.toggle('menu-open', !open)
  })

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', close))

  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40)
    const max = document.documentElement.scrollHeight - window.innerHeight
    progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
  })
}

function setupReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('revealed'))
    return
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
}

function setupSmoothScroll() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const selector = anchor.getAttribute('href')
      if (!selector || selector === '#') return
      const target = document.querySelector(selector)
      if (!target) return
      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
}

function setupVideoModal() {
  const modal = document.querySelector<HTMLDivElement>('#video-modal')
  const video = document.querySelector<HTMLVideoElement>('#project-video')
  const title = document.querySelector<HTMLElement>('#video-modal-title')

  if (!modal || !video || !title) return

  const close = () => {
    video.pause()
    video.removeAttribute('src')
    video.load()
    modal.classList.remove('video-modal--open')
    modal.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('menu-open')
  }

  document.querySelectorAll<HTMLElement>('[data-video-url]').forEach((button) => {
    button.addEventListener('click', () => {
      const videoUrl = button.dataset.videoUrl
      if (!videoUrl) return

      video.src = videoUrl
      video.poster = button.dataset.videoPoster ?? ''
      title.textContent = `${button.dataset.videoTitle ?? 'Project'} — Demo`
      modal.classList.add('video-modal--open')
      modal.setAttribute('aria-hidden', 'false')
      document.body.classList.add('menu-open')
    })
  })

  document.querySelectorAll<HTMLElement>('[data-close-video]').forEach((button) => {
    button.addEventListener('click', close)
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('video-modal--open')) close()
  })
}

setupNav()
setupReveal()
setupSmoothScroll()
setupVideoModal()
