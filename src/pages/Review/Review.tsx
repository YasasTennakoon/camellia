import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";

const reviews = [
    {
        name: "Chris",
        role: "Traveler from Australia",
        text: "“The location was great only a 5 minute walk to the city centre along the lake. The staff were great and really helpfull”",
        rating: 5,
    },
    {
        name: "Pietro",
        role: "Visitor from Italy",
        text: "The structure is new and located around 10 minutes walking to the heart of Kandy. The host was really welcoming and gave us good tips plus recommended us a valid driver",
        rating: 4.5,
    },
    {
        name: "Hannah",
        role: "Guest from UK",
        text: "Great place, bigger than we imagined. Lovely staff and great breakfast. Short walk down the hill and very easy to take a tuktuk back if you don't fancy walking uphill!",
        rating: 5,
    },
    {
        name: "Jaspar",
        role: "Guest from Germany",
        text: "Very friendly staff, great view, close to the city centre, comfortable bed",
        rating: 5,
    },
];

export default function Review() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 6000);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <section className="py-16 bg-gray-50 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-10">
                    <div className="text-3xl md:text-5xl italic font-light tracking-wide text-[#612d87] mb-4 leading-snug">
                        MEMORIES SHARED BY OUR
                        <br />
                        GUESTS
                    </div>
                </div>

                <div className="relative">
                    <div className="    rounded-2xl bg-white shadow-xl border border-gray-100 
    p-8 md:p-10 
    h-[320px] sm:h-[340px] md:h-[360px] lg:h-[380px] 
    flex flex-col justify-center ">
                        <div className="flex justify-center text-[#612d87]/20 text-6xl mb-4">
                            <FaQuoteLeft />
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                className="text-center"
                            >
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6 italic">
                                    “{reviews[index].text}”
                                </p>

                                <div className="flex justify-center mb-4">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`text-yellow-400 ${i + 1 <= Math.floor(reviews[index].rating)
                                                ? ""
                                                : "opacity-40"
                                                }`}
                                        />
                                    ))}
                                </div>

                                <h4 className="text-[#612d87] font-semibold text-sm md:text-base">
                                    {reviews[index].name}
                                </h4>
                                <p className="text-gray-500 text-xs md:text-sm">
                                    {reviews[index].role}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-2 mt-6">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`h-2 w-2 rounded-full transition-all duration-300 ${i === index ? "bg-[#612d87] w-4" : "bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
