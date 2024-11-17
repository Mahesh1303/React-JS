import { useEffect, useState } from "react";
import "./ImageScroller.css"; // Import the CSS file for styling

const images = [
    "https://wallhalla.com/thumbs/1",
    "https://th.bing.com/th/id/OIP.VNeK4YMJsOqMvECskEq0iAHaEo?w=295&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://wallpapercave.com/wp/wp11131007.jpg",
    "https://wallhalla.com/thumbs/10",
    "https://itsaboutanime.wordpress.com/wp-content/uploads/2019/12/20-hd-anime-wallpapers.jpg"
];

const ImageScroller = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const handlePrevious = () => {
        setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
    };

    const handleNext = () => {
        setImageIndex((imageIndex + 1) % images.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
        }, 2500);

        return () => clearTimeout(timer);
    }, [imageIndex]);

    return (
        <div className="image-scroller">

            <h1 className="text-2xl bg-amber-500">Image Scroller</h1>
            <button onClick={handlePrevious} className="nav-button left">❮</button>

            <div className="image-container">
                {
                    images.map((img, i) => (
                        <img
                            key={img}
                            src={img}
                            className={`image ${imageIndex === i ? "fade-in" : "fade-out"}`}
                        />
                    ))
                }
            </div>

            <button onClick={handleNext} className="nav-button right">❯</button>

            <div className="indicator-container">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`indicator ${imageIndex === i ? "active" : ""}`}
                        onClick={() => setImageIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageScroller;
