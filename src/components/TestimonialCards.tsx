"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestiMonials = [
    {
        quote:
            "Joining this music school was the best decision of my life! The teachers are talented and make learning so enjoyable.",
        name: "Anjali Mehta",
        title: "Classical Vocal Student",
    },
    {
        quote:
            "The experience of learning guitar here has been amazing. The teachers are patient and focus on every detail.",
        name: "Rahul Sharma",
        title: "Guitar Student",
    },
    {
        quote:
            "The dedication of the teachers and their unique teaching methods have greatly improved my tabla skills.",
        name: "Amit Patel",
        title: "Tabla Student",
    },
    {
        quote:
            "Learning the nuances of music here has been a fantastic journey. The teachers are truly dedicated.",
        name: "Priya Reddy",
        title: "Hindustani Vocal Student",
    },
    {
        quote:
            "My dream of learning flute came true here. The instructors are highly supportive, and I appreciate their teaching style.",
        name: "Rakesh Verma",
        title: "Flute Student",
    },
    {
        quote:
            "The environment here is perfect for anyone looking to learn music. The teachers encourage us at every step.",
        name: "Nisha Kapoor",
        title: "Violin Student",
    },
    {
        quote:
            "This school has taught me the fundamentals of singing with such clarity. I can see immense improvement in myself.",
        name: "Arjun Deshmukh",
        title: "Vocal Student",
    },
    {
        quote:
            "Learning keyboard here has been a delightful experience. The teachers make even complex concepts easy to understand.",
        name: "Kiran Joshi",
        title: "Keyboard Student",
    },
    {
        quote:
            "The rhythm training sessions have helped me develop a strong foundation in drumming. I’m grateful for such guidance.",
        name: "Siddharth Kulkarni",
        title: "Drums Student",
    },
    {
        quote:
            "I never thought learning music theory could be so engaging. The teachers make each class insightful and fun.",
        name: "Megha Singh",
        title: "Music Theory Student",
    },
];


export default function MusicSchoolTestiMonials() {
    return (
        <div
            className="h-[40rem] w-full dark:bg-black
        dark:bg-grid-white/[0.25] relative flex flex-col
        items-center justify-center overflow-hidden"
        >
            <h2 className="text-3xl font-bold text-center mb-8">
                Hear our Harmony: Voices of success
            </h2>
            <div
                className="flex justify-center w-full
            overflow-hidden px-4 sm:px-6 lg:px-8"
            >
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={musicSchoolTestiMonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    );
}
