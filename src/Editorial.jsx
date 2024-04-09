import { Image, CloudinaryContext } from 'cloudinary-react';

function Editorial() {
    const images = ['sol001', 'Una001']; 

    

    return (
        <div className="maindiv">
            <CloudinaryContext cloudName="dvlggqgbf">
            <div className="scrollable-album">
                    {images.map((publicId, index) => (
                        <Image key={index} publicId={publicId} width="300" crop="scale" />
                    ))}
                </div>
            </CloudinaryContext>
        </div>
    );
}

export default Editorial;


