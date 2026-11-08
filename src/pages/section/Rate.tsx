import moveTo from "@/utils/moveTo";
import cardsService from "@data/cardsService.json";
import { FaBone } from "react-icons/fa6";
import { PiFlowerLotusFill } from "react-icons/pi";
import { MdSportsGymnastics } from "react-icons/md";
import { GiBowlSpiral } from "react-icons/gi";
import type { IconType } from "react-icons";

interface Service {
  idService: number;
  iconService: string;
  typeService: string;
  nameService: string;
  descriptionService: string;
  activeControl: boolean;
}

export default function Rate() {
  const services: Service[] = cardsService;

  const icons: Record<string, IconType> = {
    FaBone,
    PiFlowerLotusFill,
    MdSportsGymnastics,
    GiBowlSpiral,
  };
  return (
    <section
      id="rate"
      className="relative flex flex-col items-center pt-10 xl:pt-30 after:absolute after:-z-10 after:w-300 after:bg-transparent after:top-0 after:right-0 after:border-white after:border-t-200 after:border-b-transparent after:border-b-100 after:rounded-b-lg after:border-r-transparent after:border-r-500 after:border-l-100 after:border-l-transparent md:after:border-r-850 xl:after:border-l-2000 xl:after:border-r-1100 2xl:after:border-l-1000 2xl:after:border-r-1500">
      <h3 className="softEntry w-90 p-3 text-(--cl1) bg-cyan-500/20 border border-cyan-300 text-center uppercase rounded-full font-bold self-center text-lg mb-5 md:w-100">
        Tratamientos
      </h3>
      <h2 className="fadeEntry text-(--cl0) text-center font-fnt2 text-3xl lg:mt-5 xl:text-8xl">
        SERVICIOS <br /> ESPECIALIZADOS
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:w-12/12 2xl:w-10/12 lg:grid-cols-4 mt-5 p-3 gap-3">
        {services.map((i) => {
          const Icon = icons[i.iconService];

          return (
            <article
              key={i.idService}
              className="softEntry relative flex flex-col justify-start p-3 border border-white/10 gap-3 rounded-4xl bg-white/10 before:content-[''] before:absolute before:inset-0 before:rounded-4xl before:border before:border-white/20 before:pointer-events-none backdrop-blur-[2px] lg:transition lg:duration-300 lg:ease-in-out lg:hover:-translate-y-1.5 lg:hover:border-(--cl1)">
              <figure className="grid place-content-center bg-(--cl1) w-15 h-15 rounded-xl">
                {Icon && <Icon size={42} color="var(--cl2)" />}
              </figure>
              <span className="text-md text-(--cl1)">{i.typeService}</span>
              <h2 className="text-4xl font-bold font-fnt6 lg:text-3xl 2xl:text-4xl">
                {i.nameService}
              </h2>
              <p className="text-(--cl6) text-justify w-70 lg:w-full">
                {i.descriptionService}
              </p>
              <button
                onClick={() => moveTo("reserve")}
                className={`${i.activeControl ? "bg-(--cl1)" : "bg-(--cl4)/30"} self-center w-75 rounded-lg p-3 text-lg lg:w-50 lg:transition-colors lg:duration-700 lg:hover:bg-(--cl1)`}>
                Seleccionar Servicio
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
