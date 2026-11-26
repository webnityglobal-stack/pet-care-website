
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, CalendarDays } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#EAE5DB] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Pawora home"
          className="shrink-0"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/pawora-logo.png`}
            alt="Pawora Pet Care & Services"
            className="h-14 w-auto max-w-[155px] object-contain sm:h-16 sm:max-w-[175px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xl font-medium transition-colors ${isActive
                  ? 'text-[#536B55]'
                  : 'text-[#292D28] hover:text-[#536B55]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Appointment button */}
        <Link
          to="/book-appointment"
          className="group hidden items-center justify-center gap-2 rounded-full border border-[#17773f] bg-[#17773f] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:border-[#17773f] hover:bg-[#0ec058] hover:text-[#ecf5f0] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17773f] focus-visible:ring-offset-2 sm:inline-flex"
        >
          <CalendarDays
            size={17}
            className="transition-transform duration-300 group-hover:scale-110 text-white"
          />
          <span className="text-white">Book Appointment</span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-[#292D28] hover:bg-[#F7F5EF] lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="border-t border-[#EAE5DB] bg-white px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-medium ${isActive
                    ? 'bg-[#F1E9DC] text-[#536B55]'
                    : 'text-[#292D28] hover:bg-[#F7F5EF]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/book-appointment"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#306d35] px-5 py-3.5 text-sm font-semibold text-white"
            >
              <CalendarDays  size={17}  className="text-white"/>
              <span className="text-white">Book Appointment</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
