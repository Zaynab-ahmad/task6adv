import { Link } from "react-router-dom";

interface LinkItem {
  text: string;
  to: string;
}

interface FooterProps {
  links: LinkItem[];
}

const Footer = ({ links }: FooterProps) => {
  return (
    <div className="myContainer flex flex-col-reverse items-center lg:flex-row gap-[30px] lg:gap-[14px] py-[30px] sm:pb-6 text-gray-2 dark:text-white text-xl/[24px] font-normal">
      <div>© 2025</div>
      <div className="">
        <ul className="flex flex-col text-center lg:flex-row gap-[14px] list-none">
          {links.map((link, index) => (
            <li key={index} >
              <Link
                to={link.to}
                className="no-underline hover:text-gray-4 dark:hover:text-gray-300"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
