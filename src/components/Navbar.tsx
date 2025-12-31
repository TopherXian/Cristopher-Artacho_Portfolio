import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navContent = [
    { webPage: "Home", id: "homepage" },
    { webPage: "About", id: "about" },
    { webPage: "Portfolio", id: "portfolio" },
    { webPage: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close menu after click
  };

  return (
    <div>
      {/* Desktop / md+ navbar */}
      <nav className="hidden xl:h-[5rem] xl:ml-[4rem] xl:pt-[1rem] 
        lg:h-[5rem] lg:ml-[0rem] lg:pt-[1rem] 
        md:h-[5rem] md:pl-[20rem] md:pt-[1rem] md:flex
        h-[5rem] pl-[8rem] pt-[1rem] 
        w-full justify-center text-black font-inter"
      >
        <div className="flex">
          {navContent.map((page, index) => (
            <button
              key={page.webPage}
              onClick={() => scrollToSection(page.id)}
              className={`px-[4vw] ${
                index === navContent.length - 1
                  ? "lg:ml-[5rem] md:ml-[1rem] bg-highlight1 text-white font-bold"
                  : ""
              }`}
            >
              <span className="
                xl:text-xl_heading2
                lg:text-lg_heading2
                text-sm_heading2
                font-inter relative group inline-block"
              >
                {page.webPage}
                <span className="block w-0 h-[0.25rem] bg-white transition-all duration-300 group-hover:w-full group-hover:scale-x-100 group-hover:origin-center"></span>
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile menu icon */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-lg_heading font-bold text-black"
        >
          {menuOpen ? "✕" : "☰"} {/* Simple hamburger / close icon */}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
      <div className="md:hidden fixed inset-0 bg-white bg-opacity-100 flex flex-col justify-center items-center z-40">
        <p className="text-lg_heading font-bold text-black pb-[3rem]">Menu</p>

        {navContent.map((page, index) => {
          const isLast = index === navContent.length - 1;

          return (
            <button
              key={page.webPage}
              onClick={() => scrollToSection(page.id)}
              className={`
                font-inter text-2xl py-4
                ${isLast
                  ? "bg-highlight1 text-white font-bold px-[2rem] mt-[1rem]"
                  : "text-black font-bold"}
              `}
            >
              {page.webPage}
            </button>
          );
        })}
      </div>
      )}
    </div>
  );
};

export default Navbar;
