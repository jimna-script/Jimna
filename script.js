// Typewriter effect for the hero title
(function () {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const phrase = "future of Web";
  let index = 0;

  function typeNext() {
    if (index <= phrase.length) {
      el.textContent = phrase.slice(0, index);
      index += 1;
      setTimeout(typeNext, 80);
    }
  }

  // Run after a short delay for a subtle entrance
  setTimeout(typeNext, 400);
})();

// Dynamic year in footer
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

