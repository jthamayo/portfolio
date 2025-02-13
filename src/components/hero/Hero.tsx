import ContactInfo from "../contactInfo/ContactInfo";
import useScrollStatus from "../../hooks/useScrollStatus";

const Hero = () => {
  const isScrolled = useScrollStatus();

  return (
    <div
      id="home"
      className="h-screen w-screen flex justify-end items-end shadow-lg overflow-hidden"
    >
      <section
        id="hero"
        className="pb-10 pr-2 lg:pr-10 transition-all grid-cols-1 grid-rows-3 ease-in-out duration-50 relative w-4/5 inline-grid sm:grid-rows-2 lg::grid-cols-3 "
      >
        <div
          className={`sm:col-span-2 col-span-1 row-start-2 flex items-start justify-end sm:max-lg:text-9xl lg:text-nowrap text-8xl text-end leading-25 px-4 transition-all ease-in-out duration-600 ${
            isScrolled
              ? "-translate-x-400 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <h1 className="font-light uppercase">Judith Tamayo</h1>
        </div>
        <div
          className={`flex items-end text-end sm:col-start-2 sm:row-start-1 text-6xl px-4 sm:tracking-wider justify-end transition-all ease-in-out duration-400 ${
            isScrolled
              ? "-translate-y-400 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <h2 className="font-extralight uppercase">
            Full<span className="block">Stack</span>Developer
          </h2>
        </div>
        <div
          className={`flex max-sm:justify-end items-end sm:col-start-3 sm:row-start-1 pr-4 transition-all ease-in-out duration-800 ${
            isScrolled
              ? "translate-x-400 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <ContactInfo />
        </div>
      </section>
    </div>
  );
};

export default Hero;
