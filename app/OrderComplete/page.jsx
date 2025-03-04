"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ThankYou() {
    const router = useRouter()
    // Auto-redirect to home page after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/")
        }, 5000)
        return () => clearTimeout(timer)
    }, [router])
    return (
        <div className="mx-2 flex flex-col items-center justify-center min-h-screen bg-gray-0 text-gray-800 dark:text-white dark:bg-gray-900">
            {/* Animated SVG Checkmark */}
            <div className="w-20 h-20 mb-6">
                <svg
                    className="w-full h-full text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9 12l2 2 4-4"></path>
                </svg>
            </div>

            {/* Thank You Message */}
            <h1 className="text-3xl font-bold">Thank You for Your Purchase!</h1>
            <p className="mt-2 text-lg">
                Your transaction was successful. You will receive an email confirmation shortly. (Well not really...)
            </p>

            {/* Auto-redirect message */}
            <p className="mt-4 text-sm">You will be redirected to the homepage in a few seconds...</p>

            {/* Manual Button */}
            <button
                onClick={() => router.push("/")}
                className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
            >
                Go to Homepage
            </button>
        </div>
    )
}
