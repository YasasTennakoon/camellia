export default function About() {
    return (
        <section id="about" className="py-14 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <div className="text-3xl md:text-5xl italic font-light tracking-wide text-[#612d87] mb-4 leading-snug uppercase">
                        About Us
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="text-gray-700 text-center italic lg:text-left text-sm md:text-lg leading-relaxed">
                        <p className="mb-3">
                            <span className="font-semibold text-[#612d87]">Camellia Kandy</span> welcomes you to a calm
                            and charming getaway in the heart of Sri Lanka’s hill capital. Surrounded by green hills and
                            fresh mountain air, our boutique stay is a perfect blend of comfort and nature.
                        </p>

                        <p className="mb-3">
                            Whether you’re exploring Kandy’s rich culture, visiting the Temple of the Tooth, or just
                            relaxing by the lake, Kamilia offers the ideal place to rest and recharge.
                        </p>

                        <p>
                            Enjoy cozy rooms, friendly service, and stunning views, everything you need for a peaceful
                            and memorable stay in Kandy.
                        </p>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-md">
                        <iframe
                            title="Kamilia Kandy Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63325.843641309184!2d80.56431341712675!3d7.25617569403915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae367cd6b938801%3A0xf50d741e94858a48!2sSesatha%20Lake%20Kandy!5e0!3m2!1sen!2slk!4v1760096025582!5m2!1sen!2slk"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
