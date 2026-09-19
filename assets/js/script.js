/* =========================================================
   Md. Adnan Sarker — Portfolio
   Vanilla JS: theme, language (bn/en), nav, typing, reveal,
   gallery filter, lightbox (keyboard + swipe), bio modal
   The page HTML is written in Bangla (default). Only English
   translations live in the dictionary below.
   ========================================================= */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function store(get, key, val) {
    try { return get ? localStorage.getItem(key) : localStorage.setItem(key, val); } catch (e) { return null; }
  }

  /* ---------------- English dictionary ---------------- */
  var EN = {
    'skip': 'Skip to main content',
    'brand.name': 'Md. Adnan Sarker',
    'brand.sub': 'Student • Youth Leader • Social Worker',
    'nav.home': 'Home', 'nav.about': 'About', 'nav.education': 'Education', 'nav.achievements': 'Achievements',
    'nav.social': 'Social Impact', 'nav.gallery': 'Gallery', 'nav.skills': 'Skills', 'nav.contact': 'Contact',
    'nav.cv': 'Download CV',
    'lang.label': 'Language / ভাষা', 'theme.label': 'Toggle dark / light mode', 'menu.label': 'Open or close menu',
    'hero.hello': "HELLO, I'M",
    'hero.title': 'Student & Young Social Worker',
    'hero.iam': 'Roles:',
    'hero.quote': '“Education is not just about gaining knowledge —<br>it is the path to building values, leadership<br>and a sense of responsibility.”',
    'hero.btn1': 'About Me', 'hero.btn2': 'My Achievements', 'hero.btn3': 'Social Impact',
    'social.label': 'Social links', 'img.profile': 'Profile photo of Md. Adnan Sarker',
    'img.about': 'Photo of Md. Adnan Sarker',
    'about.sub': 'Who I Am', 'about.title': 'About Me',
    'chip.student': 'Student', 'chip.leader': 'Youth Leader', 'chip.social': 'Social Worker', 'chip.volunteer': 'Volunteer',
    'chip.organizer': 'Organizer', 'chip.performer': 'Performer', 'chip.pr': 'PR & Communicator',
    'about.p1': 'Md. Adnan Sarker is a student and young social worker who, alongside pursuing knowledge, has been involved in voluntary and social activities since childhood. For him, education is not only a means of gaining institutional knowledge; it is one of the primary foundations for developing personality, values, leadership and a sense of responsibility.',
    'about.p2': 'Alongside his studies, he plays an active role in social service, humanitarian assistance, organizational activities, public relations, and in engaging young people in positive and creative activities. By standing beside people, learning new things, creating learning opportunities for others and contributing to positive change in society, he is working to build himself into a knowledge-based, skilled, humane and responsible young leader.',
    'about.p3': 'His dream is to further develop his skills through higher education and, in the future, to work for the long-term welfare of people through education, leadership and humanitarian activities.',
    'about.more': 'Read More', 'modal.title': 'Full Biography', 'close': 'Close',
    'info.title': 'Quick Info', 'info.dob': 'Date of Birth', 'info.dobv': '27 February 2007',
    'info.nat': 'Nationality', 'info.natv': 'Bangladeshi', 'info.gender': 'Gender', 'info.genderv': 'Male',
    'info.cur': 'Current Address', 'info.curv': 'Koyanijpara, Saidpur, Nilphamari, Bangladesh',
    'info.perm': 'Permanent Address', 'info.permv': 'Belaichandi, Parbatipur, Dinajpur, Bangladesh',
    'edu.sub': 'Academic Journey', 'edu.title': 'My Education',
    'edu.primary': 'Primary Education', 'edu.lions': 'Lions School & College', 'edu.psc': 'PSC Passed',
    'edu.sscinst': 'Saidpur Government Science College, Saidpur, Nilphamari', 'edu.dept': 'Department', 'edu.sci': 'Science',
    'edu.hscinst': 'Sunflower School & College, Saidpur, Nilphamari', 'edu.hum': 'Humanities',
    'edu.exp': 'Expected passing year: 2027', 'edu.expyear': '2027 (Expected)',
    'ach.sub': 'Recognition, Performance & Success', 'ach.title': 'My Achievements',
    'ach.group': 'Acting & Instant Acting',
    'ach.nes26': 'National Education Week 2026', 'ach.nes23': 'National Education Week 2023',
    'ach.nca22': 'National Child Award Competition 2022', 'ach.nca23': 'National Child Award Competition 2023',
    'ach.instant': 'Instant Acting', 'ach.acting': 'Acting',
    'ach.div': 'Rangpur Divisional Level', 'ach.updist': 'Upazila & District Level', 'ach.first': '1st Place',
    'ach.h1': 'Consistently achieved 1st place in Acting at the National Child Award Competition in 2022 and 2023',
    'ach.h2': 'Achieved 1st place in competitions organized by various schools, social and cultural organizations',
    'ach.other': 'Other Achievements',
    'ach.o1': 'Success at Upazila and District level in the Wall Magazine (Deyalika) competition',
    'ach.o2': 'Active participation in various educational, cultural and social activities',
    'ach.o3': 'Responsibilities in various social and youth organizations',
    'ach.o4': 'Active role in voluntary and humanitarian activities',
    'soc.sub': 'Serving People • Building Connections • Creating Positive Change', 'soc.title': 'Social Impact',
    'soc.current': 'Current Organization', 'soc.pos': 'Position', 'soc.posv': 'Public Relations & Coordination Secretary',
    'soc.resp': 'Responsibilities',
    'soc.r1': 'Responsible for the organization’s public relations and publicity activities',
    'soc.r2': 'Managing social media posts and campaigns',
    'soc.r3': 'Active participation in various humanitarian and social activities',
    'soc.r4': 'Working to arrange blood and to assist helpless people',
    'soc.r5': 'Participating in awareness-building activities',
    'soc.r6': 'Involvement in education, culture and youth activities',
    'soc.r7': 'Taking on leadership and voluntary responsibilities in various organizations',
    'soc.visit': 'Visit SWOS',
    'img.p03': 'Photo 03', 'img.p04': 'Md. Adnan Sarker wearing an organizing committee badge at an event', 'img.p05': 'Photo 05',
    'arts.sub': 'Acting & Cultural Activities', 'arts.title': 'Performing Arts',
    'arts.a1': 'Acting', 'arts.a2': 'Instant Acting', 'arts.a3': 'Stage Performance', 'arts.a4': 'Cultural Activities', 'arts.a5': 'Competition Participation',
    'img.p06': 'Photo of Md. Adnan Sarker 06', 'img.p07': 'Photo of Md. Adnan Sarker 07',
    'gal.sub': 'Gallery', 'gal.title': 'Moments & Memories', 'gal.filter': 'Gallery filter',
    'f.all': 'All', 'f.social': 'Social Work', 'f.acting': 'Acting', 'f.ach': 'Achievements', 'f.edu': 'Education', 'f.events': 'Events',
    'img.g02': 'Gallery photo 02', 'img.g03': 'Gallery photo 03', 'img.g04': 'Gallery photo 04', 'img.g05': 'Gallery photo 05',
    'img.g06': 'Gallery photo 06', 'img.g07': 'Gallery photo 07', 'img.g08': 'Gallery photo 08', 'img.g09': 'Gallery photo 09', 'img.g10': 'Gallery photo 10', 'img.g11': 'Gallery photo 11',
    'skills.sub': 'Skills & Capabilities', 'skills.title': 'My Skills',
    'skills.g1': 'Communication & Leadership', 'skills.g2': 'Digital & Creative', 'skills.g3': 'Organization & Management',
    'skills.s1': 'Public Relations', 'skills.s2': 'Communication & Coordination', 'skills.s3': 'Social Media Management',
    'skills.s4': 'Content Writing', 'skills.s5': 'Event Management', 'skills.s6': 'Teamwork & Leadership',
    'skills.s7': 'Volunteer Management', 'skills.s8': 'Public Speaking', 'skills.s9': 'Basic Digital Skills',
    'vision.sub': 'Future Goals', 'vision.title': 'My Vision',
    'vision.text': 'My first goal is to gain the opportunity to be admitted to a desired university and pursue higher education. Alongside this, I want to work for people through education, leadership, social development and humanitarian activities, and in the future establish myself as a skilled, responsible and service-minded leader.',
    'vision.journey': 'Vision journey',
    'vision.v1': 'LEARN', 'vision.v2': 'DEVELOP', 'vision.v3': 'LEAD', 'vision.v4': 'SERVE', 'vision.v5': 'CREATE POSITIVE IMPACT',
    'contact.sub': 'Contact', 'contact.title': "Let's Connect", 'contact.email': 'Email',
    'contact.wa': 'WhatsApp Me', 'contact.mail': 'Send Email',
    'f.quick': 'Quick Links', 'f.sociallinks': 'Social Links', 'f.contact': 'Contact',
    'f.rights': '© 2026 Md. Adnan Sarker. All rights reserved.',
    'fab.label': 'Chat on WhatsApp',
    'lb.label': 'Image viewer', 'lb.prev': 'Previous image', 'lb.next': 'Next image'
  };

  /* Bangla → Western digits for year labels in English mode */
  var DIGITS = { '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9' };
  function toEnDigits(s) { return s.replace(/[০-৯]/g, function (d) { return DIGITS[d]; }); }

  var ROLES = {
    bn: ['শিক্ষার্থী', 'যুব নেতা', 'সমাজকর্মী', 'স্বেচ্ছাসেবক', 'সংগঠক', 'অভিনয়শিল্পী'],
    en: ['Student', 'Youth Leader', 'Social Worker', 'Volunteer', 'Organizer', 'Performer']
  };

  /* Cache the original Bangla text once, so we can switch back and forth */
  $$('[data-i18n]').forEach(function (el) { el.setAttribute('data-bn', el.hasAttribute('data-i18n-html') ? el.innerHTML : el.textContent); });
  $$('[data-i18n-html]').forEach(function (el) { if (!el.hasAttribute('data-bn')) el.setAttribute('data-bn', el.innerHTML); });
  $$('.tl-year:not([data-i18n]), .ach-year').forEach(function (el) { el.setAttribute('data-bn-num', el.textContent); });
  $$('[data-i18n-attr]').forEach(function (el) {
    el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
      var a = pair.split(':')[0].trim();
      el.setAttribute('data-bn-' + a, el.getAttribute(a) || '');
    });
  });

  var lang = 'bn';

  function applyLang(l) {
    lang = l;
    root.lang = l;
    $$('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n') || el.getAttribute('data-i18n-html');
      var val = l === 'en' && EN[key] !== undefined ? EN[key] : el.getAttribute('data-bn');
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = val; else el.textContent = val;
    });
    $$('[data-i18n-html]:not([data-i18n])').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      el.innerHTML = l === 'en' && EN[key] !== undefined ? EN[key] : el.getAttribute('data-bn');
    });
    $$('.tl-year:not([data-i18n]), .ach-year').forEach(function (el) {
      var bn = el.getAttribute('data-bn-num');
      el.textContent = l === 'en' ? toEnDigits(bn) : bn;
    });
    $$('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':'), a = p[0].trim(), key = p[1].trim();
        el.setAttribute(a, l === 'en' && EN[key] !== undefined ? EN[key] : el.getAttribute('data-bn-' + a));
      });
    });
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === l)); });
    $$('.g-item').forEach(function (b, i) { b.setAttribute('aria-label', (l === 'en' ? 'Open photo ' : 'ছবি খুলুন ') + (i + 2 < 10 ? '0' : '') + (i + 2)); });
    startRoles();
    if (lightbox.open) renderLightbox();
  }

  function setLang(l) {
    if (l === lang) return;
    store(false, 'as-lang', l);
    if (reduceMotion) return applyLang(l);
    document.body.classList.add('lang-switching');
    setTimeout(function () { applyLang(l); document.body.classList.remove('lang-switching'); }, 180);
  }
  $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.lang); }); });

  /* ---------------- Theme ---------------- */
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#050b1a' : '#f3f8ff');
  }
  setTheme(store(true, 'as-theme') === 'light' ? 'light' : 'dark');
  $('#themeBtn').addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next); store(false, 'as-theme', next);
  });

  /* ---------------- Navbar ---------------- */
  var nav = $('#navbar'), menu = $('#menu'), burger = $('#burger');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 20); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  function closeMenu() { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  $$('#menu a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', function (e) { if (menu.classList.contains('open') && !nav.contains(e.target)) closeMenu(); });

  /* Scroll-spy */
  if ('IntersectionObserver' in window) {
    var links = {};
    $$('#menu ul a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && links[en.target.id]) {
          $$('#menu a.active').forEach(function (x) { x.classList.remove('active'); });
          links[en.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* ---------------- Role typing ---------------- */
  var roleEl = $('#role'), roleTimer = null, runId = 0;
  function startRoles() {
    clearTimeout(roleTimer);
    var id = ++runId, list = ROLES[lang], i = 0, j = 0, erasing = false;
    if (reduceMotion) {
      roleEl.textContent = list[0];
      var k = 0;
      (function rot() { roleTimer = setTimeout(function () { if (id !== runId) return; k = (k + 1) % list.length; roleEl.textContent = list[k]; rot(); }, 2600); })();
      return;
    }
    (function tick() {
      if (id !== runId) return;
      var word = Array.from(list[i]);
      if (!erasing) { j++; roleEl.textContent = word.slice(0, j).join(''); if (j === word.length) { erasing = true; return void (roleTimer = setTimeout(tick, 1600)); } }
      else { j--; roleEl.textContent = word.slice(0, j).join(''); if (j === 0) { erasing = false; i = (i + 1) % list.length; } }
      roleTimer = setTimeout(tick, erasing ? 45 : 95);
    })();
  }

  /* ---------------- Scroll reveal ---------------- */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else { reveals.forEach(function (el) { el.classList.add('in'); }); }

  /* ---------------- Dialog helpers ---------------- */
  function bindDialog(d) {
    $$('[data-close]', d).forEach(function (b) { b.addEventListener('click', function () { d.close(); }); });
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
  }
  var bioModal = $('#bioModal'), lightbox = $('#lightbox');
  bindDialog(bioModal); bindDialog(lightbox);
  $('#bioBtn').addEventListener('click', function () { bioModal.showModal(); });

  /* ---------------- Gallery filter ---------------- */
  var items = $$('.g-item');
  $$('.filter').forEach(function (btn) {
    var f = btn.dataset.filter;
    if (f !== 'all' && !items.some(function (it) { return it.dataset.cat === f; })) btn.hidden = true;
  });
  $$('.filter').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.dataset.filter;
      $$('.filter').forEach(function (b) { var on = b === btn; b.classList.toggle('is-active', on); b.setAttribute('aria-pressed', String(on)); });
      items.forEach(function (it) { it.classList.toggle('hide', f !== 'all' && it.dataset.cat !== f); });
    });
  });

  /* ---------------- Lightbox ---------------- */
  var lbImg = $('#lbImg'), lbCap = $('#lbCap'), lbCount = $('#lbCount'), current = 0, shown = [];
  function renderLightbox() {
    var it = shown[current], img = $('img', it);
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt;
    var cap = $('.g-cap', it); lbCap.textContent = cap ? cap.textContent : '';
    lbCount.textContent = (current + 1) + ' / ' + shown.length;
    if (lang === 'bn') lbCount.textContent = lbCount.textContent.replace(/[0-9]/g, function (d) { return '০১২৩৪৫৬৭৮৯'[d]; });
  }
  function openLightbox(it) {
    shown = items.filter(function (x) { return !x.classList.contains('hide'); });
    current = shown.indexOf(it);
    renderLightbox();
    lightbox.showModal();
  }
  function step(n) { current = (current + n + shown.length) % shown.length; renderLightbox(); }
  items.forEach(function (it) { it.addEventListener('click', function () { openLightbox(it); }); });
  $('#lbPrev').addEventListener('click', function () { step(-1); });
  $('#lbNext').addEventListener('click', function () { step(1); });
  lightbox.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
  var tx = 0, ty = 0;
  lightbox.addEventListener('touchstart', function (e) { tx = e.changedTouches[0].clientX; ty = e.changedTouches[0].clientY; }, { passive: true });
  lightbox.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
  }, { passive: true });

  /* ---------------- Broken image fallback ---------------- */
  document.addEventListener('error', function (e) {
    if (e.target && e.target.tagName === 'IMG') e.target.style.visibility = 'hidden';
  }, true);

  /* ---------------- Init ---------------- */
  var saved = store(true, 'as-lang');
  if (saved === 'en') { lang = 'bn'; applyLang('en'); } else { applyLang('bn'); }

  function hidePreloader() { var p = $('#preloader'); if (p) p.classList.add('done'); }
  if (document.readyState === 'complete') setTimeout(hidePreloader, 350);
  else window.addEventListener('load', function () { setTimeout(hidePreloader, 350); });
  setTimeout(hidePreloader, 4000);
})();
