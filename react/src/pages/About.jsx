import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-b from-white to-gray-50">
                {/* Hero Section */}
                <div className="pt-28 pb-16 md:pb-24 relative overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute -z-10 rounded-full bg-[#AD0024] opacity-5 w-64 h-64 -top-20 -left-20"></div>
                    <div className="absolute -z-10 rounded-full bg-[#D7C15B] opacity-5 w-80 h-80 -bottom-40 -right-20"></div>

                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-block px-4 py-1 bg-[#FFF5F7] text-[#AD0024] font-medium rounded-full text-sm mb-6">
                                ABOUT US
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#AD0024] to-[#C0000B] leading-tight">
                                Discover SpeakFun
                            </h1>
                            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
                                Transforming lives through accessible,
                                high-quality language education since 2018, with
                                a passion for creating fluent, confident
                                speakers worldwide.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <div className="bg-white px-6 py-4 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 transform">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-[#FFF5F7] flex items-center justify-center mr-3 group-hover:bg-gradient-to-r group-hover:from-[#AD0024] group-hover:to-[#C0000B] transition-all duration-300">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-[#AD0024] group-hover:text-white transition-colors duration-300"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <span className="text-gray-500 text-sm">
                                                Students Worldwide
                                            </span>
                                            <p className="font-bold text-gray-900 text-xl group-hover:text-[#AD0024] transition-colors">
                                                50,000+
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white px-6 py-4 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 transform">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-[#FFF5F7] flex items-center justify-center mr-3 group-hover:bg-gradient-to-r group-hover:from-[#AD0024] group-hover:to-[#C0000B] transition-all duration-300">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-[#AD0024] group-hover:text-white transition-colors duration-300"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <span className="text-gray-500 text-sm">
                                                Certified Tutors
                                            </span>
                                            <p className="font-bold text-gray-900 text-xl group-hover:text-[#AD0024] transition-colors">
                                                500+
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white px-6 py-4 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 transform">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-[#FFF5F7] flex items-center justify-center mr-3 group-hover:bg-gradient-to-r group-hover:from-[#AD0024] group-hover:to-[#C0000B] transition-all duration-300">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-[#AD0024] group-hover:text-white transition-colors duration-300"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <span className="text-gray-500 text-sm">
                                                Global Reach
                                            </span>
                                            <p className="font-bold text-gray-900 text-xl group-hover:text-[#AD0024] transition-colors">
                                                100+ Countries
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Story */}
                <div className="py-16 md:py-24 relative overflow-hidden">
                    {/* Background decorative element */}
                    <div className="absolute -z-10 rounded-full bg-[#AD0024] opacity-5 w-96 h-96 -top-20 -right-20"></div>

                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="inline-block px-4 py-1 bg-[#FFF5F7] text-[#AD0024] font-medium rounded-full text-sm mb-3">
                                    OUR JOURNEY
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#AD0024] to-[#C0000B]">
                                    Our Story
                                </h2>
                                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                    From humble beginnings to a global community
                                    of learners
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        num: "1",
                                        title: "The Beginning",
                                        desc: "SpeakFun was founded in 2018 by a team of passionate educators who saw a gap in online language education. We started with just 5 tutors serving students in our local community.",
                                    },
                                    {
                                        num: "2",
                                        title: "Global Expansion",
                                        desc: "By 2020, we had expanded to over 100 tutors and were teaching students across 50 countries. Our personalized approach and dedication to quality quickly set us apart in the online education space.",
                                    },
                                    {
                                        num: "3",
                                        title: "Today",
                                        desc: "Today, SpeakFun is trusted by over 50,000 students worldwide. Our diverse team of 500+ certified tutors helps learners achieve fluency through personalized instruction and cutting-edge learning technology.",
                                    },
                                ].map((step, index) => (
                                    <div key={index} className="group relative">
                                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                            {/* Top color bar */}
                                            <div className="h-2 bg-gradient-to-r from-[#AD0024] to-[#D7C15B] rounded-t-xl absolute top-0 left-0 right-0"></div>
                                            <div className="w-12 h-12 bg-[#AD0024] text-white rounded-full flex items-center justify-center mb-5 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                                                {step.num}
                                            </div>
                                            <h3 className="text-xl font-semibold mb-3">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-700">
                                                {step.desc}
                                            </p>
                                        </div>
                                        {/* Background Decorative Element */}
                                        <div className="absolute -z-10 rounded-full bg-[#D7C15B] opacity-10 w-24 h-24 -bottom-4 -right-4"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Values */}
                <div className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-[#FFF5F7] relative overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute -z-10 rounded-full bg-[#AD0024] opacity-5 w-64 h-64 top-40 left-20"></div>
                    <div className="absolute -z-10 rounded-full bg-[#D7C15B] opacity-5 w-80 h-80 bottom-20 right-20"></div>
                    <div className="absolute -z-10 bg-gradient-to-r from-[#AD0024] to-[#D7C15B] opacity-5 h-1/2 w-full top-0 left-0 transform -skew-y-3"></div>

                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="inline-block px-4 py-1 bg-white text-[#AD0024] font-medium rounded-full text-sm mb-3 shadow-sm">
                                    WHAT DRIVES US
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#AD0024] to-[#C0000B]">
                                    Our Values
                                </h2>
                                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                    The principles that guide everything we do
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    {
                                        title: "Student-Centered",
                                        desc: "Every decision we make puts our students' needs and goals first",
                                        path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                    },
                                    {
                                        title: "Excellence",
                                        desc: "We maintain the highest standards in education quality and service",
                                        path: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                                    },
                                    {
                                        title: "Global Perspective",
                                        desc: "We celebrate diversity and cultivate cultural understanding",
                                        path: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                                    },
                                    {
                                        title: "Continuous Innovation",
                                        desc: "We constantly evolve our methods to deliver the best learning experience",
                                        path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                                    },
                                ].map((value, index) => (
                                    <div key={index} className="group">
                                        <div className="text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full group-hover:-translate-y-1 transform border border-gray-100">
                                            <div className="w-16 h-16 mx-auto bg-[#FFF5F7] rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:bg-gradient-to-r group-hover:from-[#AD0024] group-hover:to-[#D7C15B] group-hover:text-white">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-[#AD0024] group-hover:text-white transition-colors duration-300"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d={value.path}
                                                    />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#AD0024] transition-colors duration-300">
                                                {value.title}
                                            </h3>
                                            <p className="text-gray-700">
                                                {value.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Highlight */}
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                        {/* Decorative corner gradient */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#AD0024] opacity-10 rounded-bl-full"></div>

                        <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-[#FFF5F7] rounded-full">
                            <svg
                                className="w-6 h-6 text-[#AD0024]"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                            </svg>
                        </div>

                        <div className="text-center mb-8 relative z-10">
                            <p className="text-xl md:text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                                "SpeakFun transformed my approach to teaching.
                                Being part of a global community of educators
                                who are passionate about student success has
                                been truly rewarding."
                            </p>
                            <div className="inline-flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#AD0024] to-[#D7C15B] flex items-center justify-center text-white font-bold mr-3">
                                    EW
                                </div>
                                <div className="text-left">
                                    <div className="font-medium text-gray-900">
                                        Emma Wilson
                                    </div>
                                    <div className="text-[#AD0024]">
                                        IELTS Preparation Tutor
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Link
                                to="/tutors"
                                className="px-6 py-3 bg-gradient-to-r from-[#AD0024] to-[#C0000B] text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium transform hover:-translate-y-0.5"
                            >
                                Meet Our Tutors
                            </Link>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-[#AD0024] to-[#C0000B] py-16">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Ready to Start Your Language Journey?
                            </h2>
                            <p className="text-xl text-white opacity-90 mb-8">
                                Join thousands of learners who have transformed
                                their lives through SpeakFun
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    to="/signup"
                                    className="group px-8 py-3 bg-white text-[#AD0024] rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-medium text-lg hover:-translate-y-0.5 transform"
                                >
                                    <span className="flex items-center justify-center">
                                        Sign Up Free
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                                <Link
                                    to="/tutors"
                                    className="group px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#AD0024] transition-all duration-300 font-medium text-lg hover:-translate-y-0.5 transform"
                                >
                                    <span className="flex items-center justify-center">
                                        Browse Tutors
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
