import { useState } from "react";
import { useTheme } from "../../Context/ThemeContext";
import { NavLink, Link } from "react-router-dom";

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

  const navLinkBaseStyles = `
  relative inline-block py-1 px-2 transition-all duration-300
  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:translate-x-[-50%]
  after:h-[1px] after:transition-all after:duration-300
`;

  const getActiveLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `${navLinkBaseStyles} ${
      isActive
        ? "font-bold after:w-4/5 after:bg-gray-2 dark:after:bg-white"
        : "font-normal after:w-0 after:bg-transparent hover:after:w-full hover:after:bg-gray-200 dark:hover:after:bg-white"
    }`;


  return (
    <nav className="bg-white w-screen dark:bg-gray xl:text-xl/[24px] text-lg fixed top-0 left-0 right-0 z-50">
      <div className="myContainer mx-auto xl:py-10 xl:px-8 py-5 px-[6px] flex justify-between items-center">
        <Link to="/" className={`font-semibold ${menuOpen ? "hidden" : ""}`}>
          {name}
        </Link>

        <div className="hidden sm:flex justify-between items-center">
          <ul className="flex gap-[14px]">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink to={item.href} className={getActiveLinkStyles}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          
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
          <div className="flex flex-col items-center justify-center gap-10">
            <Link
              to="/"
              className={`font-semibold text-2xl mb-4`}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>

            <ul className="flex flex-col items-center justify-center gap-6">
              {navigation.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={getActiveLinkStyles}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="bg-gray dark:bg-white rounded-full transition-all duration-300 flex items-center justify-center gap-4 px-4 py-2 mt-4">
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
