
import { Image, CloudinaryContext } from 'cloudinary-react';
import './Home.css'; // Assuming you have a CSS file for styling

function Home() {
    // The public ID of the image you want to feature on the homepage
    const featureImageId = 'sol001';

    return (
        <div className="maindiv">

            <CloudinaryContext cloudName="dvlggqgbf">
                <div className="feature-image">
                    <Image
                        publicId={featureImageId}
                        width="800" // Adjust the width as needed
                        crop="scale"
                        alt="Featured"
                    />
                </div>
            </CloudinaryContext>
        </div>
    );
}

export default Home;
