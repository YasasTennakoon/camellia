import { useState } from 'react'
import { FaStar, FaHeart, FaBed, FaUserFriends, FaBath } from 'react-icons/fa'
import { RoomDetailsPopover } from './RoomDetailsPopover'

export type RoomDetalisProps = {
    title: string
    priceRange: string
    desc: string
    images: string[]
    location?: string
    rating?: number
    features?: { beds: number; guests: number; baths: number }
    tag?: string
}

export default function RoomCard({ room }: { room: RoomDetalisProps }) {
    const [roomDetailsPopover, setRoomDetailsPopover] = useState(false);
    return (
        <div className="bg-white min-h-[55vh] md:min-h-[45vh] rounded-2xl overflow-hidden transition-all duration-300">
            <div className="relative">
                <img
                    src={room.images[0]}
                    alt={room.title}
                    className="w-full h-80 object-cover"
                    loading="lazy"
                />

                {room.tag && (
                    <span className="absolute top-3 left-3 border border-white/70 text-white/90 text-xs font-semibold px-3 py-1 rounded-md shadow-sm">
                        {room.tag}
                    </span>
                )}

                <button
                    aria-label="Add to favorites"
                    className="absolute top-3 right-3 border border-[#612d87] bg-transparent p-2 rounded-full hover:bg-[#612d87]/10 transition shadow-sm backdrop-blur-sm"
                >
                    <FaHeart className="text-[#612d87]" />
                </button>

            </div>

            <div className="p-5">
                <div className="flex items-center justify-between">
                    <div className="text-base font-medium text-gray-900">{room.title}</div>

                    {room.rating && (
                        <div className="flex items-center text-xs text-orange-500 font-medium bg-orange-50 px-2 py-0.5 rounded-md">
                            <FaStar className="mr-1" /> {room.rating.toFixed(1)}
                        </div>
                    )}
                </div>

                <div className="mt-2 text-base font-semibold text-gray-900">
                    {room.priceRange}
                    <span className="text-gray-500 text-sm font-normal"> / night</span>
                </div>

                {room.features && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3">
                        <div className="flex flex-wrap items-center gap-3 text-gray-500 text-xs md:text-[13px]">
                            <div className="flex items-center gap-1 font-semibold">
                                <FaBed /> {room.features.beds} Bed
                            </div>
                            <div className="flex items-center gap-1 font-semibold">
                                <FaUserFriends /> {room.features.guests} Guests
                            </div>
                            <div className="flex items-center gap-1 font-semibold">
                                <FaBath /> {room.features.baths} Bath
                            </div>
                        </div>

                        <button
                            className="inline-flex items-center justify-center rounded-md border border-[#612d87]/40 px-3 py-1.5 text-xs lg:text-sm font-semibold text-[#612d87]/90 hover:bg-[#612d87]/10 transition"
                            onClick={() => setRoomDetailsPopover(true)}
                        >
                            View Details
                        </button>
                    </div>
                )}

            </div>

            {roomDetailsPopover && <RoomDetailsPopover roomDetails={room} popoverStatus={setRoomDetailsPopover} />}
        </div>
    )
}
