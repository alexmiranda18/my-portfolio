import logo from "../assets/AlexMirandaLogo.png";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/alex-miranda-919002243/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin aria-label="LinkedIn" className="cursor-pointer" />
      </a>
      <a href="https://github.com/alexmiranda18" target="_blank" rel="noopener noreferrer">
        <FaGithub aria-label="GitHub" className="cursor-pointer" />
      </a>
      <a href="https://wa.me/5511948304509" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp aria-label="WhatsApp" className="cursor-pointer" />
      </a>
      <a href="https://www.instagram.com/alexs_miranda/" target="_blank" rel="noopener noreferrer">
        <FaInstagram aria-label="Instagram" className="cursor-pointer" />
      </a>
    </div>
  </nav>
};

export default Navbar;



