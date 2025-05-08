import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function Pricing() {
    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-b from-white to-gray-50">
                {/* Hero Section */}
                <div className="pt-28 pb-16 md:pb-20 relative overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute -z-10 rounded-full bg-[#AD0024] opacity-5 w-64 h-64 -top-20 -left-20"></div>
                    <div className="absolute -z-10 rounded-full bg-[#D7C15B] opacity-5 w-80 h-80 -bottom-40 -right-20"></div>

                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <div className=" flex justify-between w-full text-center">
                            <h1 className="inline-block text-6xl text-[#AD0024] font-medium rounded-full mb-6">
                                PRICING PLANS
                            </h1>
                            <h2 className="w-40">
                                Select a tutoring package tailored to your
                                learning goals. Transparent pricing with no
                                hidden fees and a free consultation to get you
                                started.
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-24">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            {/* Basic Plan */}
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-1 transform">
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Basic Plan
                                    </h3>
                                    <div className="flex items-baseline mb-6">
                                        <span className="text-4xl font-extrabold text-gray-900">
                                            $99
                                        </span>
                                        <span className="text-xl text-gray-500 ml-1">
                                            /month
                                        </span>
                                    </div>
                                    <p className="text-gray-700 mb-8">
                                        Perfect for beginners looking to build a
                                        solid foundation in English. Our Basic
                                        Plan provides essential guidance to help
                                        you take your first steps with
                                        confidence.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-[#AD0024] mr-2 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-700">
                                                4 tutoring sessions per month
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-[#AD0024] mr-2 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-700">
                                                Personalized learning plan
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-[#AD0024] mr-2 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-700">
                                                Basic learning materials
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-[#AD0024] mr-2 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-700">
                                                Email support between sessions
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="pt-4 border-t border-gray-100">
                                        <Link
                                            to="/signup"
                                            className="group block w-full py-3 px-6 text-center font-medium rounded-xl transition-all duration-300 border-2 border-[#AD0024] text-[#AD0024] hover:bg-[#AD0024] hover:text-white"
                                        >
                                            <span className="flex items-center justify-center">
                                                Get Started
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
                                    </div>
                                </div>
                            </div>

                            {/* Standard Plan */}
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-1 transform relative">
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#AD0024] to-[#D7C15B]"></div>
                                <div className="absolute top-3 right-3">
                                    <span className="inline-block px-3 py-1 bg-[#FFF5F7] text-[#AD0024] text-xs font-medium rounded-full">
                                        POPULAR
                                    </span>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Standard Plan
                                    </h3>
                                    <div className="flex items-baseline mb-6">
                                        <span className="text-4xl font-extrabold text-gray-900">
                                            $189
                                        </span>
                                        <span className="text-xl text-gray-500 ml-1">
                                            /month
                                        </span>
                                    </div>
                                    <p className="text-gray-700 mb-8">
                                        Designed for intermediate learners ready
                                        to accelerate their progress. Our
                                        Standard Plan offers more in-depth
                                        support to help you reach your language
                                        goals faster.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-[#AD0024] mr-2 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-700">
                                                8 tutoring sessions per month
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-[#AD0024] mr-2 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-700">
                                                Comprehensive learning plan
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-[#AD0024] mr-2 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-700">
                                                Premium learning materials
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-[#AD0024] mr-2 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-700">
                                                Priority email and chat support
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-[#AD0024] mr-2 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-700">
                                                Progress tracking dashboard
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="pt-4 border-t border-gray-100">
                                        <Link
                                            to="/signup"
                                            className="group block w-full py-3 px-6 text-center font-medium rounded-xl transition-all duration-300 bg-gradient-to-r from-[#AD0024] to-[#C0000B] text-white hover:shadow-lg"
                                        >
                                            <span className="flex items-center justify-center">
                                                Choose Standard
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
                                    </div>
                                </div>
                            </div>

                            {/* Premium Plan */}
                            <div className="bg-gradient-to-br from-[#AD0024] to-[#C0000B] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-white group hover:-translate-y-1 transform">
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Premium Plan
                                    </h3>
                                    <div className="flex items-baseline mb-6">
                                        <span className="text-4xl font-extrabold text-white">
                                            $299
                                        </span>
                                        <span className="text-xl text-white opacity-80 ml-1">
                                            /month
                                        </span>
                                    </div>
                                    <p className="text-white opacity-90 mb-8">
                                        Ideal for those seeking maximum support
                                        and flexibility. The Premium Plan is
                                        tailored for individuals committed to
                                        making transformative progress in their
                                        English skills.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-white mr-2 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-white opacity-90">
                                                Unlimited tutoring sessions
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-white mr-2 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-white opacity-90">
                                                Dedicated 1:1 support
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-white mr-2 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-white opacity-90">
                                                Customized curriculum
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-white mr-2 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-white opacity-90">
                                                24/7 priority support
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-white mr-2 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-white opacity-90">
                                                VIP access to workshops and
                                                webinars
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-white mr-2 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-white opacity-90">
                                                Advanced pronunciation training
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="pt-4 border-t border-white border-opacity-20">
                                        <Link
                                            to="/signup"
                                            className="group block w-full py-3 px-6 text-center font-medium rounded-xl transition-all duration-300 bg-white text-[#AD0024] hover:shadow-lg"
                                        >
                                            <span className="flex items-center justify-center">
                                                Go Premium
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-[#FFF5F7] relative overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute -z-10 rounded-full bg-[#AD0024] opacity-5 w-64 h-64 top-40 left-20"></div>
                    <div className="absolute -z-10 rounded-full bg-[#D7C15B] opacity-5 w-80 h-80 bottom-20 right-20"></div>

                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="inline-block px-4 py-1 bg-white text-[#AD0024] font-medium rounded-full text-sm mb-3 shadow-sm">
                                    COMMON QUESTIONS
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#AD0024] to-[#C0000B]">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                    Everything you need to know about our
                                    tutoring plans
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        q: "How do I schedule my tutoring sessions?",
                                        a: "After signing up for a plan, you'll get access to our online scheduling system where you can book sessions with your preferred tutors based on their availability.",
                                    },
                                    {
                                        q: "Can I change tutors if I'm not satisfied?",
                                        a: "Absolutely! We want to ensure you have the perfect learning experience. You can request a different tutor at any time through your student dashboard.",
                                    },
                                    {
                                        q: "What happens if I need to cancel a session?",
                                        a: "We understand that plans change. You can reschedule or cancel a session up to 24 hours before the scheduled time with no penalty.",
                                    },
                                    {
                                        q: "Do you offer any discounts for long-term commitments?",
                                        a: "Yes, we offer a 10% discount for quarterly billing and 15% for annual billing across all our plans.",
                                    },
                                    {
                                        q: "How are the tutoring sessions conducted?",
                                        a: "All sessions are conducted online through our integrated video platform. You'll need a computer or mobile device with a camera, microphone, and stable internet connection.",
                                    },
                                ].map((faq, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                                    >
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                                {faq.q}
                                            </h3>
                                            <p className="text-gray-700">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 text-center">
                                <p className="text-gray-700 mb-6">
                                    Still have questions? We're here to help!
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#AD0024] to-[#C0000B] text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium"
                                >
                                    Contact Support
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 ml-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-[#AD0024] to-[#C0000B] py-16">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Ready to Transform Your English Skills?
                            </h2>
                            <p className="text-xl text-white opacity-90 mb-8">
                                Join thousands of learners who have achieved
                                fluency through SpeakFun's personalized tutoring
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    to="/signup"
                                    className="group px-8 py-3 bg-white text-[#AD0024] rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-medium text-lg hover:-translate-y-0.5 transform"
                                >
                                    <span className="flex items-center justify-center">
                                        Start Free Trial
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
                                        Meet Our Tutors
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
