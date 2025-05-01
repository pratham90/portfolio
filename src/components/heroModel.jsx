import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

const heroModel = () => {
  const mountRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const modelRef = useRef(null); // reference to the loaded model

  useEffect(() => {
    const width = window.innerWidth > 1100 ? 300 : 155;
    const height = 290;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(5.5, width / height, 0.1, 100);
    camera.position.z = 20;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent

    if (mountRef.current) {
      mountRef.current.innerHTML = '';
      mountRef.current.appendChild(renderer.domElement);
    }

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    // HDRI Environment Map
    const hdrLoader = new RGBELoader();
    hdrLoader.load('/blue_photo_studio_1k.hdr', (texture) => {
      const envMap = pmremGenerator.fromEquirectangular(texture).texture;
      scene.environment = envMap;
      texture.dispose();
      pmremGenerator.dispose();
    });

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 1));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Load Model
    const loader = new GLTFLoader();
    let mixer;

    loader.load(
      '/Michelle.glb',
      (gltf) => {
        const model = gltf.scene;
        model.position.set(0, -0.9, 0);
        modelRef.current = model;
        scene.add(model);

        mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
      },
      undefined,
      (error) => console.error('Error loading model:', error)
    );

    const clock = new THREE.Clock();

    // Mouse Move Interaction
    const handleMouseMove = (event) => {
      if (modelRef.current) {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        modelRef.current.rotation.y = x * 0.5;
        modelRef.current.rotation.x = y * 0.3;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (isAnimating && mixer) mixer.update(delta);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      controls.dispose();
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
    };
  }, [isAnimating]);

  return (
    <div>
      <div ref={mountRef} />
      
    </div>
  );
};

export default heroModel;
