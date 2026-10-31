import triangule from "@assets/t.webp";

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
        <div className="w-full flex flex-col z-1 gap-2 text-xl text-left font-(family-name:--fnt4) md:w-1/2 md:text-2xl ">
          <h2 className="text-cyan-600 font-bold text-3xl px-5 md:text-4xl lg:text-5xl">
            Descubre una nueva versión de ti
          </h2>
          <h3 className="text-(--cl2) text-lg px-5 md:text-2xl lg:text-3xl">
            Transforma tu rutina, invierte en tu salud
          </h3>
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
    </section>
  );
}
