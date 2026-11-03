import triangule from "@assets/t.webp";
import moveTo from "@utils/moveTo";
import { LuHousePlus } from "react-icons/lu";
import { RiMapPinRangeFill } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center bg-white">
      <svg
        className="absolute top-0 z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320">
        <path
          fill="var(--cl2)"
          fill-opacity="1"
          d="M0,96L80,128C160,160,320,224,480,229.3C640,235,800,181,960,154.7C1120,128,1280,128,1360,128L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      <div className="relative flex flex-col text-center items-center text-md mt-20 md:flex-row md:mt-10 lg:mt-20 2xl:w-11/12">
        <div className=" w-full flex flex-col z-1 gap-5 text-xl text-left font-(family-name:--fnt4) md:mt-10 md:w-1/2 md:text-2xl md:self-center lg:mt-30 lg:gap-10">
          <h2 className="text-(--cl3) font-bold text-3xl px-5 md:text-4xl lg:text-5xl">
            Descubre una nueva versión de ti
          </h2>
          <h3 className="text-(--cl4) text-lg px-5 md:text-2xl lg:text-3xl">
            Transforma tu rutina, invierte en tu salud
          </h3>
          <button
            onClick={() => moveTo("reserve")}
            className="flex items-center gap-2 p-2 rounded-full bg-(--cl5) text-(--cl0) justify-center w-80 self-center ">
            Contáctanos <FaLongArrowAltRight />
          </button>
        </div>
        <article className="w-full flex flex-col items-center md:w-1/2">
          <figure className="flex justify-center content-center sx:w-85 sm:w-95 lg:w-xl">
            <img
              src={triangule}
              alt="Logo-Page"
              className="w-full object-cover"
            />
          </figure>
        </article>
      </div>
      <h3 className=" w-90 p-3 text-(--cl3) bg-cyan-500/20 border border-cyan-300 text-center uppercase rounded-full font-bold md:w-100 ">
        Como tu lo prefieras
      </h3>
      <div className="w-full flex flex-col gap-5 p-5 items-center justify-between sm:flex-row md:justify-around">
        <article className="boxShaw flex flex-col gap-2 p-3 text-justify text-(--cl4) rounded-2xl w-90 lg:w-1/2">
          <div className="flex flex-row gap-3">
            <span className="flex items-center w-20 justify-center rounded-full bg-(--cl1)/30 border border-(--cl1) p-2">
              <LuHousePlus color="var(--cl1)" size={36} />
            </span>

            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-(--cl1) lg:text-3xl">
                Local Físico
              </h3>
              <h2 className="text-xl font-semibold lg:text-4xl">
                Consultorio Privado
              </h2>
            </div>
          </div>
          <p className="lg:text-xl">
            Ubicados en Naranjo de Laurel, Puntarenas. Un ambiente privado,
            climatizado y diseñado para la relajación profunda. Estacionamiento
            privado y fácil acceso para tu comodidad.
          </p>
          <div className="flex items-center text-(--cl1) justify-between">
            <span className="flex gap-2 items-center w-4/6 lg:text-lg">
              <RiMapPinRangeFill size={32} /> Naranjo de Laurel, Corredores
            </span>

            <button
              onClick={() => moveTo("rate")}
              className="flex w-1/4 items-center gap-2 p-2 rounded-lg bg-(--cl1)/30 text-(--cl3) justify-center">
              Tarifa <FaLongArrowAltRight />
            </button>
          </div>
        </article>
        {/*  */}
        <article className="boxShaw flex flex-col gap-2 p-3 text-justify text-(--cl4) rounded-2xl w-90 lg:w-1/2">
          <div className="flex flex-row gap-3">
            <span className="flex items-center w-20 justify-center rounded-full bg-(--cl1)/30 border border-(--cl1) p-2">
              <FaCarSide color="var(--cl1)" size={36} />
            </span>

            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-(--cl1) lg:text-3xl">
                Comodidad Total
              </h3>
              <h2 className="text-xl font-semibold lg:text-4xl">
                Servicio VIP a Domicilio
              </h2>
            </div>
          </div>
          <p className="lg:text-xl">
            Trasladamos la camilla, aromas y música relajante hasta tu hogar en
            el cantón de Corredores (Laurel, Naranjo, Paso Canoas y
            alrededores).
          </p>
          <div className="flex items-center text-(--cl1) justify-between">
            <span className="flex gap-2 items-center w-4/6 lg:text-lg">
              <RiMapPinRangeFill size={32} /> Cobertura cantón de Corredores
            </span>

            <button
              onClick={() => moveTo("rate")}
              className="flex w-1/4 items-center gap-2 p-2 rounded-lg bg-(--cl1)/30 text-(--cl3) justify-center">
              Tarifa <FaLongArrowAltRight />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
