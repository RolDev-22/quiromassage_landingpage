import { PiMapPinFill } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa6";
import styles from "./Topbar.module.css";
import { useEffect, useState } from "react";

const TopBar = () => {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${scrollActive ? "hidden" : "block"} text-gray-200 flex flex-wrap px-5 py-1 justify-center md:justify-between text-sm gap-3 text-center xl:px-20`}>
      <div className="flex flex-wrap gap-2 justify-center">
        <a
          href="#"
          className="flex flex-row items-center gap-2 text-cyan-300 border border-cyan-300  px-4 rounded-4xl bg-cyan-500/20">
          <span className={`${styles.point_animation} rounded-full`}></span>
          Agende su cita
        </a>
        <p className="flex flex-row items-center gap-1">
          <PiMapPinFill color="var(--cl1)" size={15} /> Naranjo de Laurel,
          Puntarenas
        </p>

        <p className="hidden flex-row items-center gap-1 text-gray-400 lg:flex">
          | <FaCarSide color="var(--cl1)" size={15} /> Cobertura Domiciliar en
          Cantón Corredores
        </p>
      </div>
      <div className="flex flex-row gap-5 justify-center">
        <a className="flex flex-row items-center gap-1 cursor-pointer hover:text-cyan-400">
          <FaPhone color="var(--cl1)" size={15} /> (+506) 8888-8888
        </a>
        <a
          href="#"
          className="flex flex-row items-center gap-1 text-green-400 hover:text-emerald-300">
          <BsWhatsapp size={15} /> WhatsApp Inmediato
        </a>
      </div>
    </div>
  );
};

export default TopBar;
