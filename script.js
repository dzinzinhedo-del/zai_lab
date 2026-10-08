// ZAI LAB — interactions du site

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     TRADUCTION FR / EN
     Le français reste dans le HTML. Chaque texte français
     (clé) est associé à sa version anglaise ci-dessous.
     Pour modifier un texte anglais : changez la valeur à droite.
     Si vous changez un texte français dans le HTML, changez
     aussi la clé correspondante ici.
     ========================================================= */
  const EN = {
    // Titres de page
    "ZAI LAB — Structurer. Convaincre. Mesurer. Valoriser.": "ZAI LAB — Structure. Convince. Measure. Showcase.",
    "À propos — ZAI LAB": "About — ZAI LAB",

    // Commun : en-tête / pied de page
    "Disponibles pour de nouveaux projets": "Available for new projects",
    "Porto-Novo, Bénin": "Porto-Novo, Benin",
    "Accueil": "Home",
    "À propos": "About",
    "Prendre rendez-vous": "Book a meeting",
    "Ouvrir le menu": "Open menu",
    "Changer de langue": "Change language",
    "Votre partenaire de confiance pour les projets.": "Your trusted partner for your projects.",
    "Porto-Novo, République du Bénin": "Porto-Novo, Republic of Benin",
    "© 2026 ZAI LAB — Z Analytics & Infographics. Tous droits réservés.": "© 2026 ZAI LAB — Z Analytics & Infographics. All rights reserved.",

    // Accueil : héros
    "Cabinet de Recherche & Développement": "Research & Development Firm",
    "— Porto-Novo, Bénin": "— Porto-Novo, Benin",
    "Votre projet ne trouve pas de financement, pas parce qu'il est mauvais, mais parce qu'il n'est pas bien construit.": "Your project can't find funding, not because it is bad, but because it isn't well built.",
    "Votre projet est financé mais aucun système de suivi, le rapport final est vide et le bailleur déçu.": "Your project is funded but has no monitoring system, the final report is empty and the donor is disappointed.",
    "Vous avez collecté des données mais personne pour les analyser. Elles dorment dans un ordinateur.": "You have collected data but nobody to analyse it. It sits dormant on a computer.",
    "Trois prestataires, trois factures, trois langages, et un dossier incohérent.": "Three providers, three invoices, three languages, and an inconsistent file.",
    "Votre projet a réussi mais personne ne le sait aucune communication visuelle pour le montrer.": "Your project succeeded but nobody knows it: no visual communication to show it.",
    "Vous avez des résultats de recherche solides mais ils ne sont jamais publiés.": "You have solid research results but they are never published.",
    "Votre rapport final ne satisfait pas les exigences du bailleur.": "Your final report does not meet the donor's requirements.",
    "Parlons de votre projet": "Let's talk about your project",
    "Appelez-nous": "Call us",

    // Accueil : services
    "Nos services": "Our services",
    "Ces problèmes n'ont plus besoin d'exister.": "These problems no longer need to exist.",
    "Données & Statistiques": "Data & Statistics",
    "Collecte, nettoyage et structuration : vos données deviennent enfin exploitables et fiables.": "Collection, cleaning and structuring: your data finally becomes usable and reliable.",
    "Analyse & Modélisation": "Analysis & Modelling",
    "Modélisation statistique, Machine Learning et cartographie pour transformer vos données en décisions.": "Statistical modelling, Machine Learning and mapping to turn your data into decisions.",
    "Rédaction & Montage de projet": "Project Writing & Design",
    "Des projets solides, structurés et prêts à convaincre les bailleurs de fonds.": "Solid, well-structured projects ready to convince donors.",
    "Rapport & Rédaction Scientifique": "Reports & Scientific Writing",
    "Rapports conformes aux exigences des bailleurs et articles prêts pour des revues indexées.": "Reports that meet donor requirements and articles ready for indexed journals.",
    "Suivi & Évaluation": "Monitoring & Evaluation",
    "Cadres logiques, indicateurs SMART et évaluations d'impact pour piloter chaque étape.": "Logical frameworks, SMART indicators and impact evaluations to steer every stage.",
    "Graphisme & Visibilité": "Graphic Design & Visibility",
    "Une identité visuelle forte pour que vos résultats se voient autant qu'ils se mesurent.": "A strong visual identity so your results are as visible as they are measurable.",
    "Voir le service": "View service",

    // Accueil : qui nous sommes
    "Qui nous sommes": "Who we are",
    "Un cabinet de R&D, pas trois prestataires séparés.": "An R&D firm, not three separate providers.",
    "ZAI LAB est un cabinet de Recherche & Développement basé à Porto-Novo, au Bénin. Notre conviction : aucun bon projet ne devrait rester invisible, mal financé, ou mal raconté faute d'avoir eu le bon accompagnement au bon moment.": "ZAI LAB is a Research & Development firm based in Porto-Novo, Benin. Our conviction: no good project should remain invisible, underfunded or poorly told for lack of the right support at the right time.",
    "En savoir plus": "Learn more",
    "Satisfaction moyenne": "Average satisfaction",
    "Nos expertises": "Our expertise",
    "Analyse de données": "Data analysis",
    "Suivi-évaluation": "Monitoring & evaluation",
    "Communication visuelle": "Visual communication",
    "Rapports bancables": "Bankable reports",
    "Publications scientifiques": "Scientific publications",
    "Cadres logiques": "Logical frameworks",
    "Envie de construire quelque chose de solide ?": "Want to build something solid?",

    // À propos
    "Qu'aucun bon projet ne reste invisible.": "Let no good project remain invisible.",
    "Présentation du cabinet": "About the firm",
    "ZAI LAB, cabinet de Recherche & Développement.": "ZAI LAB, a Research & Development firm.",
    "ZAI LAB est un cabinet de Recherche & Développement officiellement enregistré à Porto-Novo, République du Bénin. Il réunit sous un même toit plusieurs services complémentaires pour accompagner porteurs de projets, entreprises et organisations à coût accessible — afin qu'aucun projet sérieux ne reste dans les cartons faute de moyens ou de visibilité.": "ZAI LAB is a Research & Development firm officially registered in Porto-Novo, Republic of Benin. It brings together, under one roof, several complementary services to support project leaders, businesses and organisations at an affordable cost — so that no serious project stays in a drawer for lack of means or visibility.",
    "Discuter de votre projet": "Discuss your project",
    "Mission, ambition & vision": "Mission, ambition & vision",
    "Chaque bon projet mérite d'être financé, exécuté et reconnu.": "Every good project deserves to be funded, delivered and recognised.",
    "Accompagner les porteurs de projets, les chercheurs et les institutions à gagner des financements et à exécuter leurs projets avec un impact significatif, des données solides et des rapports acceptables pour les bailleurs.": "To support project leaders, researchers and institutions in winning funding and delivering their projects with significant impact, solid data and reports that donors can accept.",
    "Devenir le cabinet de référence en Afrique de l'Ouest pour l'accompagnement scientifique et visuel des projets de développement. Chaque bon projet mérite d'être financé, exécuté et reconnu.": "To become the leading firm in West Africa for the scientific and visual support of development projects. Every good project deserves to be funded, delivered and recognised.",
    "À l'horizon 2035, ZAI LAB ambitionne de devenir Z Group : un groupe multisectoriel présent partout dans la sous-région, formant la prochaine génération de data scientists africains.": "By 2035, ZAI LAB aims to become Z Group: a multi-sector group present throughout the sub-region, training the next generation of African data scientists.",

    // Services
    "Six expertises, une seule adresse.": "Six areas of expertise, one address.",
    "Vous n'avez plus besoin de coordonner trois prestataires pour un seul projet. ZAI LAB couvre l'ensemble du cycle : de la donnée brute jusqu'à la reconnaissance publique de vos résultats.": "You no longer need to coordinate three providers for a single project. ZAI LAB covers the whole cycle: from raw data to the public recognition of your results.",
    "De la donnée brute à l'impact reconnu": "From raw data to recognised impact",
    "Six étapes qui couvrent l'ensemble de votre projet, sans jamais changer de prestataire.": "Six stages that cover your entire project, without ever changing provider.",
    "Vos données méritent mieux qu'un tableur oublié. Nous collectons, nettoyons, structurons et organisons vos données pour qu'elles deviennent enfin exploitables.": "Your data deserves better than a forgotten spreadsheet. We collect, clean, structure and organise your data so it finally becomes usable.",
    "Des chiffres, ce n'est utile que si on sait les lire. Nous transformons vos données en informations claires, grâce à des outils avancés d'analyse.": "Numbers are only useful if you can read them. We turn your data into clear information using advanced analysis tools.",
    "Un financement se joue souvent sur la qualité d'un dossier. Nous rédigeons et montons des projets solides, structurés et prêts à convaincre les bailleurs.": "Funding often depends on the quality of a proposal. We write and build solid, well-structured projects ready to convince donors.",
    "Nous rédigeons des rapports conformes aux exigences des bailleurs et accompagnons la rédaction et la soumission de vos travaux dans des revues indexées.": "We write reports that meet donor requirements and support the writing and submission of your work to indexed journals.",
    "Un projet sans suivi rigoureux est un projet qui avance à l'aveugle. Nous construisons des systèmes qui permettent de piloter, ajuster et prouver l'impact.": "A project without rigorous monitoring moves blindly. We build systems that let you steer, adjust and prove impact.",
    "Un bon résultat mal présenté passe inaperçu. Nous donnons une identité visuelle forte à vos projets et à vos résultats.": "A good result poorly presented goes unnoticed. We give your projects and results a strong visual identity.",
    "Nos valeurs": "Our values",
    "Ce qui nous guide au quotidien": "What guides us every day",
    "Quatre principes simples qui structurent chaque mission, du premier échange à la livraison finale.": "Four simple principles that structure every assignment, from the first conversation to final delivery.",
    "Rigueur scientifique": "Scientific rigour",
    "Méthodes validées, défendables et reproductibles.": "Validated, defensible and reproducible methods.",
    "Partenariat de confiance": "Trusted partnership",
    "Transparence et engagement mutuel.": "Transparency and mutual commitment.",
    "Éthique professionnelle": "Professional ethics",
    "Confidentialité, intégrité, respect des normes.": "Confidentiality, integrity, respect for standards.",
    "Impact durable": "Lasting impact",
    "Effets mesurables sur les communautés.": "Measurable effects on communities.",
    "Nos clients": "Our clients",
    "Vous êtes peut-être déjà des nôtres.": "You may already be one of ours.",
    "ONG et projets internationaux": "NGOs and international projects",
    "Associations et groupements communautaires": "Associations and community groups",
    "Centres de recherche et laboratoires": "Research centres and laboratories",
    "Institutions publiques et gouvernementales": "Public and government institutions",
    "Chercheurs et doctorants": "Researchers and PhD candidates",
    "Étudiants en Master et Thèse": "Master's and thesis students",
    "Porteurs de projets et entrepreneurs": "Project leaders and entrepreneurs",
    "PME et entreprises locales": "SMEs and local businesses",
    "Un besoin spécifique en tête ?": "Have a specific need in mind?",

    // Contact
    "Parlons de votre projet et donnons vie à votre idée.": "Let's talk about your project and bring your idea to life.",
    "Que vous ayez une idée, un projet en cours, ou juste une question, prenez rendez-vous, nous en discutons ensemble.": "Whether you have an idea, an ongoing project or just a question, book a meeting and we'll discuss it together.",
    "Comprendre vos objectifs et le contexte de votre projet": "Understand your goals and the context of your project",
    "Discuter de votre public, vos données et vos contraintes": "Discuss your audience, your data and your constraints",
    "Aborder le périmètre, les délais et le budget": "Cover the scope, timeline and budget",
    "Décrivez-nous votre besoin": "Tell us what you need",
    "Nous vous répondrons dans les meilleurs délais.": "We will get back to you as soon as possible.",
    "Nom complet": "Full name",
    "Organisation": "Organisation",
    "Téléphone": "Phone",
    "Type de projet": "Project type",
    "Votre nom complet": "Your full name",
    "Votre organisation": "Your organisation",
    "vous@exemple.com": "you@example.com",
    "Sélectionner une option": "Select an option",
    "Autre": "Other",
    "Parlez-nous de votre projet, de vos objectifs ou de vos questions...": "Tell us about your project, your goals or your questions...",
    "Envoyer ma demande": "Send my request",
    "Localisation": "Location",
    "Votre message s'ouvrira dans WhatsApp : appuyez sur « Envoyer » pour nous le transmettre.": "Your message will open in WhatsApp: tap “Send” to deliver it to us."
  };

  const norm = (s) => s.replace(/\s+/g, ' ').trim();
  const origText = new WeakMap();
  const ATTRS = ['placeholder', 'aria-label', 'alt', 'title'];
  const frTitle = document.title;
  const langBtn = document.querySelector('.lang-toggle');
  let lang = 'fr';

  function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;

    // Textes
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const p = n.parentElement;
        if (!p || p.closest('.rotator-output') || p.closest('.lang-toggle') ||
            p.tagName === 'SCRIPT' || p.tagName === 'STYLE') return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((n) => {
      if (!origText.has(n)) origText.set(n, n.nodeValue);
      const fr = origText.get(n);
      const key = norm(fr);
      if (l === 'en' && EN[key]) {
        const lead = fr.match(/^\s*/)[0];
        const trail = fr.match(/\s*$/)[0];
        n.nodeValue = lead + EN[key] + trail;
      } else {
        n.nodeValue = fr;
      }
    });

    // Attributs (placeholder, aria-label, alt, title)
    document.querySelectorAll('[placeholder],[aria-label],[alt],[title]').forEach((el) => {
      ATTRS.forEach((a) => {
        if (!el.hasAttribute(a)) return;
        const store = 'data-fr-' + a;
        if (!el.hasAttribute(store)) el.setAttribute(store, el.getAttribute(a));
        const fr = el.getAttribute(store);
        const key = norm(fr);
        el.setAttribute(a, l === 'en' && EN[key] ? EN[key] : fr);
      });
    });

    // Titre de l'onglet
    document.title = (l === 'en' && EN[norm(frTitle)]) ? EN[norm(frTitle)] : frTitle;

    // Libellé du bouton : affiche la langue vers laquelle on bascule
    if (langBtn) {
      const label = langBtn.querySelector('.lang-current');
      if (label) label.textContent = l === 'fr' ? 'EN' : 'FR';
    }

    document.dispatchEvent(new Event('langchange'));
  }

  let saved = 'fr';
  try { saved = localStorage.getItem('zailab-lang') || 'fr'; } catch (e) {}

  /* ---------- Défilé "machine à écrire" ----------
     Chaque phrase s'écrit mot par mot, reste affichée quelques
     secondes, puis s'efface avant la suivante. Numérotation
     (1/7, 2/7...) calculée automatiquement. */

  document.querySelectorAll('.hero-rotator').forEach((rotator) => {
    const sources = Array.from(rotator.querySelectorAll('.rotator-source'));
    const output = rotator.querySelector('.rotator-output');
    if (!sources.length || !output) return;

    const WORD_DELAY = 120;    // vitesse d'écriture (ms entre chaque mot)
    const HOLD_TIME  = 5000;   // durée d'affichage de la phrase complète (5 s)
    const ERASE_DELAY = 14;    // vitesse d'effacement (ms par caractère)
    const PAUSE_BEFORE_NEXT = 250;

    let run = 0;
    let phraseIndex = 0;

    function start() {
      const id = ++run;
      const later = (fn, ms) => setTimeout(() => { if (id === run) fn(); }, ms);
      output.textContent = '';

      function phrase(i) {
        const sep = document.documentElement.lang === 'en' ? ': ' : ' : ';
        return (i + 1) + '/' + sources.length + sep + sources[i].textContent.trim();
      }

      function typePhrase(text, onDone) {
        const words = text.split(' ');
        let i = 0;
        output.textContent = '';
        (function typeNextWord() {
          if (i < words.length) {
            output.textContent += (i === 0 ? '' : ' ') + words[i];
            i++;
            later(typeNextWord, WORD_DELAY);
          } else {
            later(onDone, HOLD_TIME);
          }
        })();
      }

      function erasePhrase(onDone) {
        (function eraseStep() {
          const current = output.textContent;
          if (current.length > 0) {
            output.textContent = current.slice(0, -1);
            later(eraseStep, ERASE_DELAY);
          } else {
            later(onDone, PAUSE_BEFORE_NEXT);
          }
        })();
      }

      (function loop() {
        typePhrase(phrase(phraseIndex), () => {
          erasePhrase(() => {
            phraseIndex = (phraseIndex + 1) % sources.length;
            loop();
          });
        });
      })();
    }

    // Applique la langue enregistrée avant de démarrer, puis redémarre à chaque changement
    if (saved === 'en') applyLang('en'); else applyLang('fr');
    start();
    document.addEventListener('langchange', start);
  });

  // Pages sans défilé : appliquer quand même la langue enregistrée
  if (!document.querySelector('.hero-rotator')) applyLang(saved === 'en' ? 'en' : 'fr');

  /* ---------- Bouton de langue ---------- */
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const next = lang === 'fr' ? 'en' : 'fr';
      applyLang(next);
      try { localStorage.setItem('zailab-lang', next); } catch (e) {}
    });
  }

  /* ---------- Formulaire de contact → WhatsApp ----------
     Le bouton ouvre WhatsApp avec le message déjà rédigé.
     Numéro : modifiez WA_NUMBER si besoin (indicatif pays + numéro, sans + ni espaces). */
  const WA_NUMBER = '2290129628196';
  const form = document.getElementById('contactForm');
  if (form) {
    const errBox = document.getElementById('formError');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const en = document.documentElement.lang === 'en';
      const val = (id) => (document.getElementById(id) || {}).value ? document.getElementById(id).value.trim() : '';
      const nom = val('nom'), org = val('organisation'), email = val('email'),
            tel = val('telephone'), msg = val('message');
      const typeEl = document.getElementById('type-projet');
      const type = typeEl && typeEl.value ? typeEl.value : '';

      if (!nom || !msg) {
        errBox.textContent = en ? 'Please fill in your name and your message.'
                                : 'Merci de renseigner votre nom et votre message.';
        errBox.hidden = false;
        (!nom ? document.getElementById('nom') : document.getElementById('message')).focus();
        return;
      }
      errBox.hidden = true;

      const L = en
        ? { hi: 'Hello ZAI LAB,', n: 'Name', o: 'Organisation', e: 'Email', t: 'Phone', p: 'Project type', m: 'Message' }
        : { hi: 'Bonjour ZAI LAB,', n: 'Nom', o: 'Organisation', e: 'Email', t: 'Téléphone', p: 'Type de projet', m: 'Message' };
      const lines = [L.hi, '', L.n + ' : ' + nom];
      if (org) lines.push(L.o + ' : ' + org);
      if (email) lines.push(L.e + ' : ' + email);
      if (tel) lines.push(L.t + ' : ' + tel);
      if (type) lines.push(L.p + ' : ' + type);
      lines.push('', L.m + ' :', msg);

      const url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
      const w = window.open(url, '_blank', 'noopener');
      if (!w) window.location.href = url;
    });
  }

  /* ---------- Menu mobile ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

});