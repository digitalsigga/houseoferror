import { Image, CloudinaryContext } from 'cloudinary-react';
import { useState } from 'react';

function Editorial() {

    const images = ['sol001', 'Una001'];
    // State to keep track of the current image index

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous image
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="maindiv">
            <CloudinaryContext cloudName="dvlggqgbf">
                <div className="image-display">
                    <Image
                        publicId={images[currentIndex]}
                        width="400"
                        crop="scale"
                    />
                </div>
                <div className="navigation-buttons">
                    <button onClick={goToPrevious}>Previous</button>
                    <button onClick={goToNext}>Next</button>
                </div>
            </CloudinaryContext>
        </div>
    );
}

export default Editorial;


