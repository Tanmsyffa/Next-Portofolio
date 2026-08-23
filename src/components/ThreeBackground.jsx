import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

/**
 * Premium 3D Wireframe Terrain
 * Renders on all screen sizes but uses lighter geometry on mobile for performance.
 */
export default function ThreeBackground() {
  const containerRef = useRef(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    // Setup Scene
    const scene = new THREE.Scene();
    
    // Setup Camera
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.y = 15;
    camera.position.z = 30;
    camera.rotation.x = -Math.PI / 8;

    // Setup Renderer — lower pixel ratio on mobile
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    container.appendChild(renderer.domElement);

    const isDark = resolvedTheme === 'dark';
    const gridColor = isDark ? 0xffffff : 0x000000;
    const gridOpacity = isDark ? 0.08 : 0.06;

    // Use lighter geometry on mobile (20x20 segments vs 45x45)
    const segments = isMobile ? 20 : 45;
    const geometry = new THREE.PlaneGeometry(150, 150, segments, segments);
    geometry.rotateX(-Math.PI / 2);

    const material = new THREE.LineBasicMaterial({
      color: gridColor,
      transparent: true,
      opacity: gridOpacity,
    });

    const wireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(geometry),
      material
    );
    scene.add(wireframe);

    // Mouse Interaction (desktop only to save resources on mobile)
    let mouseX = 0;
    const windowHalfX = window.innerWidth / 2;

    const onDocumentMouseMove = (event) => {
      mouseX = (event.clientX - windowHalfX) * 0.01;
    };
    if (!isMobile) {
      document.addEventListener('mousemove', onDocumentMouseMove, false);
    }

    // Resize Handler
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize, false);

    // Animation Loop — throttle on mobile with lower speed
    const clock = new THREE.Clock();
    let animationFrameId;
    const waveSpeed = isMobile ? 0.3 : 0.5;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      const time = clock.getElapsedTime();

      // Smooth camera pan on desktop
      if (!isMobile) {
        const targetX = mouseX * 0.5;
        camera.position.x += (targetX - camera.position.x) * 0.05;
      }
      camera.lookAt(scene.position);

      // Animate terrain vertices
      const positions = wireframe.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] = Math.sin(x * 0.1 + time * waveSpeed) * 2 + Math.cos(z * 0.1 + time * (waveSpeed * 0.8)) * 2;
      }
      wireframe.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (!isMobile) {
        document.removeEventListener('mousemove', onDocumentMouseMove);
      }
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationFrameId);
      
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: resolvedTheme === 'dark' ? 1 : 0.8 }}
      aria-hidden="true"
    />
  );
}
