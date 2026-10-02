// ZAI LAB — interactions du site

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Défilé "machine à écrire" (bloc "Vous reconnaissez-vous ?") ----------
     Chaque phrase s'écrit mot par mot de gauche à droite, reste affichée
     10 secondes, puis s'efface avant que la phrase suivante s'écrive.
     Chaque phrase commence par son numéro (1/7, 2/7...), calculé automatiquement.
     Le total est calculé automatiquement d'après le HTML. */

  document.querySelectorAll('.hero-rotator').forEach((rotator) => {
    const sources = rotator.querySelectorAll('.rotator-source');
    const output = rotator.querySelector('.rotator-output');
    if (!sources.length || !output) return;

    const texts = Array.from(sources).map((el) => el.textContent.trim());
    const total = texts.length;
    // Chaque phrase commence par son numéro : "1/7 : Votre projet..."
    const phrases = texts.map((t, i) => (i + 1) + '/' + total + ' : ' + t);

    let phraseIndex = 0;

    const WORD_DELAY = 170;    // vitesse d'écriture (ms entre chaque mot)
    const HOLD_TIME  = 10000;  // temps d'affichage de la phrase complète : 10 secondes
    const ERASE_DELAY = 18;    // vitesse d'effacement (ms entre chaque caractère)
    const PAUSE_BEFORE_NEXT = 300;

    function typePhrase(text, onDone) {
      const words = text.split(' ');
      let i = 0;
      output.textContent = '';
      (function typeNextWord() {
        if (i < words.length) {
          output.textContent += (i === 0 ? '' : ' ') + words[i];
          i++;
          setTimeout(typeNextWord, WORD_DELAY);
        } else {
          setTimeout(onDone, HOLD_TIME);
        }
      })();
    }

    function erasePhrase(onDone) {
      (function eraseStep() {
        const current = output.textContent;
        if (current.length > 0) {
          output.textContent = current.slice(0, -1);
          setTimeout(eraseStep, ERASE_DELAY);
        } else {
          setTimeout(onDone, PAUSE_BEFORE_NEXT);
        }
      })();
    }

    function loop() {
      typePhrase(phrases[phraseIndex], () => {
        erasePhrase(() => {
          phraseIndex = (phraseIndex + 1) % phrases.length;
          loop();
        });
      });
    }

    loop();
  });

  /* ---------- Menu mobile ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  /* ---------- Dropdown "Ressources" au tactile (mobile) ---------- */
  document.querySelectorAll('.has-dropdown > a').forEach((link) => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 960) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  /* ---------- Fermer le menu mobile après un clic sur un lien ---------- */
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 960 && navLinks) {
        navLinks.classList.remove('open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

});