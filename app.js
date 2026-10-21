/* ===== CONFIGURAZIONE: modifica solo questo blocco ===== */
const CONFIG = {
  github: 'G4B7BB0',
  linkedin: 'https://linkedin.com/in/gabriele-bertezago-8b9aba371',
  email: 'gabrielebertezago@gmail.com',
  discord: 'https://discord.com/users/g4b7bb0',
  maxProjects: 4,        // quanti repository mostrare
  hiddenRepos: ['berte-portfolio'], // repository esclusi dalla sezione progetti
  featuredRepos: ['pc-build-optimizer', 'ExpenseTracker', 'File-Crypto-Tool', 'PasswordManager'],
  projectDetails: {
    'pc-build-optimizer': {
      kind: { it: 'Prototipo web', en: 'Web prototype' },
      description: {
        it: 'Propone configurazioni PC in base a budget e utilizzo, con controlli di compatibilità tra componenti.',
        en: 'Suggests PC builds based on budget and use, with compatibility checks between components.'
      },
      stack: ['TypeScript', 'React', 'Node.js']
    },
    ExpenseTracker: {
      kind: { it: 'App desktop', en: 'Desktop app' },
      description: {
        it: 'App desktop per registrare entrate, spese, budget e pagamenti ricorrenti. I dati restano sul computer.',
        en: 'A desktop app for tracking income, expenses, budgets and recurring payments. Data stays on the computer.'
      },
      stack: ['TypeScript', 'React', 'Electron', 'SQLite']
    },
    PasswordManager: {
      kind: { it: 'Strumento CLI', en: 'CLI tool' },
      description: {
        it: 'Gestore di password da terminale in C#/.NET con archivio cifrato AES-GCM. Progetto personale, non sottoposto ad audit.',
        en: 'A C#/.NET command-line password manager with an AES-GCM encrypted vault. Personal project, not independently audited.'
      },
      stack: ['C#', '.NET', 'AES-GCM']
    },
    'File-Crypto-Tool': {
      kind: { it: 'Progetto didattico', en: 'Learning project' },
      description: {
        it: 'Piccola applicazione C#/.NET per cifrare e decifrare file, realizzata per fare pratica con la crittografia.',
        en: 'A small C#/.NET application for encrypting and decrypting files, built as a cryptography learning project.'
      },
      stack: ['C#', '.NET']
    }
  }
};
/* ======================================================== */

