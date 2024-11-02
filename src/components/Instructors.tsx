"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
        id: 1,
        name: "Ravi Shankar",
        designation: "Sitar Maestro",
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThDVXymI6jsR97VVJu5QqpfRXgIcdtbPLOlg&s'
    },
    {
        id: 2,
        name: "Zakir Hussain",
        designation: "Tabla Virtuoso",
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqimr_cGx0M2u8_k2-WD-UtOyCnEgbw1Sxdg&s'
    },
    {
        id: 3,
        name: "A. R. Rahman",
        designation: "Composer and Music Producer",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/1/13/A.R.Rahman_at_57th_FF_Awards.jpg",
    },
    {
        id: 4,
        name: "Shankar Mahadevan",
        designation: "Singer and Composer",
        image:
            "https://cdns-images.dzcdn.net/images/artist/aefd6e3d941a0a1fd8baea6cf4a03c6a/1900x1900-000000-80-0-0.jpg",
    },
    {
        id: 5,
        name: "Ustad Amjad Ali Khan",
        designation: "Sarod Maestro",
        image:
            "https://s.saregama.tech/image/c/m/2/c6/a2/ustad-amjad-ali-khan_1635164425.jpg"
    },
];

export default function Instructors() {
    return (
        <div
            className="relative h-[40rem] overflow-hidden flex
        items-center justify-center"
        >
            <WavyBackground
                className="w-full max-w-7xl mx-auto
            flex flex-col items-center justify-center h-full"
            >
                <h2
                    className="text-2xl md:text-4xl lg:text-7xl
                text-white font-bold text-center mb-8
                "
                >
                    Meet Our Instructors
                </h2>
                <p
                    className="text-base md:text-lg text-white
                text-center mb-4"
                >
                    Discover the talented professionals who will guide your musical
                    journey
                </p>
                <div
                    className="flex flex-row items-center
                justify-center mb-10 w-full"
                >
                    <AnimatedTooltip items={instructors} />
                </div>
            </WavyBackground>
        </div>
    );
}
