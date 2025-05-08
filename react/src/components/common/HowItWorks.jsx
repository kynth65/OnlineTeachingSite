import React from "react";

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Create Your Profile",
            description:
                "Sign up and tell us about your goals, current level, and learning preferences.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full"
                >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            ),
        },
        {
            number: "02",
            title: "Find Your Perfect Tutor",
            description:
                "Browse profiles, watch intro videos, and choose from hundreds of qualified tutors.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
            ),
        },
        {
            number: "03",
            title: "Book Your Lessons",
            description:
                "Schedule sessions at times that work for you and pay securely online.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full"
                >
                    <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
            ),
        },
        {
            number: "04",
            title: "Start Learning",
            description:
                "Connect via our easy-to-use platform and begin your journey to fluency.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full"
                >
                    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                    <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>
            ),
        },
    ];

    return (
        <div className="py-24 bg-neutral-50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#AD0024] to-[#C0000B]">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Your path to fluency in just four simple steps
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="group relative">
                            {/* Card */}
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col overflow-hidden">
                                {/* Top Color Bar */}
                                <div className="h-2 bg-gradient-to-r from-[#AD0024] to-[#D7C15B]"></div>

                                {/* Number Badge */}
                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#AD0024] text-white flex items-center justify-center font-bold shadow-lg">
                                    {step.number}
                                </div>

                                {/* Icon Container */}
                                <div className="pt-8 px-6">
                                    <div className="w-16 h-16 rounded-full bg-gray-50 p-3 mx-auto mb-6 text-[#AD0024] group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="px-6 pb-8 flex-grow">
                                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Background Decorative Element */}
                            <div className="absolute -z-10 rounded-full bg-[#D7C15B] opacity-10 w-24 h-24 -bottom-4 -right-4"></div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center">
                    <button className="px-8 py-4 bg-gradient-to-r from-[#AD0024] to-[#C0000B] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        Start Your Journey Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
