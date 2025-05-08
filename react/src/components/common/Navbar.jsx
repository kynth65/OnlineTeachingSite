import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="text-2xl font-bold text-[#AD0024]"
                        >
                            EnglishPro
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-[#AD0024] font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/tutors"
                            className="text-gray-700 hover:text-[#AD0024] font-medium"
                        >
                            Tutors
                        </Link>
                        <Link
                            to="/how-it-works"
                            className="text-gray-700 hover:text-[#AD0024] font-medium"
                        >
                            How It Works
                        </Link>
                        <Link
                            to="/pricing"
                            className="text-gray-700 hover:text-[#AD0024] font-medium"
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-[#AD0024] font-medium"
                        >
                            About Us
                        </Link>
                    </div>

                    {/* Login/Sign Up */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/login"
                            className="text-[#AD0024] font-medium"
                        >
                            Log In
                        </Link>
                        <Link
                            to="/signup"
                            className="px-4 py-2 bg-[#AD0024] text-white rounded-lg hover:bg-[#C0000B] transition duration-300"
                        >
                            Sign Up Free
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-[#AD0024] focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white pb-4 px-4">
                    <div className="flex flex-col space-y-3">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-[#AD0024] font-medium py-2"
                        >
                            Home
                        </Link>
                        <Link
                            to="/tutors"
                            className="text-gray-700 hover:text-[#AD0024] font-medium py-2"
                        >
                            Tutors
                        </Link>
                        <Link
                            to="/how-it-works"
                            className="text-gray-700 hover:text-[#AD0024] font-medium py-2"
                        >
                            How It Works
                        </Link>
                        <Link
                            to="/pricing"
                            className="text-gray-700 hover:text-[#AD0024] font-medium py-2"
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-[#AD0024] font-medium py-2"
                        >
                            About Us
                        </Link>
                        <div className="pt-2 border-t border-gray-200">
                            <Link
                                to="/login"
                                className="block text-[#AD0024] font-medium py-2"
                            >
                                Log In
                            </Link>
                            <Link
                                to="/signup"
                                className="block mt-2 px-4 py-2 bg-[#AD0024] text-white text-center rounded-lg hover:bg-[#C0000B] transition duration-300"
                            >
                                Sign Up Free
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
