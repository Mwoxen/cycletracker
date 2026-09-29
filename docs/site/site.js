(function () {
  var stored = null;
  try {
    stored = localStorage.getItem('lang');
  } catch (e) {}
  var browser = (navigator.language || 'en').toLowerCase().indexOf('da') === 0 ? 'da' : 'en';
  var lang = stored || browser;
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
    b.addEventListener('click', function () {
      document.documentElement.setAttribute('data-lang', b.dataset.lang);
      try {
        localStorage.setItem('lang', b.dataset.lang);
      } catch (e) {}
      document.querySelectorAll('.lang button').forEach(function (x) {
        x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
      });
    });
  });
})();
