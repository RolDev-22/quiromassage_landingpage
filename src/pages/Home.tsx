import { ImPower } from "react-icons/im";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import ImgBg from "/img1.jpg";

export default function Home() {
  return (
    <section id="home" className="flex flex-col justify-center">
      <div className="flex flex-col w-full p-0.5 md:flex-col md:w-3xl md:self-center lg:flex-row lg:w-4xl xl:w-6xl 2xl:w-full">
        <div className="flex flex-col p-3 gap-10 lg:w-2/3 lg:gap-11 xl:gap-7 2xl:gap-10 2xl:w-2/3">
          <span className="flex items-center self-center gap-2 p-1 px-3 rounded-2xl text-cyan-300 bg-cyan-500/20 border border-cyan-300 lg:self-start ">
            <ImPower /> Equilibra tu cuerpo y mente
          </span>
          <h1 className="title text-3xl text-center md:text-5xl md:w-2xl md:self-center lg:w-12/12 lg:self-start lg:text-left xl:text-8xl 2xl:text-9xl">
            Reconecta tu cuerpo,{" "}
            <span className="inline-block bg-linear-to-b from-white via-cyan-200 to-cyan-300 bg-clip-text text-transparent">
              eleva tu bienestar
            </span>
          </h1>
          <h4 className="self-center text-center text-2xl md:w-3/4 lg:w-full lg:text-justify">
            Quiromasaje profesional y terapias holísticas personalizadas.
            Visítanos en nuestro consultorio en Naranjo de Laurel o solicita tu
            sesión a domicilio en Corredores.
          </h4>
          <div className="flex flex-col gap-4 lg:flex-row">
            <a
              href="#"
              className="flex p-2 bg-cyan-300 text-indigo-950 justify-center items-center gap-2 rounded-full px-10 md:w-7/12 md:self-center">
              <FaCalendarAlt /> Consulta Horarios Libres
            </a>
            <a
              href="#"
              className="flex p-2 bg-cyan-900 justify-center px-10 rounded-full border border-transparent md:w-7/12 md:self-center lg:hover:border-cyan-300">
              Mira nuestros servicios
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full justify-start items-center lg:w-1/3 2xl:w-2/4">
          <article className="flex flex-col p-1 bg-white rounded-md gap-2 w-11/12 h-11/12 lg:w-full lg:h-12/12 xl:h-20/20 2xl:h-19/20 ">
            <figure className="relative rounded-lg overflow-hidden lg:h-full">
              <img
                className="w-full h-auto object-cover xl:h-12/12"
                src={ImgBg}
                alt="image-presentation"
              />
              <div className="absolute w-full flex flex-col bottom-0 p-2 items-start gap-2 z-30 bg-linear-to-b from-transparent via-gray-900 to-black">
                <span className="bg-cyan-500/20 text-cyan-50 py-2 px-10 rounded-full font-medium border border-cyan-300">
                  Puntarenas, Costa Rica
                </span>
                <h3>Sanación Física y Espiritual</h3>
                <h5>Técnicas avanzadas para liberación de dolor</h5>
              </div>
            </figure>

            <div className="flex flex-col text-center gap-2">
              <span className="text-cyan-900 font-medium">
                Siguenos en nuestras redes sociales
              </span>
              <ul className="flex flex-row gap-5 justify-center text-cyan-900">
                <li className="hover:text-blue-600">
                  <FaFacebookSquare size={32} />
                </li>
                <li className="hover:text-amber-500">
                  <FaInstagramSquare size={32} />
                </li>
                <li className="hover:text-black">
                  <AiFillTikTok size={32} />
                </li>
                <li className="hover:text-red-600">
                  <FaYoutube size={32} />
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
