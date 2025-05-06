import React from "react";

const CTASection = () => {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-[#AD0024] to-[#C0000B] rounded-2xl overflow-hidden shadow-xl">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-3/5 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Start Your English Journey?
                            </h2>
                            <p className="text-white text-lg opacity-90 mb-8">
                                Sign up today and get your first lesson free.
                                Our expert tutors are ready to help you achieve
                                fluency faster than you ever thought possible.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-6 py-3 bg-white text-[#AD0024] font-semibold rounded-lg hover:bg-[#F2F3FB] transition duration-300 shadow-lg">
                                    Get Started Free
                                </button>
                                <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#AD0024] transition duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="md:w-2/5 relative">
                            {/* Decorative circles */}
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#EBA9A6] opacity-20 rounded-full"></div>
                            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#D7C15B] opacity-20 rounded-full"></div>

                            {/* Stats display */}
                            <div className="h-full flex items-center justify-center p-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                                        <div className="text-3xl md:text-4xl font-bold text-white">
                                            500+
                                        </div>
                                        <div className="text-white text-sm md:text-base">
                                            Expert Tutors
                                        </div>
                                    </div>
                                    <div className="text-center bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                                        <div className="text-3xl md:text-4xl font-bold text-white">
                                            50k+
                                        </div>
                                        <div className="text-white text-sm md:text-base">
                                            Happy Students
                                        </div>
                                    </div>
                                    <div className="text-center bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                                        <div className="text-3xl md:text-4xl font-bold text-white">
                                            100k+
                                        </div>
                                        <div className="text-white text-sm md:text-base">
                                            Lessons Given
                                        </div>
                                    </div>
                                    <div className="text-center bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                                        <div className="text-3xl md:text-4xl font-bold text-white">
                                            4.8
                                        </div>
                                        <div className="text-white text-sm md:text-base">
                                            Average Rating
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
