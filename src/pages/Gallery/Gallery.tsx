import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        src: "/perahara.jpg",
        title: "Esala Perahera, Kandy",
        caption:
            "Witness the grandeur of Kandy’s Esala Perahera. A centuries old procession honoring the Sacred Tooth Relic, where culture, faith, and artistry illuminate the city’s night sky.",
    },
    {
        src: "/golf.jpg",
        title: "Golfing in the Hills, Kandy",
        caption:
            "Enjoy a peaceful game at Victoria Golf Club, surrounded by Kandy’s green hills. Feel the fresh breeze and calm views as every swing becomes a relaxing moment in nature.",
    },
    {
        src: "/kayaking.png",
        title: "Flat water Kayaking, Kandy",
        caption:
            "Glide through the still waters of Kandy Lake beneath golden skies. Each paddle stroke echoes peace, while the reflections of temples and trees whisper the calm rhythm of the city’s heart.",
    },
];

export default function Gallery() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <section className="py-12 bg-gray-50 overflow-hidden">
            <div className="container-max mx-auto px-4">
                <div className="py-2 text-center mb-8">
                    <div className="text-3xl md:text-5xl italic font-light tracking-wide text-[#612d87] mb-4 leading-snug uppercase">
                        WHERE ELEGANCE MEETS
                        <br />
                        TRANQUILITY
                    </div>
                    <div className="text-sm md:text-lg italic text-gray-700">
                        Discover the charm of Kandy through serene comfort, warm hospitality,
                        <br />
                        and breathtaking views of the hills.
                    </div>
                </div>

                <div className="relative mt-4 min-h-[60vh] rounded-2xl overflow-hidden">
                    <div
                        className="absolute inset-0 rounded-2xl overflow-hidden"
                        style={{
                            WebkitMaskImage:
                                "-webkit-radial-gradient(white, black)", // Fix for Safari
                            maskImage: "radial-gradient(white, black)",
                            clipPath: "inset(0 round 1rem)", // ensures rounding during animation
                        }}
                    >
                        <div className="absolute inset-0 bg-black">
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={slides[index].src}
                                    className="absolute inset-0 bg-cover bg-center will-change-transform"
                                    style={{
                                        backgroundImage: `url(${slides[index].src})`,
                                    }}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{
                                        duration: 2.5,
                                        ease: [0.45, 0.05, 0.55, 0.95],
                                    }}
                                />
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="p-10 flex flex-col items-start justify-end absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl">
                        <motion.h3
                            key={slides[index].title}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-base md:text-xl font-semibold text-white/90 mb-2"
                        >
                            {slides[index].title}
                        </motion.h3>
                        <motion.p
                            key={slides[index].caption}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-sm font-light text-white/90 leading-relaxed max-w-md"
                        >
                            {slides[index].caption}
                        </motion.p>
                        <a
                            href="#contact"
                            className="mt-3 inline-flex items-center justify-center rounded-md border border-white/40 px-3 py-1.5 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                        >
                            More Details
                        </a>
                    </div>
                </div>

                <div className="mt-6 flex justify-center gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${i === index ? "bg-[#612d87] w-4" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
