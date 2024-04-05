import { Image, CloudinaryContext } from 'cloudinary-react';

function Editorial() {

    return (
        <div className="maindiv">
            <h1>Editorial</h1>
            <CloudinaryContext cloudName="dvlggqgbf">
                <Image publicId="sol001" />
            </CloudinaryContext>
        </div>
    );
}

export default Editorial;


