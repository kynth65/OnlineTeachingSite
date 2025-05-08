import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        // Create timer to redirect after 5 seconds
        const timer = setTimeout(() => {
            navigate("/");
        }, 5000);

        // Countdown effect
        const countdownInterval = setInterval(() => {
            setCountdown((prevCount) => prevCount - 1);
        }, 1000);

        // Cleanup timers on component unmount
        return () => {
            clearTimeout(timer);
            clearInterval(countdownInterval);
        };
    }, [navigate]);

    // Handle immediate redirect
    const handleRedirectNow = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                <p className="mb-6">
                    The page you are looking for doesn't exist or has been
                    moved.
                </p>
                <p className="text-sm mb-6">
                    Redirecting to homepage in{" "}
                    <span className="font-bold">{countdown}</span> seconds...
                </p>
                <button
                    onClick={handleRedirectNow}
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                    Go Home Now
                </button>
            </div>
        </div>
    );
}
