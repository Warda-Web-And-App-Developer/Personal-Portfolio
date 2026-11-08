/* ===================== EDIT THESE ===================== */
const SITE = {
  email:  'webandappdeveloperwarda17@gmail.com', // the contact form opens the visitor's mail app addressed here
  resume: 'resume.html',         // opens in a new tab: a PDF next to this page, or a full link (https://...)
  roles:  ['beautiful websites','resume web & apps','3D web experiences','chat & shop platforms'],
  links: {
    youtube:   'https://www.youtube.com/@wardadeveloper',   // e.g. 'https://www.youtube.com/@yourchannel'
    facebook:  'https://www.facebook.com/profile.php?id=61596152099258',
    pinterest: 'https://www.pinterest.com/warda_developer/',
    instagram: 'https://www.instagram.com/web_dev_warda17/',   // e.g. 'https://www.instagram.com/yourname'
    linkedin:  'https://www.linkedin.com/in/warda-web-developer-1w68p195/',
    github:    'https://github.com/Warda-Web-And-App-Developer',
    alumni:    'https://alumni.saylaniit.com/wardadeveloper'    // Saylani MIT alumni profile link
  }
};

/* Your 5 projects. Edit the text, add a screenshot (image) and your demo link (demo).
   image: a web link or a file next to this page, e.g. 'queenbee.png'. Leave '' to use the colored placeholder.
   demo:  link to the live project. Leave '' and the button shows "Demo link coming soon". */
const PROJECTS = [
  { name:'QueenB.Chat', tag:'Chat app',
    desc:'A WhatsApp-style messenger with groups, voice messages, status stories, audio and video calls, reactions and light/dark mode.',
    stack:['HTML','TailwindCss', 'CSS','JavaScript','Firebase', 'Claude AI'], image:'assets/queenb.chat.png', demo:'https://warda-web-and-app-developer.github.io/QueenB.Chat/', code:'https://github.com/Warda-Web-And-App-Developer/QueenB.Chat.git' },
  { name:'MAC&MELT', tag:'Dessert shop website',
    desc:'A dessert shop website with a filterable menu of macarons, cakes, cupcakes and donuts, customizable flavors and toppings, a smart cart with real-time prices, and seasonal promos and gift boxes.',
    stack:['HTML', 'CSS', 'JavaScript', 'TailwinCss', 'Gemini AI'], image:'assets/mec&melt.png', demo:'https://warda-web-and-app-developer.github.io/MAC-and-MELT/', code:'https://github.com/Warda-Web-And-App-Developer/MAC-and-MELT.git' },
  { name:'Luxeora Beauty', tag:'Makeup shop website',
    desc:'A Makeup shop website with a list of lipsticks, makeup kits, brush sets, eye shadow kits, mascara, eye liner, etc.',
    stack:['HTML', 'CSS', 'JavaScript', 'TailwinCss', 'Gemini AI'], image:'assets/luxeora-beauty.png', demo:'https://warda-web-and-app-developer.github.io/LUXEORA-BEAUTY/', code:'https://github.com/Warda-Web-And-App-Developer/LUXEORA-BEAUTY.git' },
  { name:'ProFix', tag:'Service provider website',
    desc:'A service provider website that povide cleaners, carpainters, painters, plumbers, etc.',
    stack:['HTML', 'CSS', 'JavaScript', 'TailwinCss', 'Firebase', 'Gemini AI'], image:'assets/profix.png', demo:'https://warda-web-and-app-developer.github.io/Hackathon/', code:'https://github.com/Warda-Web-And-App-Developer/Hackathon.git' },
  { name:'Blacktop Divas', tag:'Car website',
    desc:'A car website that include cars details such as BMW M4, Audi RS6 Avant, Tesla Model 3, Porsche, etc',
    stack:['HTML', 'CSS', 'TailwindCss', 'JavaScript'], image:'assets/blacktop-divas.png', demo:'https://warda-web-and-app-developer.github.io/Blacktop-Divas/', code:'https://github.com/Warda-Web-And-App-Developer/Blacktop-Divas.git' }
];
/* ====================================================== */

document.getElementById('year').textContent = new Date().getFullYear();

/* Resume buttons: open the resume in a new tab so visitors can view it */
document.querySelectorAll('.js-resume').forEach(a=>{
  a.href = SITE.resume;
  a.target = '_blank';
  a.rel = 'noopener';
  a.removeAttribute('download');
});

/* Social links */
document.querySelectorAll('[data-social]').forEach(a=>{
  const url = SITE.links[a.dataset.social] || '#';
  a.href = url;
  if(url !== '#'){ a.target = '_blank'; a.rel = 'noopener noreferrer'; }
});

/* Email */
const mailLink = document.getElementById('mailLink');
mailLink.href = 'mailto:' + SITE.email; mailLink.target = '_blank'; mailLink.rel = 'noopener';
mailLink.textContent = SITE.email;

