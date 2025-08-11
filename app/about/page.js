import React from 'react';
const About = () => {
    return (

        <section className="container flex justify-center items-center bg-amber-900 min-w-[99vw] min-h-screen text-white mx-auto px-8 md:px-4 py-8">
            <div className='bg-red-800 w-[50vw] h-[400px] flex flex-col justify-between rounded-2xl border-2 relative top-[70px] px-5'>
                <h1 className="text-7xl font-semibold mb-4 text-center">Welcome to Amar's LinkTree</h1>
                <p className="text-lg mb-6 text-center">
                    Amar's LinkTree is your all-in-one platform for sharing everything that matters — in one simple, beautiful link. Whether you’re a creator, entrepreneur, or business, BitLink helps you connect your audience to your social media, websites, stores, and more — all from a single, personalized page.

                    With a customizable profile, unlimited links, and powerful analytics, BitLink makes it effortless to showcase your brand and track your impact. No more juggling multiple URLs — just one link that works everywhere: Instagram bio, YouTube description, TikTok profile, email signatures, and beyond.

                    At BitLink, our mission is simple: make sharing simple, smart, and stylish.
                </p></div>




        </section>
    );
}

export default About;

export const metadata = {
    title: "About - Amar's LinkTree Clone",
}