const copy = {
  it: {
    pageTitle: 'Berte — Portfolio',
    pageDescription: 'Progetti e percorso di Berte: informatica, sviluppo e l’obiettivo di lavorare nel penetration testing.',
    skipLink: 'Vai al contenuto', homeLabel: 'Torna all’inizio', navLabel: 'Navigazione principale', menuOpen: 'Apri menu', menuClose: 'Chiudi menu',
    switchToEnglish: 'Passa alla versione inglese', switchToItalian: 'Passa alla versione italiana',
    navAbout: 'Profilo', navProjects: 'Progetti', navPath: 'Percorso', navContact: 'Contatti',
    hello: 'Ciao, sono',
    role: 'Informatica / Penetration testing',
    intro: 'Mi interessa capire come è costruita un’applicazione e cosa può andare storto quando la si mette alla prova.',
    ctaProjects: 'Vedi i progetti', ctaContact: 'Contatti',
    heroIndex: 'REPOSITORY PUBBLICI', heroRepoLabel: 'Progetti su GitHub', heroAccount: 'G4B7BB0 · GitHub', heroRepoAria: 'Apri tutti i repository su GitHub',
    labelAbout: 'PROFILO', aboutTitle: 'Un po’ di contesto',
    aboutP1: 'Sono al quinto anno di Informatica. I repository qui sotto sono progetti personali che uso per fare pratica e mettere in ordine quello che sto imparando.',
    aboutP2: 'Dopo il diploma vorrei studiare a Milano, fare esperienze internazionali e, più avanti, vivere all’estero. L’Aia è una delle città che mi incuriosiscono.',
    aboutFocusLabel: 'DIREZIONE', aboutFocusValue: 'Penetration tester',
    aboutFocusText: 'Analisi di applicazioni e ricerca di vulnerabilità',
    skillsTitle: 'Tecnologie nei repository',
    labelProjects: 'PROGETTI', projectsTitle: 'Progetti selezionati',
    projectsIntro: 'I repository che sto portando avanti, collegati direttamente al mio profilo GitHub.',
    loading: 'Caricamento dei progetti da GitHub…',
    noGithub: 'I progetti compariranno qui appena collegato il profilo GitHub.',
    noRepos: 'Nessun progetto pubblico trovato per ora.',
    errorRepos: 'Non riesco a caricare i progetti in questo momento.',
    noDesc: 'Descrizione non disponibile.', viewRepo: 'Apri repository', updated: 'Aggiornato',
    allRepos: 'Tutti i repository',
    labelPath: 'PROSSIMI PASSI', pathTitle: 'Il percorso che immagino',
    t1Meta: 'ADESSO', t2Meta: 'PROSSIMO PASSO', t3Meta: 'IN FUTURO',
    stage1Title: 'Quinto anno · Informatica', stage1Desc: 'Finisco la scuola e porto avanti progetti personali su GitHub.',
    stage2Title: 'Università · cybersecurity', stage2Desc: 'Laurea triennale a Milano, alla Statale se il percorso sarà quello giusto.',
    stage3Title: 'Esperienze all’estero', stage3Desc: 'Tirocini e opportunità internazionali, con l’idea di trasferirmi. L’Aia è tra le mete che sto considerando.',
    labelContact: 'CONTATTI', contactTitle: 'Mi trovi qui.',
    contactCopy: 'Per un progetto, una domanda o semplicemente per metterti in contatto.',
    contactEmpty: 'Contatti in arrivo.',
    rights: 'Tutti i diritti riservati',
    backTop: 'Torna su ↑'
  },
  en: {
    pageTitle: 'Berte — Portfolio',
    pageDescription: 'Projects and background of Berte: computer science, development and a goal of working in penetration testing.',
    skipLink: 'Skip to content', homeLabel: 'Back to top', navLabel: 'Main navigation', menuOpen: 'Open menu', menuClose: 'Close menu',
    switchToEnglish: 'Switch to English', switchToItalian: 'Switch to Italian',
    navAbout: 'About', navProjects: 'Projects', navPath: 'Path', navContact: 'Contact',
    hello: 'Hi, I’m',
    role: 'Computer science / Penetration testing',
    intro: 'I’m interested in how an application is built and what can go wrong when you put it to the test.',
    ctaProjects: 'See projects', ctaContact: 'Contact',
    heroIndex: 'PUBLIC REPOSITORIES', heroRepoLabel: 'Projects on GitHub', heroAccount: 'G4B7BB0 · GitHub', heroRepoAria: 'Open all repositories on GitHub',
    labelAbout: 'PROFILE', aboutTitle: 'A little context',
    aboutP1: 'I’m in my final year of computer science. The repositories below are personal projects I use to practise and organise what I’m learning.',
    aboutP2: 'After graduating I’d like to study in Milan, gain international experience and eventually live abroad. The Hague is one of the places I’m curious about.',
    aboutFocusLabel: 'DIRECTION', aboutFocusValue: 'Penetration tester',
    aboutFocusText: 'Application analysis and vulnerability research',
    skillsTitle: 'Technologies in my repositories',
    labelProjects: 'PROJECTS', projectsTitle: 'Selected projects',
    projectsIntro: 'Projects I’m working on, linked directly to my GitHub profile.',
    loading: 'Loading projects from GitHub…',
    noGithub: 'Projects will show up here once the GitHub profile is connected.',
    noRepos: 'No public projects found yet.',
    errorRepos: 'I can’t load the projects right now.',
    noDesc: 'Description unavailable.', viewRepo: 'Open repository', updated: 'Updated',
    allRepos: 'All repositories',
    labelPath: 'NEXT STEPS', pathTitle: 'The path I have in mind',
    t1Meta: 'NOW', t2Meta: 'NEXT', t3Meta: 'LATER',
    stage1Title: 'Final year · IT', stage1Desc: 'Finishing school and working on personal projects on GitHub.',
    stage2Title: 'University · cybersecurity', stage2Desc: 'Bachelor’s degree in Milan, possibly at the University of Milan.',
    stage3Title: 'Experience abroad', stage3Desc: 'Internships and international opportunities, with the plan of moving abroad. The Hague is on my list.',
    labelContact: 'CONTACT', contactTitle: 'Find me here.',
    contactCopy: 'For a project, a question, or just to get in touch.',
    contactEmpty: 'Contact details coming soon.',
    rights: 'All rights reserved',
    backTop: 'Back to top ↑'
  }
};

