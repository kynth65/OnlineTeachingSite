import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Track scroll position for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Check if a link is active
    const isActive = (path) => {
        return location.pathname === path;
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="inline-flex items-center">
                            <div className="flex items-center">
                                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#AD0024] to-[#C0000B]">
                                    SpeakFun
                                </span>
                                <span className="ml-1.5 w-2 h-2 rounded-full bg-[#AD0024]"></span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu - Centered */}
                    <div className="hidden md:flex items-center justify-center space-x-1 lg:space-x-2">
                        {[
                            { path: "/", label: "Home" },
                            { path: "/tutors", label: "Tutors" },
                            { path: "/how-it-works", label: "How It Works" },
                            { path: "/pricing", label: "Pricing" },
                            { path: "/about", label: "About Us" },
                        ].map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    isActive(item.path)
                                        ? "text-[#AD0024] bg-[#FFF5F7]"
                                        : "text-gray-700 hover:text-[#AD0024] hover:bg-gray-50"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Login/Sign Up */}
                    <div className="hidden md:flex items-center">
                        <Link
                            to="/login"
                            className="text-[#AD0024] text-sm font-medium mr-6 hover:underline"
                        >
                            Log In
                        </Link>
                        <Link
                            to="/signup"
                            className="px-5 py-2.5 bg-gradient-to-r from-[#AD0024] to-[#C0000B] text-white text-sm font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Sign Up Free
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-5 w-5"
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

            {/* Mobile Menu - Slide down */}
            <div
                className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 shadow-xl" : "max-h-0"
                }`}
            >
                <div className="container mx-auto px-4 py-4 space-y-1">
                    {[
                        { path: "/", label: "Home" },
                        { path: "/tutors", label: "Tutors" },
                        { path: "/how-it-works", label: "How It Works" },
                        { path: "/pricing", label: "Pricing" },
                        { path: "/about", label: "About Us" },
                    ].map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 rounded-lg text-base font-medium ${
                                isActive(item.path)
                                    ? "text-[#AD0024] bg-[#FFF5F7]"
                                    : "text-gray-700 hover:bg-gray-50"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col space-y-3">
                        <Link
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-[#AD0024] font-medium rounded-lg hover:bg-[#FFF5F7]"
                        >
                            Log In
                        </Link>
                        <Link
                            to="/signup"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 bg-gradient-to-r from-[#AD0024] to-[#C0000B] text-white text-center font-medium rounded-lg hover:shadow-md transition-all duration-200"
                        >
                            Sign Up Free
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
