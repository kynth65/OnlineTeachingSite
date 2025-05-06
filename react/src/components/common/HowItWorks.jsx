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
          stroke="#D7C15B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-24 h-24 mx-auto"
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
          stroke="#D7C15B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-24 h-24 mx-auto"
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
          stroke="#D7C15B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-24 h-24 mx-auto"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
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
          stroke="#D7C15B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-24 h-24 mx-auto"
        >
          <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
          <polygon points="12 15 17 21 7 21 12 15"></polygon>
        </svg>
      ),
    },
  ];

  return (
    <div className="py-16 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#AD0024] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Getting started is simple with our easy 4-step process
          </p>
        </div>

        <div className="relative">
          {/* Connect line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#EBA9A6] transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center"
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  } p-6`}
                >
                  <div className="md:max-w-md mx-auto">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#AD0024] text-white flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                      <div className="h-1 w-12 bg-[#fde164] ml-4"></div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-[#AD0024]">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 1 ? "md:order-1" : ""
                  } relative`}
                >
                  <div className="h-48 md:h-64 bg-white rounded-lg shadow-md flex items-center justify-center m-6 relative z-10">
                    {step.icon}
                  </div>
                  {/* Decorative element */}
                  <div className="absolute w-16 h-16 rounded-full bg-[#C0000B] opacity-10 -bottom-2 -left-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
