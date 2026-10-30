interface NavbarProps {
  active: boolean;
}

const Navbar = ({ active }: NavbarProps) => {
  return (
    <nav
      className={`${active ? "flex flex-col absolute top-full left-0 w-full bg-gray-950 p-4 border-b border-cyan-50/10 shadow-lg" : "hidden"} lg:flex lg:flex-row lg:static lg:w-auto lg:shadow-none lg:bg-transparent lg:p-0 lg:border-none`}>
      <ul className="font-light w-1xl flex flex-col items-center md:flex-row  justify-around text-sm gap-3  xl:text-lg xl:gap-5 2xl:gap-10 ">
        <a href="#home" className="cursor-pointer lg:hover:text-cyan-300">
          Inicio
        </a>
        <a href="#about" className="cursor-pointer lg:hover:text-cyan-300">
          Ubicacion & Domicilio
        </a>
        <a className="cursor-pointer lg:hover:text-cyan-300">Servicios</a>
        <a href="#" className="cursor-pointer lg:hover:text-cyan-300">
          Planes & Paquetes
        </a>
        <a href="#" className="cursor-pointer lg:hover:text-cyan-300">
          FAQ
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
