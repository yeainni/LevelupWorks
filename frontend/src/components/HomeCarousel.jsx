import { useState } from "react";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import laptop1 from "../assets/home/laptop1.png";
import laptop2 from "../assets/home/laptop2.png";
import laptop3 from "../assets/home/laptop3.png";
import laptop4 from "../assets/home/laptop4.png";
import "./HomeCarousel.css";

export const HomeCarousel = () => {
    const [slide, setSlide] = useState(0);

    const data = [
        { src: laptop1, alt: "Image 1 for carousel" },
        { src: laptop2, alt: "Image 2 for carousel" },
        { src: laptop3, alt: "Image 3 for carousel" },
        { src: laptop4, alt: "Image 4 for carousel" },
    ];

    // const nextSlide = () => {
    //     setSlide((slide) => (slide === data.length - 1 ? 0 : slide + 1));
    // };

    // const prevSlide = () => {
    //     setSlide((slide) => (slide === 0 ? data.length - 1 : slide - 1));
    // };

    const goToSlide = (index) => {
        setSlide(index);
    };

    return (
        <div className="carousel">
            {/* <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" /> */}
            {data.map((item, idx) => (
                <img
                    src={item.src}
                    alt={item.alt}
                    key={idx}
                    className={idx === slide ? "slide" : "slide slide-hidden"}
                />
            ))}
            {/* <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" /> */}
            <span className="indicators">
                {data.map((_, idx) => (
                    <button
                        key={idx}
                        className={idx === slide ? "indicator" : "indicator indicator-inactive"}
                        onClick={() => goToSlide(idx)}
                    ></button>
                ))}
            </span>
        </div>
    );
};
