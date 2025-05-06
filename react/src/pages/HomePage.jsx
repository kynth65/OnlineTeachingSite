import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import HeroSection from "../components/common/HeroSection";
import FeaturesSection from "../components/common/FeaturesSection";
import HowItWorks from "../components/common/HowItWorks";
import TestimonialsSection from "../components/common/TestimonialsSection";
import TutorShowcase from "../components/common/TutorShowcase";
import CTASection from "../components/common/CTASection";

export default function HomePage() {
    return (
        <div className="bg-[#F2F3FB] min-h-screen">
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <HowItWorks />
            <TestimonialsSection />
            <TutorShowcase />
            <CTASection />
            <Footer />
        </div>
    );
}
