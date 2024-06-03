import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function ThreeDModelViewer() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(
      "/3d-models/Pochi/scene.gltf",
      (gltf) => {
        console.log("Model and textures loaded!", gltf);
        scene.add(gltf.scene);
        gltf.scene.scale.set(2, 2, 2); // Adjust scale as needed

        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
        cameraZ *= 1.2; // Add some distance to make sure the entire model is visible
        console.log("Camera Z:", cameraZ);
        console.log("Center:", center);
        console.log("Size:", size);

        camera.position.set(
          center.x + cameraZ,
          center.y + cameraZ,
          center.z + cameraZ
        );
        camera.lookAt(center);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 5, 10);
        scene.add(ambientLight);
        scene.add(directionalLight);

        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };

        animate();
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.error(
          "An error occurred while loading the model or textures:",
          error
        );
      }
    );

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      scene.clear();
      renderer.dispose();
    };
  });

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "100vh",
        height: "100vh",
      }}
    />
  );
}

export default ThreeDModelViewer;