let language = (navigator.language || 'it').toLowerCase().startsWith('en') ? 'en' : 'it';
let repoState = { status: 'loading', repos: [], total: null };

const t = key => copy[language][key];

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.title = t('pageTitle');
  document.querySelector('meta[name="description"]').content = t('pageDescription');
  document.querySelector('meta[property="og:description"]').content = t('pageDescription');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = copy[next][el.dataset.i18n];
    if (value) el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel));
  });
  const langToggle = document.getElementById('langToggle');
  langToggle.textContent = next === 'it' ? 'EN' : 'IT';
  langToggle.setAttribute('aria-label', next === 'it' ? t('switchToEnglish') : t('switchToItalian'));
  menu.setAttribute('aria-label', t(nav.classList.contains('open') ? 'menuClose' : 'menuOpen'));
  renderProjects();
  renderContacts();
}

document.getElementById('langToggle').addEventListener('click', () => setLanguage(language === 'it' ? 'en' : 'it'));

const menu = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', t(open ? 'menuClose' : 'menuOpen'));
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', t('menuOpen'));
}));
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape' || !nav.classList.contains('open')) return;
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', t('menuOpen'));
  menu.focus();
});

document.getElementById('year').textContent = new Date().getFullYear();

/* Contatti: mostra solo quelli compilati */
function renderContacts() {
  const box = document.getElementById('contactLinks');
  const items = [];
  if (CONFIG.github) items.push(['GitHub', `https://github.com/${CONFIG.github}`]);
  if (CONFIG.linkedin) items.push(['LinkedIn', CONFIG.linkedin]);
  if (CONFIG.email) items.push(['Email', `mailto:${CONFIG.email}`]);
  if (CONFIG.discord) items.push(['Discord', CONFIG.discord]);
  box.replaceChildren();
  if (!items.length) {
    const p = document.createElement('p');
    p.className = 'projects-status';
    p.textContent = t('contactEmpty');
    box.append(p);
    return;
  }
  items.forEach(([label, href]) => {
    const a = document.createElement('a');
    a.className = 'contact-link';
    a.href = href;
    if (!href.startsWith('mailto:')) { a.target = '_blank'; a.rel = 'noopener'; }
    const text = document.createElement('span');
    text.textContent = label;
    const arrow = document.createElement('span');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    a.append(text, arrow);
    box.append(a);
  });
}

