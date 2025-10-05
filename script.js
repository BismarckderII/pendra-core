// Mobile nav toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});

// Scroll fade animation
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

// Language switcher
const langSelect = document.getElementById("language-switcher");

async function loadLanguage(lang) {
  try {
    const res = await fetch(`lang/${lang}.json`);
    const data = await res.json();

    document.querySelector('[href="#about"]').textContent = data.nav_about;
    document.querySelector('[href="#team"]').textContent = data.nav_team;
    document.querySelector('[href="#events"]').textContent = data.nav_events;
    document.querySelector('[href="#news"]').textContent = data.nav_news;

    document.querySelector("#about h2").textContent = data.nav_about;
    document.querySelector("#about p").textContent = data.about_text;

    document.querySelector("#team h2").textContent = data.team_title;
    document.querySelector("#events h2").textContent = data.events_title;
    document.querySelector("#events p").textContent = data.events_text;

    document.querySelector("#news h2").textContent = data.news_title;
    document.querySelector("#news p").textContent = data.news_text;
  } catch (err) {
    console.error("Language load error:", err);
  }
}

// Default = English
loadLanguage("en");

langSelect.addEventListener("change", e => {
  loadLanguage(e.target.value);
});
