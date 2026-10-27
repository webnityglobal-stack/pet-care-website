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

const exploreLinks = [
    { label: "Home", to: "/" },
    { label: "Our Services", to: "/services" },
    { label: "About Pawora", to: "/about" },
    { label: "Book Appointment", to: "/book-appointment" },
];

const supportLinks = [
    { label: "Contact Us", to: "/contact" },
    { label: "Book a Visit", to: "/book-appointment" },
];

export default function Footer() {
    return (
        <footer className="overflow-hidden bg-[#eae7dc] text-[#173d2b]">
            {/* Main footer */}
            <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                {/* Brand */}
                <div className="border-b border-[#d4d2c6] pb-6 sm:pb-8 lg:border-none lg:pb-0">
                    <Link to="/" className="inline-flex items-center gap-2.5">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#173d2b] text-white">
                            <PawPrint size={21} />
                        </span>

                        <span className="text-2xl font-bold tracking-tight">
                            pawora<span className="text-[#c58b52]">.</span>
                        </span>
                    </Link>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-[#667264]">
                        Thoughtful care for the companions who make life beautiful.
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d2d0c4] bg-[#f6f4ec] text-[#173d2b] transition duration-300 hover:border-[#173d2b] hover:bg-[#173d2b] hover:text-white"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links: 2 columns mobile, 4 columns desktop */}
                <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-7 sm:mt-8 sm:gap-x-8 lg:mt-0 lg:grid-cols-4 lg:gap-10">
                    <div className="min-w-0">
                        <h3 className="text-sm font-bold sm:text-base">Explore</h3>
                        <ul className="mt-3 space-y-3">
                            {exploreLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        to={item.to}
                                        className="inline-block text-sm leading-5 text-[#667264] transition-colors hover:text-[#c58b52]"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="min-w-0">
                        <h3 className="text-sm font-bold sm:text-base">Customer Care</h3>
                        <ul className="mt-3 space-y-3">
                            {supportLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        to={item.to}
                                        className="inline-block text-sm leading-5 text-[#667264] transition-colors hover:text-[#c58b52]"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}

                            <li>
                                <a
                                    href="https://wa.me/91XXXXXXXXXX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-sm leading-5 text-[#667264] transition-colors hover:text-[#c58b52]"
                                >
                                    Chat on WhatsApp
                                </a>
                            </li>

                            <li>
                                <a
                                    href="mailto:hello@pawora.com"
                                    className="break-words text-sm leading-5 text-[#667264] transition-colors hover:text-[#c58b52]"
                                >
                                    Email Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="min-w-0">
                        <h3 className="text-sm font-bold sm:text-base">Our Promise</h3>
                        <p className="mt-3 text-sm leading-6 text-[#667264]">
                            Caring for every pet with kindness, comfort and attention.
                        </p>
                        <p className="mt-3 flex flex-wrap items-center gap-1.5 text-sm text-[#405642]">
                            Made with
                            <Heart size={15} className="shrink-0 fill-[#c58b52] text-[#c58b52]" />
                            for every paw.
                        </p>
                    </div>

                    <div className="min-w-0">
                        <h3 className="text-sm font-bold sm:text-base">Need Our Help?</h3>
                        <p className="mt-3 text-sm leading-6 text-[#667264]">
                            Your pet deserves thoughtful care. We are here to help.
                        </p>

                        <Link
                            to="/book-appointment"
                            className="group mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[#379668] bg-[#379668] px-4 py-2.5 text-sm font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f6fffa] hover:!text-[#17773f] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17773f] focus-visible:ring-offset-2"
                        >
                            Book a Visit
                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[#d4d2c6]">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-1.5 px-5 py-4 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left lg:px-10">
                    <p className="text-xs leading-5 text-[#788071]">
                        © {new Date().getFullYear()} Pawora Pet Care &amp; Services.
                    </p>

                    <Link
                        to="/"
                        className="text-xs font-medium text-[#405642] transition-colors hover:text-[#c58b52]"
                    >
                        Made for every paw ♡
                    </Link>
                </div>
            </div>
        </footer>
    );
}