/* ===== Language Loader ===== */
const langData = {};
let currentLang = 'en';

async function loadLanguage(lang) {
  const response = await fetch(`lang/${lang}.json`);
  const data = await response.json();
  Object.assign(langData, data);
  updateText();
}

function updateText() {
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (langData[key]) el.innerText = langData[key];
  });
}

document.getElementById('language-switcher').addEventListener('change', e => {
  currentLang = e.target.value;
  loadLanguage(currentLang);
});

loadLanguage(currentLang);
