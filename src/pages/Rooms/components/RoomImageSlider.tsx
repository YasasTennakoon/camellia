import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type RoomImageSliderProps = {
    images: string[];
};

export function RoomImageSlider({ images }: RoomImageSliderProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [images.length]);

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    return (
        <div className="relative w-full h-64 md:h-full overflow-hidden">
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`slide-${i}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-1 rounded-full text-gray-800"
            >
                <FaChevronLeft size={10} />
            </button>
            <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-1 rounded-full text-gray-800"
            >
                <FaChevronRight size={10} />
            </button>

            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {images.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition ${i === index ? "bg-white" : "bg-white/50"
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    );
}
