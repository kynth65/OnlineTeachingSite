import React, { useState } from "react";

const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Business Professional",
            text: "After just 3 months of lessons, I was able to confidently lead meetings with international clients. My tutor focused on business English which was exactly what I needed.",
            image: "/api/placeholder/80/80",
            stars: 5,
        },
        {
            name: "Miguel Sanchez",
            role: "University Student",
            text: "I needed to improve my IELTS score to study abroad. My tutor designed a personalized study plan that helped me achieve a band 7.5. Couldn't have done it without them!",
            image: "/api/placeholder/80/80",
            stars: 5,
        },
        {
            name: "Akiko Tanaka",
            role: "Software Developer",
            text: "The flexible scheduling made it possible for me to take lessons despite my busy work schedule. My conversation skills improved dramatically after just a few weeks.",
            image: "/api/placeholder/80/80",
            stars: 4,
        },
    ];

    const nextTestimonial = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToTestimonial = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-24 -left-12 w-64 h-64 bg-[#D7C15B] opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-12 right-12 w-80 h-80 bg-[#AD0024] opacity-5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block text-sm font-semibold text-[#AD0024] uppercase tracking-wider mb-2">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#AD0024] to-[#C0000B]">
                        What Our Students Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Join thousands of satisfied learners achieving their
                        language goals
                    </p>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Large quote mark decorative element */}
                    <div className="absolute text-[200px] font-serif text-gray-100 opacity-80 -top-24 -left-6 pointer-events-none z-0">
                        "
                    </div>

                    {/* Testimonial Card */}
                    <div
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative z-10 overflow-hidden"
                        style={{
                            transition: "all 0.5s ease",
                            transform:
                                activeIndex === 0
                                    ? "translateX(0)"
                                    : "translateX(-100%)",
                            opacity: activeIndex === 0 ? 1 : 0,
                            position: "relative",
                        }}
                    >
                        {/* Accent corner */}
                        <div className="absolute top-0 right-0 w-24 h-24">
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#AD0024] to-transparent opacity-10"></div>
                        </div>

                        <div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
                            <div className="flex-shrink-0">
                                {/* Profile image with fancy border */}
                                <div className="relative">
                                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                        <img
                                            src={
                                                testimonials[activeIndex].image
                                            }
                                            alt={testimonials[activeIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 right-0 bg-[#AD0024] text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md border-2 border-white">
                                        {testimonials[activeIndex].stars}★
                                    </div>
                                </div>
                            </div>

                            <div className="flex-grow">
                                {/* Stars */}
                                <div className="flex mb-4">
                                    {[
                                        ...Array(
                                            testimonials[activeIndex].stars
                                        ),
                                    ].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-6 h-6 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    {[
                                        ...Array(
                                            5 - testimonials[activeIndex].stars
                                        ),
                                    ].map((_, i) => (
                                        <svg
                                            key={
                                                i +
                                                testimonials[activeIndex].stars
                                            }
                                            className="w-6 h-6 text-gray-200"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Testimonial text */}
                                <p className="text-xl mb-6 italic text-gray-700 leading-relaxed">
                                    "{testimonials[activeIndex].text}"
                                </p>

                                {/* Name and role with fancy accent */}
                                <div className="flex items-center">
                                    <div className="h-10 w-1 rounded-full bg-gradient-to-b from-[#AD0024] to-[#D7C15B] mr-3"></div>
                                    <div>
                                        <div className="font-bold text-xl text-gray-800">
                                            {testimonials[activeIndex].name}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {testimonials[activeIndex].role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation UI */}
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between mt-12">
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        activeIndex === index
                                            ? "bg-[#AD0024] w-8"
                                            : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                    aria-label={`Go to testimonial ${
                                        index + 1
                                    }`}
                                ></button>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={prevTestimonial}
                                className="group w-12 h-12 rounded-full bg-white border-2 border-[#AD0024] text-[#AD0024] flex items-center justify-center hover:bg-[#AD0024] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#AD0024] focus:ring-offset-2"
                                aria-label="Previous testimonial"
                            >
                                <svg
                                    className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="group w-12 h-12 rounded-full bg-[#AD0024] text-white flex items-center justify-center hover:bg-[#C0000B] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#AD0024] focus:ring-offset-2"
                                aria-label="Next testimonial"
                            >
                                <svg
                                    className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Additional info */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-500">
                            Based on{" "}
                            <span className="font-semibold">
                                1,200+ reviews
                            </span>{" "}
                            from our students worldwide
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
