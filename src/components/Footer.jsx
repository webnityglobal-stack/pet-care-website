
import { Link } from "react-router-dom";
import { PawPrint, Heart, ArrowUpRight } from "lucide-react";

const socialLinks = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/YOUR_USERNAME/",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/YOUR_PAGE",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
            </svg>
        ),
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/91XXXXXXXXXX",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M20 11.5a8.1 8.1 0 0 1-11.9 7.1L4 20l1.4-4A8.1 8.1 0 1 1 20 11.5Z" />
                <path d="M9 8.5c.3-.5.6-.5.9-.5l.6 1.5c.1.2 0 .4-.2.6l-.5.5c.5 1 1.3 1.8 2.3 2.3l.5-.5c.2-.2.4-.3.6-.2l1.5.6c.3.1.3.5.2.8-.2.6-.8 1-1.4 1-2.5-.1-5.8-3.4-5.9-5.9 0-.6.5-1.2 1.4-1.7Z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#eae7dc] text-[#173d2b]">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-12 lg:py-16">

                {/* Brand and social media */}
                <div>
                    <Link to="/" className="inline-flex items-center gap-2">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#173d2b] text-white">
                            <PawPrint size={22} />
                        </span>
                        <span className="text-2xl font-bold tracking-tight">
                            pawora<span className="text-[#c58b52]">.</span>
                        </span>
                    </Link>

                    <p className="mt-4 max-w-xs text-sm leading-7 text-[#6c7568]">
                        Thoughtful care for the companions who make life beautiful.
                    </p>

                    <p className="mt-6 text-sm font-semibold">Follow our paws</p>

                    <div className="mt-3 flex flex-wrap gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit Pawora on ${social.name}`}
                                title={social.name}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d4d2c6] bg-white/40 text-[#173d2b] transition duration-200 hover:-translate-y-1 hover:border-[#173d2b] hover:bg-[#173d2b] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173d2b]"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                
                {/* Explore */}
                <div>
                    <h3 className="font-semibold">Explore</h3>

                    <div className="mt-4 flex flex-col items-start gap-3 text-sm text-[#6c7568]">
                        <Link to="/" className="transition hover:text-[#c58b52]">
                            Home
                        </Link>

                        <Link to="/services" className="transition hover:text-[#c58b52]">
                            Our Services
                        </Link>

                        <Link to="/about" className="transition hover:text-[#c58b52]">
                            About Pawora
                        </Link>

                        <Link to="/book-appointment" className="transition hover:text-[#c58b52]">
                            Book Appointment
                        </Link>
                    </div>
                </div>

                {/* Customer Care */}
                <div>
                    <h3 className="font-semibold">Customer Care</h3>

                    <div className="mt-4 flex flex-col items-start gap-3 text-sm text-[#6c7568]">
                        <Link to="/contact" className="transition hover:text-[#c58b52]">
                            Contact Us
                        </Link>

                        <a
                            href="https://wa.me/91XXXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-[#c58b52]"
                        >
                            Chat on WhatsApp
                        </a>

                        <a
                            href="mailto:hello@pawora.com"
                            className="transition hover:text-[#c58b52]"
                        >
                            Email Us
                        </a>
                    </div>
                </div>


                {/* Brand message */}
                <div>
                    <h3 className="font-semibold">A little more love</h3>
                    <p className="mt-4 text-sm leading-7 text-[#6c7568]">
                        For wagging tails, happy paws, and all the cuddles in between.
                    </p>
                    <p className="mt-4 flex items-center gap-2 text-sm">
                        Made with
                        <Heart size={15} className="fill-[#c58b52] text-[#c58b52]" />
                        for every paw.
                    </p>
                    <Link
                        to="/book-appointment"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition hover:text-[#c58b52]"
                    >
                        Book a visit <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-[#d8d5c9] px-5 py-5 text-center text-xs leading-6 text-[#788071]">
                © {new Date().getFullYear()} Pawora Pet Care &amp; Services. All rights reserved.
            </div>
        </footer>
    );
}
