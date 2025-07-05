
function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');

  elements.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(response => {
        if (response.ok) return response.text();
        else throw new Error('File not found');
      })
      .then(data => {
        el.innerHTML = data;
      })
      .catch(error => {
        console.error(error);
        el.innerHTML = '<!-- Failed to load include file -->';
      });
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);
