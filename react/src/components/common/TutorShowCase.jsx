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
    },
    {
      name: "Emma Wilson",
      specialty: "IELTS Preparation",
      rating: 4.8,
      reviews: 142,
      price: 28,
      image: TutorProfile2,
    },
    {
      name: "Jenny Chen",
      specialty: "Conversation Practice",
      rating: 4.7,
      reviews: 203,
      price: 22,
      image: TutorProfile3,
    },
    {
      name: "Sofia Martinez",
      specialty: "Grammar & Writing",
      rating: 4.9,
      reviews: 165,
      price: 24,
      image: TutorProfile4,
    },
  ];

  return (
    <div className="py-16 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#AD0024] mb-4">
            Meet Our Top Tutors
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Certified professionals ready to help you achieve your language
            goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-[#AD0024] text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
                  ${tutor.price}/hr
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#AD0024] mb-1">
                  {tutor.name}
                </h3>
                <p className="text-gray-600 mb-3">{tutor.specialty}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-[#D7C15B] mr-1">★</span>
                    <span className="font-medium">{tutor.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">
                      ({tutor.reviews})
                    </span>
                  </div>
                  <button className="text-[#AD0024] hover:text-[#C0000B] font-medium">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-[#AD0024] text-white font-semibold rounded-lg hover:bg-[#C0000B] transition duration-300 shadow-md">
            Browse All Tutors
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorShowcase;
