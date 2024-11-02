"use client"
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export default function UpcomingWebinars() {

    const featuredWebinars = [
        {
            title: "Introduction to Music Theory",
            description: "A foundational webinar on music theory covering notes, scales, and basic composition.",
            slug: "introduction-to-music-theory",
            isFeatured: true
        },
        {
            title: "Advanced Guitar Techniques",
            description: "Master advanced guitar skills including fingerstyle, sweep picking, and harmonics.",
            slug: "advanced-guitar-techniques",
            isFeatured: true
        },
        {
            title: "Vocal Training for Beginners",
            description: "Learn the basics of vocal warm-ups, pitch control, and breathing exercises.",
            slug: "vocal-training-for-beginners",
            isFeatured: true
        },
        {
            title: "Songwriting Essentials",
            description: "A workshop on songwriting techniques, including lyric writing, melody creation, and song structure.",
            slug: "songwriting-essentials",
            isFeatured: true
        },
        {
            title: "Piano Improvisation Tips",
            description: "Explore tips and techniques to develop improvisational skills on the piano.",
            slug: "piano-improvisation-tips",
            isFeatured: true
        },
        {
            title: "Jazz for Beginners",
            description: "An introduction to jazz music, covering basic jazz chords, progressions, and improvisation.",
            slug: "jazz-for-beginners",
            isFeatured: true
        }
    ];


    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2
                        className="text-base text-teal-600
                    font-semibold tracking-wide
                    uppercase"
                    >
                        FEATURED WEBINARS
                    </h2>
                    <p
                        className="mt-2 text-3xl leading-8
                    font-extrabold tracking-tight text-white
                    sm:text-4sl"
                    >
                        Enhance Your Musical Journey
                    </p>
                </div>
                <div className="mt-10">
                    <HoverEffect
                        items={featuredWebinars.map((webinar) => (
                            {

                                title: webinar.title,
                                description: webinar.description,
                                link: `/webinars/${webinar.slug}`
                            }
                        ))} />
                </div>
                <div className="mt-10 text-center">
                    <Link
                        href="/"
                        className="px-4 py-2 rounded-[8px] border
                border-neutral-600 text-neutral-700 bg-white
                hover:bg-gray-200 transistion duration-200"
                    >
                        View All webinars
                    </Link>
                </div>
            </div>
        </div>
    );
}
