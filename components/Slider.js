import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const Slider = () => {
    const images = [
        "/images/slider1.png",
        "/images/slider2.png",
    ]

    return (
        <div className="drop-shadow-sm">
            <Carousel
                className="bg-light-primary dark:bg-primary dark:text-gray-300"
                showThumbs={false}
                autoPlay
                infiniteLoop
            >
                {
                    images.map((img, i) => (
                        <Image className="w-full h-full" key={i} src={img} alt={"image"} height={640} width={1520} />
                    ))
                }
            </Carousel>
        </div>
    );
}

export default Slider;