import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Collections',  href: '#collections' },
    { label: 'Services',     href: '#services' },
    { label: 'Portfolio',    href: '#portfolio' },
    { label: 'Journal',      href: '#journal' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#"
          className={`font-serif text-base md:text-lg tracking-wide transition-colors ${
            scrolled ? 'text-foreground' : 'text-white'
          }`}
        >
          Saanti
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-foreground/70' : 'text-white/80'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium transition-all ${
              scrolled
                ? 'border border-foreground/15 text-foreground hover:bg-foreground hover:text-background'
                : 'border border-white/30 text-white hover:bg-white hover:text-foreground'
            }`}
          >
            Inquire
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden flex flex-col gap-1.5 p-2 ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px transition-all ${
                scrolled ? 'bg-foreground' : 'bg-white'
              } ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}
            />
            <span
              className={`block w-5 h-px transition-all ${
                scrolled ? 'bg-foreground' : 'bg-white'
              } ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-px transition-all ${
                scrolled ? 'bg-foreground' : 'bg-white'
              } ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background border-b border-border px-6 py-8 animate-fade-in">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center px-5 py-3 text-[11px] uppercase tracking-[0.2em] font-medium bg-foreground text-background"
            >
              Inquire
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
