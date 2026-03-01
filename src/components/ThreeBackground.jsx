import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  uniform float uTime;
  uniform float uDistortion;
  uniform float uSize;
  uniform vec2 uMouse;
  varying float vNoise;

  // Simplex Noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 = v - i + dot(i, C.xxx) ;
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
      i = mod289(i);
      vec4 p = permute( permute( permute(
                  i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 1.0/7.0;
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
      vec3 pos = position;
      float noise = snoise(vec3(pos.x * 0.3 + uTime * 0.5, pos.y * 0.3 + uTime * 0.5, pos.z * 0.3));
      vNoise = noise;
      vec3 direction = normalize(pos);
      vec3 newPos = pos + (direction * noise * uDistortion);
      float dist = distance(uMouse * 10.0, newPos.xy);
      float interaction = smoothstep(6.0, 0.0, dist);
      newPos.z += interaction * 1.5;
      vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      gl_PointSize = uSize * (20.0 / -mvPosition.z);
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  varying float vNoise;
  void main() {
      vec2 center = gl_PointCoord - vec2(0.5);
      float dist = length(center);
      if (dist > 0.45) discard;
      float alpha = 1.0;
      vec3 color1 = uColor;
      vec3 color2 = vec3(0.25, 0.35, 0.45);
      vec3 finalColor = mix(color1, color2, vNoise * 0.5 + 0.5);
      gl_FragColor = vec4(finalColor, alpha);
  }
`;

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xF5F5F7, 0.04);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 20);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const objectGroup = new THREE.Group();
    scene.add(objectGroup);

    const geometry = new THREE.IcosahedronGeometry(6, 32);
    const uniforms = {
        uTime: { value: 0 },
        uDistortion: { value: 1.5 },
        uSize: { value: 2.0 },
        uColor: { value: new THREE.Color('#084DF2') },
        uMouse: { value: new THREE.Vector2(0, 0) }
    };

    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: uniforms,
        transparent: true,
        blending: THREE.NormalBlending
    });

    const points = new THREE.Points(geometry, material);
    objectGroup.add(points);

    let mouseX = 0, mouseY = 0;
    let frameId;
    const clock = new THREE.Clock();

    const handleMouseMove = (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const adjustLayout = () => {
        const w = window.innerWidth;
        if(w < 1024) {
            objectGroup.position.set(4, 5, -8);
            objectGroup.scale.set(0.65, 0.65, 0.65);
        } else {
            objectGroup.position.set(0, 2.5, 0);
            objectGroup.scale.set(0.65, 0.65, 0.65);
        }
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        objectGroup.rotation.z = scrollY * 0.0005;
        const w = window.innerWidth;
        const baseY = w < 1024 ? 5 : 2.5;
        objectGroup.position.y = baseY + scrollY * 0.005;
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', adjustLayout);
    window.addEventListener('scroll', handleScroll);

    adjustLayout();

    const animate = () => {
        frameId = requestAnimationFrame(animate);
        try {
            const time = clock.getElapsedTime();
            
            // Continuous auto-rotation
            objectGroup.rotation.y = time * 0.25;
            objectGroup.rotation.z = time * 0.1;
            
            // Breathing scale and position drift
            const breath = 1.0 + Math.sin(time * 1.5) * 0.05;
            objectGroup.scale.set(0.65 * breath, 0.65 * breath, 0.65 * breath);
            
            // Base Y position responds to scroll but also naturally floats
            const baseY = window.innerWidth < 1024 ? 5 : 2.5;
            objectGroup.position.y = baseY + Math.sin(time) * 0.3 + window.scrollY * 0.005;

            // Shader time and distortion pulsing
            uniforms.uTime.value = time;
            uniforms.uDistortion.value = 1.5 + Math.sin(time * 2.0) * 0.3;
            
            // If mouse is idle (0,0), use an automatic roaming target for the camera/shader
            const autoX = Math.sin(time * 0.5) * 0.5;
            const autoY = Math.cos(time * 0.4) * 0.5;
            const targetX = (mouseX === 0 && mouseY === 0) ? autoX : mouseX;
            const targetY = (mouseX === 0 && mouseY === 0) ? autoY : mouseY;
            
            uniforms.uMouse.value.x += (targetX - uniforms.uMouse.value.x) * 0.05;
            uniforms.uMouse.value.y += (targetY - uniforms.uMouse.value.y) * 0.05;
            
            camera.position.x += (targetX * 2.0 - camera.position.x) * 0.02;
            camera.position.y += (targetY * 2.0 - camera.position.y) * 0.02;
            camera.lookAt(0, 0, 0);
            
            renderer.render(scene, camera);
        } catch (e) {
            console.error("Three.js Animation Error:", e);
        }
    };

    animate();

    const mount = mountRef.current;
    
    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', adjustLayout);
      window.removeEventListener('scroll', handleScroll);
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 opacity-100 pointer-events-none" />;
}
