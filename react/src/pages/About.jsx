import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#AD0024] mb-6">
                            About EnglishPro
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 mb-8">
                            Transforming lives through accessible, high-quality
                            English education since 2018
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                                <span className="font-medium">
                                    50,000+ Students
                                </span>
                            </div>
                            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                                <span className="font-medium">
                                    500+ Certified Tutors
                                </span>
                            </div>
                            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                                <span className="font-medium">
                                    100+ Countries
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Mission */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                At EnglishPro, we believe that language should
                                never be a barrier to success. Our mission is to
                                empower individuals worldwide with the English
                                language skills they need to achieve their
                                personal and professional goals.
                            </p>
                            <p className="text-lg text-gray-700">
                                Through our personalized approach, we create
                                learning experiences that are tailored to each
                                student's unique needs, learning style, and
                                objectives.
                            </p>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="/api/placeholder/600/400"
                                alt="Students learning English"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Story */}
            <div className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Our Story
                            </h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                From humble beginnings to a global community of
                                learners
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-[#AD0024] text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                                    1
                                </div>
                                <h3 className="text-xl font-semibold mb-3">
                                    The Beginning
                                </h3>
                                <p className="text-gray-700">
                                    EnglishPro was founded in 2018 by a team of
                                    passionate educators who saw a gap in online
                                    language education. We started with just 5
                                    tutors serving students in our local
                                    community.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-[#AD0024] text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                                    2
                                </div>
                                <h3 className="text-xl font-semibold mb-3">
                                    Global Expansion
                                </h3>
                                <p className="text-gray-700">
                                    By 2020, we had expanded to over 100 tutors
                                    and were teaching students across 50
                                    countries. Our personalized approach and
                                    dedication to quality quickly set us apart
                                    in the online education space.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-[#AD0024] text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                                    3
                                </div>
                                <h3 className="text-xl font-semibold mb-3">
                                    Today
                                </h3>
                                <p className="text-gray-700">
                                    Today, EnglishPro is trusted by over 50,000
                                    students worldwide. Our diverse team of 500+
                                    certified tutors helps learners achieve
                                    fluency through personalized instruction and
                                    cutting-edge learning technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Values */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our Values
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-[#FFF5F7] rounded-full flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-[#AD0024]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Student-Centered
                            </h3>
                            <p className="text-gray-700">
                                Every decision we make puts our students' needs
                                and goals first
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-[#FFF5F7] rounded-full flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-[#AD0024]"
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
                            <h3 className="text-xl font-semibold mb-2">
                                Excellence
                            </h3>
                            <p className="text-gray-700">
                                We maintain the highest standards in education
                                quality and service
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-[#FFF5F7] rounded-full flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-[#AD0024]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Global Perspective
                            </h3>
                            <p className="text-gray-700">
                                We celebrate diversity and cultivate cultural
                                understanding
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-[#FFF5F7] rounded-full flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-[#AD0024]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Continuous Innovation
                            </h3>
                            <p className="text-gray-700">
                                We constantly evolve our methods to deliver the
                                best learning experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Team */}
            <div className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Leadership Team
                            </h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                Meet the passionate educators and visionaries
                                behind EnglishPro
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <div className="h-64 bg-gray-200">
                                    <img
                                        src="/api/placeholder/400/300"
                                        alt="Team member"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">
                                        Michael Chen
                                    </h3>
                                    <p className="text-[#AD0024] font-medium mb-4">
                                        Founder & CEO
                                    </p>
                                    <p className="text-gray-700">
                                        Former professor with 15+ years of
                                        experience in language education and
                                        EdTech innovation.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <div className="h-64 bg-gray-200">
                                    <img
                                        src="/api/placeholder/400/300"
                                        alt="Team member"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">
                                        Sophia Rodriguez
                                    </h3>
                                    <p className="text-[#AD0024] font-medium mb-4">
                                        Head of Education
                                    </p>
                                    <p className="text-gray-700">
                                        TESOL certified educator with expertise
                                        in curriculum development and teacher
                                        training.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <div className="h-64 bg-gray-200">
                                    <img
                                        src="/api/placeholder/400/300"
                                        alt="Team member"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">
                                        David Park
                                    </h3>
                                    <p className="text-[#AD0024] font-medium mb-4">
                                        Chief Technology Officer
                                    </p>
                                    <p className="text-gray-700">
                                        Tech innovator focused on creating
                                        seamless and effective learning
                                        experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial Highlight */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
                    <div className="text-center mb-8">
                        <svg
                            className="w-12 h-12 text-gray-300 mx-auto mb-4"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                        >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-xl md:text-2xl font-medium text-gray-900 mb-6">
                            "EnglishPro transformed my approach to teaching.
                            Being part of a global community of educators who
                            are passionate about student success has been truly
                            rewarding."
                        </p>
                        <div>
                            <div className="font-medium text-gray-900">
                                Emma Wilson
                            </div>
                            <div className="text-[#AD0024]">
                                IELTS Preparation Tutor
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Link
                            to="/tutors"
                            className="px-6 py-3 bg-[#AD0024] text-white rounded-lg hover:bg-[#C0000B] transition duration-300 font-medium"
                        >
                            Meet Our Tutors
                        </Link>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-[#AD0024] py-16">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Start Your English Journey?
                        </h2>
                        <p className="text-xl text-white opacity-90 mb-8">
                            Join thousands of learners who have transformed
                            their lives through EnglishPro
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/signup"
                                className="px-8 py-3 bg-white text-[#AD0024] rounded-lg hover:bg-gray-100 transition duration-300 font-medium text-lg"
                            >
                                Sign Up Free
                            </Link>
                            <Link
                                to="/tutors"
                                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#AD0024] transition duration-300 font-medium text-lg"
                            >
                                Browse Tutors
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
