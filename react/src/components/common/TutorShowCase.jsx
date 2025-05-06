import React from "react";
import TutorProfile from "../../assets/Tutor.avif";
import TutorProfile2 from "../../assets/Tutor2.jpg";
import TutorProfile3 from "../../assets/Tutor3.jpg";
import TutorProfile4 from "../../assets/OnlineTutor 2.webp";

const TutorShowcase = () => {
    const tutors = [
        {
            name: "Diana Miller",
            specialty: "Business English",
            rating: 4.9,
            reviews: 178,
            price: 25,
            image: TutorProfile,
            availability: "Mon-Fri",
            badges: ["Certified", "Native Speaker"],
        },
        {
            name: "Emma Wilson",
            specialty: "IELTS Preparation",
            rating: 4.8,
            reviews: 142,
            price: 28,
            image: TutorProfile2,
            availability: "Evenings & Weekends",
            badges: ["TESOL Certified", "Exam Expert"],
        },
        {
            name: "Jenny Chen",
            specialty: "Conversation Practice",
            rating: 4.7,
            reviews: 203,
            price: 22,
            image: TutorProfile3,
            availability: "Flexible Hours",
            badges: ["Bilingual", "3+ Years"],
        },
        {
            name: "Sofia Martinez",
            specialty: "Grammar & Writing",
            rating: 4.9,
            reviews: 165,
            price: 24,
            image: TutorProfile4,
            availability: "Weekends",
            badges: ["MA in Education", "Writing Expert"],
        },
    ];

    return (
        <div className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-sm font-semibold text-[#AD0024] uppercase tracking-wider mb-2">
                        Our Educators
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#AD0024] to-[#C0000B]">
                        Meet Our Top Tutors
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Certified professionals ready to help you achieve your
                        language goals
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tutors.map((tutor, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Image Container with Gradient Overlay */}
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={tutor.image}
                                    alt={tutor.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                {/* Price Tag */}
                                <div className="absolute top-4 right-4 bg-white shadow-md text-[#AD0024] font-bold px-3 py-1.5 rounded-full text-sm">
                                    ${tutor.price}/hr
                                </div>

                                {/* Name and Rating on Image */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h3 className="text-xl font-bold">
                                        {tutor.name}
                                    </h3>
                                    <div className="flex items-center mt-1">
                                        <span className="text-yellow-400 mr-1">
                                            ★
                                        </span>
                                        <span className="font-medium">
                                            {tutor.rating}
                                        </span>
                                        <span className="text-gray-200 text-sm ml-1">
                                            ({tutor.reviews} reviews)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                {/* Specialty */}
                                <div className="flex items-center mb-3">
                                    <div className="w-1 h-6 bg-[#AD0024] rounded-full mr-2"></div>
                                    <p className="text-gray-700 font-medium">
                                        {tutor.specialty}
                                    </p>
                                </div>

                                {/* Badges */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {tutor.badges.map((badge, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>

                                {/* Availability */}
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 8V12L15 15"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="9"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                    <span>{tutor.availability}</span>
                                </div>

                                {/* CTA Button */}
                                <button className="w-full py-3 bg-transparent text-[#AD0024] border border-[#AD0024] rounded-xl font-semibold hover:bg-[#AD0024] hover:text-white transition-colors duration-300">
                                    Book a Session
                                </button>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -z-10 w-20 h-20 rounded-full bg-[#D7C15B] opacity-10 -bottom-4 -right-4"></div>
                        </div>
                    ))}
                </div>

                <div className="relative mt-20 text-center">
                    {/* Decorative elements */}
                    <div className="absolute left-1/4 -top-8 w-16 h-16 rounded-full bg-[#AD0024] opacity-5"></div>
                    <div className="absolute right-1/3 -bottom-8 w-24 h-24 rounded-full bg-[#D7C15B] opacity-10"></div>

                    <button className="relative z-10 px-8 py-4 bg-gradient-to-r from-[#AD0024] to-[#C0000B] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                        Browse All Tutors
                        <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </button>

                    <p className="mt-6 text-gray-500">
                        Over 500+ professional tutors available to help you
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TutorShowcase;
