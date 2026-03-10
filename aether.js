// Aether Core JS
document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;
  // User explicitly wants dark mode to look exactly like the reference, so let's default to dark
  let isDark = html.classList.contains("dark");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      isDark = !isDark;
      html.classList.toggle("dark");
      if (typeof update3DTheme === 'function') update3DTheme(isDark);
    });
  }

  // Loader
  const loaderScreen = document.getElementById("loading-screen");
  const loaderFill = document.getElementById("loader-fill");
  const loaderText = document.getElementById("loader-text");
  const canvasContainer = document.getElementById("canvas-container");
  if (loaderScreen && loaderFill && loaderText) {
    let progress = 0;
    const loadInterval = setInterval(() => {
      progress += Math.random() * 6;
      if (progress >= 100) {
        progress = 100;
        clearInterval(loadInterval);
        if (typeof gsap !== 'undefined') {
          gsap.to(loaderScreen, {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => (loaderScreen.style.display = "none"),
          });
        }
        if (canvasContainer) canvasContainer.style.opacity = "1";
        if (typeof init3D === 'function') init3D();
      }
      loaderFill.style.width = `${progress}%`;
      loaderText.innerText = `${Math.floor(progress)}%`;
    }, 40);
  } else {
    // If no loader on this page, just init 3D
    if (canvasContainer) canvasContainer.style.opacity = "1";
    if (typeof init3D === 'function') init3D();
  }

  // Bento spotlight + micro-tilt
  document.querySelectorAll(".bento-card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty("--sx", x + "%");
      card.style.setProperty("--sy", y + "%");

      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      const rx = (-dy * 4).toFixed(2);
      const ry = (dx * 6).toFixed(2);
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-1px)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });

  // Reveal
  const revealElements = document.querySelectorAll(".reveal");
  if (window.IntersectionObserver) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -60px 0px" });
    revealElements.forEach((el) => observer.observe(el));
  }

  // Counters
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    const counters = document.querySelectorAll(".counter");
    counters.forEach((el) => {
      const target = parseFloat(el.dataset.counter);
      const suffix = el.dataset.suffix || "";
      gsap.fromTo(el, { innerText: 0 }, {
        innerText: target,
        duration: 1.6,
        ease: "power2.out",
        snap: { innerText: 0.01 },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: function () {
          let value = parseFloat(el.innerText);
          el.innerText = value.toFixed(target % 1 !== 0 ? 2 : 0) + suffix;
        }
      });
    });
  }

  // Karaoke text
  const karaokeText = document.getElementById("kakaoke-text");
  if (karaokeText) {
    const words = karaokeText.innerText.split(" ");
    karaokeText.innerHTML = words.map(word => `<span class="karaoke-word" style="opacity:0.15;transition:opacity 0.35s ease,color 0.35s ease">${word}</span> `).join("");
    const spans = karaokeText.querySelectorAll("span");
    let ticking = false;
    const onKaraokeScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = karaokeText.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (vh * 0.7 - rect.top) / (rect.height * 0.9 + vh * 0.1)));
        const activeIndex = Math.floor(progress * spans.length);
        spans.forEach((span, i) => {
          if (i <= activeIndex) {
            span.style.opacity = "1";
            span.style.color = isDark ? "#ffffff" : "#111827";
          } else {
            span.style.opacity = "0.15";
            span.style.color = "";
          }
        });
        ticking = false;
      });
    };
    window.addEventListener("scroll", onKaraokeScroll, { passive: true });
    onKaraokeScroll();
  }


  // Timeline Fill + Step Activation
  const track = document.getElementById('timeline-track');
  const fill = document.getElementById('timeline-fill');
  const steps = document.querySelectorAll('.timeline-step');
  if (track && fill && typeof gsap !== 'undefined') {
    // Animate the fill line
    gsap.to(fill, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: track,
        start: 'top 70%',
        end: 'bottom 40%',
        scrub: 0.8
      }
    });

    // Each step: fade in on enter, style on activate
    steps.forEach(step => {
      // Initial state set via JS to avoid CSS class conflict
      gsap.set(step, { opacity: 0.15, filter: 'blur(4px)', scale: 0.97 });

      ScrollTrigger.create({
        trigger: step,
        start: 'top 65%',
        end: 'bottom 38%',
        onEnter: () => {
          gsap.to(step, { opacity: 1, filter: 'blur(0px)', scale: 1, duration: 0.7, ease: 'power2.out' });
          step.classList.add('timeline-step-active');
        },
        onLeave: () => {
          gsap.to(step, { opacity: 0.15, filter: 'blur(4px)', scale: 0.97, duration: 0.5 });
          step.classList.remove('timeline-step-active');
        },
        onEnterBack: () => {
          gsap.to(step, { opacity: 1, filter: 'blur(0px)', scale: 1, duration: 0.7, ease: 'power2.out' });
          step.classList.add('timeline-step-active');
        },
        onLeaveBack: () => {
          gsap.to(step, { opacity: 0.15, filter: 'blur(4px)', scale: 0.97, duration: 0.5 });
          step.classList.remove('timeline-step-active');
        }
      });
    });
  }

});

