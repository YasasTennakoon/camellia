import { useEffect, useRef } from 'react'
import RoomCard, { type RoomDetalisProps } from './components/RoomCard'

const rooms: RoomDetalisProps[] = [
    {
        title: 'Deluxe Room',
        priceRange: 'LKR 12,000',
        desc: 'Spacious room with king bed and city view.',
        images: ['/deluxe_room.jpeg'],
        rating: 4.8,
        features: { beds: 1, guests: 2, baths: 1 },
        tag: 'City View',
    },
    {
        title: 'Standard Room',
        priceRange: 'LKR 8,000',
        desc: 'Cozy and comfortable room with a queen bed — perfect for short stays.',
        images: ['/room.jpg'],
        rating: 4.5,
        features: { beds: 1, guests: 2, baths: 1 },
        tag: 'Comfort Stay',
    },
    {
        title: 'Family Suite',
        priceRange: 'LKR 18,000',
        desc: 'Two-bedroom suite ideal for families, featuring a spacious lounge and lake views.',
        images: ['/deluxe_room.jpeg'],
        rating: 4.9,
        features: { beds: 2, guests: 4, baths: 2 },
        tag: 'Family Friendly',
    },
    {
        title: 'Lake View Suite',
        priceRange: 'LKR 15,000',
        desc: 'Romantic suite with panoramic views of Kandy Lake.',
        images: ['/room.jpg'],
        rating: 4.7,
        features: { beds: 1, guests: 2, baths: 1 },
        tag: 'Lake View',
    },
    {
        title: 'Mountain Retreat',
        priceRange: 'LKR 14,000',
        desc: 'Peaceful room surrounded by lush hills, perfect for nature lovers.',
        images: ['/deluxe_room.jpeg'],
        rating: 4.9,
        features: { beds: 1, guests: 2, baths: 1 },
        tag: 'Nature Escape',
    },
]

export default function Rooms() {
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            const container = scrollRef.current
            const middleIndex = Math.floor(rooms.length / 2)
            const cardWidth = container.scrollWidth / rooms.length
            const scrollTo = cardWidth * middleIndex - container.clientWidth / 2 + cardWidth / 2
            container.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }, [])

    return (
        <div className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-8">
                    <div className="text-3xl md:text-5xl italic font-light tracking-wide text-[#612d87] mb-4 leading-snug uppercase">
                        WHERE COMFORT EMBRACES <br /> EVERY MOMENT
                    </div>
                    <div className="text-sm md:text-lg italic text-gray-700">
                        Our rooms offer a tranquil retreat after a day in Kandy,
                        <br />
                        with elegant interiors, soft lighting, and a view that soothes the soul.
                    </div>
                </div>

                <div className="relative w-full">
                    <div
                        ref={scrollRef}
                        className="
              flex gap-7 overflow-x-auto scroll-smooth hide-scrollbar
              snap-x snap-mandatory px-8 py-4
            "
                    >
                        {rooms.map((r, idx) => (
                            <div
                                key={idx}
                                className="
                  flex-shrink-0
                  snap-center
                  w-[85%] sm:w-[70%] md:w-[360px] lg:w-[380px]
                  transition-transform duration-300 ease-in-out
                "
                            >
                                <RoomCard room={r} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
