import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems, personalInfo } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-slate-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight font-semibold">{personalInfo.name}</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            <a 
              href="#contact" 
              className="py-2 px-4 border border-slate-600 rounded-md hover:border-blue-400 transition-colors duration-200"
            >
              Contacto
            </a>
            <a
              href="#download"
              className="bg-gradient-to-r from-blue-500 to-blue-700 py-2 px-4 rounded-md hover:from-blue-600 hover:to-blue-800 transition-all duration-200 flex items-center gap-2"
            >
              <Download size={16} />
              Descargar CV
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-slate-300 hover:text-white">
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-slate-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="text-center">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a 
                    href={item.href}
                    className="hover:text-blue-400 transition-colors duration-200"
                    onClick={() => setMobileDrawerOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4 mt-6">
              <a 
                href="#contact" 
                className="py-2 px-4 border border-slate-600 rounded-md hover:border-blue-400 transition-colors duration-200 text-center"
                onClick={() => setMobileDrawerOpen(false)}
              >
                Contacto
              </a>
              <a
                href="#download"
                className="py-2 px-4 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-200 flex items-center gap-2 justify-center"
                onClick={() => setMobileDrawerOpen(false)}
              >
                <Download size={16} />
                Descargar CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
