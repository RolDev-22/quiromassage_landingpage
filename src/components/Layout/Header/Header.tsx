import { useState } from "react";
import logo from "/logo.png";
import TopBar from "@header/TopBar/TopBar";
import Navbar from "@header/Navbar/Navbar";
import { FaRegCalendarCheck } from "react-icons/fa6";

export const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header>
      <TopBar />
      <section className="flex flex-row justify-between items-center py-3 px-2 gap-2 md:justify-between md:px-3 xl:px-10 bg-gray-950 backdrop-blur-lg border-cyan-50/10 border-b border-t">
        <article className="flex flex-wrap items-center justify-center text-center gap-3 select-none">
          <figure className="h-10 w-10 md:h-20 md:w-20 shrink-0">
            <img
              src={logo}
              alt="Logo-Page"
              className="w-full h-auto object-cover bg-cyan-700/20 rounded-full"
            />
          </figure>
          <div className="flex flex-col gap-2 md:text-left">
            <h2 className="title text-2xl md:text-3xl">
              QUIRO<span className="text-cyan-300">MASSAGE</span>
            </h2>
            <h4 className="hidden md:flex text-sm text-gray-400">
              LUXURY WELLNESS Y THERAPY
            </h4>
          </div>
        </article>

        <Navbar active={active} />

        <a
          href="#"
          className="hoverA flex flex-row items-center py-1 px-1 font-bold text-cyan-300 border-2 border-cyan-300 rounded-4xl md:py-3 md:px-5 lg:hover:text-slate-900 lg:hover:bg-cyan-300">
          <p className="flex flex-row gap-2 items-center">
            <FaRegCalendarCheck size={15} className="hidden md:flex" /> Agendar{" "}
            <span className="hidden md:flex">Cita</span>
          </p>
        </a>

        <label
          onClick={() => setActive((prevActive) => !prevActive)}
          className="flex flex-col justify-between w-7 h-5 cursor-pointer lg:hidden">
          <span
            className={`rounded-2xl h-0.75 w-full bg-white transition-all duration-300 origin-center ${active ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`rounded-2xl h-0.75 w-full bg-white transition-all duration-300 ${active ? "opacity-0" : ""}`}
          />
          <span
            className={`rounded-2xl h-0.75 w-full bg-white transition-all duration-300 origin-center ${active ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </label>
      </section>
    </header>
  );
};
