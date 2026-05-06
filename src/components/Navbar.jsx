import { useState, useEffect } from "react";
import { MdClose, MdMenu } from "react-icons/md";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const menu = ["Home", "About", "Packages", "Gallery"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const createWhatsAppLink = (text) => {
    const phone = "6282146828788";
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center h-16 md:h-20">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="Logo.png"
            alt="logo"
            className="w-14 h-14 md:w-16 md:h-16 object-contain"
          />

          <div className="leading-tight">
            <div
              className={`text-sm md:text-lg font-bold transition-colors ${
                scrolled ? "text-green-900" : "text-white"
              }`}
            >
              Thom Bali Surf School
            </div>
           
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition ${
                scrolled
                  ? "text-green-900 hover:text-green-700"
                  : "text-white hover:text-green-200"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* CTA */}
          <a
            href={createWhatsAppLink(
              "Hello, I want to book a surf lesson at Thom Bali Surf School 🌊"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3 py-2 md:px-5 rounded-full text-sm md:text-base font-semibold transition ${
              scrolled
                ? "bg-green-900 text-white hover:bg-green-700"
                : "bg-white text-green-900 hover:bg-green-200"
            }`}
          >
            Chat
          </a>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden text-2xl ${
              scrolled ? "text-green-900" : "text-white"
            }`}
          >
            {open ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } bg-white`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {menu.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}