/* Light / dark mode (remembers your choice) */
(function themeToggle(){
  const root = document.documentElement;
  const seg = document.getElementById('themeSeg');
  const meta = document.querySelector('meta[name="theme-color"]');
  if(!seg) return;
  const btns = [...seg.querySelectorAll('button')];
  function apply(mode, save){
    root.setAttribute('data-theme', mode);
    btns.forEach(b=>{ const on = b.dataset.mode === mode; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    if(meta) meta.setAttribute('content', mode === 'light' ? '#f4f6fc' : '#05060a');
    if(window.__setSceneTheme) window.__setSceneTheme(mode === 'light');
    if(save){ try{ localStorage.setItem('wd-theme', mode); }catch(e){} }
  }
  btns.forEach(b=> b.addEventListener('click', ()=>{
    root.classList.add('theme-anim');
    apply(b.dataset.mode, true);
    setTimeout(()=> root.classList.remove('theme-anim'), 500);
  }));
  apply(root.getAttribute('data-theme') || 'mixed', false);
})();

/* Mobile menu */
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
function setMenu(open){
  menu.classList.toggle('open', open);
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
}
menuBtn.addEventListener('click', ()=> setMenu(!menu.classList.contains('open')));
menu.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> setMenu(false)));

/* Nav background + progress bar */
const nav = document.getElementById('nav');
const progress = document.getElementById('progress');
function onScrollUI(){
  nav.classList.toggle('scrolled', window.scrollY > 30);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
}
window.addEventListener('scroll', onScrollUI, {passive:true});
onScrollUI();

/* Typing effect */
(function typing(){
  const el = document.querySelector('.typed');
  let r = 0, c = 0, del = false;
  function tick(){
    const word = SITE.roles[r];
    el.textContent = word.slice(0, c);
    if(!del && c === word.length){ del = true; return setTimeout(tick, 1600); }
    if(del && c === 0){ del = false; r = (r + 1) % SITE.roles.length; }
    c += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 75);
  }
  tick();
})();

/* Reveal on scroll + counters */
function countUp(el){
  const target = +el.dataset.count; let n = 0;
  const step = Math.max(1, Math.ceil(target / 40));
  const t = setInterval(()=>{
    n = Math.min(target, n + step);
    el.textContent = n + '+';
    if(n >= target) clearInterval(t);
  }, 35);
}
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    const el = e.target;
    el.classList.add('visible');
    el.querySelectorAll('[data-count]').forEach(countUp);
    setTimeout(()=>{ el.style.transitionDelay = '0s'; el.classList.add('done'); }, 1600);
    io.unobserve(el);
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=> io.observe(el));
document.querySelectorAll('.skills .reveal, .steps .reveal, .projects .reveal').forEach((el, i)=>{
  el.style.transitionDelay = ((i % 3) * 90) + 'ms';
});

