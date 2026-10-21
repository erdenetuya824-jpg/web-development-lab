// Лаб 6: Theme болон 3D flip товч
const themeButton = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('tohilog-theme');
function applyTheme(light) {
  document.body.classList.toggle('light-mode', light);
  themeButton.textContent = light ? '☾ Харанхуй' : '☀ Гэрэлтэй';
  themeButton.setAttribute('aria-pressed', String(light));
}
applyTheme(savedTheme === 'light');
themeButton.addEventListener('click', () => {
  const light = !document.body.classList.contains('light-mode');
  applyTheme(light);
  localStorage.setItem('tohilog-theme', light ? 'light' : 'dark');
});

document.querySelectorAll('.flip-card').forEach(card => {
  const trigger = card.querySelector('.flip-trigger');
  const back = card.querySelector('.flip-reset');
  function flip(state) {
    card.classList.toggle('is-flipped', state);
    trigger.setAttribute('aria-expanded', String(state));
    trigger.textContent = state ? 'Буцах ↩' : 'Дэлгэрэнгүй ↻';
    back.tabIndex = state ? 0 : -1;
  }
  flip(false);
  trigger.addEventListener('click', () => flip(!card.classList.contains('is-flipped')));
  back.addEventListener('click', () => { flip(false); trigger.focus(); });
});
