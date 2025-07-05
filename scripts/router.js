
// Load content based on current URL hash
function loadContent() {
  const main = document.querySelector('[data-content]');
  const page = getPageFromURL();

  fetch(`pages/${page}.html`)
    .then(response => {
      if (!response.ok) throw new Error("Page not found");
      return response.text();
    })
    .then(html => {
      main.innerHTML = html;
    })
    .catch(error => {
      main.innerHTML = "<h2>404 - Page not found</h2>";
    });
}

// Get the page name from URL hash
function getPageFromURL() {
  const hash = window.location.hash.replace("#", "");
  return hash || "home";
}

// Run on page load and hash change
document.addEventListener("DOMContentLoaded", loadContent);
window.addEventListener("hashchange", loadContent);
