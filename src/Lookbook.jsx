import { useRef } from 'react';
import { useThreeScene } from './ThreeScene';

function Lookbook() {
    const mountRef = useRef(null);
    const width = 400; // Set the desired width for the Three.js scene
    const height = 300; // Set the desired height for the Three.js scene

    // Use the custom hook to setup the Three.js scene with the specified width and height
    useThreeScene(mountRef, width, height);

    return <div ref={mountRef} className="maindiv"><h1></h1></div>;
}

export default Lookbook;