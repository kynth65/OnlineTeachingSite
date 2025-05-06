import React from "react";
import OnlineTutor from "../../assets/OnlineTutor.webp";

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 bg-[#D7C15B] opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 right-20 w-80 h-80 bg-[#AD0024] opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-[#EBA9A6] opacity-10 rounded-full blur-xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
                    <div className="md:w-1/2 space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 space-x-2">
                            <span className="flex h-2 w-2 rounded-full bg-[#AD0024]"></span>
                            <span className="text-sm font-medium text-gray-700">
                                Trusted by 50,000+ students
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AD0024] to-[#C0000B]">
                                Master English With Expert Tutors
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl text-gray-700 max-w-xl">
                            Personalized online lessons tailored to your goals.
                            Learn at your own pace with certified tutors from
                            around the world.
                        </p>

                        {/* Rating */}
                        <div className="flex items-center space-x-2">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-gray-700 font-medium">
                                4.8/5
                            </span>
                            <span className="text-gray-500">
                                from 2,500+ reviews
                            </span>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="group px-8 py-4 bg-gradient-to-r from-[#AD0024] to-[#C0000B] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                                Find Your Tutor
                                <svg
                                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </button>
                            <button className="px-8 py-4 border-2 border-[#AD0024] text-[#AD0024] font-semibold rounded-full hover:bg-[#AD0024] hover:text-white transition-all duration-300 flex items-center justify-center">
                                View Pricing
                            </button>
                        </div>
                    </div>

                    {/* Image container with decoration */}
                    <div className="md:w-1/2 relative">
                        {/* Background decorative blobs */}
                        <div className="absolute -z-10 top-10 left-0 w-32 h-32 bg-[#D7C15B] opacity-20 rounded-full"></div>
                        <div className="absolute -z-10 -bottom-10 right-0 w-40 h-40 bg-[#EBA9A6] opacity-20 rounded-full"></div>

                        {/* Image frame */}
                        <div className="relative bg-white p-3 rounded-3xl shadow-xl">
                            <img
                                src={OnlineTutor}
                                alt="Online English tutoring"
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