// THREE.js Core
let scene, camera, renderer, phoneGroup, screenMesh, envLight, dirLight, particles;
function init3D() {
  if (typeof THREE === 'undefined') return;
  const container = document.getElementById("canvas-container");
  if (!container) return;
  // Prevent double init
  if (container.children.length > 0) return;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x020202, 0.0016);

  camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 16);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  phoneGroup = new THREE.Group();
  scene.add(phoneGroup);

  function makeRadialTexture(stops) {
    const c = document.createElement("canvas"); c.width = 512; c.height = 512;
    const g = c.getContext("2d");
    const grd = g.createRadialGradient(256, 256, 0, 256, 256, 256);
    stops.forEach((s) => grd.addColorStop(s[0], s[1]));
    g.fillStyle = grd; g.fillRect(0, 0, 512, 512);
    return new THREE.CanvasTexture(c);
  }

  const glowTex = makeRadialTexture([
    [0.0, "rgba(16,185,129,0.22)"],
    [0.28, "rgba(16,185,129,0.10)"],
    [0.55, "rgba(255,255,255,0.06)"],
    [1.0, "rgba(0,0,0,0.0)"],
  ]);

  const glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false }));
  glowSprite.scale.set(18, 18, 1);
  glowSprite.position.set(0, 0, -6);
  scene.add(glowSprite);

  const width = 3.2, height = 6.8, depth = 0.35, radius = 0.6;
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2 + radius, -height / 2);
  shape.lineTo(width / 2 - radius, -height / 2);
  shape.quadraticCurveTo(width / 2, -height / 2, width / 2, -height / 2 + radius);
  shape.lineTo(width / 2, height / 2 - radius);
  shape.quadraticCurveTo(width / 2, height / 2, width / 2 - radius, height / 2);
  shape.lineTo(-width / 2 + radius, height / 2);
  shape.quadraticCurveTo(-width / 2, height / 2, -width / 2, height / 2 - radius);
  shape.lineTo(-width / 2, -height / 2 + radius);
  shape.quadraticCurveTo(-width / 2, -height / 2, -width / 2 + radius, -height / 2);

  const bodyGeo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelSegments: 6, bevelSize: 0.04, bevelThickness: 0.04 });
  bodyGeo.center();

  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, metalness: 0.98, roughness: 0.1, envMapIntensity: 2.0 });
  const phoneBody = new THREE.Mesh(bodyGeo, bodyMat);
  phoneBody.castShadow = true; phoneBody.receiveShadow = true;
  phoneGroup.add(phoneBody);

  const canvas = document.createElement("canvas"); canvas.width = 512; canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  const grad = ctx.createRadialGradient(256, 512, 0, 256, 512, 512);
  grad.addColorStop(0, "#030a06"); grad.addColorStop(1, "#000000");
  ctx.fillStyle = grad; ctx.fillRect(0, 0, 512, 1024);
  ctx.shadowBlur = 60; ctx.shadowColor = "#10B981"; ctx.strokeStyle = "#10B981"; ctx.lineWidth = 8;
  ctx.beginPath(); ctx.arc(256, 480, 80, 0, Math.PI * 2); ctx.stroke();
  ctx.shadowBlur = 30; ctx.fillStyle = "rgba(16, 185, 129, 0.04)"; ctx.fill();
  ctx.shadowBlur = 0; ctx.font = "500 16px Inter, sans-serif"; ctx.fillStyle = "rgba(255,255,255,0.5)"; ctx.textAlign = "center";
  ctx.fillText("Engageo", 256, 600);
  ctx.font = "300 11px Inter, sans-serif"; ctx.fillStyle = "rgba(255,255,255,0.25)";
  ctx.fillText("AI Missed Call Recovery", 256, 625);

  const tex = new THREE.CanvasTexture(canvas);
  const screenGeo = new THREE.PlaneGeometry(width - 0.2, height - 0.2);
  const screenMat = new THREE.MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.6, roughness: 0.1, metalness: 0.3 });
  screenMesh = new THREE.Mesh(screenGeo, screenMat);
  screenMesh.position.z = depth / 2 + 0.05;
  phoneGroup.add(screenMesh);

  envLight = new THREE.AmbientLight(0x404040, 0.6); scene.add(envLight);
  dirLight = new THREE.DirectionalLight(0xffffff, 2.2); dirLight.position.set(4, 6, 10); dirLight.castShadow = true; scene.add(dirLight);
  const fillLight = new THREE.DirectionalLight(0x4488ff, 0.3); fillLight.position.set(-4, 2, 5); scene.add(fillLight);
  const rimLight = new THREE.SpotLight(0x10b981, 3); rimLight.position.set(-3, 0, -6); rimLight.lookAt(0, 0, 0); scene.add(rimLight);
  const rimLight2 = new THREE.SpotLight(0x3366ff, 1.5); rimLight2.position.set(3, 2, -4); rimLight2.lookAt(0, 0, 0); scene.add(rimLight2);

  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(300);
  for (let i = 0; i < 300; i++) positions[i] = (Math.random() - 0.5) * 35;
  particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  particles = new THREE.Points(particleGeo, new THREE.PointsMaterial({ color: 0x10b981, size: 0.02, transparent: true, opacity: 0.15, sizeAttenuation: true }));
  scene.add(particles);

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    phoneGroup.position.y += Math.sin(t * 0.5) * 0.0005;
    if (particles) { particles.rotation.y = t * 0.015; particles.rotation.x = t * 0.005; }
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    const camProxy = { fov: camera.fov };
    const masterTl = gsap.timeline({
      scrollTrigger: { trigger: "body", start: "top top", end: "+=420%", scrub: 1.25, pin: false }
    });
    masterTl.to("#hero-atmosphere", { opacity: 1, duration: 1 }, 0);
    masterTl.to("#hero-content", { opacity: 0, scale: 0.95, pointerEvents: "none", duration: 1 }, 0);
    masterTl.to(phoneGroup.rotation, { x: 0.15, y: 0.9, z: 0.06, duration: 2.2 }, 0);
    masterTl.to(phoneGroup.position, { x: 1.25, y: 0.0, z: 1.8, duration: 2.2 }, 0);
    masterTl.to(camera.position, { x: 0.35, y: 0.15, z: 14.2, duration: 2.2 }, 0);
    masterTl.to(camProxy, { fov: 26, duration: 2.2, onUpdate: () => { camera.fov = camProxy.fov; camera.updateProjectionMatrix(); } }, 0);
    masterTl.to("#popover-1", { opacity: 1, y: 0, scale: 1, duration: 0.8 }, 0.9);
    masterTl.to("#popover-1", { opacity: 0, y: -20, duration: 0.7 }, 2.4);
    masterTl.to(phoneGroup.rotation, { x: -0.05, y: 2.4, z: -0.04, duration: 2.6 }, 2.6);
    masterTl.to(phoneGroup.position, { x: -1.3, y: 0.35, z: 2.6, duration: 2.6 }, 2.6);
    masterTl.to(camera.position, { x: -0.55, y: 0.25, z: 12.4, duration: 2.6 }, 2.6);
    masterTl.to(camProxy, { fov: 24, duration: 2.6, onUpdate: () => { camera.fov = camProxy.fov; camera.updateProjectionMatrix(); } }, 2.6);
    masterTl.to("#popover-2", { opacity: 1, y: 0, scale: 1, duration: 0.8 }, 3.4);
    masterTl.to("#popover-2", { opacity: 0, y: -20, duration: 0.7 }, 4.9);
    masterTl.to(phoneGroup.rotation, { x: 0.35, y: Math.PI * 2, z: 0.0, duration: 3.2 }, 5.1);
    masterTl.to(phoneGroup.position, { x: 0.0, y: 1.15, z: 0.6, duration: 3.2 }, 5.1);
    masterTl.to(camera.position, { x: 0.0, y: 0.55, z: 10.6, duration: 3.2 }, 5.1);
    masterTl.to(camProxy, { fov: 22, duration: 3.2, onUpdate: () => { camera.fov = camProxy.fov; camera.updateProjectionMatrix(); } }, 5.1);
    masterTl.to("#popover-3", { opacity: 1, y: 0, scale: 1, duration: 0.8 }, 6.0);
    masterTl.to("#popover-3", { opacity: 0, y: -20, duration: 0.7 }, 7.6);
    masterTl.to(phoneGroup.position, { y: 10, duration: 2 }, 8.2);
    masterTl.to("#hero-atmosphere", { opacity: 0, duration: 2 }, 8.2);
    masterTl.to("#canvas-container", { opacity: 0, duration: 2 }, 8.7);
  }
}

function update3DTheme(dark) {
  if (!scene) return;
  const targetBg = dark ? new THREE.Color(0x020202) : new THREE.Color(0xf3f4f6);
  if (scene.fog) gsap.to(scene.fog.color, { r: targetBg.r, g: targetBg.g, b: targetBg.b, duration: 0.7 });
  if (dark) {
    if (envLight) gsap.to(envLight, { intensity: 0.6, duration: 0.7 });
    if (dirLight) gsap.to(dirLight, { intensity: 2.2, duration: 0.7 });
    if (screenMesh) gsap.to(screenMesh.material, { emissiveIntensity: 0.6, duration: 0.7 });
    if (particles) gsap.to(particles.material, { opacity: 0.15, duration: 0.7 });
  } else {
    if (envLight) gsap.to(envLight, { intensity: 2.0, duration: 0.7 });
    if (dirLight) gsap.to(dirLight, { intensity: 1.0, duration: 0.7 });
    if (screenMesh) gsap.to(screenMesh.material, { emissiveIntensity: 0.15, duration: 0.7 });
    if (particles) gsap.to(particles.material, { opacity: 0.05, duration: 0.7 });
  }
}
