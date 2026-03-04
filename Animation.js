document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

// Fade out on link click for internal pages
const links = document.querySelectorAll("a"); // all links
links.forEach(link => {
  // only internal links, skip external
  if (link.hostname === location.hostname) {
    link.addEventListener("click", e => {
      e.preventDefault();             // prevent immediate navigation
      const href = link.getAttribute("href");
      document.body.style.opacity = 0; // fade out
      setTimeout(() => {
        window.location.href = href; // go to new page after fade
      }, 500); // match CSS transition duration
    });
  }
});