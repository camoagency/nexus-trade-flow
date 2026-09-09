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

  /* --- Bildsequenz ----------------------------------------------------------
     Ein Wurzelelement mit [data-carousel]. Darin:
       .hero__slide   Bilder, das erste steht statisch im HTML
       .hero__panel   optional, wechselnde Textbloecke
       .hero-tab      optional, beschriftete Reiter
       .hero-pause    optional, Pause-Schalter (Pflicht bei automatischem Wechsel)
     Ohne Reiter laeuft die Folge stumm durch - so auf den Unterseiten. */
  [].forEach.call(document.querySelectorAll('[data-carousel]'), function (root) {
    var slides = [].slice.call(root.querySelectorAll('.hero__slide'));
    if (slides.length < 2) return;

    var panels = [].slice.call(root.querySelectorAll('.hero__panel'));
    var tabs = [].slice.call(root.querySelectorAll('.hero-tab'));
    var pauseBtn = root.querySelector('.hero-pause');
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

    var buildAll = function () { pending.forEach(build); pending = []; };

    var index = 0, timer = null, paused = false, held = false;

    var show = function (i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (s, n) { s.classList.toggle('is-active', n === index); });
      panels.forEach(function (p, n) { p.classList.toggle('is-active', n === index); });
      tabs.forEach(function (t, n) {
        if (n === index) t.setAttribute('aria-current', 'true');
        else t.removeAttribute('aria-current');
      });
    };

    var stop = function () { if (timer) { clearInterval(timer); timer = null; } };

    var run = function () {
      if (timer || reduce || paused || held) return;
      /* 5000ms: Untergrenze sind 4500ms. Jede Bildtafel traegt Ueberschrift,
         Absatz und Link, das Lesen dauert rund vier Sekunden. */
      timer = setInterval(function () { if (!document.hidden) show(index + 1); }, 5000);
    };

    /* Reiter: springt zum Bild und haelt den automatischen Wechsel kurz an,
       damit die Auswahl nicht sofort wieder wegwandert. */
    tabs.forEach(function (t, n) {
      t.addEventListener('click', function () {
        buildAll();
        show(n);
        stop();
        run();
      });
    });

    /* Pause-Schalter, WCAG 2.2.2 */
    if (pauseBtn) {
      pauseBtn.addEventListener('click', function () {
        paused = !paused;
        pauseBtn.setAttribute('aria-pressed', String(paused));
        var label = pauseBtn.querySelector('.hero-pause__label');
        var text = paused
          ? (pauseBtn.dataset.labelPlay || '')
          : (pauseBtn.dataset.labelPause || '');
        if (label) label.textContent = text;
        pauseBtn.setAttribute('aria-label', text);
        pauseBtn.classList.toggle('is-paused', paused);
        if (paused) stop(); else { buildAll(); run(); }
      });
    }

    /* Stopp bei Hover und bei Tastaturfokus */
    var hold = function () { held = true; stop(); };
    var release = function () { held = false; run(); };
    root.addEventListener('mouseenter', hold);
    root.addEventListener('mouseleave', release);
    root.addEventListener('focusin', hold);
    root.addEventListener('focusout', function (ev) {
      if (!root.contains(ev.relatedTarget)) release();
    });

    /* Weitere Bilder erst nach window.load. Bei prefers-reduced-motion bleibt
       Bild 1 stehen; die Reiter laden ihr Bild dann beim Klick nach. */
    if (!reduce) {
      window.addEventListener('load', function () { buildAll(); run(); });
    }
  });

  /* --- Jahreszahl -----------------------------------------------------------
     Nur der Zahlenknoten wird ersetzt, der Rest des Copyright-Strings bleibt.
     Im HTML steht 2026 als Rueckfallwert, falls JavaScript aus ist. */
  [].forEach.call(document.querySelectorAll('[data-year]'), function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* --- Beschaffungsplattformen ---------------------------------------------
     Ohne logo-Feld wird der Name als Wortmarke gesetzt, mit logo-Feld die
     Bilddatei. Beides aus derselben Datenquelle, damit spaeter ohne Umbau
     umgestellt werden kann. */
  var section = document.getElementById('partners');
  if (section) {
    var list = document.getElementById('partners-list');
    var data = (typeof window.PARTNERS !== 'undefined' && window.PARTNERS) || [];
    /* Die Sektion steht im HTML auf hidden. Sie wird nur eingeblendet, wenn
       tatsaechlich Eintraege gerendert wurden - so blitzt nie ein leerer Rahmen auf. */
    if (data.length && list) {
      var newTab = list.dataset.newtab || '';
      var rendered = 0;
      data.forEach(function (p) {
        if (!p || !p.name || !p.url) return;
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.className = 'plat__item';
        a.href = p.url;
        a.target = '_blank';
        a.rel = 'noopener nofollow';
        a.setAttribute('aria-label', newTab ? p.name + ' (' + newTab + ')' : p.name);
        if (p.logo) {
          var img = document.createElement('img');
          img.src = p.logo; img.alt = p.name; img.loading = 'lazy'; img.decoding = 'async';
          a.appendChild(img);
        } else {
          a.textContent = p.name;
        }
        li.appendChild(a);
        list.appendChild(li);
        rendered++;
      });
      if (rendered) section.hidden = false;
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
