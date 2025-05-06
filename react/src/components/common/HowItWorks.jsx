import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Sign up and tell us about your goals, current level, and learning preferences.",
    },
    {
      number: "02",
      title: "Find Your Perfect Tutor",
      description:
        "Browse profiles, watch intro videos, and choose from hundreds of qualified tutors.",
    },
    {
      number: "03",
      title: "Book Your Lessons",
      description:
        "Schedule sessions at times that work for you and pay securely online.",
    },
    {
      number: "04",
      title: "Start Learning",
      description:
        "Connect via our easy-to-use platform and begin your journey to fluency.",
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
                    <div className="text-6xl opacity-50">✨</div>
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
