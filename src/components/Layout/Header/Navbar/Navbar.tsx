import { Link } from "react-router-dom";

interface NavbarProps {
  active: boolean;
}

const Navbar = ({ active }: NavbarProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`${active ? "flex flex-col absolute top-full left-0 w-full bg-gray-950 p-4 border-b border-cyan-50/10 shadow-lg" : "hidden"} lg:flex lg:flex-row lg:static lg:w-auto lg:shadow-none lg:bg-transparent lg:p-0 lg:border-none`}>
      <ul className="font-light w-1xl flex flex-col items-center md:flex-row  justify-around text-sm gap-3  xl:text-lg xl:gap-5 2xl:gap-10 ">
        <li>
          <Link
            to="/"
            onClick={() => scrollToSection("home")}
            className="cursor-pointer lg:hover:text-cyan-300 transition-colors">
            Inicio
          </Link>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="cursor-pointer lg:hover:text-cyan-300 transition-colors">
            Sobre Nosotros
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("service")}
            className="cursor-pointer lg:hover:text-cyan-300 transition-colors">
            Servicios
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("package")}
            className="cursor-pointer lg:hover:text-cyan-300 transition-colors">
            Planes & Paquetes
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("faq")}
            className="cursor-pointer lg:hover:text-cyan-300 transition-colors">
            FAQ
          </button>
        </li>

        <li>
          <Link
            className="cursor-pointer lg:hover:text-cyan-300 transition-colors"
            to="/login">
            LOGIN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
