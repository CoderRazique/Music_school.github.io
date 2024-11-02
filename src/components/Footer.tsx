import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1
            sm:grid-cols-2 lg:grid-cols-4 gap-16 px-4 sm:px-6
            lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-semibold
                    mb-4">About Us</h2>
                    <p className="mb-4">
                        Music School is a premier institution
                        dedicated to teaching the art and science
                        of music. We nuture talent
                        from the ground up,
                        fostring a vibrant
                        comunity of musicians

                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold
                    mb-4">Quick Links</h2>
                    <ul>
                        <li><Link href="/" className="hover:text-white transition-colors
                        duration-300">Home</Link></li>
                        <li><Link href="/" className="hover:text-white transition-colors
                        duration-300">About</Link></li>
                        <li><Link href="/" className="hover:text-white transition-colors
                        duration-300">Courses</Link></li>
                        <li><Link href="/" className="hover:text-white transition-colors
                        duration-300">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold
                    mb-4">Follow Us</h2>
                    <ul>
                        <li><Link href="/" className="hover:text-white transition-colors
                        duration-300">Facebook</Link></li>
                        <li><Link href="/" className="hover:text-white transition-colors
                        duration-300">Instagram</Link></li>
                        <li><Link href="/" className="hover:text-white transition-colors
                        duration-300">Twitter</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold
                    mb-4">Contact Us</h2>
                    <p>Bihar, India</p>
                    <p>Bhagalpur 812005</p>
                    <p>Email: abdrazique22@gmail.com</p>
                    <p>Phone: (993) 982-4253</p>
                </div>
            </div>
            <p className="text-center text-xs pt-8">© 2024 Music School. All rights reserved.</p>
        </footer>
    )
}