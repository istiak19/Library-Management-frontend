import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slide from "../Slide/Slide";

import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";

const Banner = () => {
    return (
        <div className="mb-8">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={3000}
                transitionTime={800}
                swipeable
                emulateTouch
            >
                <div>
                    <Slide
                        image={banner1}
                        text="Discover Thousands of Books at Your Fingertips"
                    />
                </div>
                <div>
                    <Slide
                        image={banner2}
                        text="Read. Borrow. Learn. Empower Your Mind"
                    />
                </div>
                <div>
                    <Slide
                        image={banner3}
                        text="A World of Knowledge Awaits — Start Exploring"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;