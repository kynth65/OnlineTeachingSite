import React from "react";

const CTASection = () => {
    return (
        <div className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="relative bg-gradient-to-br from-[#AD0024] to-[#C0000B] rounded-3xl overflow-hidden shadow-2xl">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-5 rounded-full"></div>
                        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-yellow-500 opacity-10 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white opacity-5 rounded-full"></div>
                        <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-yellow-500 opacity-10 rounded-full blur-md"></div>
                    </div>

                    <div className="flex flex-col md:flex-row relative z-10">
                        <div className="md:w-3/5 p-8 md:p-16">
                            <span className="inline-block px-4 py-1 bg-white bg-opacity-20 text-white text-sm font-medium rounded-full mb-6 backdrop-blur-sm">
                                Limited Time Offer
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Ready to Start Your English Journey?
                            </h2>
                            <p className="text-white text-lg opacity-90 mb-8 max-w-xl">
                                Sign up today and get your first lesson free.
                                Our expert tutors are ready to help you achieve
                                fluency faster than you ever thought possible.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group px-8 py-4 bg-white text-[#AD0024] font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center">
                                    Get Started Free
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
                                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#AD0024] transition-all duration-300 flex items-center justify-center">
                                    Learn More
                                </button>
                            </div>

                            {/* Testimonial */}
                            <div className="mt-12 bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 max-w-lg">
                                <div className="flex items-center mb-4">
                                    {/* Five stars */}
                                    <div className="flex text-yellow-300">
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
                                </div>
                                <p className="text-white italic mb-3">
                                    "EnglishPro transformed my language skills
                                    in just 3 months. My confidence has
                                    skyrocketed!"
                                </p>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                    <div className="ml-2">
                                        <p className="text-white text-sm font-semibold">
                                            Maria K.
                                        </p>
                                        <p className="text-white text-xs opacity-70">
                                            Business Professional
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-2/5 relative p-8 md:p-16 flex items-center">
                            {/* Stats display */}
                            <div className="grid grid-cols-2 gap-6 w-full">
                                {[
                                    { value: "500+", label: "Expert Tutors" },
                                    { value: "50k+", label: "Happy Students" },
                                    { value: "100k+", label: "Lessons Given" },
                                    { value: "4.8", label: "Average Rating" },
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="text-center bg-white bg-opacity-10 p-6 rounded-2xl backdrop-blur-sm border border-white border-opacity-10 hover:bg-opacity-15 transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-white text-sm md:text-base">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
