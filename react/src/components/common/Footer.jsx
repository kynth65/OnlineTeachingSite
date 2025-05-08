import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "Facebook",
            icon: (
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            ),
            link: "#",
        },
        {
            name: "Twitter",
            icon: (
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            ),
            link: "#",
        },
        {
            name: "Instagram",
            icon: (
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            ),
            link: "#",
        },
        {
            name: "YouTube",
            icon: (
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            ),
            link: "#",
        },
    ];

    return (
        <footer className="bg-gradient-to-br from-[#1A0008] to-[#330010] text-white pt-16 pb-8 relative overflow-hidden">
            {/* Giant SpeakFun Logo */}
            <div className="absolute -bottom-10 md:bottom-0 left-0 w-full opacity-10 pointer-events-none select-none">
                <h1 className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[15rem] font-extrabold text-white tracking-tighter">
                    SpeakFun
                </h1>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Logo and Newsletter */}
                <div className="flex flex-col lg:flex-row justify-between mb-16 pb-16 border-b border-gray-800">
                    <div className="mb-10 lg:mb-0 lg:w-1/3">
                        <div className="mb-6">
                            <div className="flex items-center">
                                <h2 className="text-3xl font-bold text-white mr-2">
                                    SpeakFun
                                </h2>
                                <div className="w-2 h-2 rounded-full bg-[#AD0024]"></div>
                            </div>
                            <div className="h-1 w-16 bg-gradient-to-r from-[#AD0024] to-[#D7C15B] mt-2"></div>
                        </div>
                        <p className="text-gray-300 mb-8 max-w-md">
                            Your journey to English fluency starts here. Connect
                            with expert tutors and achieve your language goals
                            faster and more effectively.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    className="group bg-gray-800 bg-opacity-50 hover:bg-[#AD0024] p-2.5 rounded-full transition-all duration-300 text-gray-300 hover:text-white transform hover:-translate-y-1"
                                    aria-label={social.name}
                                >
                                    <span className="sr-only">
                                        {social.name}
                                    </span>
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        {social.icon}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Subscribe to our newsletter
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Get the latest news and special offers
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <div className="flex-1">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#AD0024] focus:border-transparent"
                                />
                            </div>
                            <button className="px-6 py-3 bg-gradient-to-r from-[#AD0024] to-[#C0000B] rounded-full text-white font-semibold hover:shadow-lg hover:shadow-[#AD0024]/20 transition-all duration-300 whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <div className="relative inline-block">
                            <select className="appearance-none bg-gray-800 border border-gray-700 text-gray-300 py-2 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:ring-2 focus:ring-[#AD0024] focus:border-transparent">
                                <option className="bg-gray-800">English</option>
                                <option className="bg-gray-800">Español</option>
                                <option className="bg-gray-800">
                                    Français
                                </option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                        <p className="text-gray-400 text-sm">
                            &copy; {currentYear} SpeakFun. All rights reserved.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white text-sm"
                            >
                                Privacy
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white text-sm"
                            >
                                Terms
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white text-sm"
                            >
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
