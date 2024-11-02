"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
        title: "Harmonia Music School: Where Talent Meets Technique",
        description:
            "Discover your musical potential at Harmonia Music School! Offering expert-led lessons in various instruments and vocals for all ages, we blend creativity with structured training to inspire musicianship and passion.",
    },
    {
        title: "Melodia Academy: Shaping Future Musicians",
        description:
            "Join Melodia Academy and let your musical journey flourish! With personalized instruction in instruments and vocals, we nurture passion and skill in students of all ages.",
    },
    {
        title: "Virtuoso Music School: Crafting Sound and Skill",
        description:
            "Virtuoso Music School is dedicated to guiding aspiring musicians with quality instruction, creative courses, and a supportive environment for developing true musical artistry.",
    },
    {
        title: "Harmony Hub: Inspiring Every Note",
        description:
            "Harmony Hub offers professional music education for beginners to advanced learners. Our skilled instructors make learning engaging and rewarding, unlocking each student’s musical potential.",
    },
    {
        title: "Cadenza Conservatory: Unleash Your Musical Talent",
        description:
            "Cadenza Conservatory combines passion and discipline, providing expert-led lessons in piano, guitar, vocals, and more. Here, we turn musical dreams into reality for all ages.",
    },
    {
        title: "Soundwave Music Academy: Your Path to Musical Mastery",
        description:
            "Soundwave Music Academy offers a comprehensive curriculum for budding musicians, led by experienced instructors. Explore instruments, theory, and performance in a vibrant community.",
    },
];

export default function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={musicSchoolContent} />
        </div>
    );
}
