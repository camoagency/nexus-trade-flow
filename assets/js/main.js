/* Nexus Trade + Flow — Interaktion
   Header, Mobilmenue, Hero-Sequenz, Einblendungen, Partner, Kontaktformular. */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var W = [640, 1280, 1920];

  /* --- Header: Schatten ab 24px Scroll, per Sentinel statt Scroll-Listener --- */
  var header = document.querySelector('.site-header');
  var sentinel = document.querySelector('.header-sentinel');
  if (header && sentinel && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      header.classList.toggle('is-scrolled', !e[0].isIntersecting);
    }).observe(sentinel);
  }

  /* --- Mobilmenue ---------------------------------------------------------- */
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('mobile-menu');
  if (burger && menu) {
    var open = false;

    var focusables = function () {
      return menu.querySelectorAll('a[href], button:not([disabled])');
    };

    var setOpen = function (state) {
      open = state;
      menu.classList.toggle('is-open', state);
      burger.setAttribute('aria-expanded', String(state));
      document.body.style.overflow = state ? 'hidden' : '';
      if (state) {
        var f = focusables();
        if (f.length) f[0].focus();
      } else {
        burger.focus();
      }
    };

    burger.addEventListener('click', function () { setOpen(!open); });

    menu.addEventListener('click', function (ev) {
      if (ev.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (ev) {
      if (!open) return;
      if (ev.key === 'Escape') { ev.preventDefault(); setOpen(false); return; }
      if (ev.key !== 'Tab') return;
      var f = focusables();
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
    });

    /* Beim Wechsel auf Desktopbreite zuruecksetzen */
    window.matchMedia('(min-width: 900px)').addEventListener('change', function (m) {
      if (m.matches && open) { menu.classList.remove('is-open'); document.body.style.overflow = ''; burger.setAttribute('aria-expanded', 'false'); open = false; }
    });
  }

  /* --- Einblendungen ------------------------------------------------------- */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && !reduce && 'IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (!en.isIntersecting) return;
        var el = en.target;
        setTimeout(function () { el.classList.add('is-in'); }, Math.min(i, 4) * 60);
        ro.unobserve(el);
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* --- Hero-Bildsequenz ----------------------------------------------------- */
  var hero = document.querySelector('.hero__media');
  if (hero) {
    var slides = [].slice.call(hero.querySelectorAll('.hero__slide'));
    var dots = [].slice.call(document.querySelectorAll('.hero__dot'));
    var pending = slides.filter(function (s) { return s.dataset.src; });

    var build = function (slide) {
      var base = slide.dataset.src;
      var set = function (ext) {
        return W.map(function (w) { return base + '-' + w + '.' + ext + ' ' + w + 'w'; }).join(', ');
      };
      var pic = document.createElement('picture');
      ['avif', 'webp'].forEach(function (t) {
        var s = document.createElement('source');
        s.type = 'image/' + t;
        s.srcset = set(t);
        s.sizes = '100vw';
        pic.appendChild(s);
      });
      var img = document.createElement('img');
      img.src = base + '-1280.jpg';
      img.srcset = set('jpg');
      img.sizes = '100vw';
      img.alt = slide.dataset.alt || '';
      img.width = 1920; img.height = 1080;
      img.decoding = 'async'; img.loading = 'lazy';
      pic.appendChild(img);
      slide.appendChild(pic);
      delete slide.dataset.src;
    };

    var index = 0, timer = null;

    var show = function (i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (s, n) { s.classList.toggle('is-active', n === index); });
      dots.forEach(function (d, n) {
        if (n === index) d.setAttribute('aria-current', 'true');
        else d.removeAttribute('aria-current');
      });
    };

    var start = function () {
      if (timer || slides.length < 2) return;
      timer = setInterval(function () { if (!document.hidden) show(index + 1); }, 6000);
    };

    dots.forEach(function (d, n) {
      d.addEventListener('click', function () {
        pending.forEach(build); pending = [];
        show(n);
        if (timer) { clearInterval(timer); timer = null; }
        if (!reduce) start();
      });
    });

    /* Bilder 2-4 erst nach window.load, und nur ohne prefers-reduced-motion */
    if (!reduce) {
      window.addEventListener('load', function () {
        pending.forEach(build); pending = [];
        start();
      });
    }
  }

  /* --- Partner ------------------------------------------------------------- */
  var section = document.getElementById('partners');
  if (section) {
    var list = document.getElementById('partners-list');
    var data = (typeof window.PARTNERS !== 'undefined' && window.PARTNERS) || [];
    var lang = document.documentElement.lang || 'en';
    if (!data.length || !list) {
      section.hidden = true;
    } else {
      data.forEach(function (p) {
        if (!p || !p.name) return;
        var li = document.createElement('li');
        li.className = 'partner';
        if (p.logo) {
          var img = document.createElement('img');
          img.src = p.logo; img.alt = p.name; img.loading = 'lazy';
          li.appendChild(img);
        }
        var h = document.createElement('h3');
        if (p.url) {
          var a = document.createElement('a');
          a.href = p.url; a.textContent = p.name;
          a.rel = 'noopener noreferrer'; a.target = '_blank';
          h.appendChild(a);
        } else {
          h.textContent = p.name;
        }
        li.appendChild(h);
        var note = p.note && (p.note[lang] || p.note.en);
        if (note) {
          var pEl = document.createElement('p');
          pEl.textContent = note;
          li.appendChild(pEl);
        }
        list.appendChild(li);
      });
    }
  }

  /* --- Kontaktformular ------------------------------------------------------ */
  [].forEach.call(document.querySelectorAll('form.form'), function (form) {
    var status = form.querySelector('.form-status');
    var btn = form.querySelector('.form__submit');
    var label = btn ? btn.textContent : '';

    var msg = function (text, kind) {
      if (!status) return;
      status.className = 'form-status' + (kind ? ' is-' + kind : '');
      status.innerHTML = text;
    };

    var showError = function (field) {
      var box = form.querySelector('#' + field.id + '-error');
      var text = field.validity.valueMissing
        ? (field.dataset.errRequired || '')
        : (field.dataset.errType || field.dataset.errRequired || '');
      field.setAttribute('aria-invalid', 'true');
      if (box) box.textContent = text;
    };

    var clearError = function (field) {
      field.removeAttribute('aria-invalid');
      var box = form.querySelector('#' + field.id + '-error');
      if (box) box.textContent = '';
    };

    [].forEach.call(form.elements, function (el) {
      if (!el.id || el.type === 'submit') return;
      el.addEventListener('input', function () { if (el.checkValidity()) clearError(el); });
      el.addEventListener('invalid', function (ev) { ev.preventDefault(); showError(el); });
    });

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();

      var invalid = null;
      [].forEach.call(form.elements, function (el) {
        if (!el.id || el.type === 'submit') return;
        if (el.checkValidity()) { clearError(el); }
        else { showError(el); if (!invalid) invalid = el; }
      });
      if (invalid) { invalid.focus(); return; }

      if (btn) { btn.setAttribute('aria-busy', 'true'); btn.disabled = true; btn.textContent = form.dataset.msgSending || label; }
      msg('', '');

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (!res.ok) throw new Error('http');
        msg(form.dataset.msgOk || '', 'ok');
        form.reset();
      }).catch(function () {
        msg(form.dataset.msgErr || '', 'err');
      }).then(function () {
        if (btn) { btn.removeAttribute('aria-busy'); btn.disabled = false; btn.textContent = label; }
        if (status) status.focus && status.focus();
      });
    });
  });
})();
