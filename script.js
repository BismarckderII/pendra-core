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
// Mobile nav toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});

// Scroll reveal animation
const fadeSections = document.querySelectorAll(".fade-section");
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.8;
  fadeSections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add("visible");
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();



loadLanguage(currentLang);


