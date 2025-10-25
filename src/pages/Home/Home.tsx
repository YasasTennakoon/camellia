import { motion } from 'framer-motion'

export default function Home() {
    return (
        <section
            id="home"
            className="relative mt-4 min-h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: "url('/kandy_lake.jpg')" }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="container-max relative z-10 min-h-[80vh] flex items-end pb-10">
                <motion.div
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="max-w-2xl text-white"
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/15 ring-1 ring-white/25 px-3 py-1 backdrop-blur-sm text-sm">
                        <span className="inline-block h-2 w-2 rounded-full bg-[#612D87]" />
                        <span className="tracking-wide">Kandy · Sri Lanka</span>
                    </div>

                    <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
                        Welcome <span className="opacity-90">to</span> Camellia Kandy
                    </h1>

                    <p className="mt-3 text-sm md:text-base md:mt-4 text-white/85 md:text-base max-w-xl">
                        A boutique stay offering stunning views of the sacred Sri Dalada Maligawa and the serene Kandy Lake,
                        where comfort and culture meet in the heart of the city.
                    </p>

                    <p className="mt-3 text-xs md:text-sm text-white/70">
                        Wake up to breathtaking sunrise views over the Temple of the Tooth and Kandy Lake.
                    </p>


                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <a
                            href="#rooms"
                            className="inline-flex items-center justify-center rounded-md bg-[#612D87] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#8d42c4] transition"
                        >
                            View rooms
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-md border border-white/40 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                            onClick={() =>
                                window.open(
                                    "https://www.booking.com/hotel/lk/sesatha-lake-kandy.en-gb.html?aid=2311236&label=en-lk-booking-desktop-IncWB4CtfrbYgbu3xC6gmwS652796017434%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-334108349%3Alp9069790%3Ali%3Adec%3Adm&sid=b00b4883fc8e6538f6c9efd4a83b9b47&all_sr_blocks=1119284203_395031659_0_2_0%2C1119284204_395031659_2_2_0&checkin=2025-10-25&checkout=2025-10-26&dist=0&group_adults=3&group_children=0&hapos=3&highlighted_blocks=1119284203_395031659_0_2_0%2C1119284204_395031659_2_2_0&hpos=3&matching_block_id=1119284203_395031659_0_2_0&no_rooms=1&req_adults=3&req_children=0&room1=A%2CA%2CA&sb_price_type=total&sr_order=distance_from_search&sr_pri_blocks=1119284203_395031659_0_2_0__3150%2C1119284204_395031659_2_2_0__3500&srepoch=1761374743&srpvid=661c2f838f750135&type=total&ucfs=1&",
                                    "_blank"
                                )}
                        >
                            Check Availability
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
