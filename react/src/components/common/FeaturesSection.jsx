import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Expert Native Tutors",
      description:
        "Learn from certified English teachers with years of experience",
      icon: "👩‍🏫",
    },
    {
      title: "Flexible Scheduling",
      description: "Book lessons 24/7 that fit your busy lifestyle",
      icon: "🗓️",
    },
    {
      title: "Personalized Learning",
      description: "Custom lesson plans tailored to your goals and level",
      icon: "📝",
    },
    {
      title: "Affordable Pricing",
      description: "Quality language education at competitive rates",
      icon: "💰",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#AD0024] mb-4">
            Why Choose Our Platform
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide the tools and expertise you need to achieve fluency
            faster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#fafafa] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-[#AD0024]"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#AD0024]">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
