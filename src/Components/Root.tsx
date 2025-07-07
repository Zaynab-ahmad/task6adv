import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import { ThemeProvider } from "../Context/ThemeContext";
import Footer from "./Footer/Footer";

export default function Root() {
  
  const navigation = [
    { name: "Blog", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Newsletter", href: "/newsletter" },
  ];

  const footerLinks = [
    { text: "Twitter", to: "/twitter" },
    { text: "LinkedIn", to: "/linkedin" },
    { text: "Email", to: "/email" },
    { text: "RSS feed", to: "/rss" },
    { text: "Add to Feedly", to: "/feedly" },
  ];

  return (
    <ThemeProvider>
        <NavBar navigation={navigation} name="Zaynab Ahmad" />
        <Outlet />
        <Footer links={footerLinks} />
        <ScrollRestoration />
    </ThemeProvider>
  );
}
