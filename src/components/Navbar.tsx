import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { primaryButton } from "@/utils/styles";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrollY > 40
            ? "bg-white/80 backdrop-blur-md border-b border-gray-100"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex justify-between items-center">

          {/* Logo */}
          <a
            href="#"
            className="font-black text-xl tracking-tight"
          >
            NISHANT
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  text-sm
                  font-medium
                  hover:text-gray-500
                  transition-colors
                "
              >
                {link.label}
              </a>
            ))}

            <a href="#contact">
              <Button className={primaryButton}>
                Let’s Work Together
              </Button>
            </a>

          </div>

          {/* Mobile Button */}
          <button
            aria-label="Toggle navigation menu"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 border-t border-gray-200 pt-6">

            <div className="flex flex-col gap-6">

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}

            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
