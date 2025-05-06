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

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#AD0024] mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join thousands of satisfied learners achieving their language goals
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-[#fafafa] rounded-xl p-6 md:p-8 shadow-lg relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-[#D7C15B] opacity-10 rounded-full transform -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#EBA9A6] opacity-10 rounded-full transform translate-x-1/4 translate-y-1/4"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex mb-3">
                    {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                      <span key={i} className="text-[#D7C15B]">
                        ★
                      </span>
                    ))}
                    {[...Array(5 - testimonials[activeIndex].stars)].map(
                      (_, i) => (
                        <span
                          key={i + testimonials[activeIndex].stars}
                          className="text-gray-300"
                        >
                          ★
                        </span>
                      )
                    )}
                  </div>
                  <p className="text-lg mb-4 italic text-gray-700">
                    "{testimonials[activeIndex].text}"
                  </p>
                  <div className="font-semibold text-[#AD0024]">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-[#AD0024] text-[#AD0024] flex items-center justify-center hover:bg-[#AD0024] hover:text-white transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-[#AD0024] text-white flex items-center justify-center hover:bg-[#C0000B] transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
