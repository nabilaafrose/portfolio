import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-black-900 text-gray-300 text-center py-6 mt-10 border-t border-white/10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                
                {/* Left Side - Copyright */}
                <p className="text-sm mb-4 md:mb-0">
                    © {new Date().getFullYear()} Nabila Afrose Choity. All rights reserved.
                </p>
                
                {/* Right Side - Social Links */}
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/nabila-afrose-choity/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        <FaLinkedin className="text-xl" />
                    </a>
                    <a href="https://x.com/ChoityAfrose" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        <FaTwitter className="text-xl" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        <FaFacebook className="text-xl" />
                    </a>
                    <a href="https://www.instagram.com/_to_kihoise" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        <FaInstagram className="text-xl" />
                    </a>
                </div>

            </div>
        </footer>
    );
};
