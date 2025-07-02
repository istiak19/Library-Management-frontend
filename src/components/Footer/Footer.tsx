import logoPic from "../../assets/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 transition-colors duration-500 text-black pt-12 pb-6">
            <div className="w-11/12 mx-auto px-2 sm:px-4 lg:px-6">
                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {/* Logo & Tagline */}
                    <div>
                        <div className="flex items-center gap-3">
                            <img src={logoPic} alt="BookBase Logo" className="w-14 h-14" />
                            <h2 className="text-3xl font-bold text-blue-500">BookBase</h2>
                        </div>
                        <p className="mt-3 text-black text-sm leading-relaxed">
                            Empowering readers with accessible knowledge and learning.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-black">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="text-black hover:text-blue-600 transition-colors">Home</a></li>
                            <li><a href="/books" className="text-black hover:text-blue-600 transition-colors">Books</a></li>
                            <li><a href="/blogs" className="text-black hover:text-blue-600 transition-colors">Blog</a></li>
                            <li><a href="/contact" className="text-black hover:text-blue-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-black">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-black hover:text-blue-600 transition-colors">FAQs</a></li>
                            <li><a href="#" className="text-black hover:text-blue-600 transition-colors">Support</a></li>
                            <li><a href="#" className="text-black hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-black hover:text-blue-600 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-black">Follow Us</h3>
                        <div className="flex items-center gap-4 mt-2 flex-wrap">
                            <a href="#" className="text-xl text-black hover:text-blue-600 transition-colors"><FaFacebookF /></a>
                            <a href="#" className="text-xl text-black hover:text-blue-600 transition-colors"><FaTwitter /></a>
                            <a href="#" className="text-xl text-black hover:text-blue-600 transition-colors"><FaLinkedinIn /></a>
                            <a href="#" className="text-xl text-black hover:text-blue-600 transition-colors"><FaInstagram /></a>
                        </div>
                    </div>
                </div>

                {/* Divider & Copyright */}
                <div className="mt-10 border-t border-blue-300 pt-6 text-center text-sm text-black">
                    © {new Date().getFullYear()} <span className="font-semibold text-blue-500">BookBase</span>. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;