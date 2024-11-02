'use client'
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

export default function page() {
    return (
        <div className="h-[40rem] w-full rounded-md bg-gray-900 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-3xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold pb-4">
                    Contact Us
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
                    We're here to help with any questions about our courses, programs, or
                    events. Reach out and let us know how we can assist you in your music journey.
                </p>
                <input
                    type="text"
                    placeholder="Your email address"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-8 p-2  bg-neutral-950 placeholder:text-neutral-700 text-white"
                />
                <textarea
                    placeholder="Your message"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 p-2  bg-neutral-950 placeholder:text-neutral-700 text-white"
                />
                <div className="mt-4">
                    <button
                        className="px-4 py-2 rounded-md bg-teal-500 
                        text-white font-bold"
                    >
                        Send message
                    </button>
                </div>

            </div>
            <BackgroundBeams />
        </div>
    )
}