/* Projects: folder-tab accordion */
(function projectsUI(){
  const host = document.getElementById('folders');
  if(typeof PROJECTS === 'undefined' || !host) return;
  const esc = v => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const okUrl = u => u && u !== '#' && (/^https?:\/\//i.test(u) || !/^[a-z][a-z0-9+.-]*:/i.test(u));
  const PAPER = ['#d2042d', '#16347a', '#14161f', '#8f021f', '#0b1f4b'];
  const ART = [
    'linear-gradient(160deg,#d2042d,#0b1f4b)',
    'linear-gradient(160deg,#16347a,#05060a)',
    'linear-gradient(160deg,#14161f,#8f021f)',
    'linear-gradient(160deg,#0b1f4b,#d2042d)',
    'linear-gradient(160deg,#8f021f,#05060a)'
  ];
  const folds = [];
  PROJECTS.forEach((p, i)=>{
    const n = String(i + 1).padStart(2, '0');
    const el = document.createElement('article');
    el.className = 'fold';
    el.style.setProperty('--paper', PAPER[i % PAPER.length]);
    const art = okUrl(p.image)
      ? '<img class="pimg" src="' + esc(p.image) + '" alt="' + esc(p.name) + ' screenshot" loading="lazy">'
      : '<div class="art" style="--g:' + ART[i % ART.length] + '"><span>' + esc((p.name || '?').charAt(0)) + '</span></div>';
    const stack = (p.stack && p.stack.length)
      ? '<div class="pj-stack">' + p.stack.map(t => '<span>' + esc(t) + '</span>').join('') + '</div>' : '';
    const demo = okUrl(p.demo)
      ? '<a class="btn primary small" href="' + esc(p.demo) + '" target="_blank" rel="noopener noreferrer">Live demo ↗</a>'
      : '<span class="btn small soon">Demo link coming soon</span>';
    const code = okUrl(p.code)
      ? '<a class="btn small" href="' + esc(p.code) + '" target="_blank" rel="noopener noreferrer">Code ↗</a>' : '';
    el.innerHTML =
      '<div class="img">' + art + '</div>' +
      '<div class="band"></div>' +
      '<button class="lug" type="button" aria-expanded="false" aria-controls="pj-' + i + '"><span class="label"><b>' + n + '</b> ' + esc(p.name) + '</span></button>' +
      '<div class="detail" id="pj-' + i + '" role="region" aria-label="' + esc(p.name) + '">' +
        '<div class="pj-top"><span class="pj-num">' + n + '</span><span class="pj-tag">' + esc(p.tag || '') + '</span></div>' +
        '<h3>' + esc(p.name) + '</h3><p>' + esc(p.desc || '') + '</p>' + stack +
        '<div class="pj-btns">' + demo + code + '</div>' +
      '</div>';
    host.appendChild(el);
    folds.push(el);
  });
  function setOpen(idx){
    folds.forEach((f, k)=>{
      const on = k === idx;
      f.classList.toggle('open', on);
      f.querySelector('.lug').setAttribute('aria-expanded', String(on));
    });
  }
  folds.forEach((f, k)=>{
    f.addEventListener('click', ()=>{ if(!f.classList.contains('open')) setOpen(k); });
    f.querySelector('.lug').addEventListener('click', e=>{
      e.stopPropagation();
      setOpen(f.classList.contains('open') ? -1 : k);
    });
  });
  setOpen(0);
})();

/* Project card tilt + glow */
document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('mousemove', e=>{
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    card.style.setProperty('--mx', (x * 100) + '%');
    card.style.setProperty('--my', (y * 100) + '%');
    card.style.transform = `perspective(700px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 10}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', ()=>{ card.style.transform = ''; });
});

/* Photo 3D tilt */
(function photoTilt(){
  const wrap = document.getElementById('photoWrap');
  const tilt = document.getElementById('photoTilt');
  if(!wrap || !tilt) return;
  wrap.addEventListener('mousemove', e=>{
    const r = wrap.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    tilt.style.transform = `perspective(800px) rotateX(${-y * 12}deg) rotateY(${x * 14}deg) scale(1.02)`;
  });
  wrap.addEventListener('mouseleave', ()=>{ tilt.style.transform = ''; });
})();

/* About video: plays automatically on a loop, no sound controls */
(function aboutVideo(){
  const box = document.getElementById('aboutVideo');
  const vid = document.getElementById('aVid');
  if(!box || !vid) return;
  vid.muted = true; vid.loop = true;
  const tryPlay = ()=>{ const p = vid.play(); if(p && p.catch) p.catch(()=>{}); };
  /* play while on screen, pause when scrolled away to save battery */
  new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting) tryPlay(); else vid.pause(); });
  },{threshold:.25}).observe(box);
  vid.addEventListener('click', ()=>{ if(vid.paused) tryPlay(); });
  window.__aboutPlay = ()=>{
    const r = box.getBoundingClientRect();
    if(r.bottom > 0 && r.top < window.innerHeight) tryPlay();
  };
})();

/* Contact form (opens the visitor's mail app) */
document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  const n = document.getElementById('cName').value;
  const em = document.getElementById('cEmail').value;
  const m = document.getElementById('cMsg').value;
  const body = encodeURIComponent(m + '\n\nFrom: ' + n + ' (' + em + ')');
  const subject = encodeURIComponent('Portfolio message from ' + n);
  const mailto = 'mailto:' + SITE.email + '?subject=' + subject + '&body=' + body;
  const touch = window.matchMedia && window.matchMedia('(pointer:coarse)').matches;
  /* Always opens in a NEW tab, so the portfolio stays open. Desktop: Gmail compose; phones: the mail app. */
  if(!touch){
    const gmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(SITE.email) + '&su=' + subject + '&body=' + body;
    if(window.open(gmail, '_blank', 'noopener')){ e.target.reset(); return; }
  }
  const a = document.createElement('a'); a.href = mailto; a.target = '_blank'; a.rel = 'noopener';
  document.body.appendChild(a); a.click(); a.remove();
  e.target.reset(); /* the fields are empty again when the visitor comes back to the portfolio */
});

/* ===================== MOUSE TRAIL ANIMATION ===================== */
/* Sparkles follow the pointer everywhere on the page; click or tap for a burst. */
(function cursorFX(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = document.getElementById('fx');
  if(!c) return;
  const ctx = c.getContext('2d');
  let W = 0, H = 0;
  function size(){
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    c.width = W * dpr; c.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size();
  window.addEventListener('resize', size);

  const DARK_COLORS = ['#ff4d6a', '#d2042d', '#ff2a4d', '#4f7bdc', '#2f55b8'];
  const LIGHT_COLORS = ['#d2042d', '#ff4d6a', '#16347a', '#2f55b8', '#8f021f'];
  const isLight = ()=> document.documentElement.getAttribute('data-theme') === 'light';
  const pickColor = ()=>{ const L = isLight() ? LIGHT_COLORS : DARK_COLORS; return L[(Math.random() * L.length) | 0]; };
  const MAX = 420;
  const parts = [];
  const ptr = {x: -200, y: -200, lx: null, ly: null, seen: false, down: false, type: 'mouse', hot: false, s: 1};
  const root = document.documentElement;

  /* the pointer itself becomes your photo (mouse only; touch screens keep the sparkles) */
  const img = new Image();
  let imgOk = false, photoShown = false;
  function loadPhoto(){
    if(img.src || !window.__PHOTO__) return;
    img.onload = ()=>{ imgOk = true; };
    img.src = window.__PHOTO__;
  }

  function spawn(x, y, burst){
    if(parts.length > MAX) parts.splice(0, parts.length - MAX);
    const a = Math.random() * Math.PI * 2;
    const sp = burst ? 1.5 + Math.random() * 4.5 : Math.random() * 1.1;
    parts.push({
      x: x + (Math.random() - .5) * 6, y: y + (Math.random() - .5) * 6,
      vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - (burst ? 0 : .25),
      life: 1, decay: burst ? .016 + Math.random() * .014 : .02 + Math.random() * .02,
      size: burst ? 2 + Math.random() * 4 : 1.5 + Math.random() * 3.5,
      color: pickColor(),
      shape: Math.random() < .35 ? 1 : 0,
      rot: Math.random() * Math.PI, vr: (Math.random() - .5) * .2
    });
  }

  function onMove(e){
    const x = e.clientX, y = e.clientY;
    ptr.x = x; ptr.y = y;
    ptr.type = e.pointerType || 'mouse';
    ptr.hot = !!(e.target && e.target.closest && e.target.closest('a,button,input,textarea,.fold:not(.open),.btn'));
    if(!ptr.seen){ ptr.seen = true; ptr.lx = x; ptr.ly = y; }
    const dx = x - ptr.lx, dy = y - ptr.ly;
    const dist = Math.hypot(dx, dy);
    const n = Math.min(8, Math.ceil(dist / 9));
    for(let i = 1; i <= n; i++){
      spawn(ptr.lx + dx * i / n, ptr.ly + dy * i / n, false);
    }
    ptr.lx = x; ptr.ly = y;
  }
  window.addEventListener('pointermove', onMove, {passive:true});
  window.addEventListener('pointerdown', e=>{
    ptr.down = true;
    onMove(e);
    for(let i = 0; i < 26; i++) spawn(e.clientX, e.clientY, true);
  }, {passive:true});
  window.addEventListener('pointerup', ()=>{ ptr.down = false; }, {passive:true});
  document.addEventListener('mouseleave', ()=>{ ptr.seen = false; ptr.x = ptr.y = -200; });
  window.addEventListener('blur', ()=>{ ptr.seen = false; });

  function drawShape(p){
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    const s = p.size * (0.4 + p.life * .8);
    if(p.shape){
      ctx.beginPath();
      ctx.moveTo(0, -s * 1.5); ctx.lineTo(s, 0); ctx.lineTo(0, s * 1.5); ctx.lineTo(-s, 0);
      ctx.closePath(); ctx.fill();
    }else{
      ctx.beginPath(); ctx.arc(0, 0, s, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
  }

  function frame(){
    requestAnimationFrame(frame);
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'source-over';

    for(let i = parts.length - 1; i >= 0; i--){
      const p = parts[i];
      p.x += p.vx; p.y += p.vy;
      p.vx *= .96; p.vy *= .96;
      p.rot += p.vr;
      p.life -= p.decay;
      if(p.life <= 0){ parts.splice(i, 1); continue; }
      ctx.globalAlpha = Math.max(0, p.life) * .9;
      ctx.shadowColor = p.color; ctx.shadowBlur = 12;
      ctx.fillStyle = p.color;
      drawShape(p);
    }
    ctx.shadowBlur = 0;

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';

    /* your photo as the mouse pointer */
    loadPhoto();
    const show = ptr.seen && ptr.type === 'mouse' && imgOk;
    if(show !== photoShown){ photoShown = show; root.classList.toggle('fx-photo', show); }
    if(show){
      ptr.s += ((ptr.hot ? 1.4 : ptr.down ? .85 : 1) - ptr.s) * .2;
      const R = 24 * ptr.s;
      ctx.save();
      ctx.translate(ptr.x, ptr.y);
      ctx.shadowColor = '#d2042d'; ctx.shadowBlur = 20;
      ctx.fillStyle = '#d2042d';
      ctx.beginPath(); ctx.arc(0, 0, R + 3, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
      ctx.beginPath(); ctx.arc(0, 0, R, 0, Math.PI * 2); ctx.clip();
      const iw = img.naturalWidth, ih = img.naturalHeight, sz = iw * .36;
      ctx.drawImage(img, iw * .466 - sz / 2, ih * .356 - sz / 2, sz, sz, -R, -R, R * 2, R * 2);
      ctx.restore();
    }
  }
  frame();
})();

/* ===================== THREE.JS SCENE ===================== */
(function initScene(){
  if(typeof THREE === 'undefined'){ console.warn('Three.js failed to load'); return; }

  const CHERRY = 0xd2042d, NAVY = 0x3a63c8, NAVY_SOFT = 0x7a8fc9;

  const canvas = document.getElementById('bg');
  const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05060a, 0.032);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 8;

  /* Lights */
  scene.add(new THREE.AmbientLight(0x303a6a, 0.9));
  const l1 = new THREE.PointLight(0xff3d5e, 2.4, 30); l1.position.set(5, 3, 5); scene.add(l1);
  const l2 = new THREE.PointLight(NAVY, 2.4, 30); l2.position.set(-5, -3, 4); scene.add(l2);

  /* Hero object */
  const hero = new THREE.Group();
  scene.add(hero);

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.15, 0),
    new THREE.MeshStandardMaterial({color:CHERRY, emissive:0x4a0010, metalness:.8, roughness:.28, flatShading:true})
  );
  hero.add(core);

  const wire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.75, 1),
    new THREE.MeshBasicMaterial({color:NAVY, wireframe:true, transparent:true, opacity:.5})
  );
  hero.add(wire);

  const ring1 = new THREE.Mesh(
    new THREE.TorusGeometry(2.5, 0.014, 16, 180),
    new THREE.MeshBasicMaterial({color:CHERRY})
  );
  ring1.rotation.x = Math.PI / 2.4;
  hero.add(ring1);

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(3.1, 0.011, 16, 180),
    new THREE.MeshBasicMaterial({color:NAVY, transparent:true, opacity:.75})
  );
  ring2.rotation.y = Math.PI / 3;
  hero.add(ring2);

  /* Floating shapes */
  const floaters = [];
  const geos = [
    new THREE.OctahedronGeometry(.28), new THREE.TetrahedronGeometry(.3),
    new THREE.BoxGeometry(.35, .35, .35), new THREE.IcosahedronGeometry(.25, 0)
  ];
  const colors = [CHERRY, NAVY, NAVY_SOFT];
  for(let i = 0; i < 16; i++){
    const m = new THREE.Mesh(
      geos[i % geos.length],
      new THREE.MeshBasicMaterial({color:colors[i % colors.length], wireframe:true, transparent:true, opacity:.7})
    );
    const a = Math.random() * Math.PI * 2, rad = 4.5 + Math.random() * 5;
    m.position.set(Math.cos(a) * rad, (Math.random() - .5) * 14, (Math.random() - .5) * 10 - 2);
    m.userData = {
      rx:(Math.random() - .5) * .02, ry:(Math.random() - .5) * .02,
      bob:Math.random() * Math.PI * 2, speed:.4 + Math.random() * .6, baseY:m.position.y
    };
    scene.add(m); floaters.push(m);
  }

  /* Particles */
  const COUNT = 1800;
  const pos = new Float32Array(COUNT * 3);
  for(let i = 0; i < COUNT; i++){
    const r = 6 + Math.random() * 24;
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    pos[i*3]   = r * Math.sin(ph) * Math.cos(th);
    pos[i*3+1] = r * Math.sin(ph) * Math.sin(th);
    pos[i*3+2] = r * Math.cos(ph);
  }
  const pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const particles = new THREE.Points(pg, new THREE.PointsMaterial({color:0xb8c2e6, size:.05, transparent:true, opacity:.65, sizeAttenuation:true}));
  scene.add(particles);

  /* switch fog + particle colors with the theme */
  window.__setSceneTheme = function(light){
    scene.fog.color.setHex(light ? 0xf4f6fc : 0x05060a);
    particles.material.color.setHex(light ? 0x16347a : 0xb8c2e6);
    particles.material.opacity = light ? .5 : .65;
  };
  window.__setSceneTheme(document.documentElement.getAttribute('data-theme') === 'light');

  /* Input */
  const mouse = {x:0, y:0, tx:0, ty:0};
  window.addEventListener('mousemove', e=>{
    mouse.tx = (e.clientX / window.innerWidth - .5) * 2;
    mouse.ty = (e.clientY / window.innerHeight - .5) * 2;
  });
  window.addEventListener('touchmove', e=>{
    const t = e.touches[0];
    mouse.tx = (t.clientX / window.innerWidth - .5) * 2;
    mouse.ty = (t.clientY / window.innerHeight - .5) * 2;
  }, {passive:true});

  let scrollP = 0, scrollTarget = 0;
  function readScroll(){
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollTarget = max > 0 ? window.scrollY / max : 0;
  }
  window.addEventListener('scroll', readScroll, {passive:true});
  readScroll();

  window.addEventListener('resize', ()=>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const photoWrap = document.getElementById('photoWrap');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clock = new THREE.Clock();
  const lerp = (a, b, t)=> a + (b - a) * t;
  const clamp01 = x=> Math.max(0, Math.min(1, x));
  const smooth = x=> x * x * (3 - 2 * x);

  function animate(){
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    const speed = reduce ? 0.15 : 1;

    mouse.x = lerp(mouse.x, mouse.tx, .05);
    mouse.y = lerp(mouse.y, mouse.ty, .05);
    scrollP = lerp(scrollP, scrollTarget, .06);

    const narrow = window.innerWidth < 900;
    const halfH = Math.tan(camera.fov * Math.PI / 360) * camera.position.z;
    const halfW = halfH * camera.aspect;
    const worldPerPx = (2 * halfH) / window.innerHeight;

    /* Free-roaming path while scrolling the rest of the page */
    const swingX = narrow ? 0 : 3.0 * Math.sin(6 * Math.PI * scrollP);
    const swingY = (narrow ? 1.2 : 0) - scrollP * 1.2;
    const swingS = (narrow ? .55 : .85) * (1 - scrollP * .3);

    /* In the hero, the 3D rings wrap around the photo */
    let ax = swingX, ay = swingY, as = swingS, w = 0;
    if(photoWrap){
      const r = photoWrap.getBoundingClientRect();
      ax = ((r.left + r.width / 2) / window.innerWidth * 2 - 1) * halfW;
      ay = -((r.top + r.height / 2) / window.innerHeight * 2 - 1) * halfH;
      as = (r.width * 1.3 * worldPerPx) / 5;
      const k = clamp01(window.scrollY / (window.innerHeight * .8));
      w = 1 - smooth(k);
    }

    hero.position.x = lerp(swingX, ax, w);
    hero.position.y = lerp(swingY, ay, w) + Math.sin(t * .8 * speed) * .1;
    hero.scale.setScalar(lerp(swingS, as, w));

    hero.rotation.y = t * .25 * speed + scrollP * Math.PI * 4 + mouse.x * .5;
    hero.rotation.x = mouse.y * .35 + scrollP * 1.5;

    core.rotation.x = t * .5 * speed;
    core.rotation.z = t * .3 * speed;
    core.scale.setScalar(1 + Math.sin(t * 2 * speed) * .05);
    wire.rotation.y = -t * .15 * speed;
    ring1.rotation.z = t * .3 * speed;
    ring2.rotation.x = t * .2 * speed;

    floaters.forEach(m=>{
      m.rotation.x += m.userData.rx * speed;
      m.rotation.y += m.userData.ry * speed;
      m.position.y = m.userData.baseY + Math.sin(t * m.userData.speed * speed + m.userData.bob) * .5;
    });

    particles.rotation.y = t * .015 * speed + scrollP * 1.2;
    particles.rotation.x = scrollP * .5;

    camera.position.x = lerp(camera.position.x, mouse.x * .25, .05);
    camera.position.y = lerp(camera.position.y, -mouse.y * .2 - scrollP * 1.5, .05);
    camera.lookAt(0, -scrollP * 1.2, 0);
    l1.position.x = 5 + Math.sin(t * .7) * 2;
    l2.position.y = -3 + Math.cos(t * .6) * 2;

    renderer.render(scene, camera);
  }
  animate();
})();

/* Contact: looping video + "Let's Talk" opens the form and plays the intro video once */
(function talkUI(){
  var btn = document.getElementById('talkBtn'), box = document.getElementById('talkForm'),
      stage = document.getElementById('talkStage'), sec = document.getElementById('contact'),
      v1 = document.getElementById('cVid1'), v2 = document.getElementById('cVid2');
  if(!btn || !box || !stage || !v1 || !v2) return;
  var loaded = false, isOpen = false, vis = false;

  function play(v){ var p = v.play(); if(p && p.catch) p.catch(function(){}); }
  function load(){
    if(loaded) return; loaded = true;
    try{
      v1.src = 'assets/contact-loop.mp4'; v2.src = 'assets/contact-intro.mp4';
      v1.muted = true; v1.loop = true; v2.loop = false;
      v1.load(); v2.load();
      if(vis && !isOpen) play(v1);
    }catch(e){ console.warn('contact videos failed to load', e); }
  }

  /* decode the videos shortly before the section comes into view */
  new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting) load(); }); },{rootMargin:'800px 0px'}).observe(sec);

  /* play only while on screen */
  new IntersectionObserver(function(es){
    es.forEach(function(e){
      vis = e.isIntersecting;
      if(!loaded) return;
      if(vis){ if(isOpen){ if(!v2.ended) play(v2); } else play(v1); }
      else { v1.pause(); }
    });
  },{threshold:.2}).observe(stage);

  function openTalk(){
    isOpen = true; load();
    btn.setAttribute('aria-expanded', 'true');
    btn.firstElementChild.textContent = 'Close';
    box.classList.add('open'); stage.classList.add('talking');
    try{ v2.currentTime = 0; }catch(e){}
    v2.muted = true;
    var p = v2.play();
    if(p && p.catch) p.catch(function(){ v2.muted = true; play(v2); });
    setTimeout(function(){ if(isOpen) v1.pause(); }, 700);
    /* on phones, bring the video + button into view so the intro is seen */
    if(window.innerWidth <= 900){
      setTimeout(function(){
        var r = stage.getBoundingClientRect();
        if(isOpen && (r.top < 90 || r.bottom > window.innerHeight - 40)) stage.scrollIntoView({behavior:'smooth', block:'center'});
      }, 150);
    }
    /* safety net: if the browser held the video back, start it again */
    setTimeout(function(){ if(isOpen && v2.paused && !v2.ended){ v2.muted = true; play(v2); } }, 1500);
  }
  function closeTalk(){
    isOpen = false;
    btn.setAttribute('aria-expanded', 'false');
    btn.firstElementChild.textContent = "Let's Talk";
    box.classList.remove('open'); stage.classList.remove('talking');
    v2.pause();
    if(vis) play(v1);
    setTimeout(function(){ if(!isOpen){ try{ v2.currentTime = 0; }catch(e){} } }, 900);
  }
  btn.addEventListener('click', function(){ if(isOpen) closeTalk(); else openTalk(); });
})();

/* Photo */
window.__PHOTO__ = "assets/photo.jpg";
document.querySelectorAll('img[data-photo]').forEach(function(i){ i.src = window.__PHOTO__; });
(function(){ var l = document.createElement('link'); l.rel = 'icon'; l.href = window.__PHOTO__; document.head.appendChild(l); })();

/* Envelope intro: 3D seal + slow, smooth opening */
(function(){
  const env = document.getElementById('envelope');
  const btn = document.getElementById('envBtn');
  if(!env || !btn) return;
  const root = document.documentElement;
  root.classList.add('env-lock');
  let opened = false, raf = 0, spin = 1;

  /* 3D seal: same shapes as the hero scene (cherry core, navy wire sphere, two rings) */
  const cv = document.getElementById('sealCanvas');
  let renderer = null, scene, camera, group, r1, r2, wire, core;
  try{
    if(!window.THREE) throw new Error('no three');
    renderer = new THREE.WebGLRenderer({canvas:cv, antialias:true, alpha:true});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
    camera.position.z = 9.4;
    scene.add(new THREE.AmbientLight(0x303a6a, 1.1));
    const a = new THREE.PointLight(0xff3d5e, 2.6, 40); a.position.set(5, 3, 5); scene.add(a);
    const b = new THREE.PointLight(0x3a63c8, 2.6, 40); b.position.set(-5, -3, 4); scene.add(b);
    group = new THREE.Group(); scene.add(group);
    core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 0), new THREE.MeshStandardMaterial({color:0xd2042d, emissive:0x4a0010, metalness:.8, roughness:.28, flatShading:true}));
    wire = new THREE.Mesh(new THREE.IcosahedronGeometry(1.75, 1), new THREE.MeshBasicMaterial({color:0x3a63c8, wireframe:true, transparent:true, opacity:.85}));
    r1 = new THREE.Mesh(new THREE.TorusGeometry(2.45, 0.03, 16, 160), new THREE.MeshBasicMaterial({color:0xd2042d}));
    r1.rotation.x = Math.PI / 2.4;
    r2 = new THREE.Mesh(new THREE.TorusGeometry(2.95, 0.025, 16, 160), new THREE.MeshBasicMaterial({color:0x3a63c8, transparent:true, opacity:.9}));
    r2.rotation.y = Math.PI / 3;
    group.add(core, wire, r1, r2);
    const size = ()=>{ const w = btn.clientWidth || 180; renderer.setSize(w, w, false); };
    size(); window.addEventListener('resize', size);
    const loop = ()=>{
      raf = requestAnimationFrame(loop);
      group.rotation.y += 0.006 * spin; group.rotation.x += 0.003 * spin;
      wire.rotation.y -= 0.004 * spin; r1.rotation.z += 0.007 * spin; r2.rotation.x += 0.005 * spin;
      renderer.render(scene, camera);
    };
    loop();
    btn.addEventListener('mouseenter', ()=> spin = 3.2);
    btn.addEventListener('mouseleave', ()=> spin = 1);
  }catch(e){ btn.classList.add('no3d'); }

  function open(){
    if(opened) return; opened = true;
    spin = 6;
    env.classList.add('o1');                                  // seal shrinks away, flap swings open
    setTimeout(()=> env.classList.add('o2'), 2000);           // the front panels slide apart
    setTimeout(()=>{
      env.classList.add('gone');
      root.classList.remove('env-lock');
      if(raf) cancelAnimationFrame(raf);
      if(renderer){ try{ renderer.dispose(); }catch(e){} }
      window.dispatchEvent(new Event('scroll'));
    }, 4000);
  }
  btn.addEventListener('click', open);
})();

/* Finale: big "PORTFOLIO" built from thousands of 3D particles (Three.js) */
(function(){
  const sec = document.getElementById('finale'); const cv = document.getElementById('finaleCv');
  if(!sec || !cv) return;
  if(!window.THREE){ sec.classList.add('nogl'); return; }
  let renderer;
  try{ renderer = new THREE.WebGLRenderer({canvas:cv, antialias:true, alpha:true}); }catch(e){ sec.classList.add('nogl'); return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 200);
  const WORLD_W = 16, DEPTH = 5;
  let pts = null, mat = null, wires = [], ready = false, visible = false, startT = null;
  const mouse = new THREE.Vector2(9999, 9999), look = new THREE.Vector2(0,0);
  const isLight = ()=> document.documentElement.getAttribute('data-theme') === 'light';

  function fitCamera(){
    const w = sec.clientWidth || 1000, h = sec.querySelector('.finale-stage').clientHeight || 400;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const tan = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const needW = WORLD_W / 0.84, needH = (WORLD_W * 0.22) / 0.8;
    camera.position.z = Math.max(needW / (2 * tan * camera.aspect), needH / (2 * tan));
    camera.updateProjectionMatrix();
  }

  function build(){
    const TW = 1800, TH = 420, c = document.createElement('canvas'); c.width = TW; c.height = TH;
    const g = c.getContext('2d');
    g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
    let fs = 330; g.font = '800 ' + fs + 'px "Space Grotesk", "Inter", Arial, sans-serif';
    while(g.measureText('PORTFOLIO').width > TW * 0.96 && fs > 80){ fs -= 10; g.font = '800 ' + fs + 'px "Space Grotesk", "Inter", Arial, sans-serif'; }
    g.fillText('PORTFOLIO', TW/2, TH/2 + fs*0.04);
    const d = g.getImageData(0,0,TW,TH).data, step = 5, tgt = [], st = [], rnd = [], col = [], gt = [];
    const cherry = new THREE.Color(0xff2a4d), navy = new THREE.Color(0x4f7bdc), white = new THREE.Color(0xffffff), tmp = new THREE.Color();
    const sc = WORLD_W / TW;
    for(let y = 0; y < TH; y += step){
      for(let x = 0; x < TW; x += step){
        if(d[(y*TW + x)*4 + 3] < 128) continue;
        const layers = 2;
        for(let l = 0; l < layers; l++){
          const px = (x - TW/2) * sc + (Math.random()-.5)*sc*step*.6;
          const py = -(y - TH/2) * sc + (Math.random()-.5)*sc*step*.6;
          const pz = (l - (layers-1)/2) * 0.28 + (Math.random()-.5)*0.2;
          tgt.push(px, py, pz);
          const a = Math.random()*Math.PI*2, r = 6 + Math.random()*16;
          st.push(Math.cos(a)*r*1.4, Math.sin(a)*r*.9, (Math.random()-.5)*DEPTH*5);
          rnd.push(Math.random());
          const t = x / TW; tmp.copy(cherry).lerp(navy, Math.min(1, Math.max(0,(t-.15)/.7)));
          if(Math.random() < .08) tmp.copy(white);
          col.push(tmp.r, tmp.g, tmp.b);
          gt.push(t, tmp.equals(white) ? 1 : 0);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(tgt, 3));
    geo.setAttribute('aStart', new THREE.Float32BufferAttribute(st, 3));
    geo.setAttribute('aRand', new THREE.Float32BufferAttribute(rnd, 1));
    geo.setAttribute('aColor', new THREE.Float32BufferAttribute(col, 3));
    geo.setAttribute('aG', new THREE.Float32BufferAttribute(gt, 2));
    mat = new THREE.ShaderMaterial({
      transparent:true, depthWrite:false, blending:THREE.AdditiveBlending,
      uniforms:{ uTime:{value:0}, uProg:{value:0}, uMouse:{value:new THREE.Vector2(9999,9999)}, uSize:{value:1}, uLight:{value:0} },
      vertexShader:`
        attribute vec3 aStart; attribute float aRand; attribute vec3 aColor; attribute vec2 aG;
        uniform float uTime, uProg, uSize; uniform vec2 uMouse;
        varying vec3 vC; varying float vA; varying vec2 vG;
        void main(){
          float p = clamp((uProg - aRand*0.45) / 0.55, 0., 1.);
          p = p*p*(3.-2.*p);
          vec3 pos = mix(aStart, position, p);
          float w = (1.-p);
          pos.y += sin(uTime*1.1 + position.x*.9) * .09 * p + sin(uTime*.8 + aRand*6.28) * .03;
          pos.z += cos(uTime*.9 + position.x*.7 + position.y*.5) * .22 * p;
          vec2 dm = pos.xy - uMouse; float dl = length(dm);
          float push = smoothstep(2.2, 0., dl) * p;
          pos.xy += normalize(dm + .0001) * push * .9; pos.z += push * 1.4;
          vec4 mv = modelViewMatrix * vec4(pos, 1.);
          gl_PointSize = uSize * (1.7 + aRand*1.2 + push*2.) * (22. / -mv.z);
          gl_Position = projectionMatrix * mv;
          vC = aColor; vG = aG; vA = .35 + .65*p;
        }`,
      fragmentShader:`
        uniform float uLight; varying vec3 vC; varying float vA; varying vec2 vG;
        void main(){
          vec2 q = gl_PointCoord - .5; float r = length(q); if(r > .5) discard;
          float a = smoothstep(.5, .1, r) * vA;
          vec3 c = vC;
          if(uLight > .5){
            /* light page: solid, deep cherry -> navy letters with crisp dots (no glow) */
            c = mix(vec3(.82,.016,.18), vec3(.06,.17,.45), clamp((vG.x-.15)/.7, 0., 1.));
            if(vG.y > .5) c = vec3(.12,.16,.36);
            a = smoothstep(.5, .32, r) * (.55 + .45*vA);
          }
          gl_FragColor = vec4(c, a);
        }`
    });
    pts = new THREE.Points(geo, mat); pts.frustumCulled = false; scene.add(pts);
    // slow wireframe companions behind the text
    const m1 = new THREE.MeshBasicMaterial({color:0x3a63c8, wireframe:true, transparent:true, opacity:.35});
    const m2 = new THREE.MeshBasicMaterial({color:0xd2042d, wireframe:true, transparent:true, opacity:.4});
    const a = new THREE.Mesh(new THREE.IcosahedronGeometry(2.1, 1), m1); a.position.set(-8.6, 1.6, -3);
    const b = new THREE.Mesh(new THREE.OctahedronGeometry(1.5, 0), m2); b.position.set(8.8, -1.2, -3);
    const t = new THREE.Mesh(new THREE.TorusGeometry(1.7, .03, 8, 90), m2); t.position.set(7.4, 2.3, -4);
    scene.add(a, b, t); wires = [a, b, t];
    ready = true; fitCamera();
  }

  function frame(now){
    requestAnimationFrame(frame);
    if(!ready || !visible) return;
    if(startT === null) startT = now;
    const t = (now - startT) / 1000;
    mat.uniforms.uTime.value = t;
    mat.uniforms.uProg.value = Math.min(1, t / 3.2);
    const light = isLight();
    mat.uniforms.uLight.value = light ? 1 : 0;
    const bl = light ? THREE.NormalBlending : THREE.AdditiveBlending;
    if(mat.blending !== bl){ mat.blending = bl; mat.needsUpdate = true; }
    mat.uniforms.uSize.value = renderer.getPixelRatio() * (light ? 1.3 : 1.15) * (cv.clientWidth < 600 ? 1.15 : 1);
    mat.uniforms.uMouse.value.copy(mouse);
    look.x += (mouse.x * .02 - look.x) * .05; look.y += (mouse.y * .02 - look.y) * .05;
    pts.rotation.set(0, 0, 0); /* the word always stays straight and fully in view */
    wires.forEach((m, i)=>{ m.rotation.x += .003*(i+1); m.rotation.y += .004;
      m.material.color.setHex(i === 0 ? (light ? 0x16347a : 0x3a63c8) : (light ? 0xc8032a : 0xd2042d));
      m.material.opacity = light ? .6 : (i === 0 ? .35 : .4); });
    renderer.render(scene, camera);
  }

  new IntersectionObserver((e)=>{ visible = e[0].isIntersecting; if(visible) startT = null; /* every time the section comes back into view, the letters fly in again */ }, {threshold:.12}).observe(sec);
  const stage = sec.querySelector('.finale-stage');
  function setMouse(cx, cy){
    const r = cv.getBoundingClientRect();
    const nx = (cx - r.left) / r.width * 2 - 1, ny = -((cy - r.top) / r.height * 2 - 1);
    const tan = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    mouse.set(nx * camera.position.z * tan * camera.aspect, ny * camera.position.z * tan);
  }
  stage.addEventListener('pointermove', e=> setMouse(e.clientX, e.clientY));
  stage.addEventListener('pointerleave', ()=> mouse.set(9999, 9999));
  window.addEventListener('resize', ()=>{ if(ready) fitCamera(); });
  const fontReady = (document.fonts && document.fonts.load) ? Promise.race([document.fonts.load('800 200px "Space Grotesk"'), new Promise(r=>setTimeout(r,1500))]) : Promise.resolve();
  fontReady.then(build).catch(build);
  requestAnimationFrame(frame);
})();
