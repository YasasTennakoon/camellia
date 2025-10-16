import type { RoomDetalisProps } from "./RoomCard";
import { FaWifi, FaParking, FaSnowflake, FaConciergeBell, FaTv, FaStar } from "react-icons/fa";

type RoomDetailsPopoverProps = {
    roomDetails: RoomDetalisProps;
    popoverStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RoomDetailsPopover = ({ roomDetails, popoverStatus }: RoomDetailsPopoverProps) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn">
            <div
                className="
          bg-white rounded-2xl overflow-hidden shadow-2xl
          flex flex-col md:flex-row w-[95%] max-w-3xl relative
        "
            >
                <div className="md:w-1/2 w-full h-64 md:h-auto relative">
                    <img
                        src={roomDetails.images?.[0]}
                        alt={roomDetails.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                <div className="md:w-1/2 w-full flex flex-col justify-between bg-white px-6 py-6 md:py-10">
                    <button
                        onClick={() => popoverStatus(false)}
                        className="absolute top-4 right-4 text-black md:text-gray-500 hover:text-gray-800 text-2xl leading-none"
                    >
                        &times;
                    </button>

                    <div>
                        <div className=" flex flex-row justify-between text-xl md:text-2xl font-semibold text-[#612d87] mb-3 tracking-wide">
                            {roomDetails.title}
                            <div className="flex items-center text-xs text-orange-500 font-medium bg-orange-50 px-2 py-0.5 rounded-md">
                                <FaStar className="mr-1" /> {roomDetails.rating?.toFixed(1)}
                            </div>
                        </div>

                        <div className="mb-3">
                            <div className="font-[500] text-sm tracking-wide mb-2">Features:</div>
                            <div className="grid grid-cols-2 text-gray-700 font-[400] text-xs">
                                <div className="flex items-center gap-2 before:content-['•'] before:text-[#612d87] before:text-lg">
                                    Beds: {roomDetails.features?.beds}
                                </div>
                                <div className="flex items-center gap-2 before:content-['•'] before:text-[#612d87] before:text-lg">
                                    Occupancy: {roomDetails.features?.guests}
                                </div>
                                <div className="flex items-center gap-2 before:content-['•'] before:text-[#612d87] before:text-lg">
                                    Baths: {roomDetails.features?.baths}
                                </div>
                                <div className="flex items-center gap-2 before:content-['•'] before:text-[#612d87] before:text-lg">
                                    View: {roomDetails.tag}
                                </div>
                            </div>


                        </div>

                        <div>
                            <div className="font-[500] text-sm tracking-wide mb-3">AMENITIES:</div>
                            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 text-xs text-gray-700">
                                <div className="flex items-center gap-2"><FaSnowflake /> Air Conditioning</div>
                                <div className="flex items-center gap-2"><FaWifi /> WiFi</div>
                                <div className="flex items-center gap-2"><FaParking /> Free Parking</div>
                                <div className="flex items-center gap-2"><FaTv />TV</div>
                                <div className="flex items-center gap-2"><FaConciergeBell />Room Service</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <button
                            className="
                w-[320px] py-2 rounded-md font-[500] text-white bg-[#612d87]
                hover:bg-[#8d42c4] transition-colors duration-200
                text-sm md:text-sm tracking-wide
              "
                        >
                            BOOK NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
