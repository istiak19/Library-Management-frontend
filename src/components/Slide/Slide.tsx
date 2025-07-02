import { Link } from "react-router";
import { FaBookOpen, FaSearch } from "react-icons/fa";

interface SlideProps {
    text: string;
    image: string;
}

const Slide = ({ text, image }: SlideProps) => {
    return (
        <div className="relative w-full h-[500px] flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 text-center p-6 rounded-xl shadow-lg bg-white/80 text-gray-900 border border-blue-500 border-x-4">
                <h1 className="text-2xl font-semibold lg:text-4xl text-blue-500">
                    {text}
                </h1>
                <br />
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/books"
                        className="flex items-center gap-2 px-6 py-2 rounded-full shadow-lg transition-all border border-white/70 text-white bg-gradient-to-r from-blue-500 to-indigo-400 hover:from-indigo-400 hover:to-blue-500"
                    >
                        <FaBookOpen className="text-lg" />
                        Browse Books
                    </Link>
                    <Link
                        to="/search"
                        className="flex items-center gap-2 px-6 py-2 rounded-full shadow-lg transition-all border border-white/70 text-white bg-gradient-to-r from-blue-500 to-indigo-400 hover:from-indigo-400 hover:to-blue-500"
                    >
                        <FaSearch className="text-lg" />
                        Search Books
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Slide;