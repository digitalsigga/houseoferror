import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './ThreeScene.css';

export const useThreeScene = (mountRef, width, height) => {
    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        // GLTF Loader
        const loader = new GLTFLoader();
        loader.load('/gltf/sillyhat_.gltf', function (gltf) {
            gltf.scene.scale.set(10, 10, 10); // Adjust the scaling as needed
            scene.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });

        // OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Optional: to have inertia in the controls
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;

        camera.position.z = 5;

        // Add lights to the scene (optional)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const mountNode = mountRef.current;

        // Render loop
        function animate() {
            requestAnimationFrame(animate);
            controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
            renderer.render(scene, camera);
        }
        animate();

        // Cleanup function
        return () => {
            mountNode.removeChild(renderer.domElement);
            scene.clear();
        };
    }, [mountRef, width, height]);
};
