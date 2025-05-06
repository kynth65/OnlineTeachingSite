import React from "react";
import OnlineTutor from "../../assets/OnlineTutor.webp";

const HeroSection = () => {
  return (
    <div className="bg-[#fafafa] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#AD0024]">
              Master English With Expert Tutors
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Personalized online lessons tailored to your goals. Learn at your
              own pace with certified tutors from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-[#AD0024] text-white font-semibold rounded-lg hover:bg-[#C0000B] transition duration-300 shadow-lg">
                Find Your Tutor
              </button>
              <button className="px-6 py-3 border-2 border-[#AD0024] text-[#AD0024] font-semibold rounded-lg hover:bg-[#AD0024] hover:text-white transition duration-300">
                View Pricing
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D7C15B] opacity-20 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#EBA9A6] opacity-20 rounded-full"></div>
            <img
              src={OnlineTutor}
              alt="Online English tutoring"
              className="rounded-xl shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
