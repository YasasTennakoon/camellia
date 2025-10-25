import type { RoomDetalisProps } from "./RoomCard";
import { FaWifi, FaParking, FaSnowflake, FaConciergeBell, FaTv, FaStar } from "react-icons/fa";
import { RoomImageSlider } from "./RoomImageSlider";

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
                    <RoomImageSlider images={roomDetails.images} />
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
                            onClick={() =>
                                window.open(
                                    "https://www.booking.com/hotel/lk/sesatha-lake-kandy.en-gb.html?aid=2311236&label=en-lk-booking-desktop-IncWB4CtfrbYgbu3xC6gmwS652796017434%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-334108349%3Alp9069790%3Ali%3Adec%3Adm&sid=b00b4883fc8e6538f6c9efd4a83b9b47&all_sr_blocks=1119284203_395031659_0_2_0%2C1119284204_395031659_2_2_0&checkin=2025-10-25&checkout=2025-10-26&dist=0&group_adults=3&group_children=0&hapos=3&highlighted_blocks=1119284203_395031659_0_2_0%2C1119284204_395031659_2_2_0&hpos=3&matching_block_id=1119284203_395031659_0_2_0&no_rooms=1&req_adults=3&req_children=0&room1=A%2CA%2CA&sb_price_type=total&sr_order=distance_from_search&sr_pri_blocks=1119284203_395031659_0_2_0__3150%2C1119284204_395031659_2_2_0__3500&srepoch=1761374743&srpvid=661c2f838f750135&type=total&ucfs=1&",
                                    "_blank"
                                )}
                        >
                            BOOK NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
