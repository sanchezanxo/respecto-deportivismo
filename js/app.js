(function () {
  'use strict';

  const DATA = window.DEPOR_DATA;
  const deck = document.getElementById('deck');

  if (!DATA || !Array.isArray(DATA.steps)) {
    document.body.insertAdjacentHTML('beforeend',
      '<div class="fatal"><p>Non se atoparon os datos.<br>Comproba que <b>data/steps.js</b> existe e define <b>window.DEPOR_DATA</b>.</p></div>');
    return;
  }

  const config = DATA.config || {};
  const steps = DATA.steps;

  const esc = (s = '') => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- IDIOMA ----------
     Cada texto traducible en data/steps.js pode ser un obxecto { gl:…, en:… }.
     t() devolve a variante do idioma activo (con recuncho ao idioma por
     defecto); un texto normal (sen chaves de idioma) devólvese tal cal.
     ui() fai o mesmo para os textos de interface do bloque DATA.strings.
     Idioma resólvese: ?lang= da URL → localStorage → navegador → por defecto. */
  const LANGS = DATA.languages || { gl: 'Galego' };
  const DEFAULT_LANG = DATA.defaultLang || Object.keys(LANGS)[0];
  const LANG_KEYS = Object.keys(LANGS);
  const STR = DATA.strings || {};

  function pickLang() {
    const q = new URLSearchParams(location.search).get('lang');
    if (q && LANGS[q]) return q;
    try { const s = localStorage.getItem('depor_lang'); if (s && LANGS[s]) return s; } catch (_) {}
    const nav = (navigator.language || '').slice(0, 2).toLowerCase();
    if (LANGS[nav]) return nav;
    return DEFAULT_LANG;
  }
  const LANG = pickLang();
  document.documentElement.lang = LANG;
  try { localStorage.setItem('depor_lang', LANG); } catch (_) {}

  function t(v) {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      if (v[LANG] != null) return v[LANG];
      if (v[DEFAULT_LANG] != null) return v[DEFAULT_LANG];
      const first = Object.values(v)[0];
      return first != null ? first : '';
    }
    return v == null ? '' : v;
  }
  function ui(k) {
    const a = STR[LANG] && STR[LANG][k];
    if (a != null) return a;
    const b = STR[DEFAULT_LANG] && STR[DEFAULT_LANG][k];
    return b != null ? b : k;
  }
  function setLang(next) {
    if (!LANGS[next] || next === LANG) return;
    try { localStorage.setItem('depor_lang', next); } catch (_) {}
    const u = new URL(location.href);
    if (next === DEFAULT_LANG) u.searchParams.delete('lang');
    else u.searchParams.set('lang', next);
    location.href = u.toString();   // recárgase e vólvese pintar no novo idioma
  }

  /* ---------- iconos SVG de redes ---------- */
  const ICONS = {
    x: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
    facebook: '<path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073"/>',
    whatsapp: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>',
    telegram: '<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212-.07-.062-.174-.041-.249-.024-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>',
    bluesky: '<path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>',
    link: '<path d="M10.59 13.41a1 1 0 0 0 1.42 0l4-4a3 3 0 1 0-4.24-4.24l-1.3 1.29a1 1 0 0 0 1.42 1.42l1.29-1.3a1 1 0 0 1 1.42 1.42l-4 4a1 1 0 0 0 0 1.41Zm2.82-2.82a1 1 0 0 0-1.42 0l-4 4a3 3 0 1 0 4.24 4.24l1.3-1.29a1 1 0 0 0-1.42-1.42l-1.29 1.3a1 1 0 0 1-1.42-1.42l4-4a1 1 0 0 0 0-1.41Z"/>',
    share: '<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81a3 3 0 1 0-3-3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9a3 3 0 0 0 0 6c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65a2.92 2.92 0 1 0 2.92-2.92Z"/>',
    copy: '<path d="M15 1H4a2 2 0 0 0-2 2v13h2V3h11V1zm3 4H8a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 15H8V7h10v13z"/>'
  };
  const svg = k => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k]}</svg>`;

  /* ---------- datos de compartir ---------- */
  const shareUrl = (config.shareUrl && config.shareUrl.trim()) ? config.shareUrl.trim() : location.href;
  const shareText = t(config.shareText) || ((t(config.name) || '') + ' — ' + (t(config.tagline) || ''));
  const U = encodeURIComponent(shareUrl);
  const T = encodeURIComponent(shareText);
  const NET = [
    { k: 'x',        label: 'X',        href: `https://twitter.com/intent/tweet?text=${T}&url=${U}` },
    { k: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/?text=${T}%20${U}` },
    { k: 'telegram', label: 'Telegram', href: `https://t.me/share/url?url=${U}&text=${T}` },
    { k: 'facebook', label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${U}` },
    { k: 'bluesky',  label: 'Bluesky',  href: `https://bsky.app/intent/compose?text=${T}%20${U}` },
  ];
  const anchor = (n, labeled) =>
    `<a class="sh sh--${n.k}" href="${n.href}" target="_blank" rel="noopener noreferrer" title="${esc(ui('shareOn'))} ${esc(n.label)}" aria-label="${esc(ui('shareOn'))} ${esc(n.label)}">${svg(n.k)}${labeled ? `<span>${esc(n.label)}</span>` : ''}</a>`;
  const copyBtn = labeled => `<button class="sh js-copy" title="${esc(ui('copyLink'))}" aria-label="${esc(ui('copyLink'))}">${svg('copy')}${labeled ? `<span>${esc(ui('copy'))}</span>` : ''}</button>`;
  const nativeBtn = labeled => `<button class="sh js-native" title="${esc(ui('share'))}" aria-label="${esc(ui('share'))}">${svg('share')}${labeled ? `<span>${esc(ui('shareEllipsis'))}</span>` : ''}</button>`;

  /* ---------- documento ---------- */
  document.getElementById('brandName').textContent = t(config.name) || 'Timeline';
  document.title = (t(config.name) || 'Timeline') + ' — ' + (t(config.tagline) || '');

  // HERO · escudo de fondo (config.heroCrest; por defecto o escudo branco en /img).
  // Pon config.heroCrest:"" para volver ao nome xigante de fondo.
  const heroCrest = (config.heroCrest === undefined) ? 'img/escudo-depor-branco.svg' : config.heroCrest;
  const crestSVG = () => `<div class="crest" style="background-image:url('${esc(heroCrest)}')" aria-hidden="true"></div>`;
  const useCrest = !!(heroCrest && String(heroCrest).trim());
  const crestEl = useCrest
    ? crestSVG()
    : `<div class="step__ghost" data-ghost>${esc(t(config.name))}</div>`;
  deck.insertAdjacentHTML('beforeend', `
    <section class="step hero" data-side="dignidade" id="step-hero">
      <div class="step__bg"></div>
      ${crestEl}
      <div class="step__scrim"></div>
      <div class="step__inner">
        <p class="hero__kick">${esc(t(config.tagline))}</p>
        <h1 class="hero__title">${esc(t(config.name))}</h1>
        <p class="hero__intro">${esc(t(config.intro))}</p>
        <div class="hero__flag" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      </div>
      <button class="scrollhint" id="starthint" aria-label="${esc(ui('startAria'))}"><span>${esc(ui('swipe'))}</span><i class="chev"></i></button>
    </section>
  `);

  // STEPS
  steps.forEach((s, i) => {
    const hasImg = s.image && String(s.image).trim();
    // A foto NON vai no HTML inicial: gárdase en data-img e aplícase logo,
    // xa descargada e decodificada (ver PREDESCARGA), como estilo inline no
    // propio elemento — así as rutas relativas (ex: "img/foto.jpg")
    // resólvense respecto ao HTML, non respecto a css/style.css.
    const photo = hasImg ? `<div class="step__photo" data-img="${esc(s.image)}"></div><div class="step__shade"></div>` : '';
    const src = s.source
      ? `<a class="step__source" href="${esc(s.source.url)}" target="_blank" rel="noopener noreferrer">${esc(t(s.source.label))} <span class="arrow">↗</span></a>`
      : '';
    const n = String(i + 1).padStart(2, '0');
    deck.insertAdjacentHTML('beforeend', `
      <section class="step${hasImg ? ' has-img' : ''}" data-side="${esc(s.side)}" id="step-${i}">
        <div class="step__bg"></div>
        ${photo}
        <div class="step__ghost" data-ghost>${esc(t(s.year))}</div>
        <div class="step__scrim"></div>
        <div class="step__index">${n}</div>
        <div class="step__inner">
          <p class="step__kicker">${esc(t(s.kicker))}</p>
          <h2 class="step__title">${esc(t(s.title))}</h2>
          <p class="step__date">${esc(t(s.date))}</p>
          <p class="step__body">${esc(t(s.body))}</p>
          ${src}
        </div>
      </section>
    `);
  });

  // OUTRO (con botóns de compartir)
  const canNative = !!navigator.share;
  deck.insertAdjacentHTML('beforeend', `
    <section class="step outro" data-side="dignidade" id="step-outro">
      <div class="step__bg"></div>
      ${useCrest ? crestSVG() : `<div class="step__ghost" data-ghost>${esc(ui('usGhost'))}</div>`}
      <div class="step__scrim"></div>
      <div class="step__inner">
        <h2 class="outro__title">${esc(t(config.outro_title))}</h2>
        <p class="outro__body">${esc(t(config.outro_body))}</p>
        <p class="outro__cta">${esc(t(config.outro_cta) || ui('shareCta'))}</p>
        <div class="share">
          ${canNative ? nativeBtn(true) : ''}
          ${NET.map(n => anchor(n, true)).join('')}
          ${copyBtn(true)}
        </div>
        <button class="backtop" id="backtop">${esc(ui('backTop'))}</button>
        <a class="outro__legal" href="${esc(config.legalHref || 'legal.html')}">${esc(ui('legal'))}</a>
      </div>
    </section>
  `);

  // DOCK social fixo (só iconos)
  const social = document.getElementById('social');
  social.setAttribute('aria-label', ui('socialAria'));
  social.innerHTML = NET.map(n => anchor(n, false)).join('') + copyBtn(false);

  // SELECTOR DE IDIOMA (só aparece se hai máis dun idioma dispoñible)
  const langsel = document.getElementById('langsel');
  if (langsel) {
    langsel.setAttribute('aria-label', ui('langAria'));
    if (LANG_KEYS.length > 1) {
      langsel.innerHTML = LANG_KEYS.map(k =>
        `<button type="button" class="langsel__btn${k === LANG ? ' is-active' : ''}" data-lang="${esc(k)}" lang="${esc(k)}" aria-pressed="${k === LANG}" title="${esc(LANGS[k])}">${esc(k.toUpperCase())}</button>`
      ).join('<span class="langsel__sep" aria-hidden="true">·</span>');
      langsel.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-lang]');
        if (btn) setLang(btn.dataset.lang);
      });
    } else {
      langsel.hidden = true;
    }
  }

  /* ---------- NAV RAIL + CONTADOR + FRECHAS ---------- */
  const sections = Array.from(document.querySelectorAll('.step'));
  const rail = document.getElementById('rail');
  rail.setAttribute('aria-label', ui('railNav'));
  const cNow = document.getElementById('cNow');
  // O contador vai en base 0: o hero é 00, o primeiro contido 01 (así casa co
  // número grande de arriba á dereita de cada step) e a pantalla final NN/NN.
  document.getElementById('cTot').textContent = String(sections.length - 1).padStart(2, '0');

  const SIDE_NAME = { infamia: ui('side_infamia'), dignidade: ui('side_dignidade'), info: ui('side_info') };
  sections.forEach((sec, i) => {
    const b = document.createElement('button');
    const label = i === 0 ? ui('navStart') : (i === sections.length - 1 ? ui('navEnd')
      : (SIDE_NAME[sec.dataset.side] || ui('navStep')) + ' ' + i);
    b.dataset.label = label;
    b.setAttribute('aria-label', ui('goTo') + ' ' + label);
    b.addEventListener('click', () => goTo(i));
    rail.appendChild(b);
  });
  const dots = Array.from(rail.children);

  /* ---------- PREDESCARGA ORDENADA DAS FOTOS ----------
     Se as fotos van no HTML inicial, o móbil descárgaas todas de golpe
     (carga lenta) e decodifica cada JPEG xusto cando o seu step entra por
     primeira vez (tirón na animación). No canto diso: tras o load,
     descárganse unha a unha en segundo plano e aplícanse xa decodificadas.
     goTo() salta a cola se navegas a un step que aínda non ten a foto. */
  const pendingPhotos = new Map();   // elemento .step__photo -> url
  document.querySelectorAll('.step__photo[data-img]').forEach(el => pendingPhotos.set(el, el.dataset.img));

  // En pantallas pequenas próbase primeiro a variante lixeira img/m/nome.webp
  // (1080px de ancho); se non existe, cáese automaticamente na imaxe completa.
  const SMALL_SCREEN = window.matchMedia('(max-width: 640px)').matches;
  const mobileSrc = url => (SMALL_SCREEN && /^img\//.test(url))
    ? url.replace(/^img\//, 'img/m/').replace(/\.[a-z]+$/i, '.webp')
    : url;

  function applyPhoto(el) {
    const url = pendingPhotos.get(el);
    if (!url) return Promise.resolve();
    pendingPhotos.delete(el);
    const tryLoad = (src, fallback) => new Promise(done => {
      const im = new Image();
      im.onload = () => {
        const paint = () => { el.style.backgroundImage = 'url("' + src.replace(/"/g, '%22') + '")'; done(); };
        im.decode ? im.decode().then(paint, paint) : paint();
      };
      im.onerror = () => { fallback ? tryLoad(fallback, null).then(done) : done(); };
      im.src = src;
    });
    const src = mobileSrc(url);
    return tryLoad(src, src !== url ? url : null);
  }

  function preloadPhotos() {
    (function next() {
      const el = [...pendingPhotos.keys()][0];
      if (!el) return;
      applyPhoto(el).then(() => setTimeout(next, 80));   // unha a unha, con respiro
    })();
  }
  if (document.readyState === 'complete') preloadPhotos();
  else window.addEventListener('load', preloadPhotos);

  /* ---------- MOTOR DO DECK (sen scroll vertical) ----------
     Os steps están apilados en posición absoluta dentro dun deck fixo a
     pantalla completa. Nunca hai scroll do documento: o cambio de paso
     faise trocando clases (.is-active / .is-leaving), que disparan o
     crossfade do step e a animación de entrada do contido (CSS). */
  const pfill = document.getElementById('pfill');
  let active = 0;
  let leaveTimer = 0;

  function setUI() {
    dots.forEach((d, i) => d.classList.toggle('is-active', i === active));
    cNow.textContent = String(active).padStart(2, '0');
    pfill.style.width = (active / Math.max(1, sections.length - 1)) * 100 + '%';
  }

  function goTo(target) {
    target = Math.max(0, Math.min(sections.length - 1, target));
    if (target === active) return;
    const prev = sections[active];
    const next = sections[target];
    clearTimeout(leaveTimer);
    sections.forEach(s => s.classList.remove('is-leaving'));
    prev.classList.remove('is-active');
    prev.classList.add('is-leaving');
    // WebKit (iOS) non arranca transicións en elementos que veñen dun
    // subárbore con visibility:hidden: primeiro faise visible o step
    // (is-prep), fórzase un recálculo de estilo, e só entón actívase.
    // Sen isto, os textos aparecen de golpe en Safari/Chrome/Opera de iOS.
    next.classList.add('is-prep');
    void next.offsetWidth;
    next.classList.add('is-active');
    next.classList.remove('is-prep');
    const photo = next.querySelector('.step__photo');
    if (photo) applyPhoto(photo);   // prioridade á foto do step que entra
    const inner = next.querySelector('.step__inner');
    if (inner) inner.scrollTop = 0;   // por se o step traía scroll interno de seguridade
    leaveTimer = setTimeout(() => prev.classList.remove('is-leaving'), 650);
    active = target;
    setUI();
  }

  sections[0].classList.add('is-active');
  setUI();

  /* O contido dun step só fai scroll interno se non colle en pantalla
     (válvula de seguridade en móbiles moi pequenos). Esta función di se
     ese scroll interno aínda ten percorrido na dirección do xesto. */
  function innerBlocks(delta) {
    const inner = sections[active].querySelector('.step__inner');
    if (!inner || inner.scrollHeight <= inner.clientHeight + 1) return false;
    if (delta > 0) return inner.scrollTop + inner.clientHeight < inner.scrollHeight - 1;
    return inner.scrollTop > 1;
  }

  /* ---------- RODA ---------- */
  let wheelLock = 0;
  window.addEventListener('wheel', (e) => {
    if (e.ctrlKey) return;                    // zoom do navegador
    if (innerBlocks(e.deltaY)) return;        // deixa correr o scroll interno
    e.preventDefault();
    if (Math.abs(e.deltaY) < 18) return;
    const now = performance.now();
    if (now < wheelLock) return;
    wheelLock = now + 700;                    // absorbe a inercia do trackpad
    goTo(active + (e.deltaY > 0 ? 1 : -1));
  }, { passive: false });

  /* ---------- SWIPE ---------- */
  let tY = null, tX = 0, tScrollTop = 0;
  window.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) { tY = null; return; }
    tY = e.touches[0].clientY;
    tX = e.touches[0].clientX;
    const inner = sections[active].querySelector('.step__inner');
    tScrollTop = inner ? inner.scrollTop : 0;
  }, { passive: true });
  window.addEventListener('touchend', (e) => {
    if (tY === null) return;
    const t = e.changedTouches[0];
    const dy = tY - t.clientY;
    const dx = tX - t.clientX;
    tY = null;
    if (Math.abs(dy) < 48 || Math.abs(dx) > Math.abs(dy)) return;
    const inner = sections[active].querySelector('.step__inner');
    if (inner && Math.abs(inner.scrollTop - tScrollTop) > 4) return;  // o xesto foi scroll interno
    if (innerBlocks(dy)) return;
    goTo(active + (dy > 0 ? 1 : -1));
  }, { passive: true });

  /* ---------- TECLADO ---------- */
  window.addEventListener('keydown', (e) => {
    if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); goTo(active + 1); }
    else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); goTo(active - 1); }
    else if (e.key === 'Home') { e.preventDefault(); goTo(0); }
    else if (e.key === 'End') { e.preventDefault(); goTo(sections.length - 1); }
  });

  /* ---------- BOTÓNS DE NAVEGACIÓN ---------- */
  document.getElementById('starthint').addEventListener('click', () => goTo(1));
  document.getElementById('backtop').addEventListener('click', () => goTo(0));

  /* ---------- COMPARTIR (copiar + nativo) ---------- */
  let toastEl;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; document.body.appendChild(toastEl); }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toastEl.classList.remove('show'), 2000);
  }
  document.addEventListener('click', async (e) => {
    const copy = e.target.closest('.js-copy');
    const nat = e.target.closest('.js-native');
    if (copy) {
      try { await navigator.clipboard.writeText(shareUrl); toast(ui('copied')); }
      catch (_) { toast(ui('copyManual') + ' ' + shareUrl); }
    }
    if (nat) {
      try { await navigator.share({ title: t(config.name), text: shareText, url: shareUrl }); } catch (_) {}
    }
  });
})();
