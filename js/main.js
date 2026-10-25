/* =========================================================
   वीरगंज मेट्रो मुभमेन्ट — Birgunj Metro Movement
   main.js  — nav toggle, scroll reveal, counters, year
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile nav toggle ---- */
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---- Count-up stats (fires once when visible) ---- */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const isFloat = !Number.isInteger(target);
    const duration = 1500;
    const start = performance.now();

    function nepaliDigits(str) {
      const map = { '0':'०','1':'१','2':'२','3':'३','4':'४','5':'५','6':'६','7':'७','8':'८','9':'९' };
      return String(str).replace(/[0-9]/g, function (d) { return map[d]; });
    }

    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      let val = target * eased;
      val = isFloat ? val.toFixed(1) : Math.round(val).toLocaleString('en-US');
      el.textContent = nepaliDigits(val) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const counters = document.querySelectorAll('.stat-num[data-count]');
  // reset to zero up front so JS users see the count-up (no-JS keeps the HTML value)
  counters.forEach(function (c) { c.textContent = '०' + (c.dataset.suffix || ''); });
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          co.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { co.observe(c); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---- Current year in footer ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = '© ' + new Date().getFullYear();

});