/* Progetti da GitHub */
async function loadRepos() {
  if (!CONFIG.github) { repoState = { status: 'nogithub', repos: [], total: null }; renderProjects(); return; }

  const username = encodeURIComponent(CONFIG.github);
  const [reposResult, profileResult] = await Promise.allSettled([
    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
    fetch(`https://api.github.com/users/${username}`)
  ]);

  let total = null;
  if (profileResult.status === 'fulfilled' && profileResult.value.ok) {
    try {
      const profile = await profileResult.value.json();
      if (Number.isInteger(profile.public_repos)) total = profile.public_repos;
    } catch (e) { /* Il conteggio verrà ricavato dall’elenco dei repository. */ }
  }

  if (reposResult.status === 'fulfilled' && reposResult.value.ok) {
    const all = await reposResult.value.json();
    total ??= all.length;
    const repos = CONFIG.featuredRepos
      .map(name => all.find(repo => repo.name.toLowerCase() === name.toLowerCase()))
      .filter(Boolean);
    repoState = { status: repos.length ? 'ok' : 'empty', repos, total };
  } else {
    repoState = {
      status: 'ok',
      total,
      repos: CONFIG.featuredRepos.map(name => ({
        name,
        html_url: `https://github.com/${CONFIG.github}/${encodeURIComponent(name)}`,
        language: null
      }))
    };
  }
  renderProjects();
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const skills = document.getElementById('skills');
  const all = document.getElementById('allRepos');
  grid.replaceChildren();
  grid.setAttribute('aria-busy', String(repoState.status === 'loading'));
  skills.replaceChildren();
  const addSkill = name => {
    if ([...skills.children].some(el => el.textContent.toLowerCase() === name.toLowerCase())) return;
    const tag = document.createElement('span');
    tag.textContent = name;
    skills.append(tag);
  };
  ['HTML', 'CSS', 'JavaScript'].forEach(addSkill);
  all.hidden = !CONFIG.github;
  if (CONFIG.github) all.href = `https://github.com/${CONFIG.github}?tab=repositories`;

  const messages = { loading: 'loading', nogithub: 'noGithub', empty: 'noRepos', error: 'errorRepos' };
  document.getElementById('repoCount').textContent = repoState.total == null ? '—' : String(repoState.total).padStart(2, '0');
  if (repoState.status !== 'ok') {
    const p = document.createElement('p');
    p.className = 'projects-status';
    p.textContent = t(messages[repoState.status]);
    grid.append(p);
    return;
  }

  const fmt = new Intl.DateTimeFormat(language === 'it' ? 'it-IT' : 'en-GB', { month: 'short', year: 'numeric' });
  repoState.repos.slice(0, CONFIG.maxProjects).forEach((r, index) => {
    const card = document.createElement('a');
    card.className = 'project-card';
    card.href = r.html_url;
    card.target = '_blank';
    card.rel = 'noopener';

    const details = CONFIG.projectDetails[r.name];
    const topLine = document.createElement('div');
    topLine.className = 'project-topline';
    const kind = document.createElement('span');
    kind.textContent = details?.kind?.[language] || (language === 'it' ? 'Repository' : 'Repository');
    const number = document.createElement('span');
    number.className = 'project-index';
    number.textContent = String(index + 1).padStart(2, '0');
    topLine.append(kind, number);

    const name = document.createElement('h3');
    name.textContent = r.name === 'File-Crypto-Tool' ? 'File Crypto Tool' : r.name === 'pc-build-optimizer' ? 'PC Build Optimizer' : r.name;
    const desc = document.createElement('p');
    desc.textContent = details?.description?.[language] || r.description || t('noDesc');
    const meta = document.createElement('div');
    meta.className = 'project-meta';
    (details?.stack || [r.language].filter(Boolean)).forEach((item, stackIndex) => {
      if (stackIndex > 0) {
        const separator = document.createElement('span');
        separator.setAttribute('aria-hidden', 'true');
        separator.textContent = '·';
        meta.append(separator);
      }
      const tag = document.createElement('span');
      tag.textContent = item;
      meta.append(tag);
    });
    const link = document.createElement('span');
    link.className = 'project-link';
    const linkText = document.createElement('span');
    linkText.textContent = t('viewRepo');
    const arrow = document.createElement('span');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    link.append(linkText, arrow);

    card.append(topLine, name, desc, meta, link);
    grid.append(card);
  });

  const technologies = new Set(['HTML', 'CSS', 'JavaScript']);
  repoState.repos.slice(0, CONFIG.maxProjects).forEach(repo => {
    (CONFIG.projectDetails[repo.name]?.stack || [repo.language].filter(Boolean)).forEach(technology => technologies.add(technology));
  });
  skills.replaceChildren();
  technologies.forEach(addSkill);
}

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.nav a[aria-current="location"]').forEach(a => a.removeAttribute('aria-current'));
      document.querySelector(`.nav a[href="#${entry.target.id}"]`)?.setAttribute('aria-current', 'location');
    });
  }, { rootMargin: '-32% 0px -58% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => sectionObserver.observe(section));
}

setLanguage(language);
loadRepos();

