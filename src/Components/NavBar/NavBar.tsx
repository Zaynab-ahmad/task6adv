import { useState } from "react";
import { useTheme } from "../../Context/ThemeContext";
import { Link, useLocation } from "react-router-dom";

type NavItem = {
  name: string;
  href: string;
};

interface NavBarProps {
  name: string;
  navigation: NavItem[];
}

const NavBar: React.FC<NavBarProps> = ({ navigation, name }) => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();


  return (
    <nav className="bg-white w-screen dark:bg-gray xl:text-xl/[24px] text-lg fixed top-0 left-0 right-0 z-50">
      <div className="myContainer mx-auto xl:py-10 xl:px-8 py-5 px-[6px] flex justify-between items-center">
        <Link to="/" className={`font-semibold ${menuOpen ? "hidden" : ""}`}>
          {name}
        </Link>

        <div className="hidden sm:flex justify-between items-center">
          <div>
            {navigation.map((item) => (
              <Link
                to={item.href}
                className={`relative inline-block p-2 transition-all duration-300 
                ${
                  location.pathname === item.href
                    ? "after:absolute after:left-1/2 after:bottom-0 after:translate-x-[-50%] after:translate-y-[-4px] after:w-[80%] after:h-[1px] after:bg-gray-2 dark:after:bg-white after:transition-all after:duration-300 font-bold"
                    : "after:absolute after:left-1/2 after:bottom-0 after:translate-x-[-50%] after:translate-y-[-4px] after:w-0 after:h-[1px] after:bg-transparent hover:after:w-full hover:after:bg-gray-200 dark:hover:after:bg-white after:transition-all after:duration-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="bg-gray dark:bg-white rounded-full transition-all duration-300 flex items-center justify-center gap-4 px-4 py-2 ml-[14px]">
            <button onClick={toggleTheme}>
              <img
                src={theme === "light" ? "/Icons/sun.svg" : "/Icons/sun2.svg"}
                alt="sun"
                className={`transition-transform duration-500 w-6 h-6 ${
                  theme === "light" ? "rotate-0" : "rotate-180"
                }`}
              />
            </button>
            <button onClick={toggleTheme}>
              <img
                src={theme === "light" ? "/Icons/moon.svg" : "/Icons/moon2.svg"}
                alt="moon"
                className={`transition-transform duration-500 ${
                  theme === "light" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>

        {!menuOpen && (
          <button onClick={() => setMenuOpen(true)} className="sm:hidden">
            <span className="sr-only">Open menu</span>
            <img
              src={
                theme === "light"
                  ? "/Icons/menu-outline.svg"
                  : "/Icons/menu-outline-dark.svg"
              }
              alt="menu"
              className="w-8 h-8"
            />
          </button>
        )}
      </div>

      {menuOpen && (
        <div className="bg-white dark:bg-gray sm:hidden fixed inset-0 z-40 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center gap-13">
            <Link
              to="/"
              className={`font-semibold ${menuOpen ? "block" : "hidden"}`}
            >
              {name}
            </Link>
            <div className="flex flex-col items-center justify-center gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="bg-gray dark:bg-white rounded-full transition-all duration-300 flex items-center justify-center gap-4 px-4 py-2">
                <button onClick={toggleTheme}>
                  <img
                    src={
                      theme === "light" ? "/Icons/sun.svg" : "/Icons/sun2.svg"
                    }
                    alt="sun"
                    className={`transition-transform duration-500 w-6 h-6 ${
                      theme === "light" ? "rotate-0" : "rotate-180"
                    }`}
                  />
                </button>
                <button onClick={toggleTheme}>
                  <img
                    src={
                      theme === "light" ? "/Icons/moon.svg" : "/Icons/moon2.svg"
                    }
                    alt="moon"
                    className={`transition-transform duration-500 ${
                      theme === "light" ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {menuOpen && (
        <button
          onClick={() => setMenuOpen(false)}
          className="sm:hidden fixed bottom-0 left-1/2 transform -translate-x-1/2 p-3 rounded-full z-50"
        >
          <img
            src={
              theme === "light" ? "/Icons/close.svg" : "/Icons/close-dark.svg"
            }
            alt="close menu"
            className="w-8 h-8"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
