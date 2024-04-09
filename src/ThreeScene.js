import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Adjust the import path

export const useThreeScene = (mountRef, width, height) => {
    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); // Use provided width and height
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for transparent background
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement); // Mounting the renderer.domElement to the ref

        // GLTF Loader
        const loader = new GLTFLoader();

        loader.load('public/gltf/sillyhat_.gltf', function (gltf) {
            // Increase the size of the model
            gltf.scene.scale.set(10, 10, 10); // Adjust the scaling as needed

            // Add the model to the scene
            scene.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });

        // OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);

        camera.position.z = 5;

        // Add lights to the scene (optional)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0, 1, 0);
        scene.add(directionalLight);

        // Render loop
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();

        // Cleanup function
        return () => {
            mountRef.current.removeChild(renderer.domElement); // Clean up the renderer from the DOM
            scene.clear(); // Optional: Clear the scene
        };
    }, [mountRef, width, height]); // Make sure to include mountRef, width, and height in the dependencies array to prevent unnecessary re-renders
};
