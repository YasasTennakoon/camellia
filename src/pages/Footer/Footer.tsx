import {
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
    FaEnvelope,
    FaLocationArrow,
    FaPhone,
} from "react-icons/fa6";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#612d87] text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    <div>
                        <h2 className="text-2xl font-semibold mb-3">Camellia Kandy</h2>
                        <p className="text-sm leading-relaxed text-gray-100/90">
                            A tranquil escape in the heart of Kandy, where elegance meets nature.
                            Experience calm surroundings, warm hospitality, and unforgettable views.
                        </p>

                        <div className="mt-4 space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-white/80" />
                                <span>stay@camelliakandy.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaPhone className="text-white/80" />
                                <span>+94 769463476</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaLocationArrow className="text-white/80" />
                                <span>Kandy, Sri Lanka</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-100/90">
                            <li>
                                <a href="#home" className="hover:text-gray-200 transition">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#rooms" className="hover:text-gray-200 transition">
                                    Rooms
                                </a>
                            </li>
                            <li>
                                <a href="#amenities" className="hover:text-gray-200 transition">
                                    Amenities
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" className="hover:text-gray-200 transition">
                                    Gallery
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
                        <p className="text-sm text-gray-100/90 mb-4">
                            Follow us and stay connected for offers and updates.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                aria-label="WhatsApp"
                                className="p-2 rounded-full bg-white hover:bg-gray-200 transition"
                            >
                                <FaWhatsapp className="text-[#612d87] text-lg" />
                            </a>
                            <a
                                href="#"
                                aria-label="X (Twitter)"
                                className="p-2 rounded-full bg-white hover:bg-gray-200 transition"
                            >
                                <FaXTwitter className="text-[#612d87] text-lg" />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="p-2 rounded-full bg-white hover:bg-gray-200 transition"
                            >
                                <FaInstagram className="text-[#612d87] text-lg" />
                            </a>
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="p-2 rounded-full bg-white hover:bg-gray-200 transition"
                            >
                                <FaFacebookF className="text-[#612d87] text-lg" />
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="p-2 rounded-full bg-white hover:bg-gray-200 transition"
                            >
                                <FaLinkedinIn className="text-[#612d87] text-lg" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/30 my-6"></div>

                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/80 space-y-3 md:space-y-0">
                    <p>© {new Date().getFullYear()} Camellia Hotel. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
