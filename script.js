// GitHub Pages fix for fetch() with JSON
if (window.location.protocol === "file:" || window.location.hostname.includes("github.io")) {
  console.log("Running on GitHub Pages or local file system.");
}


/* ===== Language Loader ===== */
const langData = {};
let currentLang = 'en';

async function loadLanguage(lang) {
  const res = await fetch(`./lang/${lang}.json`);
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

/* ===== Team Section ===== */
const team = [
  { name: "Alex", role: "Founder / Developer" },
  { name: "Mira", role: "Community Manager" },
  { name: "Jay", role: "Designer" },
  { name: "Lynn", role: "Event Coordinator" }
];

const teamContainer = document.getElementById('team-container');
team.forEach(member => {
  const div = document.createElement('div');
  div.classList.add('team-member');
  div.innerHTML = `<h3>${member.name}</h3><p>${member.role}</p>`;
  teamContainer.appendChild(div);
});

/* ===== Particle Background ===== */
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#f68b1e" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 1, direction: "none", out_mode: "out" },
    line_linked: { enable: true, distance: 120, color: "#f68b1e", opacity: 0.2, width: 1 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100, duration: 0.4 } }
  },
  retina_detect: true
});


